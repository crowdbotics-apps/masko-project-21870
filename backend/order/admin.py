from django.contrib import admin
from .models import Order, Product as OrderProduct

class ProductsInline(admin.TabularInline):
    model = OrderProduct
    def total_price( self, obj):
        return obj.quantity * obj.unit_price

    def item_name( self, obj):
        return obj.product.name_en if obj.product is not None else obj.service.name_en

    def pet_name( self, obj):
        return obj.pet.name


    fields = ('item_name', 'pet_name', 'unit_price', 'quantity','total_price' )
    readonly_fields = ( 'quantity', 'unit_price', 'total_price','item_name','pet_name' )

    def has_delete_permission(self, request, obj=None):
        # if not request.user.profile.isSuperStaff() and obj.is24hoursFromNow():
        #     return True
        return False

    def get_max_num(self, request, obj=None, **kwargs):     
        return 3

    def get_min_num(self, request, obj=None, **kwargs):     
        return 3

# Service Category Admin.
class OrderAdmin(admin.ModelAdmin):
    inlines = [
        ProductsInline,
    ]

    def customer_name(self, obj):
        return obj.owner.name

    def customer_email(self, obj):
        return obj.owner.email     

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-created_at')

    

    search_fields = ('id', 'total_price', 'owner__name','owner__email',)
    fields = ('owner', 'is_recurring' , 'total_price')
    list_display = ('id',  'customer_name' , 'customer_email', 'total_price',  'created_at')
    readonly_fields = ('created_at', )
    




admin.site.register(Order, OrderAdmin)
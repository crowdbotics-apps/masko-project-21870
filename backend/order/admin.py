from django.contrib import admin
from .models import Order, Product as OrderProduct
from django.utils.html import format_html


class ProductsInline(admin.TabularInline):
    model = OrderProduct
    def total_price( self, obj):
        return '${}'.format(obj.quantity * obj.unit_price)

    def unit_price2( self, obj):
        return '${}'.format(obj.unit_price)
    unit_price2.short_description = "Unit Price"        

    def item_name( self, obj):
        return obj.product.name_en if obj.product is not None else obj.service.name_en

    def pet_name( self, obj):
        return obj.pet.name

    def special_message( self, obj):
        if obj.service is not None: 
            return format_html('<b>Time Option:</b> {} <br/><b>Date:</b> {}<br/> <b>Time:</b> {} '.format(obj.timeOption, obj.date, obj.time))

        return 'N/A' 
    special_message.short_description = "Extra Details" 



    fields = ('item_name', 'pet_name', 'unit_price2', 'quantity','total_price', 'special_message', )
    readonly_fields = ( 'quantity', 'unit_price2', 'total_price','item_name','pet_name', 'special_message' )

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

    def full_price(self, obj):
        return '${}'.format(obj.total_price)    
    full_price.short_description = "Total Price"    

    def customer_email(self, obj):
        return obj.owner.email     

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-created_at')

    

    search_fields = ('id', 'total_price', 'owner__name','owner__email','status',)
    fields = ('owner', 'is_recurring' , 'full_price','status')
    list_display = ('id',  'customer_name' , 'customer_email', 'full_price', 'status', 'created_at')
    readonly_fields = ('created_at', 'full_price' , 'owner', 'is_recurring' )
    

admin.site.register(Order, OrderAdmin)
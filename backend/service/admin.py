from django.contrib import admin
from service.models import Service, Category, Product
from pet.models import PetType
from django import forms

class CategoryModelChoiceField(forms.ModelChoiceField):
     def label_from_instance(self, obj):
         return "%s" % (obj.name_en)  

class PetTypeModelChoiceField(forms.ModelChoiceField):
     def label_from_instance(self, obj):
         return "%s" % (obj.name)            

class MyServiceAdminForm(forms.ModelForm):
    category = CategoryModelChoiceField(queryset=Category.objects.all())

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-sort') 
        
    class Meta:
        fields = ('name_en', 'name_es', 'description_en','description_es','category','price','photo','sort','is_recurring')
        model = Service

class MyProductAdminForm(forms.ModelForm):
    category = CategoryModelChoiceField(queryset=Category.objects.all())
    petType = PetTypeModelChoiceField(queryset=PetType.objects.all())

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-sort') 
        
    class Meta:
        fields = ('name_en', 'name_es', 'description_en','description_es','brand_en', 'brand_es', 'category','petType','price','weight','size','photo','sort','is_recurring')
        model = Product


# Service Category Admin.
class CategoryAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-sort')

    fields = ('name_en', 'name_es', 'description_en','description_es','photo','sort')
    list_display = ('name_en',  'description_en', 'sort')


# Service Admin.
class ServiceAdmin(admin.ModelAdmin):
    form = MyServiceAdminForm
    fields = ('name_en', 'name_es', 'description_en','description_es','category','price','photo','sort','is_recurring')
    list_display = ('name_en',  'description_en', 'price' , 'sort')
    readonly_fields = ( 'is_recurring', )

# Product Admin.
class ProductAdmin(admin.ModelAdmin):
    form = MyProductAdminForm
    fields = ('name_en', 'name_es', 'description_en','description_es','brand_en', 'brand_es', 'category','petType','price','weight','size','photo','sort','is_recurring')
    list_display = ('name_en','brand_en',  'description_en', 'price' , 'size' , 'sort')
    # readonly_fields = ( 'is_recurring', )

      
 


admin.site.register(Category, CategoryAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Product, ProductAdmin)

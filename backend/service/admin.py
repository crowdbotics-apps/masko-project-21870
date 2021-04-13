from django.contrib import admin
from service.models import Service, Category
from django import forms

class CategoryModelChoiceField(forms.ModelChoiceField):
     def label_from_instance(self, obj):
         return "%s" % (obj.name_en)   

class MyServiceAdminForm(forms.ModelForm):
    category = CategoryModelChoiceField(queryset=Category.objects.all())

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-sort') 
        
    class Meta:
        fields = ('name_en', 'name_es', 'description_en','description_es','category','price','photo','sort','is_recurring')
        model = Service

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


      
 


admin.site.register(Category, CategoryAdmin)
admin.site.register(Service, ServiceAdmin)

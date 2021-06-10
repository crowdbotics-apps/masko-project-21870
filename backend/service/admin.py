from django.contrib import admin
from service.models import Service, Category, Product
from pet.models import PetType
from django import forms

from import_export import resources
from import_export.admin import ImportMixin, ExportMixin, ImportExportModelAdmin




from django.core.exceptions import PermissionDenied
from django.http import HttpResponse, HttpResponseRedirect
from django.utils.encoding import force_str
from django.utils.translation import gettext_lazy as _
from django.template.response import TemplateResponse
from django.urls import path, reverse
from import_export.signals import post_export, post_import


## BOF User Import Customization
class SpImportMixin(ImportMixin):

    def import_action(self, request, *args, **kwargs):
        """
        Perform a dry_run of the import to make sure the import will not
        result in errors.  If there where no error, save the user
        uploaded file to a local temp file that will be used by
        'process_import' for the actual import.
        """
        if not self.has_import_permission(request):
            raise PermissionDenied

        context = self.get_import_context_data()

        import_formats = self.get_import_formats()
        form_type = self.get_import_form()
        form_kwargs = self.get_form_kwargs(form_type, *args, **kwargs)
        form = form_type(import_formats,
                         request.POST or None,
                         request.FILES or None,
                         **form_kwargs)

        if request.POST and form.is_valid():
            input_format = import_formats[
                int(form.cleaned_data['input_format'])
            ]()
            import_file = form.cleaned_data['import_file']
            # first always write the uploaded file to disk as it may be a
            # memory file or else based on settings upload handlers
            tmp_storage = self.write_to_tmp_storage(import_file, input_format)

            # then read the file, using the proper format-specific mode
            # warning, big files may exceed memory
            try:
                data = tmp_storage.read(input_format.get_read_mode())
                if not input_format.is_binary() and self.from_encoding:
                    data = force_str(data, self.from_encoding)
                dataset = input_format.create_dataset(data)
            except UnicodeDecodeError as e:
                return HttpResponse(_(u"<h1>Imported file has a wrong encoding: %s</h1>" % e))
            except Exception as e:
                return HttpResponse(_(u"<h1>%s encountered while trying to read file: %s</h1>" % (type(e).__name__, import_file.name)))

            # prepare kwargs for import data, if needed
            res_kwargs = self.get_import_resource_kwargs(request, form=form, *args, **kwargs)
            resource = self.get_import_resource_class()(**res_kwargs)

            # prepare additional kwargs for import_data, if needed
            imp_kwargs = self.get_import_data_kwargs(request, form=form, *args, **kwargs)
            result = resource.import_data(dataset, dry_run=False,
                                          raise_errors=False,
                                          file_name=import_file.name,
                                          user=request.user,
                                          **imp_kwargs)
  

            if not result.has_errors() and not result.has_validation_errors():
                initial = {
                    'import_file_name': tmp_storage.name,
                    'original_file_name': import_file.name,
                    'input_format': form.cleaned_data['input_format'],
                }
                confirm_form = self.get_confirm_import_form()
                initial = self.get_form_kwargs(form=form, **initial)
                context['confirm_form'] = confirm_form(initial=initial)

                self.generate_log_entries(result, request)
                self.add_success_message(result, request)
                post_import.send(sender=None, model=self.model)
                url = reverse('admin:%s_%s_changelist' % self.get_model_info(),
                      current_app=self.admin_site.name)
                return HttpResponseRedirect(url) 
            
                   
        else:
            res_kwargs = self.get_import_resource_kwargs(request, form=form, *args, **kwargs)
            resource = self.get_import_resource_class()(**res_kwargs)

        context.update(self.admin_site.each_context(request))

        context['title'] = _("Import")
        context['form'] = form
        context['opts'] = self.model._meta
        context['fields'] = [f.column_name for f in resource.get_user_visible_fields()]

        request.current_app = self.admin_site.name
        return TemplateResponse(request, [self.import_template_name],
                                context)

class SpImportExportMixin(SpImportMixin, ExportMixin):
    """
    Import and export mixin.
    """
    #: template for change_list view
    change_list_template = 'admin/import_export/change_list_import_export.html'

class SpImportExportModelAdmin(SpImportExportMixin, admin.ModelAdmin):
    """
    Subclass of ModelAdmin with import/export functionality.
    """

class ProductResource(resources.ModelResource):
     

    class Meta:
        model = Product
        fields = ('id', 'name_en', 'name_es','description_en','description_es',
        'brand_en','brand_es','price','weight','size','photo','category','petType','is_recurring')
## EOF User Import Customization

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
    list_filter = (
                    ('category',admin.RelatedOnlyFieldListFilter),
    )
    # readonly_fields = ( 'is_recurring', )

    def get_readonly_fields(self, request, obj=None):
        if obj: # editing an existing object
            return self.readonly_fields + ('is_recurring',)
        return self.readonly_fields

# Product Admin.
class ProductAdmin(SpImportExportModelAdmin):
    resource_class = ProductResource    
    form = MyProductAdminForm
    


    fields = ('name_en', 'name_es', 'description_en','description_es','brand_en', 'brand_es', 'category','petType','price','weight','size','photo','sort','is_recurring')
    list_display = ('name_en','brand_en',  'description_en', 'price' , 'size' , 'sort')
    list_filter = (
                    ('category',admin.RelatedOnlyFieldListFilter),
                    ('petType',admin.RelatedOnlyFieldListFilter),
    )
    # readonly_fields = ( 'is_recurring', )

    def get_readonly_fields(self, request, obj=None):
        if obj: # editing an existing object
            return self.readonly_fields + ('is_recurring',)
        return self.readonly_fields
  
           

      
 


admin.site.register(Category, CategoryAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Product, ProductAdmin)

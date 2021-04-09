from django.contrib import admin
from pet.models import PetType, BreedType, Pet

# Pet Type Admin.
class PetTypeAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-sort')
        
    fields = ('name', 'sort')
    list_display = ('name', 'sort')

# Breed Type Admin.
class BreedTypeAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('-sort')

    fields = ('name', 'sort')
    list_display = ('name', 'sort')

# Pet Admin.
class PetAdmin(admin.ModelAdmin):
    fields = ('name', 'age', 'pet_type','breed','owner')
    list_display = ('name', 'age', 'pet_type', 'breed','owner')



admin.site.register(PetType, PetTypeAdmin)
admin.site.register(BreedType, BreedTypeAdmin)
admin.site.register(Pet, PetAdmin)
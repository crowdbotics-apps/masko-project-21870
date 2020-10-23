from django.contrib import admin
from .models import VehicleLocation, ProfileLocation, MapLocation

admin.site.register(VehicleLocation)
admin.site.register(ProfileLocation)
admin.site.register(MapLocation)

# Register your models here.

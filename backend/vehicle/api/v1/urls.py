from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import VehicleViewSet, VehicleTypeViewSet

router = DefaultRouter()
router.register("vehicle", VehicleViewSet)
router.register("vehicletype", VehicleTypeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

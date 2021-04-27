from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HomePageViewSet, CustomTextViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
    ServiceViewSet,
    ServiceCategoryViewSet,
    PetViewSet, 
    PetTypeViewSet,
    BreedTypeViewSet,
    CardViewSet, 
    ProductViewSet
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")

router.register("service", ServiceViewSet, basename="service")
router.register("product", ProductViewSet, basename="product")
router.register("service-category", ServiceCategoryViewSet, basename="service-category")
router.register("pet", PetViewSet, basename="pet")
router.register("unds", CardViewSet, basename="pet")
router.register("pet-type", PetTypeViewSet, basename="pet-type")
router.register("breed-type", BreedTypeViewSet, basename="breed-type")
router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

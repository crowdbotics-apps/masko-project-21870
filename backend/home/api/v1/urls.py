from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HomePageViewSet, CustomTextViewSet
from django.views.decorators.csrf import csrf_exempt

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
    ProductViewSet,
    AddOrderViewSet
)

from payment_stripe.views import WebHookViewSet

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
router.register("webhooks", WebHookViewSet, basename="webhooks")

urlpatterns = [
    path("", include(router.urls)),
    path('order', csrf_exempt(AddOrderViewSet.as_view()), name='add-order'),
]

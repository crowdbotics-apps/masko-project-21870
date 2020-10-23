from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BookingTransactionViewSet, MessageViewSet, RatingViewSet

router = DefaultRouter()
router.register("bookingtransaction", BookingTransactionViewSet)
router.register("rating", RatingViewSet)
router.register("message", MessageViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

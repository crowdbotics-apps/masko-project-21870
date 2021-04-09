from rest_framework import viewsets
from rest_framework import authentication
from .serializers import HomePageSerializer, CustomTextSerializer
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from home.permissions import IsOwnerOrReadOnly
from home.api.v1.paginators import StandardResultsSetPagination, LargeResultsSetPagination

from home.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
    PetSerializer,
    PetTypeSerializer,
    BreedTypeSerializer,
    ServiceSerializer,
    ServiceCategorySerializer
)
from home.models import HomePage, CustomText
from pet.models import Pet, PetType, BreedType
from service.models import Service, Category as ServiceCategory


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class CustomTextViewSet(ModelViewSet):
    serializer_class = CustomTextSerializer
    queryset = CustomText.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class HomePageViewSet(ModelViewSet):
    serializer_class = HomePageSerializer
    queryset = HomePage.objects.all()

    authentication_classes = (SessionAuthentication, TokenAuthentication)
    # permission_classes = [IsAdminUser]
    http_method_names = ["get"]


class ServiceCategoryViewSet(ModelViewSet):
    serializer_class = ServiceCategorySerializer
    queryset = ServiceCategory.objects.all().order_by('-sort')

    

    authentication_classes = (SessionAuthentication, TokenAuthentication)
    # permission_classes = [IsAdminUser]
    http_method_names = ["get"]

class ServiceViewSet(ModelViewSet):
    serializer_class = ServiceSerializer

    def get_queryset( self ):
        queryset = Service.objects.all()
        category = self.request.query_params.get('category')
        
        if category is not None:
            queryset = queryset.filter(category=category)

        return queryset.order_by('-sort')

    authentication_classes = (SessionAuthentication, TokenAuthentication)
    # permission_classes = [IsAdminUser]
    http_method_names = ["get"]

    

class PetViewSet(ModelViewSet):
    serializer_class = PetSerializer
    queryset = Pet.objects.all()

    def get_queryset( self):
        return Pet.objects.filter(owner=self.request.user)


    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsOwnerOrReadOnly]
    pagination_class = StandardResultsSetPagination
    http_method_names = ["get", "post", "put", "patch", "delete"]
    
class PetTypeViewSet(ModelViewSet):
    serializer_class = PetTypeSerializer
    queryset = PetType.objects.all().order_by('-sort')

    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsOwnerOrReadOnly]
    pagination_class = StandardResultsSetPagination
    http_method_names = ["get"]
    
class BreedTypeViewSet(ModelViewSet):
    serializer_class = BreedTypeSerializer
    queryset = BreedType.objects.all().order_by('-sort')

    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsOwnerOrReadOnly]
    pagination_class = StandardResultsSetPagination
    http_method_names = ["get"]
    




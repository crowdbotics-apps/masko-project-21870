from rest_framework import viewsets
from rest_framework import authentication
from .serializers import HomePageSerializer, CustomTextSerializer
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from home.permissions import IsOwnerOrReadOnly
from home.api.v1.paginators import StandardResultsSetPagination, LargeResultsSetPagination
from django.db.models import Q
from rest_framework.generics import CreateAPIView

from home.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
    PetSerializer,
    PetTypeSerializer,
    BreedTypeSerializer,
    ServiceSerializer,
    ServiceCategorySerializer,
    ProductSerializer,
    OrderSerializer
)

from payment_stripe.serializers import ( CardSerializer )
from payment_stripe.models import ( Card ) 

from home.models import HomePage, CustomText
from pet.models import Pet, PetType, BreedType
from service.models import Service, Category as ServiceCategory, Product
from order.models import Order, Product as OrderProduct

from django.core.mail import BadHeaderError, send_mail
from django.core.mail import EmailMultiAlternatives

from django.template.loader import render_to_string
from masko_project_21870.settings import DEFAULT_FROM_EMAIL

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
        keyword = self.request.query_params.get('keyword')
        
        if category is not None:
            queryset = queryset.filter(category=category)

        if keyword is not None:

            queryset = queryset.filter(
                                        Q(name_en__icontains=keyword) |
                                        Q(name_es__icontains=keyword) |
                                        Q(description_en__icontains=keyword) |
                                        Q(description_es__icontains=keyword) 
                                      )

        return queryset.order_by('-sort')

    authentication_classes = (SessionAuthentication, TokenAuthentication)
    # permission_classes = [IsAdminUser]
    http_method_names = ["get"]


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer


    def getPriceRange( self, index):
        priceRange = [{
            'start': 0,
            'end': 9,
        },{
            'start': 10,
            'end': 99,
        },{
            'start': 100,
            'end': 999,
        }]

        return priceRange[int(index)-1]

    def get_queryset( self ):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category')
        petType = self.request.query_params.get('petType')
        keyword = self.request.query_params.get('keyword')
        priceIndex = self.request.query_params.get('price')
        sortOrder = self.request.query_params.get('sort')
        
        if category is not None:
            queryset = queryset.filter(category=category)
     
        if keyword is not None:
            queryset = queryset.filter(
                                        Q(name_en__icontains=keyword) |
                                        Q(name_es__icontains=keyword) |
                                        Q(description_en__icontains=keyword) |
                                        Q(description_es__icontains=keyword) | 
                                        Q(brand_en__icontains=keyword) |
                                        Q(brand_es__icontains=keyword) 
                                      )

        if petType is not None:
            queryset = queryset.filter( petType_id = petType ) 

        if priceIndex is not None: 
            priceRange = self.getPriceRange( priceIndex )
            queryset = queryset.filter( price__range = ( priceRange['start'], priceRange['end'] ) )


        if sortOrder is not None:
            queryset = queryset.order_by(sortOrder)
        else:
            queryset = queryset.order_by('-sort')

        return queryset

    authentication_classes = (SessionAuthentication, TokenAuthentication)
    pagination_class = StandardResultsSetPagination
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


class CardViewSet(ModelViewSet):
    serializer_class = CardSerializer
    
    def get_queryset( self):
        return Card.objects.filter( owner = self.request.user )


    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsOwnerOrReadOnly]
    pagination_class = StandardResultsSetPagination
    http_method_names = ["get", "post", "put", "patch", "delete"]
    

class AddOrderViewSet(CreateAPIView):

    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    @classmethod
    def get_extra_actions(cls):
        return []

    def getProductItem(self, item, orderId, pets):
        response = None
        
        if item['type'] == "product":
            product = Product.objects.get( pk=item['id'] )
            response = {
                        'item': OrderProduct( 
                                pType = item['type'],
                                product_id = item['id'],
                                order_id = orderId, 
                                pet_id = item['pet'],
                                unit_price = product.price,
                                quantity = item['quantity']
                            ),
                         'source': product,
                         'pet': next((x for x in pets if x.id == item['pet']), None),
                         'totalPrice': product.price*item['quantity']
            }   
        else:
            service = Service.objects.get( pk=item['id'] )
            
            response = {
                        'item': OrderProduct( 
                                    pType = item['type'],
                                    service_id = item['id'],
                                    order_id = orderId, 
                                    pet_id = item['pet'],
                                    unit_price = service.price,
                                    quantity = item['quantity'],
                                    date = item['scheduleDate'],
                                    time = item['time'] if 'time' in item else '',
                                    notes = item['notes'],
                                ),
                         'source': service,
                         'pet': next((x for x in pets if x.id == item['pet']), None),
                         'totalPrice': service.price*item['quantity']
            }   

        return response    





    def create(self, request, *args, **kwargs):

        try:

            # response = super().create(request, *args, **kwargs)   
            if 'items' in request.data:
                order = Order( owner = request.user, is_recurring = False)
                order.save()

                productCollection = []
                itemCollectionForEmail = []
                subTotal = 0
                userPets = Pet.objects.filter( owner = request.user )    
                for item in request.data['items']:
                    pProduct = self.getProductItem( item, order.id, userPets)
                    subTotal += ( pProduct['item'].unit_price * pProduct['item'].quantity )
                    productCollection.append( pProduct['item'] )
                    itemCollectionForEmail.append( pProduct )

                OrderProduct.objects.bulk_create( productCollection )    

                order.subtotal_price = subTotal
                order.ship_price = 0
                order.tax_price = 0
                order.total_price = ( order.subtotal_price + order.ship_price + order.tax_price )
                order.save() 


                subject, from_email, to = 'Masko App - Order # {}'.format(order.id), DEFAULT_FROM_EMAIL, 'usama149@gmail.com'
                user = request.user

                templateVars = {
                    'order': order,
                    'purchases': itemCollectionForEmail,
                    'user': user
                } 
                    

                msg_plain = render_to_string('order/email/order_summary.txt', templateVars)
                    
                msg_html = render_to_string('order/email/order_summary.html', templateVars)
                    
                msg = EmailMultiAlternatives(subject, msg_plain, from_email, [to])
                msg.attach_alternative(msg_html, "text/html")
                msg.send()

                return Response({
                    'status': 201,
                    'message': 'Order has been successfully created',
                    # 'data': OrderSerializer(order).data
                }, status=201)

            else:    
                return Response({
                    'status': 400,
                    'message': 'Data is Missing, Items, Payment Method',
                    'data': ''
                },status=400)
        except Exception as e:
            print(e) 
            return Response({
                'status': 400,
                'message': 'Bad Request',
                'data': str(e)
            },status=400)   






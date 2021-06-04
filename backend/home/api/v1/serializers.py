from payment_stripe.models import Subscription, SubscriptionPayments
from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from home.models import HomePage, CustomText

from pet.models import Pet, PetType, BreedType
from service.models import Service, Category, Product
from order.models import Order, Product as OrderProduct
from users.models import SignUpProduct


import boto3
import base64
import os
import mimetypes
import random

User = get_user_model()
BASE_PATH = "masko_app"
BASE_PATH_PET_IMAGE = '{}/pet_images'.format(BASE_PATH)


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "name", "email", "password","signup_frequent_purchase")
        extra_kwargs = {
            "password": {"write_only": True, "style": {"input_type": "password"}},
            "email": {
                "required": True,
                "allow_blank": False,
            },
        }

    def _get_request(self):
        request = self.context.get("request")
        if (
            request
            and not isinstance(request, HttpRequest)
            and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address.")
                )
        return email


    def set_user_signup_prod(self, user, request):
        if 'products' in request.POST:
            in_product = request.POST['products']
            products = in_product.split(',')
            for item in products:
                newItem = SignUpProduct(user_id=user.id, product_id=item)
                newItem.save()
      

    def create(self, validated_data):
        user = User(
            email=validated_data.get("email"),
            name=validated_data.get("name"),
            signup_frequent_purchase=validated_data.get("signup_frequent_purchase"),
            username=generate_unique_username(
                [validated_data.get("name"), validated_data.get("email"), "user"]
            ),
        )
        user.set_password(validated_data.get("password"))
        user.save()
        request = self._get_request()
        self.set_user_signup_prod(user, request)
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = "__all__"

   

class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"  

class ServiceCategoryShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name_en','name_es','description_en','description_es','sort')          

class ServiceSerializer(serializers.ModelSerializer):
    category = ServiceCategoryShortSerializer()
    class Meta:
        model = Service
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "name","address","default_card"]


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""

    password_reset_form_class = ResetPasswordForm


class BreedTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = BreedType
        fields = ["id", "name", "sort"]

class PetTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = PetType
        fields = ["id", "name", "sort"]

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"

class OrderProductSerializer(serializers.ModelSerializer):

    refrence_item = serializers.SerializerMethodField()


    def get_refrence_item( self, item ):
        if item.pType == 'product':
            return ProductSerializer(item.product).data
        else:
            return ServiceSerializer(item.service).data    



    class Meta:
        model = OrderProduct
        fields = ('id','pType','quantity','unit_price','timeOption','date','time','order_every','notes','pet','refrence_item')

class OrderProductShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProduct
        fields = "__all__"          

class SubscriptionPaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionPayments
        fields = "__all__"                

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = "__all__"                


class MyOrderSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    total_purchases = serializers.SerializerMethodField()
    purchases = serializers.SerializerMethodField()
    
    def get_products(self, order):
        items = OrderProduct.objects.filter(order=order)
        list = []
        for item in items:
            list.append(OrderProductSerializer(item).data)
        return list

    def get_total_purchases(self, order):
        items = SubscriptionPayments.objects.filter(order=order)
        return len(items)

    def get_purchases(self, order):
        items = SubscriptionPayments.objects.filter(order=order)
        list = []
        for item in items:
            list.append(SubscriptionPaymentsSerializer(item).data)
        return list 


    class Meta:
        model = Order
        fields = ('id','address','country','subtotal_price','ship_price','tax_price','total_price','created_at','status','owner','products','total_purchases','purchases')


class RecurringOrderSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    total_purchases = serializers.SerializerMethodField()
    purchases = serializers.SerializerMethodField()
    subscription = serializers.SerializerMethodField()
    
    def get_subscription( self, order):
        list = []
        item = Subscription.objects.filter(order_id = order.id).first()
        if item is not None:
            return SubscriptionSerializer(item).data
        else:
            return None   

    def get_products(self, order):
        items = OrderProduct.objects.filter(order=order)
        list = []
        for item in items:
            list.append(OrderProductSerializer(item).data)
        return list

    def get_total_purchases(self, order):
        items = SubscriptionPayments.objects.filter(order=order)
        return len(items)

    def get_purchases(self, order):
        items = SubscriptionPayments.objects.filter(order=order)
        list = []
        for item in items:
            list.append(SubscriptionPaymentsSerializer(item).data)
        return list 


    class Meta:
        model = Order
        fields = ('id','address','country','subtotal_price','ship_price',
                  'tax_price','total_price','created_at','status','owner',
                  'products','total_purchases','purchases',
                  'subscription')

class RecurringOrderDetailSerializer(serializers.ModelSerializer):
    
    products = serializers.SerializerMethodField()
    purchase = serializers.SerializerMethodField()
    
    def get_products(self, order):
        items = OrderProduct.objects.filter(order=order)
        list = []
        for item in items:
            list.append(OrderProductSerializer(item).data)
        return list

    def get_purchase(self, order):
        items = SubscriptionPayments.objects.filter(order=order)
        list = []
        for item in items:
            list.append(SubscriptionPaymentsSerializer(item).data)
        return list


    class Meta:
        model = Order
        fields = ('id','address','country','subtotal_price','ship_price','tax_price','total_price','created_at','status','owner','products','purchase')


class PetSerializer(serializers.ModelSerializer):
    
    pet_image = serializers.SerializerMethodField('get_image_url')
    typeInfo = PetTypeSerializer(source="pet_type", read_only=True)
    breedInfo = PetTypeSerializer(source="breed", read_only=True)
    ownerInfo = UserSerializer(source="owner", read_only=True)

    def get_image_url(self,pet):
        bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME')
        if pet.photo != None:
            object_url = "https://%s.s3.amazonaws.com/%s" % (bucket_name, pet.photo)
            return object_url
        else: 
            return None 

    def delete_old_image(self, pet):

        if pet!=None and pet.photo != None:
            s3 = boto3.resource('s3')
            bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME')
            s3.Object(bucket_name, pet.photo).delete()


    def create(self, validated_data):
        request = self.context['request']
        
        try:
              
            instance = Pet( 
                            name=request.data['name'],
                            age = request.data['age'],
                            pet_type_id = request.data['pet_type'],
                            breed_id = request.data['breed'],
                            owner = request.user )
            
            s3 = boto3.resource('s3')

            instance.save()

            if request.data['file'] != None:
                try: 
                    rand_number = random.randint(100,9999999999)
                    extension = mimetypes.guess_extension(request.data['file_mime'])
                    if extension == None:
                        extension = '.tmp'

                    bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME')
                    file_name = 'pImg-{uid}{ext}'.format(uid=rand_number,ext=extension)
                    file_name_with_extention = '{BASE_PATH}/{pet_id}/{file_name}'.format(
                                        pet_id=instance.id,
                                        file_name=file_name,
                                        BASE_PATH = BASE_PATH_PET_IMAGE)

                    image_base64 = request.data['file']
                    
                    obj = s3.Object(bucket_name,file_name_with_extention)
                    
                    obj.put(
                            ACL='public-read',
                            Body=base64.b64decode(image_base64))
                   
                    object_url = "https://%s.s3.amazonaws.com/%s" % (bucket_name, file_name_with_extention)
                    instance.photo = file_name_with_extention
                    instance.save()
                    
                except: 
                    print("*** Image Upload Error S3 Bucket ***")
                    # raise
            
            
            return instance
        except Exception as e:
            print(e)
            print("*** Error in Data Set ***")
            return instance
            # raise    
        
    def update(self, instance, validated_data):
        request = self.context['request']
        
        try:
        
            instance.name = request.data['name']
            instance.age =    request.data['age'] 
            instance.pet_type_id = request.data['pet_type']
            instance.breed_id = request.data['breed']

            s3 = boto3.resource('s3')
            instance.save()

            if 'file' in request.data != None:
                try: 
                    rand_number = random.randint(100,9999999999)
                    extension = mimetypes.guess_extension(request.data['file_mime'])
                    if extension == None:
                        extension = '.tmp'

                    bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME')
                    file_name = 'pImg-{uid}{ext}'.format(uid=rand_number,ext=extension)
                    file_name_with_extention = '{BASE_PATH}/{pet_id}/{file_name}'.format(
                                        pet_id=instance.id,
                                        file_name=file_name,
                                        BASE_PATH = BASE_PATH_PET_IMAGE)

                    image_base64 = request.data['file']
                    
                    obj = s3.Object(bucket_name,file_name_with_extention)
                    
                    obj.put(
                            ACL='public-read',
                            Body=base64.b64decode(image_base64))

                    self.delete_old_image(instance)        
                   
                    object_url = "https://%s.s3.amazonaws.com/%s" % (bucket_name, file_name_with_extention)
                    instance.photo = file_name_with_extention
                    instance.save()
                except: 
                    print("*** Image Upload Error S3 Bucket ***")
                    # raise
            
            
            return instance
        except Exception as e:
            print(e)
            print("*** Error in Data Set ***")
            return instance
            # raise    
     


    class Meta:
        model = Pet
        fields = [  "id", "name", "age","pet_type",
                    "typeInfo","breed","breedInfo","ownerInfo","pet_image"
                ]

                  
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
from .models import Card

import boto3
import base64
import os
import mimetypes
import random

User = get_user_model()
BASE_PATH = "masko_app"
BASE_PATH_PET_IMAGE = '{}/pet_images'.format(BASE_PATH)


class CardSerializer(serializers.ModelSerializer):
    
    def create(self, validated_data):
        request = self.context['request']
        
        try:
              
            instance = Card(owner=request.user)
            
            if request.user.stripe_id is None:
                request.user.save()


            instance.generate_card({
                'card':request.data,
                'customer': request.user.stripe_id
            })
            
            instance.save()
 
            return instance
        except Exception as e:
            raise serializers.ValidationError(e)
            # raise    
        
    def update(self, instance, validated_data):
        request = self.context['request']
        
        try:
            instance.update_card(request.data)
            return instance
        except Exception as e:
            raise serializers.ValidationError(e)
            # raise    
     
    class Meta:
        model = Card
        fields = "__all__"

                
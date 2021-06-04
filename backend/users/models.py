from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from payment_stripe.models import Card

import stripe

from masko_project_21870.settings import STRIPE_API_KEY
stripe.api_key = STRIPE_API_KEY

from django.utils.encoding import smart_str

class User(AbstractUser):
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    email = models.EmailField(
        null=True,
        blank=True,
        max_length=255,
    )
    first_name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    last_name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    stripe_id = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    address = models.CharField(
        null=True,
        blank=True,
        max_length=512,
    )

    signup_frequent_purchase = models.IntegerField(default=0, null=True, blank=True)  

    default_card = models.ForeignKey(Card, on_delete=models.CASCADE, null=True)

    timestamp_created = models.DateTimeField(
        null=True,
        blank=True,
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        null=True,
        blank=True,
        auto_now=True,
    )

    @property
    def stripe_customer(self):
        return stripe.Customer.retrieve(self.stripe_id)

    ### Handle Before Save Of a User
    def save(self, *args, **kwargs):
        # try:
        #     if self.stripe_id is None:
        #         stripe_customer = stripe.Customer.create(
        #                 description="{}-({}) is created from Masko App".format(self.name,self.email),
        #                 email= self.email,
        #                 name= self.name
        #                 )
        #         self.stripe_id = stripe_customer.id        
        #     else:
        #         stripe.Customer.modify(
        #             self.stripe_id,
        #             description="{}-({}) is updated from Masko App".format(self.name,self.email),
        #             email= self.email,
        #             name= self.name
        #             )
        # except Exception as e: 
        #     print("Stripe Save Error")
        #     print(e)      
        #     pass      


        super(User, self).save(*args, **kwargs)

    
    def purge(self):
        try:
            self.stripe_customer.delete()
        except stripe.InvalidRequestError as e:
            if smart_str(e).startswith("No such customer:"):
                # The exception was thrown because the customer was already
                # deleted on the stripe side, ignore the exception
                pass
            else:
                # The exception was raised for another reason, re-raise it
                raise
            
        self.save()

    ### Handle Before Save Of a User
    def delete(self):
        self.purge()
        super(User, self).delete()


    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


# Product Model
class SignUpProduct(models.Model):
    product = models.ForeignKey('service.Product', on_delete=models.CASCADE, null=True, default=None )
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, default=None )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )
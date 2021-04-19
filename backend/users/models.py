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
        try:
            if self.stripe_id is None:
                stripe_customer = stripe.Customer.create(
                        description="{}-({}) is created from Masko App".format(self.name,self.email),
                        email= self.email,
                        name= self.name
                        )
                self.stripe_id = stripe_customer.id        
            else:
                stripe.Customer.modify(
                    self.stripe_id,
                    description="{}-({}) is updated from Masko App".format(self.name,self.email),
                    email= self.email,
                    name= self.name
                    )
        except Exception as e: 
            print("Stripe Save Error")
            print(e)      
            pass      


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

# cus_JHxE0CHwbYh3jv
# stripe.Customer.create(
#   description="My First Test Customer (created for API docs)", email="John@live.com", name="Bingo John")



# stripe.Token.create(
#   card={
#     "number": "4242424242424242",
#     "exp_month": 4,
#     "exp_year": 2022,
#     "cvc": "314",
#   },
# )



# <Token token id=tok_1IfNU2ES1Wz3F8fhd547iBEb at 0x106316470> JSON: {
#   "card": {
#     "address_city": null,
#     "address_country": null,
#     "address_line1": null,
#     "address_line1_check": null,
#     "address_line2": null,
#     "address_state": null,
#     "address_zip": null,
#     "address_zip_check": null,
#     "brand": "Visa",
#     "country": "US",
#     "cvc_check": "unchecked",
#     "dynamic_last4": null,
#     "exp_month": 4,
#     "exp_year": 2022,
#     "fingerprint": "uN9vQZmQ8wvwLiKv",
#     "funding": "credit",
#     "id": "card_1IfNU2ES1Wz3F8fhZhBEBZG9",
#     "last4": "4242",
#     "metadata": {},
#     "name": null,
#     "object": "card",
#     "tokenization_method": null
#   },
#   "client_ip": "39.57.175.142",
#   "created": 1618225150,
#   "id": "tok_1IfNU2ES1Wz3F8fhd547iBEb",
#   "livemode": false,
#   "object": "token",
#   "type": "card",
#   "used": false
# }


# stripe.Customer.create_source(
#   "cus_JHxE0CHwbYh3jv",
#   source="tok_1IfNU2ES1Wz3F8fhd547iBEb",
# )
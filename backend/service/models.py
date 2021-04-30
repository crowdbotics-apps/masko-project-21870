from django.db import models

from pet.models import PetType

import stripe
from masko_project_21870.settings import STRIPE_API_KEY
stripe.api_key = STRIPE_API_KEY
from django.utils.encoding import smart_str

from payment_stripe.models import ProductPrices

# Service  Category Model
class Category(models.Model):
    
    name_en = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    name_es = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    description_en = models.CharField(
        null=True,
        blank=True,
        max_length=512,
    )

    description_es = models.CharField(
        null=True,
        blank=True,
        max_length=512,
    )

    photo = models.FileField(upload_to='category_photo')

    sort = models.IntegerField(default=0)

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )

    def __str__ (self):
        return self.name_es

# Service Model
class Service(models.Model):

    stripe_id = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    name_en = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    name_es = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    description_en = models.CharField(
        null=True,
        blank=True,
        max_length=512,
    )

    description_es = models.CharField(
        null=True,
        blank=True,
        max_length=512,
    )

    photo = models.FileField(upload_to='service_photo')

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    is_recurring = models.BooleanField(default=False)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)  

    sort = models.IntegerField(default=0)  
    
    
    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )
    

    def __str__ (self):
        return self.name_es


# Product Model
class Product(models.Model):

    stripe_id = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    name_en = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    name_es = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    description_en = models.CharField(
        null=True,
        blank=True,
        max_length=512,
    )

    description_es = models.CharField(
        null=True,
        blank=True,
        max_length=512,
    )

    brand_en = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    brand_es = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    photo = models.FileField(upload_to='product_photo')

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    weight = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    size =  models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )


    is_recurring = models.BooleanField(default=False)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)  

    petType = models.ForeignKey(PetType, on_delete=models.CASCADE)  

    sort = models.IntegerField(default=0)  
     
    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )

    ### Handle Before Save Of a Product 
    def save(self, *args, **kwargs):
        oldProduct = Product.objects.get( pk=self.id )
        super(Product, self).save(*args, **kwargs)
        # Stripe Product Creation Only Available for Recurring Products
        if self.stripe_id is None and self.is_recurring is True: 
            stripe_obj = self.create_stripe_product()
            self.stripe_id = stripe_obj.id
            self.create_product_prices(oldProduct)
        elif self.is_recurring is True:
            self.update_stripe_product()
            self.create_product_prices(oldProduct)
        ###    


       

     ### Create Product Prices
    def create_product_prices(self, oldProduct):
        try:
            if oldProduct.price != self.price:
                item = ProductPrices(
                        product = self, 
                        price = self.price, 

                )
                item.save()
                return item
            else: 
                return None    
            
                   
        except Exception as e:
            raise NameError(e)

        return None    
  

     ### Create Stripe Prices
    
    

    ### Create Stripe Product
    def create_stripe_product(self):
        try:
            stripe_obj = stripe.Product.create(
                                                name = self.name_en,
                                                description = self.description_en,
                                                metadata = {
                                                    'masko_product_id': self.id,
                                                    'brand': self.brand_en,
                                                    'weight': self.weight,
                                                    'size': self.size,
                                                    'start_price': self.price, 
                                                    'current_price': self.price, 
                                                    'petType': self.petType.name,
                                                    'category': self.category.name_en,

                                                }

                                            )

            return stripe_obj            
        except Exception as e:
            raise NameError(e)

        return None    
  

     ### Create Stripe Prices
    
    ### Update Stripe Product
    def update_stripe_product(self):
        try:
            stripe_obj = stripe.Product.modify(
                                                self.stripe_id,
                                                name = self.name_en,
                                                description = self.description_en,
                                                metadata = {
                                                    'brand': self.brand_en,
                                                    'weight': self.weight,
                                                    'size': self.size,
                                                    'current_price': self.price, 
                                                    'petType': self.petType.name,
                                                    'category': self.category.name_en,

                                                }

                                            )

            return stripe_obj            
        except Exception as e:
            raise NameError(e)

        return None    
  

    def __str__ (self):
        return self.name_es

  
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
    
    ### Handle Before Save Of a Service 
    def save(self, *args, **kwargs):

        oldService = None
        try:
            oldService = Service.objects.get( pk=self.id )
        except Service.DoesNotExist:
            pass

        super(Service, self).save(*args, **kwargs)

        # Stripe Product Creation Only Available for Recurring Products
        if self.stripe_id is None and self.is_recurring is True: 
            stripe_obj = self.create_stripe_product()
            self.stripe_id = stripe_obj.id
            self.create_product_prices(oldService)
        elif self.is_recurring is True:
            self.update_stripe_product()
            self.create_product_prices(oldService)
        ### 
        super(Service, self).save(*args, **kwargs)   

   
    ### Create Stripe Product
    def create_stripe_product(self):
        try:
            stripe_obj = stripe.Product.create(
                                                name = 'SERVICE - {}'.format(self.name_en),
                                                description = self.description_en,
                                                metadata = {
                                                    'type': 'service',
                                                    'masko_service_id': self.id,
                                                    'start_price': self.price, 
                                                    'current_price': self.price, 
                                                    'category': self.category.name_en,

                                                }

                                            )

            return stripe_obj            
        except Exception as e:
            raise NameError(e)

        return None    
  


    ### Update Stripe Product
    def update_stripe_product(self):
        try:
            stripe_obj = stripe.Product.modify(
                                                self.stripe_id,
                                                name = 'SERVICE - {}'.format(self.name_en),
                                                description = self.description_en,
                                                metadata = {
                                                    'current_price': self.price, 
                                                    'category': self.category.name_en,

                                                }

                                            )

            return stripe_obj            
        except Exception as e:
            raise NameError(e)

        return None    
    
    ### Create Stripe Product Prices
    def create_product_prices(self, oldService):
        try:
            if oldService is None or ( oldService is not None and oldService.price != self.price ) :
              
                ### Daily Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_DAILY,
                        service = self, 
                        price = Service.get_recurring_price(self, ProductPrices.NICKNAME_DAILY ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING

                )
                item.save()
                ###

                ### Weekly Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_WEEK,
                        service = self, 
                        price = Service.get_recurring_price(self, ProductPrices.NICKNAME_WEEK ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING 

                )
                item.save()
                ###

                ### Bi-Monthly Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_BI_MONTH,
                        service = self, 
                        price = Service.get_recurring_price(self, ProductPrices.NICKNAME_BI_MONTH ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING

                )
                item.save()
                ###

                ### Monthly Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_MONTH,
                        service = self, 
                        price = Service.get_recurring_price(self, ProductPrices.NICKNAME_MONTH ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING

                )
                item.save()
                ###

                
                return item
            else: 
                return None    
            
                   
        except Exception as e:
            raise NameError(e)

        return None    
    
    @classmethod
    def get_recurring_price( self, item, orderOptions ):
        priceList = ProductPrices.PRICE_LIST
        price = next((x for x in (priceList) if x['key']==orderOptions), priceList[3] )
        return item.price * price['factor']
        
   
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

        oldProduct = None
        try:
            oldProduct = Product.objects.get( pk=self.id )
        except Product.DoesNotExist:
            pass

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
        super(Product, self).save(*args, **kwargs)

    ### Handle Delete Of a Product
    def delete(self):
        self.purge()
        super(Product, self).delete()    

    def purge(self):
        self.disable_stripe_product()


    ### Disabled Stripe Product
    def disable_stripe_product(self):
        try:
            stripe_obj = stripe.Product.modify(
                                               self.stripe_id,
                                               active =  False,
                                               name = '(Deleted) - {}'.format(self.name_en),
                                               metadata = {
                                                   'notes': "Product has been deleted on Masko App"
                                               }
                                            )
            
            return stripe_obj   
        except stripe.error.InvalidRequestError as e:
            if smart_str(e).startswith("No such product"):    
                pass         
        except Exception as e:
            raise NameError(e)

        return None    
      

    ### Create Stripe Product
    def create_stripe_product(self):
        try:
            stripe_obj = stripe.Product.create(
                                                name = 'PRODUCT - {}'.format(self.name_en),
                                                description = self.description_en,
                                                metadata = {
                                                    'type': 'product',
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
  
 
    ### Update Stripe Product
    def update_stripe_product(self):
        try:
            stripe_obj = stripe.Product.modify(
                                                self.stripe_id,
                                                name = 'PRODUCT - {}'.format(self.name_en),
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
    
    ### Create Stripe Product Prices
    def create_product_prices(self, oldProduct):
        try:
            if oldProduct is None or ( oldProduct is not None and oldProduct.price != self.price):
                
                ### Daily Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_DAILY,
                        product = self, 
                        price = Product.get_recurring_price(self, ProductPrices.NICKNAME_DAILY ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING

                )
                item.save()
                ###

                ### Weekly Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_WEEK,
                        product = self, 
                        price = Product.get_recurring_price(self, ProductPrices.NICKNAME_WEEK ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING 

                )
                item.save()
                ###

                ### Bi-Monthly Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_BI_MONTH,
                        product = self, 
                        price = Product.get_recurring_price(self, ProductPrices.NICKNAME_BI_MONTH ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING

                )
                item.save()
                ###

                ### Monthly Recurrence
                item = ProductPrices(
                        nickname= ProductPrices.NICKNAME_MONTH,
                        product = self, 
                        price = Product.get_recurring_price(self, ProductPrices.NICKNAME_MONTH ),
                        recurring_interval = ProductPrices.MONTHLY_RECURRING

                )
                item.save()
                ###

                return item
            else: 
                return None    
            
                   
        except Exception as e:
            raise NameError(e)

        return None    
  
   
    @classmethod
    def get_recurring_price(self, item, orderOptions):
        priceList = ProductPrices.PRICE_LIST
        price = next((x for x in (priceList) if x['key']==orderOptions), priceList[3] )
        return item.price * price['factor']
        
        
    def __str__ (self):
        return self.name_es


#   stripe.Subscription.create(
#   customer="cus_JHzRAu80GRPLFV",
#   items=[
#     {
#     'metadata':{
#         'name':'john',
#          'description': 'adsa',
#     },
#     'quantity': 2, 
#     'price': 'price_1IlrRkES1Wz3F8fhwQ1G5oOf'
#     },

#     {
#     'metadata':{
#         'name':'PRODUCT - WHISKAS 1+ Can Fish/Chicken Selection',
#          'description': 'Each can contains 390g wet food for your cat while a healthy 4kg adult cat required at least 300g to 400g balanced diet daily depending on cat’s activity level. It contains no artificial flavors, preservatives or colors but made of real fresh meat. Furthermore, each tin contains perfect amount of zinc to ensure healthy skin and coat.',
#     },
#     'quantity': 2, 
#     'price': 'price_1InzHVES1Wz3F8fhiU37zgYs'
#     },
#   ],
# )

# sub_JOi5yufjuIA4Ti


# stripe.Subscription.create(
#   customer="cus_JHzRAu80GRPLFV",
#   items=[
#     {
#     'metadata':{
#         'name':'john',
#          'description': 'adsa',
#     },
#     'quantity': 2, 
#     'price': 'price_1IlrRlES1Wz3F8fhEJdwPEqj'
#     },

#     {
#     'metadata':{
#         'name':'PRODUCT - WHISKAS 1+ Can Fish/Chicken Selection',
#          'description': 'Each can contains 390g wet food for your cat while a healthy 4kg adult cat required at least 300g to 400g balanced diet daily depending on cat’s activity level. It contains no artificial flavors, preservatives or colors but made of real fresh meat. Furthermore, each tin contains perfect amount of zinc to ensure healthy skin and coat.',
#     },
#     'quantity': 2, 
#     'price': 'price_1InzHVES1Wz3F8fhiU37zgYs'
#     },
#   ],
# )
#sub_JQr8LaGohjcM8F
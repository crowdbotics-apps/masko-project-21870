from django.db import models
import stripe
from masko_project_21870.settings import STRIPE_API_KEY
stripe.api_key = STRIPE_API_KEY
from django.utils.encoding import smart_str
# from users.models import User

# Payment Cards Model
class Card(models.Model):

    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    s_card_id = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    address = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    country = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    brand = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    cvc_check = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    dynamic_last4 = models.IntegerField(
        default=0,
        null=True,
        blank=True,
    )

    exp_month = models.IntegerField(
        default=0
    )

    exp_year = models.IntegerField(
        default=0
    )

    fingerprint = models.CharField(
        null=True,
        blank=True,
        max_length=20,
    )
    

    last4 = models.CharField(
        null=True,
        blank=True,
        max_length=5,
    )

    funding = models.CharField(
        null=True,
        blank=True,
        max_length=10,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )

    owner = models.ForeignKey('users.User', on_delete=models.CASCADE, null=True, default=None)



    ### Handle Before Save Of a Card
    def save(self, *args, **kwargs):
        
        super(Card, self).save(*args, **kwargs)


    def set_card_details( self, data):
        self.s_card_id = data['id']
        self.name = data['name']
        self.dynamic_last4 = data['dynamic_last4']
        self.exp_month = data['exp_month']
        self.exp_year = data['exp_year']
        self.fingerprint = data['fingerprint']
        self.last4 = data['last4']
        self.cvc_check = data['cvc_check']
        self.funding = data['funding']
        self.brand = data['brand']
       
    
    def generate_card(self , data):
       
        if data['card'] is not None:
            token_obj , token_id = self.create_card_token( data['card'] )
         
            card = self.create_card( {
                'customer': data['customer'],
                'source': token_id
            })
            self.set_card_details( card )


            
    def create_card(self, data):
        card = stripe.Customer.create_source(
          data['customer'],
          source=data['source'],
        )
        return card

    def create_card_token(self, data):
        token_obj = stripe.Token.create(card=data)
        return token_obj, token_obj['id']

    def update_card( self, data):

        if 'name' in data:
            name = data['name']
        else:
            name = self.name   

        if 'exp_month' in data:
            exp_month = data['exp_month']
        else:
            exp_month = self.exp_month   

        if 'exp_year' in data:
            exp_year = data['exp_year']
        else:
            exp_year = self.exp_year    

    
        card =  stripe.Customer.modify_source(
                            self.owner.stripe_id,
                            self.s_card_id,
                            name=name,
                            exp_month=exp_month,
                            exp_year=exp_year,
                )
         
        self.set_card_details( card )  
                

            
    def purge(self):
        try:
            stripe.Customer.delete_source(
                self.owner.stripe_id,
                self.s_card_id,
                )
        except Exception as e:
            if smart_str(e).startswith("No such customer:"):
                # The exception was thrown because the customer was already
                # deleted on the stripe side, ignore the exception
                pass
            else:
                pass
                # The exception was raised for another reason, re-raise it
                # raise(e)
            
        # self.save()

    ### Handle Before Save Of a User
    def delete(self):
        self.purge()
        super(Card, self).delete()


    def __str__ (self):
        return '{} {} - ({})'.format(self.name, self.brand , self.last4 )
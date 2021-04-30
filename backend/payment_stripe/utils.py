import stripe
from masko_project_21870.settings import STRIPE_API_KEY
stripe.api_key = STRIPE_API_KEY

from .models import Card

def create_stripe_charge(items,customer, order):
    cards = customer.default_card
    charge = stripe.Charge.create(
            amount = int(order.total_price * 100 ),
            currency= "usd",
            customer=customer.stripe_id,
            source=cards.s_card_id,
            description='Masko App - Order # {}, ( {} - {} ) '.format(
                                                                      order.id,
                                                                      customer.name,
                                                                      customer.email  ) ,
    )
    if charge.status != 'succeeded':
        raise NameError('Payment Failure')
        
    return charge
    
    # order = stripe.Order.create(
        
    #                     currency="usd",
    #                     email = customer.email,
    #                     items = items,
    #                     customer = customer.stripe_id
    #         )
    # return order 


def create_stripe_order(items,customer):
    order = stripe.Order.create(
        
                        currency="usd",
                        email = customer.email,
                        items = items,
                        customer = customer.stripe_id
            )
    return order    

def prepare_items_4m_orderColect(items):
    stripeItems = []
    for i in items: 
        stripeItems.append({
                                 "amount": int( i['source'].price * 100 ),
                                 "currency": "usd",
                                 "description": '{} for {}'.format(
                                                             i['source'].name_en,
                                                             i['pet'].name,
                                                         ),
                                 # "parent": None,
                                 "quantity": i['item'].quantity,
                                 # "type": "sku"
        })   

    return stripeItems     


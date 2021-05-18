import stripe
import json
import os
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .models import (
    Subscription, 
    SubscriptionPayments, 
    Events as StripeEvents
)

class WebHookViewSet(ViewSet):
   
    def create(self, request):
        # You can use webhooks to receive information about asynchronous payment events.
        # For more about our webhook events check out https://stripe.com/docs/webhooks.
        webhook_secret = False
        # print(request.data)
        # return None
        if isinstance( request.data, str):
            request_data = json.loads(request.data)
        else: 
            request_data = request.data
        
        
        # print(request_data['data'])

        try:

            if webhook_secret:
                # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
                signature = request.headers.get('stripe-signature')
                try:
                    event = stripe.Webhook.construct_event(
                        payload=request.data, sig_header=signature, secret=webhook_secret)
                    data = event['data']
                except Exception as e:
                    print("* Exception1")
                    return Response({
                        'status': 400,
                        'message': 'Error',
                        'data': str(e)
                    }, status=400)
                event_type = event['type']
            else:
                    data = request_data['data']
                    event_type = request_data['type']
            # print("* DATA")
            # print(event_type)
            data_object = data['object']

            stripe_event = StripeEvents(eventType = event_type, requestBody = request_data)
            stripe_event.save() 
               

            if event_type == 'invoice.payment_succeeded':
                if data_object['billing_reason'] == 'subscription_create' or data_object['billing_reason'] == 'subscription_cycle':
                # The subscription automatically activates after successful payment
                # Set the payment method used to pay the first invoice
                # as the default payment method for that subscription

                    subscription_id = data_object['subscription']
                    payment_intent_id = data_object['payment_intent']

                    if subscription_id is not None:
                        subscriptions = Subscription.objects.filter(stripe_id=subscription_id).all()
                        if len(subscriptions) > 0 : 
                            subscription_item = subscriptions[0]
                            subscriptions_payments = SubscriptionPayments(
                                                                    paymentType = data_object['billing_reason'],
                                                                    order_id=subscription_item.order_id,
                                                                    subscription_id=subscription_item.id,
                                                                    event_id = stripe_event.id, 
                                                                    stripe_payment_intent = payment_intent_id
                                                                     )
                            subscriptions_payments.save()                                                                     
                        


                    
                # Retrieve the payment intent used to pay the subscription
                payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)
                
                if subscription_id is not None:
                    # Set the default payment method
                    stripe.Subscription.modify(
                        subscription_id,
                        default_payment_method=payment_intent.payment_method
                    )

                print("Default payment method set for subscription: {}".format(payment_intent.payment_method))
                return Response({
                        'status': 200,
                        'message': 'Success - invoice.payment_succeeded',
                        'data': "Default payment method set for subscription:" + str(payment_intent.payment_method)
                    }, status=200)



            elif event_type == 'invoice.payment_failed':
                # If the payment fails or the customer does not have a valid payment method,
                # an invoice.payment_failed event is sent, the subscription becomes past_due.
                # Use this webhook to notify your user that their payment has
                # failed and to retrieve new card details.
                # print(data)
                    return Response({
                        'status': 200,
                        'message': 'Success - invoice.payment_failed',
                        'data': 'Invoice payment failed: {}'.format(event.id)
                    }, status=200)
                    

            elif event_type == 'invoice.finalized':
                # If you want to manually send out invoices to your customers
                # or store them locally to reference to avoid hitting Stripe rate limits.
                # print(data)
                    return Response({
                        'status': 200,
                        'message': 'Success - invoice.finalized',
                        'data': 'Invoice finalized : {}'.format(event.id)
                    }, status=200)

            elif event_type == 'customer.subscription.deleted':
                # handle subscription cancelled automatically based
                # upon your subscription settings. Or if the user cancels it.
                # print(data)
                    return Response({
                        'status': 200,
                        'message': 'Success - invoice.subscription.deleted',
                        'data': 'Subscription canceled: {}'.format(event.id)
                    }, status=200)

            return Response({
                        'status': 400,
                        'message': 'Success - No Even Type Handled',
                        'data': 'Event Obj: {}'.format(event.id)
                    }, status=400)
        except Exception as e:
            return Response({
                        'status': 400,
                        'message': 'Error - No Even Type Handled',
                        'data': str(e)
                    }, status=400)



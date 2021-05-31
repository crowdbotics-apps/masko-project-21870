from django.contrib import admin
from .models import Events, SubscriptionPayments, Subscription

# Events Model Admin.
class EventAdmin(admin.ModelAdmin):
    search_fields = ('id', 'eventType', 'created_at')
    fields = ('eventType','requestBody','created_at')
    list_display = ('eventType','requestBody','created_at')
    readonly_fields = ('created_at',)

# SubscriptionPayments Model Admin.
class SubscriptionPaymentAdmin(admin.ModelAdmin):
    search_fields = ('id','stripe_date', 'paymentType', 'order__id','subscription__id','event__id','stripe_payment_intent')
    fields = ('paymentType','order','subscription','event','stripe_payment_intent','stripe_date')    
    list_display = ('paymentType','order','subscription','event','stripe_payment_intent','stripe_date')    
    readonly_fields = ('stripe_date',)

# Subscription Model Admin.
class SubscriptionAdmin(admin.ModelAdmin):
    search_fields = ('id', 'order__id','stripe_id','created_at')
    fields = ('order','stripe_id','created_at')       
    list_display = ('order','stripe_id','created_at')       
    readonly_fields = ('created_at',)

admin.site.register(Events, EventAdmin)    
admin.site.register(SubscriptionPayments, SubscriptionPaymentAdmin)    
admin.site.register(Subscription, SubscriptionAdmin)    
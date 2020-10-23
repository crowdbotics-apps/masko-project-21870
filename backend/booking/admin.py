from django.contrib import admin
from .models import BookingTransaction, Message, Rating

admin.site.register(BookingTransaction)
admin.site.register(Rating)
admin.site.register(Message)

# Register your models here.

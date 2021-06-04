from django.db import models

class RecurringOrderManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_recurring=True)

class NoRecurrOrderManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_recurring=False)        


# Order Model
class Order(models.Model):

    objects = models.Manager()
    recurring_objects = RecurringOrderManager()
    normal_objects = NoRecurrOrderManager()

    PENDING = 'PN'
    PAID = 'PD'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (PAID, 'Paid'),
    ]

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

    subtotal_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    ship_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )
    
    tax_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )
    

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )
    is_recurring = models.BooleanField(default=False)
    
    status = models.CharField(
        max_length=2,
        choices=STATUS_CHOICES,
        default=PENDING,
    )

    owner = models.ForeignKey('users.User', on_delete=models.CASCADE, null=True, default=None)

    def __str__ (self):
        return 'Order #{} - ({})'.format( self.id, self.owner.email )


# Product Model
class Product(models.Model):
    
    
    product = models.ForeignKey('service.Product', on_delete=models.CASCADE, null=True, default=None )
    service = models.ForeignKey('service.Service', on_delete=models.CASCADE, null=True, default=None )
    pet = models.ForeignKey('pet.Pet', on_delete=models.CASCADE, null=True, default=None )
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True, default=None)
    
    pType = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    quantity = models.IntegerField(default=1)

    unit_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    timeOption = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )



    date = models.DateTimeField(
        null=True,
        blank=True,
    )

    time = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    order_every = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    notes = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    stripe_order_id = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )

    def __str__ (self):
        return '{}'.format( 
                                'Product' if self.product_id is not None else 'Service'  )


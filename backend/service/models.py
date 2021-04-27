from django.db import models

from pet.models import PetType

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
    

    def __str__ (self):
        return self.name_es

  
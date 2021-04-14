from django.db import models
from users.models import User

# Breed Type Model.
class BreedType(models.Model):
    
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    sort = models.IntegerField(default=0)

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )

    def __str__ (self):
        return self.name


# Pet Type Model.
class PetType(models.Model):
    
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )

    sort = models.IntegerField(default=0)

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    last_updated = models.DateTimeField(
        auto_now=True,
    )

    def __str__ (self):
        return self.name



# Pet Model
class Pet(models.Model):

    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    age = models.DecimalField(max_digits=5,decimal_places=2, default=0.00)
    
    pet_type = models.ForeignKey(PetType, on_delete=models.CASCADE)

    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    breed = models.ForeignKey(BreedType, on_delete=models.CASCADE)

    photo = models.CharField(
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
        return self.name

   
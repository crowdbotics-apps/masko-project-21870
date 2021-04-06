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



# Pet Model
class Pet(models.Model):

    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    age = models.IntegerField()
    
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

   
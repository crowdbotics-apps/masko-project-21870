# Generated by Django 2.2.20 on 2021-05-21 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment_stripe', '0013_subscriptionpayments_paymenttype'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='stripe_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]

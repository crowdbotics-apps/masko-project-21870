# Generated by Django 2.2.20 on 2021-05-21 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment_stripe', '0014_events_stripe_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscriptionpayments',
            name='date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]

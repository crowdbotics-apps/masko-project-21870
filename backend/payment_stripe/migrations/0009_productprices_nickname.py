# Generated by Django 2.2.20 on 2021-05-06 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment_stripe', '0008_productprices_recurring_interval'),
    ]

    operations = [
        migrations.AddField(
            model_name='productprices',
            name='nickname',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
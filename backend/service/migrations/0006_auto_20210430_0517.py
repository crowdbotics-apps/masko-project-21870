# Generated by Django 2.2.20 on 2021-04-30 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0005_auto_20210426_0523'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='stripe_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='service',
            name='stripe_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
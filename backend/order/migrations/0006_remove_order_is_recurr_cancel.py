# Generated by Django 2.2.20 on 2021-06-01 09:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0005_order_is_recurr_cancel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='is_recurr_cancel',
        ),
    ]

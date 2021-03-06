# Generated by Django 2.2.20 on 2021-04-12 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('s_card_id', models.CharField(blank=True, max_length=255, null=True)),
                ('address', models.CharField(blank=True, max_length=255, null=True)),
                ('country', models.CharField(blank=True, max_length=255, null=True)),
                ('brand', models.CharField(blank=True, max_length=255, null=True)),
                ('cvc_check', models.CharField(blank=True, max_length=255, null=True)),
                ('dynamic_last4', models.IntegerField(blank=True, max_length=5, null=True)),
                ('exp_month', models.IntegerField(blank=True, max_length=2, null=True)),
                ('exp_year', models.IntegerField(blank=True, max_length=5, null=True)),
                ('fingerprint', models.CharField(blank=True, max_length=20, null=True)),
                ('last4', models.CharField(blank=True, max_length=5, null=True)),
                ('funding', models.CharField(blank=True, max_length=5, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]

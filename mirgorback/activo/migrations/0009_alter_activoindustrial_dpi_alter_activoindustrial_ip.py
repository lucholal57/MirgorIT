# Generated by Django 4.0.3 on 2022-03-18 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activo', '0008_remove_activoindustrial_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activoindustrial',
            name='dpi',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='activoindustrial',
            name='ip',
            field=models.IntegerField(blank=True),
        ),
    ]

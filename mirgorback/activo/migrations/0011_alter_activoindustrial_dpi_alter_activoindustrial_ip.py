# Generated by Django 4.0.3 on 2022-03-18 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activo', '0010_alter_activoindustrial_dpi_alter_activoindustrial_ip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activoindustrial',
            name='dpi',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='activoindustrial',
            name='ip',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
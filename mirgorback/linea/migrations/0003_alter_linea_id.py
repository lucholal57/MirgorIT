# Generated by Django 4.0.3 on 2022-03-10 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('linea', '0002_alter_linea_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='linea',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
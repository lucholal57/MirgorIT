# Generated by Django 4.0.3 on 2022-03-10 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('linea', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='linea',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
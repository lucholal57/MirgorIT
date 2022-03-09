# Generated by Django 4.0.3 on 2022-03-08 19:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('activo', '0003_alter_activo_numero_serie'),
    ]

    operations = [
        migrations.CreateModel(
            name='Locacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=15)),
                ('activo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='activo.activo')),
            ],
        ),
    ]
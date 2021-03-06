# Generated by Django 4.0.3 on 2022-03-16 10:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locacion', '0003_remove_locacion_activo'),
        ('activo', '0005_alter_activo_descripcion_alter_activo_fabricante_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActivoGeneral',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inventario', models.IntegerField()),
                ('descipcion', models.CharField(max_length=50)),
                ('marca', models.CharField(max_length=50)),
                ('modelo', models.CharField(max_length=50)),
                ('serie', models.CharField(max_length=50)),
                ('costo', models.IntegerField()),
                ('estado', models.CharField(max_length=50)),
                ('fecha_mantenimiento', models.DateField()),
                ('locacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locacion.locacion')),
            ],
        ),
        migrations.CreateModel(
            name='ActivoIndustrial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inventario', models.IntegerField()),
                ('descripcion', models.CharField(max_length=100)),
                ('marca', models.CharField(max_length=50)),
                ('modelo', models.CharField(max_length=50)),
                ('serie', models.CharField(max_length=50)),
                ('hostname', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50)),
                ('dpi', models.IntegerField()),
                ('ip', models.IntegerField()),
                ('costo', models.IntegerField()),
                ('estado', models.CharField(max_length=50)),
                ('fecha_mantenimiento', models.DateField()),
                ('locacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locacion.locacion')),
            ],
        ),
        migrations.CreateModel(
            name='ActivoStandar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inventario', models.IntegerField()),
                ('descripcion', models.CharField(max_length=50)),
                ('marca', models.CharField(max_length=50)),
                ('modelo', models.CharField(max_length=50)),
                ('serie', models.CharField(max_length=50)),
                ('hostname', models.CharField(max_length=50)),
                ('ip', models.IntegerField()),
                ('mac', models.CharField(max_length=50)),
                ('area', models.CharField(max_length=50)),
                ('fecha_mantenimiento', models.DateField()),
                ('costo', models.IntegerField()),
                ('estado', models.CharField(max_length=50)),
                ('locacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locacion.locacion')),
            ],
        ),
        migrations.CreateModel(
            name='Celular',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inventario', models.IntegerField()),
                ('imei', models.IntegerField()),
                ('marca', models.CharField(max_length=50)),
                ('modelo', models.CharField(max_length=50)),
                ('tag', models.CharField(max_length=100)),
                ('costo', models.IntegerField()),
                ('estado', models.CharField(max_length=50)),
                ('fecha_entrega', models.DateField()),
                ('locacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locacion.locacion')),
            ],
        ),
        migrations.CreateModel(
            name='Notebook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inventario', models.IntegerField()),
                ('marca', models.CharField(max_length=50)),
                ('modelo', models.CharField(max_length=50)),
                ('serie', models.CharField(max_length=50)),
                ('hostname', models.CharField(max_length=50)),
                ('tag', models.CharField(max_length=100)),
                ('costo', models.IntegerField()),
                ('estado', models.CharField(max_length=50)),
                ('fecha_entrega', models.DateField()),
                ('locacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='locacion.locacion')),
            ],
        ),
        migrations.DeleteModel(
            name='Activo',
        ),
    ]

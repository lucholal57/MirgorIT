# Generated by Django 4.0.3 on 2022-03-21 14:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0002_alter_usuario_correo'),
        ('activo', '0014_rename_descipcion_activogeneral_descripcion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activonotebook',
            name='usuario',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='usuario.usuario'),
        ),
    ]

from django.db import models
from django.forms import IntegerField

# Create your models here.
class Activo(models.Model):
    numero_inventario = models.CharField(max_length=30)
    numero_serie = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    estado = models.CharField(max_length=50)
    hostname = models.CharField(max_length=30)
    tipo = models.CharField(max_length=30)
    fabricante = models.CharField(max_length=30)
    modelo = models.CharField(max_length=30)
    unidad_negocio = models.CharField(max_length=30)
    planta = models.CharField(max_length=30)

    def __str__(self):
        return f'Activo : {self.numero_inventario} : {self.descripcion}'


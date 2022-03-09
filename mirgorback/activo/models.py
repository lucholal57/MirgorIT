from django.db import models
from django.forms import IntegerField

# Create your models here.
class Activo(models.Model):
    numero_inventario = models.CharField(max_length=10)
    numero_serie = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=50)
    estado = models.CharField(max_length=50)
    hostname = models.CharField(max_length=10)
    tipo = models.CharField(max_length=10)
    fabricante = models.CharField(max_length=10)
    modelo = models.CharField(max_length=10)
    unidad_negocio = models.CharField(max_length=10)
    planta = models.CharField(max_length=10)

    def __str__(self):
        return f'Activo : {self.numero_inventario} : {self.descripcion}'


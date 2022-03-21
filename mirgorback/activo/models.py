from django.db import models
from django.forms import IntegerField

from locacion.models import Locacion
from usuario.models import Usuario
from linea_telefonica.models import LineaTelefonica

# Create your models here.
class ActivoIndustrial(models.Model):
    inventario = models.IntegerField()
    descripcion = models.CharField(max_length=100)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    serie = models.CharField(max_length=50)
    hostname = models.CharField(max_length=50)
    dpi = models.CharField(max_length=20,blank=True, null=True)
    ip = models.CharField(max_length=20,blank=True, null=True)
    costo = models.IntegerField()
    estado = models.CharField(max_length=50)
    fecha_mantenimiento = models.DateField()
    
    #Forenkey
    locacion = models.ForeignKey(Locacion, on_delete=models.CASCADE )

    def __str__(self):
        return f'Activo : {self.inventario} - {self.marca} - {self.modelo}'

class ActivoNotebook(models.Model):
    inventario = models.IntegerField()
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    serie = models.CharField(max_length=50)
    hostname = models.CharField(max_length=50)
    tag = models.CharField(max_length=100)
    costo = models.IntegerField()
    estado = models.CharField(max_length=50)
    fecha_entrega = models.DateField()

    #Forenkey usuario y ubicacion
    locacion = models.ForeignKey(Locacion, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE,null=True)

    def __str__(self):
        return f'Notebook: {self.inventario} - {self.marca} - {self.modelo} '

class ActivoCelular(models.Model):
    inventario = models.IntegerField()
    imei = models.IntegerField()
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    tag = models.CharField(max_length=100)
    costo = models.IntegerField()
    estado = models.CharField(max_length=50)
    fecha_entrega = models.DateField()
    
    #Forenkey usuario ubicacion y linea telefonica
    locacion = models.ForeignKey(Locacion, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True)
    linea_telefonica = models.ForeignKey(LineaTelefonica, on_delete=models.CASCADE,null=True)

    def __str__(self):
        return f'Celular: {self.imei} - {self.marca} - {self.modelo} - '

class ActivoGeneral(models.Model):
    inventario = models.IntegerField()
    descripcion = models.CharField(max_length=50)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    serie = models.CharField(max_length=50)
    costo = models.IntegerField()
    estado = models.CharField(max_length=50)
    fecha_mantenimiento = models.DateField()

    #Forenkey ubicacion
    locacion = models.ForeignKey(Locacion, on_delete=models.CASCADE)

class ActivoStandar(models.Model):
    inventario = models.IntegerField()
    descripcion = models.CharField(max_length=50)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    serie = models.CharField(max_length=50)
    hostname = models.CharField(max_length=50)
    ip = models.IntegerField()
    mac = models.CharField(max_length=50)
    area = models.CharField(max_length=50)
    fecha_mantenimiento = models.DateField()
    costo = models.IntegerField()
    estado = models.CharField(max_length=50)

    #Forenkey usuario y ubicacion
    locacion = models.ForeignKey(Locacion, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True)





from django.db import models

# Create your models here.
class Locacion(models.Model):
    sitio = models.CharField(max_length=50)
    area = models.CharField(max_length=50)
    localizacion = models.CharField(max_length=50)
    puesto = models.CharField(max_length=50)
    

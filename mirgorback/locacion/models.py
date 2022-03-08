from django.db import models

from mirgorback.activo.models import Activo

# Create your models here.
class Locacion(models.Model):
    nombre = models.CharField(max_length=15)
    #ForenKey
    activo = models.ForeignKey(Activo, on_delete=models.CASCADE)
    
from django.db import models

from activo.models import Activo

# Create your models here.
class Linea(models.Model):
    nombre = models.CharField(max_length=10)
    puesto = models.CharField(max_length=10)
    #Forenkey
    activo = models.ForeignKey(Activo, on_delete=models.CASCADE)

def __str__(self):
    return f'Linea: {self.nombre} : {self.puesto} : {self.activo}'

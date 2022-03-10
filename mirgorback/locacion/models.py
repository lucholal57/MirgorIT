from django.db import models

from activo.models import Activo

# Create your models here.
class Locacion(models.Model):
    nombre = models.CharField(max_length=50)
    #ForenKey
    activo = models.ForeignKey(Activo, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Locacion: {self.nombre} : {self.activo}'
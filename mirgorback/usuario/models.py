from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length=50)
    correo = models.CharField(max_length=50)
    area = models.CharField(max_length=50)
    posicion = models.CharField(max_length=50)

def __str__(self):
    return f'Usuario: {self.nombre} - {self.area} - {self.posicion}'
    

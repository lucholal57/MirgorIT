from django.db import models
from django.forms import IntegerField

# Create your models here.
class LineaTelefonica(models.Model):
    numero = models.IntegerField()
    plan = models.CharField(max_length=100)

def __str__(self):
    return f'Linea Celular: {self.numero} - {self.plan} ' 

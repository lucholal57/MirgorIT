from dataclasses import field
from rest_framework import serializers

from mirgorback.activo.models import Activo
from mirgorback.activo.serializer import ActivoSerializer
from .models import Locacion

class LocacionSerializer(serializers.ModelSerializer):
    """Serializador de Locaciones para listar"""
    class Meta:
        model = Locacion
        fields = '__all__'

class LocacionPostPutSerializer(serializers.ModelSerializer):
    """Serializador de locaciones para crear y actualizar"""
    activo = ActivoSerializer(read_only = True)
    class Meta:
        model = Locacion
        fields = '__all__'
        depth = 2
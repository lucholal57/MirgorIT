from rest_framework import serializers

from activo.models import Activo
from activo.serializer import ActivoSerializer
from linea.models import Linea

class LineaSerializer(serializers.ModelSerializer):
    """Serializador de Linea para listar"""
    activo = ActivoSerializer(read_only=True)
    class Meta:
        model = Linea
        fields = '__all__'
        depth = 2

class LineaPostPutSerializer(serializers.ModelSerializer):
    """Serializador de linea para crear y editar"""
    class Meta:
        model = Linea
        fields = '__all__'
       
from rest_framework import serializers

from activo.models import Activo
from activo.serializer import ActivoSerializer
from linea.models import Linea

class LineaSerializer(serializers.ModelSerializer):
    """Serializador de Linea para listar"""
    class Meta:
        model = Linea
        fields = '__all__'

class LineaPostPutSerializer(serializers.ModelSerializer):
    """Serializador de linea para crear y editar"""
    activo = ActivoSerializer(read_only=True)
    class Meta:
        model = Linea
        fields = '__all__'
        depth = 2
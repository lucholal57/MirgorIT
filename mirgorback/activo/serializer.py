from rest_framework import serializers
from .models import ActivoGeneral, ActivoIndustrial, ActivoStandar, Celular, Notebook
from locacion.serializer import LocacionSerializer
from usuario.serializer import UsuarioSerializer
from linea_telefonica.serializer import LineaTelefonicaSerializer

class ActivoIndustrialSerializer(serializers.ModelSerializer):
    """Serializador de Activo"""
    locacion = LocacionSerializer(read_only=True)
    class Meta:
        model = ActivoIndustrial
        fields = '__all__'
        depth = 2

class ActivoIndustrialPostPutSerializer(serializers.ModelSerializer):
    """Serializador de activos industriales con ubicaciones"""
    class Meta:
        model = ActivoIndustrial
        fields = '__all__'

class ActivoCelularSerializer(serializers.ModelSerializer):
    """Serializador de Activo"""
    locacion = LocacionSerializer(read_only=True)
    usuario = UsuarioSerializer(read_only=True)
    linea_telefonica = LineaTelefonicaSerializer(read_only=True)
    class Meta:
        model = Celular
        fields = '__all__'
        depth = 2

class ActivoCelularPostPutSerializer(serializers.ModelSerializer):
    """Serializador de activos industriales con ubicaciones"""
    class Meta:
        model = Celular
        fields = '__all__'

class ActivoNotebookSerializer(serializers.ModelSerializer):
    """Serializador de Activo"""
    locacion = LocacionSerializer(read_only=True)
    usuario = UsuarioSerializer(read_only=True)
    class Meta:
        model = Notebook
        fields = '__all__'
        depth = 2

class ActivoNotebookPostPutSerializer(serializers.ModelSerializer):
    """Serializador de activos industriales con ubicaciones"""
    class Meta:
        model = Notebook
        fields = '__all__'

class ActivoGeneralSerializer(serializers.ModelSerializer):
    """Serializador de Activo"""
    locacion = LocacionSerializer(read_only=True)
    class Meta:
        model = ActivoGeneral
        fields = '__all__'
        depth = 2

class ActivoGeneralPostPutSerializer(serializers.ModelSerializer):
    """Serializador de activos industriales con ubicaciones"""
    class Meta:
        model = ActivoGeneral
        fields = '__all__'

class ActivoStandarSerializer(serializers.ModelSerializer):
    """Serializador de Activo"""
    locacion = LocacionSerializer(read_only=True)
    usuario = UsuarioSerializer(read_only=True)
    class Meta:
        model = ActivoStandar
        fields = '__all__'
        depth = 2

class ActivoStandarPostPutSerializer(serializers.ModelSerializer):
    """Serializador de activos industriales con ubicaciones"""
    class Meta:
        model = ActivoStandar
        fields = '__all__'
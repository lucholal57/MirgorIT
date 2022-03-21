from rest_framework import serializers
from .models import Locacion

class LocacionSerializer(serializers.ModelSerializer):
    """Serializador de locaciones"""
    
    class Meta:
        model = Locacion
        fields = '__all__'
        
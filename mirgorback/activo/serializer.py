from rest_framework import serializers
from .models import Activo

class ActivoSerializer(serializers.ModelSerializer):
    """Serializador de Activo"""
    class Meta:
        model = Activo
        fields = '__all__'
from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    """Serializador de usuarios"""
    class Meta:
        model = Usuario
        fields = '__all__'
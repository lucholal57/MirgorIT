from email import message
from urllib import request
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Activo
from .serializer import ActivoSerializer

# Create your views here.
# VIEW DE ACTIVOS
@api_view(['GET' , 'POST'])

def ActivoListado(request):
    #Listado
    if request.method == 'GET':
        activo = Activo.objects.all().order_by('id')
        serializer = ActivoSerializer(activo, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    #Create
    elif request.method == 'POST':
        serializer = ActivoSerializer(data = request.data)
        #Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funciones para la edicion y eliminacion, pasando el ID
@api_view(['GET','PUT','DELETE'])

def ActivoBuscarPorId(request, pk=None):
    
    #Consulta para obtener el listado sin FIRST
    activo = Activo.objects.filter(id=pk)
    #Validacion
    if activo:
        if request.method == 'GET':
            serializer = ActivoSerializer(activo, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            #Consulta para obtener el listado con FIRST
            activo_edicion = Activo.objects.filter(id=pk).first()
            serializer = ActivoSerializer(activo_edicion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            activo.delete();
            return Response({'message':'Activo eliminado correctamente'}, status=status.HTTP_200_OK)
    #Validacion si no se encontro el Activo
    return Response({'message': 'No se encontro Activo'}, status=status.HTTP_400_BAD_REQUEST)

    #Busqueda de Activo por inventario
@api_view(['GET'])

def BusquedaActivoInventario(request, numero_inventario):
    activo = Activo.objects.filter(numero_inventario = numero_inventario)
    serializer = ActivoSerializer(activo, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)
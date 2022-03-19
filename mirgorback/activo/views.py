from email import message
from urllib import request
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import ActivoGeneral, ActivoIndustrial, ActivoStandar, ActivoCelular, ActivoNotebook
from .serializer import (ActivoIndustrialPostPutSerializer, ActivoIndustrialSerializer, ActivoCelularSerializer,
ActivoCelularPostPutSerializer,ActivoNotebookSerializer,ActivoNotebookPostPutSerializer, ActivoGeneralSerializer,ActivoGeneralPostPutSerializer,
ActivoStandarSerializer,ActivoStandarPostPutSerializer)

# Create your views here.

# VIEW DE Activo insdustrial
@api_view(['GET' , 'POST'])

def ActivoIndustrialListado(request):
    #Listado
    if request.method == 'GET':
        activo = ActivoIndustrial.objects.all().order_by('id')
        serializer = ActivoIndustrialSerializer(activo, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    #Create
    elif request.method == 'POST':
        serializer = ActivoIndustrialPostPutSerializer(data = request.data)
        #Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funciones para la edicion y eliminacion, pasando el ID
@api_view(['GET','PUT','DELETE'])

def ActivoIndustrialBuscarPorId(request, pk=None):
    
    #Consulta para obtener el listado sin FIRST
    activo = ActivoIndustrial.objects.filter(id=pk)
    #Validacion
    if activo:
        if request.method == 'GET':
            serializer = ActivoIndustrialPostPutSerializer(activo, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            #Consulta para obtener el listado con FIRST
            activo_edicion = ActivoIndustrial.objects.filter(id=pk).first()
            serializer = ActivoIndustrialPostPutSerializer(activo_edicion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            activo.delete();
            return Response({'message':'ActivoIndustrial eliminado correctamente'}, status=status.HTTP_200_OK)
    #Validacion si no se encontro el ActivoIndustrial
    return Response({'message': 'No se encontro ActivoIndustrial'}, status=status.HTTP_400_BAD_REQUEST)

    #Busqueda de ActivoIndustrial por inventario
@api_view(['GET'])

def BusquedaActivoIndustrialInventario(request, numero_inventario):
    activo = ActivoIndustrial.objects.filter(numero_inventario = numero_inventario)
    serializer = ActivoIndustrialSerializer(activo, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)

        #Busqueda de ActivoIndustrial por fabricante para asociar a linea
@api_view(['GET'])

def BusquedaActivoIndustrialFabricante(request, fabricante):
    activo = ActivoIndustrial.objects.filter(fabricante__icontains = fabricante)
    serializer = ActivoIndustrialSerializer(activo, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)


# VIEW DE Activo Celular
@api_view(['GET' , 'POST'])

def ActivoCelularListado(request):
    #Listado
    if request.method == 'GET':
        celular = ActivoCelular.objects.all().order_by('id')
        serializer = ActivoCelularSerializer(celular, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    #Create
    elif request.method == 'POST':
        serializer = ActivoCelularPostPutSerializer(data = request.data)
        #Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funciones para la edicion y eliminacion, pasando el ID
@api_view(['GET','PUT','DELETE'])

def ActivoCelularBuscarPorId(request, pk=None):
    
    #Consulta para obtener el listado sin FIRST
    celular = ActivoCelular.objects.filter(id=pk)
    #Validacion
    if celular:
        if request.method == 'GET':
            serializer = ActivoCelularPostPutSerializer(celular, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            #Consulta para obtener el listado con FIRST
            celular_edicion = ActivoCelular.objects.filter(id=pk).first()
            serializer = ActivoCelularPostPutSerializer(celular_edicion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            celular.delete();
            return Response({'message':'Celular eliminado correctamente'}, status=status.HTTP_200_OK)
    #Validacion si no se encontro el ActivoIndustrial
    return Response({'message': 'No se encontro Celular'}, status=status.HTTP_400_BAD_REQUEST)


# VIEW DE Activo Notebook
@api_view(['GET' , 'POST'])

def ActivoNotebookListado(request):
    #Listado
    if request.method == 'GET':
        notebook = ActivoNotebook.objects.all().order_by('id')
        serializer = ActivoNotebookSerializer(notebook, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    #Create
    elif request.method == 'POST':
        serializer = ActivoNotebookPostPutSerializer(data = request.data)
        #Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funciones para la edicion y eliminacion, pasando el ID
@api_view(['GET','PUT','DELETE'])

def ActivoNotebookBuscarPorId(request, pk=None):
    
    #Consulta para obtener el listado sin FIRST
    notebook = ActivoNotebook.objects.filter(id=pk)
    #Validacion
    if notebook:
        if request.method == 'GET':
            serializer = ActivoNotebookPostPutSerializer(notebook, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            #Consulta para obtener el listado con FIRST
            notebook_edicion = ActivoNotebook.objects.filter(id=pk).first()
            serializer = ActivoNotebookPostPutSerializer(notebook_edicion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            notebook.delete();
            return Response({'message':'Notebook eliminado correctamente'}, status=status.HTTP_200_OK)
    #Validacion si no se encontro el ActivoIndustrial
    return Response({'message': 'No se encontro Notebook'}, status=status.HTTP_400_BAD_REQUEST)

      
# VIEW DE Activo General
@api_view(['GET' , 'POST'])

def ActivoGeneralListado(request):
    #Listado
    if request.method == 'GET':
        activo_general = ActivoGeneral.objects.all().order_by('id')
        serializer = ActivoGeneralSerializer(activo_general, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    #Create
    elif request.method == 'POST':
        serializer = ActivoGeneralPostPutSerializer(data = request.data)
        #Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funciones para la edicion y eliminacion, pasando el ID
@api_view(['GET','PUT','DELETE'])

def ActivoGeneralBuscarPorId(request, pk=None):
    
    #Consulta para obtener el listado sin FIRST
    activo_general = ActivoGeneral.objects.filter(id=pk)
    #Validacion
    if activo_general:
        if request.method == 'GET':
            serializer = ActivoGeneralPostPutSerializer(activo_general, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            #Consulta para obtener el listado con FIRST
            activo_general_edicion = ActivoGeneral.objects.filter(id=pk).first()
            serializer = ActivoGeneralPostPutSerializer(activo_general_edicion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            activo_general.delete();
            return Response({'message':'Activo eliminado correctamente'}, status=status.HTTP_200_OK)
    #Validacion si no se encontro el ActivoIndustrial
    return Response({'message': 'No se encontro Activo'}, status=status.HTTP_400_BAD_REQUEST)

# VIEW DE Activo Standar
@api_view(['GET' , 'POST'])

def ActivoStandarListado(request):
    #Listado
    if request.method == 'GET':
        activo_standar = ActivoStandar.objects.all().order_by('id')
        serializer = ActivoStandarSerializer(activo_standar, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    #Create
    elif request.method == 'POST':
        serializer = ActivoStandarPostPutSerializer(data = request.data)
        #Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funciones para la edicion y eliminacion, pasando el ID
@api_view(['GET','PUT','DELETE'])

def ActivoStandarBuscarPorId(request, pk=None):
    
    #Consulta para obtener el listado sin FIRST
    activo_standar = ActivoStandar.objects.filter(id=pk)
    #Validacion
    if activo_standar:
        if request.method == 'GET':
            serializer = ActivoStandarPostPutSerializer(activo_standar, many = True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            #Consulta para obtener el listado con FIRST
            activo_standar_edicion = ActivoStandar.objects.filter(id=pk).first()
            serializer = ActivoStandarPostPutSerializer(activo_standar_edicion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            activo_standar.delete();
            return Response({'message':'Activo eliminado correctamente'}, status=status.HTTP_200_OK)
    #Validacion si no se encontro el ActivoIndustrial
    return Response({'message': 'No se encontro Activo'}, status=status.HTTP_400_BAD_REQUEST)

      

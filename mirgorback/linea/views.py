from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from linea.models import Linea
from linea.serializer import LineaSerializer, LineaPostPutSerializer

# Create your views here.
@api_view(['GET','POST'])

def LineaListado(request):
    #List
    if request.method == 'GET':
        linea = Linea.objects.all().order_by('id')
        serializer = LineaSerializer(linea,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    #Register
    elif request.method == 'POST':
        serializer = LineaPostPutSerializer(data=request.data)
        #Validar
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

#Busqueda de linea por id para la edicion y eliminacion
@api_view(['GET','PUT','DELETE'])

def LineaBuscarPorId(request,pk=None):
    #Busqueda sin FIRST
    linea = Linea.objects.filter('id')
    #Validacion
    if linea:
        if request.method == 'GET':
            serializer = LineaPostPutSerializer(linea,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        #Update
        elif request.method == 'PUT':
            #Busqueda con FIRST
            linea_edicion = Linea.objects.filter('id').first()
            serializer = LineaPostPutSerializer(linea_edicion,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        #Delete
        elif request.method == 'DELETE':
            linea.delete()
            return Response({'message' : 'Linea Elimnada con exito'},status=status.HTTP_200_OK)
    #Si el objeto no existe retornamos un mensaje
    return Response({'message' : 'No se ha encontrado una linea con esos datos'},status=status.HTTP_200_OK)


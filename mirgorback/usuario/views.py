from urllib import request
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from usuario.models import Usuario
from usuario.serializer import UsuarioSerializer

# Create your views here.
@api_view(['GET','POST'])

def UsuarioListado(request):
    #List
    if request.method == 'GET':
        usuario = Usuario.objects.all().order_by('id')
        serializer = UsuarioSerializer(usuario, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    #Create
    elif request.method == 'POST':
        serializer = UsuarioSerializer(data = request.data)
        #Validacion
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funciones de edicion y eliminacion pasando el ID
@api_view(['GET','PUT','DELETE'])
def UsuarioBuscarPorId(request, pk=None):
    #Consulta para tener el listado sin FIRST
    usuario = Usuario.objects.filter(id=pk)
    #Validacion
    if usuario : 
        if request.method == 'GET':
            serializer = UsuarioSerializer(usuario, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PUT':
            #Consulta para obtener el objeto con first
            usuario_edicion = Usuario.objects.filter(id=pk).first()
            serializer = UsuarioSerializer(usuario_edicion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            usuario.delete()
            return Response({'message':'Usuario eliminado correctamente'}, status=status.HTTP_200_OK)
 #Validacion si no se encontro el ActivoIndustrial
    return Response({'message': 'No se encontro ActivoIndustrial'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])

def BusquedaUsuarioPorNombre(request,nombre):
    usuario = Usuario.objects.filter(nombre__icontains = nombre)
    serializer = UsuarioSerializer(usuario, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)

            



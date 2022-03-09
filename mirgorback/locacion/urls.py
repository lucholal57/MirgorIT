from django.urls import path
from locacion.views import LocacionListado,LocacionBuscarPorId

urlpatters = [
    #Rutas para locaciones
    path('locacion',LocacionListado),
    path('locacion/<int:pk>',LocacionBuscarPorId)
]
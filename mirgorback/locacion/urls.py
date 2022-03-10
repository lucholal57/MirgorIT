from django.urls import path
from locacion.views import LocacionListado,LocacionBuscarPorId,BusquedaLocacionNombre

urlpatterns = [
    #Rutas para locaciones
    path('locacion',LocacionListado),
    path('locacion/<int:pk>',LocacionBuscarPorId),
    path('locacion/buscar/<str:nombre>',BusquedaLocacionNombre)
]
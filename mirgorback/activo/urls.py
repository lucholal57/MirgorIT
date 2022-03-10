from django.urls import path
from .views import ActivoListado, ActivoBuscarPorId,BusquedaActivoInventario

urlpatterns = [
    #Rutas Activos
    path('activo', ActivoListado),
    path('activo/<int:pk>', ActivoBuscarPorId),
    path('activo/buscar/<str:numero_inventario>',BusquedaActivoInventario)
    
]

from django.urls import path
from .views import ActivoListado, ActivoBuscarPorId,BusquedaActivoInventario,BusquedaActivoFabricante

urlpatterns = [
    #Rutas Activos
    path('activo', ActivoListado),
    path('activo/<int:pk>', ActivoBuscarPorId),
    path('activo/buscar/<str:numero_inventario>',BusquedaActivoInventario),
    path('activo/buscar/fabricante/<str:fabricante>',BusquedaActivoFabricante),

    
]

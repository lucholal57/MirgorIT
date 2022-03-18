from django.urls import path
from .views import (ActivoIndustrialListado, ActivoIndustrialBuscarPorId,
BusquedaActivoIndustrialInventario,BusquedaActivoIndustrialFabricante,
ActivoCelularListado,ActivoCelularBuscarPorId,ActivoNotebookListado,
ActivoNotebookBuscarPorId,ActivoGeneralListado,ActivoGeneralBuscarPorId,
ActivoStandarListado,ActivoStandarBuscarPorId)

urlpatterns = [
    #Rutas Activos industriales
    path('activo', ActivoIndustrialListado),
    path('activo/<int:pk>', ActivoIndustrialBuscarPorId),
    path('activo/buscar/<str:numero_inventario>',BusquedaActivoIndustrialInventario),
    path('activo/buscar/fabricante/<str:fabricante>',BusquedaActivoIndustrialFabricante),
    #Rutas Activos Celulares
    path('celular', ActivoCelularListado),
    path('celular/<int:pk>',ActivoCelularBuscarPorId),
    #Rutas para Activos Notebook
    path('notebook',ActivoNotebookListado),
    path('notebook/<int:pk>',ActivoNotebookBuscarPorId),
    #Rutas Activo General
    path('activo_general',ActivoGeneralListado),
    path('activo_general/<int:pk>',ActivoGeneralBuscarPorId),
    #Rutas Activo Standar
    path('activo_standar',ActivoStandarListado),
    path('activo_standar/<int:pk>',ActivoStandarBuscarPorId)


    
]

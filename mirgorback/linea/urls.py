from django.urls import path
from .views import LineaListado,LineaBuscarPorId,BusquedaLineaNombre

urlpatterns = [
    #Rutas para linea
    path('linea',LineaListado),
    path('linea/<int:pk>',LineaBuscarPorId),
    path('linea/buscar/<str:nombre>',BusquedaLineaNombre)
]
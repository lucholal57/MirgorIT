from django.urls import path
from linea.views import LineaListado,LineaBuscarPorId

urlpatters = [
    #Rutas para linea
    path('linea',LineaListado),
    path('linea/<int:pk>',LineaBuscarPorId)
]
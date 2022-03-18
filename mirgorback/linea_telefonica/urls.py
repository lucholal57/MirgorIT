from django.urls import path
from linea_telefonica.views import LineaTelefonicaListado, LineaTelefonicaBuscarPorId

urlpatterns = [
    #Rutas Linea Telefonica
    path('linea_telefonica', LineaTelefonicaListado),
    path('linea_telefonica/<int:pk>', LineaTelefonicaBuscarPorId)
]
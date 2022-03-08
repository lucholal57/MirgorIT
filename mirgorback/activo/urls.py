from django.urls import path
from .views import ActivoListado, ActivoBuscarPorId

urlpatterns = [
    #Rutas Activos
    path('activo', ActivoListado),
    path('activo/<int:pk>', ActivoBuscarPorId)
]

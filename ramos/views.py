from django.shortcuts import render, get_object_or_404
from .models import Ramos, Contenido
from django.http import JsonResponse
from django.forms.models import model_to_dict
import json


 
# Create your views here.

def index(request):
    return render(request, "index.html")


def ramo_query(request, value_id):
    ramos = Ramos.objects.filter(version=value_id) 
    return JsonResponse({"ramos_name" : list(ramos.values())})

def content_query(request, value_name):
    contenido = Contenido.objects.filter(curso=value_name)
    ramo = get_object_or_404(Ramos, id=value_name)
    nombre_ramo = ramo.nombre
    codigo_ramo = ramo.codigo
    return JsonResponse({"ramos_info": list(contenido.values()),
                         "nombre_ramo": nombre_ramo,
                         "codigo_ramo": codigo_ramo})


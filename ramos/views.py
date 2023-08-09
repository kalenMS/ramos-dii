from django.shortcuts import render, get_object_or_404
from .models import Ramos
from django.http import JsonResponse

 
# Create your views here.

def index(request):
    return render(request, "index.html")

def ramo_query(request, value_id):
    # get_object_or_404(Model, parametro = algo)
    ramos = get_object_or_404(Ramos, version=value_id)
    return JsonResponse({"ramos123" : ramos})


from django.shortcuts import render
from .models import Ramos
from django.http import JsonResponse
from django.forms.models import model_to_dict

 
# Create your views here.

def index(request):
    return render(request, "index.html")


def ramo_query(request, value_id):
    ramos = Ramos.objects.filter(version=value_id) 
    return JsonResponse({"ramos_info" : list(ramos.values())})



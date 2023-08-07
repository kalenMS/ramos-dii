from django.db import models

# Create your models here.

class Ramos(models.Model):
    codigo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=250)
    


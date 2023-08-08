from django.db import models

# Create your models here.

class Ramos(models.Model):
    codigo = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
 
    VERSION_CHOICES = [
        ('1', 'Malla V5'),
        ('0', 'Electivo')
    ]
    
    version = models.CharField(max_length=10, choices=VERSION_CHOICES, default='Malla V5')

from django.db import models

# Create your models here.

class Ramos(models.Model):
    codigo = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
 
    VERSION_CHOICES = [
        ('0', 'Malla V5'),
        ('1', 'Electivo'),
        ('2', 'Especialización')
    ]
    
    version = models.CharField(max_length=10, choices=VERSION_CHOICES, default='Malla V5')
    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.nombre, self.version)
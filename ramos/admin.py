from django.contrib import admin
from .models import Ramos
# Register your models here.

# admin.site.register(Ramos)

@admin.register(Ramos)
class RamosAdmin(admin.ModelAdmin):
    search_fields = ('codigo', 'nombre')
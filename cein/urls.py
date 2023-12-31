"""
URL configuration for cein project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ramos.views import index, ramo_query, content_query


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('ramo_query/<int:value_id>/',ramo_query, name='ramo_query'),
    path('content_query/<str:value_name>/', content_query, name='content_query')
]

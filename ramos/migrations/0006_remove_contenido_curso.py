# Generated by Django 4.2.4 on 2023-08-13 13:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ramos', '0005_contenido_curso'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contenido',
            name='curso',
        ),
    ]
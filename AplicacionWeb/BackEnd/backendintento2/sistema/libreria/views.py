from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def inicio(request):
    return render(request, 'pages/inicio.html')

def nosotros(request):
    return render(request, 'pages/nosotros.html')
def libros(request):
    return render(request, 'libros/index.html')
def crear(request):
    return render(request, 'libros/crear.html')
def editar(request):
    return render(request, 'libros/editar.html')
    
from django.db import models

# Create your models here.
class Libro(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=100, verbose_name='Titulo')
    imagen = models.ImageField(upload_to='imagenes/',null = True, verbose_name='Imagen')
    description = models.TextField(max_length=500, verbose_name='Descripcion')
    
    def __str__(self):
        fila = "Titulo: " + self.titulo + " - " + "Descripcion: " + self.description
        return fila
    
    def delete(self, user=None, keep_paterts=False):
        self.imagen.storage.delete(self.imagen.name)
        super().delete()
    
    
 
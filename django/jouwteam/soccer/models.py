from django.db import models
class registration(models.Model):
    username = models.CharField(max_length=200,default='False')
class inloggen(models.Model):
    username = models.CharField(max_length=200,default='False')
# Create your models here.


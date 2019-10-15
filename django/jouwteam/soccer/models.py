from django.db import models

class trainer(models.Model):
    gebruikersnaam = models.CharField(primary_key=True, max_length=200,default='False')
    emailadres = models.CharField(max_length=255)
    wachtwoord = models.CharField(max_length=32)
    teamcode = models.UUIDField(editable=False)

class spelerlogin(models.Model):
    emailadres = models.CharField(max_length=255)
    teamcode = models.CharField(max_length=200,default='False')

class speler(models.Model):
    id = models.UUIDField(editable=False, unique=True, primary_key=True)
    spelernummer = models.CharField(max_length=5)
    voornaam = models.CharField(max_length=255)
    achternaam = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

class aanwezigheid(speler):
    datum = models.DateTimeField('')
    aanwezig = models.BooleanField()

class tactieken(models.Model):
    pass

class agenda(models.Model):
    dag = models.TextField()
    beschrijving = models.CharField(max_length=255)
    starttijd = models.DateTimeField('starttijd')
    eindtijd = models.DateTimeField('eindtijd')

class notitie(models.Model):
    titel = models.CharField(max_length=255)
    notitie = models.TextField()

class oefeningen(models.Model):
    afbeelding = models.ImageField(blank=True, upload_to='jouwteam/images')
    titel = models.CharField(max_length=255)
    beschrijving = models.TextField()

class wedstrijduitslag(models.Model):
    thuis = models.CharField(max_length=255)
    uit = models.CharField(max_length=255)
    stand = models.CharField(max_length=25)
    verslag = models.TextField()




# Create your models here.


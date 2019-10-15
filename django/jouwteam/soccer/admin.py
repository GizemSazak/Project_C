from django.contrib import admin
from .models import trainer, spelerlogin, speler, aanwezigheid, tactieken, agenda, notitie, oefeningen, wedstrijduitslag


# Register your models here.
admin.site.register(trainer)
admin.site.register(spelerlogin)
admin.site.register(speler)
admin.site.register(aanwezigheid)
admin.site.register(tactieken)
admin.site.register(agenda)
admin.site.register(notitie)
admin.site.register(oefeningen)
admin.site.register(wedstrijduitslag)
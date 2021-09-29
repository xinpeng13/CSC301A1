from django.db import models

# Create your models here.


class Checkout(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    price = models.FloatField()

    def _str_(self):
        return self.name

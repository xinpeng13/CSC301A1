from django.contrib import admin

# Register your models here.
from .models import Checkout


class CheckoutAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price')

# Register your models here.


admin.site.register(Checkout, CheckoutAdmin)

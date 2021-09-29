from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import CheckoutSerializer
from .models import Checkout

# Create your views here.


class CheckoutView(viewsets.ModelViewSet):
    serializer_class = CheckoutSerializer
    queryset = Checkout.objects.all()

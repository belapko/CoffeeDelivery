from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import Product, ProductCategory
from .serializers import ProductCategorySerializer, ProductSerializer
from rest_framework.viewsets import ModelViewSet

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category', default=None)
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class ProductCategoryViewSet(ModelViewSet):
    serializer_class = ProductCategorySerializer
    queryset = ProductCategory.objects.all()

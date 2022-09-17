from rest_framework import serializers
from .models import ProductCategory, Product


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ('pk', 'title')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('pk', 'title', 'description', 'price', 'calories', 'weight', 'category', 'image', 'in_stock')

import django.contrib.auth.models
from django.db import models


class ProductCategory(models.Model):
    title = models.CharField('title', max_length=63, unique=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField('title', max_length=63)
    description = models.CharField('description', max_length=255, null=True, blank=True)
    price = models.IntegerField('price')
    calories = models.IntegerField('calories')
    weight = models.IntegerField('weight')
    category = models.ForeignKey(ProductCategory, on_delete=models.PROTECT, blank=True, null=True)
    image = models.ImageField(upload_to='products_images', blank=True, null=True)
    in_stock = models.BooleanField('in_stock', default=True)

    def __str__(self):
        return f'Category: {self.category} Title: {self.title}'

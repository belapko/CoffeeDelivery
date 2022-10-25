from rest_framework import serializers
from cart.models import ShoppingCart

class ShoppingCartModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = ('__all__')
from .models import ShoppingCart
from .serializers import ShoppingCartModelSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from django.core import serializers


class ShoppingCartViewSet(ModelViewSet):
    serializer_class = ShoppingCartModelSerializer
    queryset = ShoppingCart.objects.all()

    def get_queryset(self):
        queryset = ShoppingCart.objects.all()
        user_id = self.request.query_params.get('user_id', default=None)
        if user_id:
            queryset = queryset.filter(user=user_id)
        queryset[0].new_field = 'hello'
        return queryset

    @action(methods=['get'], detail=False, url_path='checkout/(?P<userId>[^/.]+)', url_name='checkout')
    def checkout(self, request, *args, **kwargs):
        queryset = ShoppingCart.objects.all()
        queryset = queryset.filter(user=kwargs.get('userId'))
        checkout_details = {
            'products' : queryset.values(),
            'total_sum' : sum([(item.quantity * item.product.price) for item in queryset]),
            'total_quantity' : sum([item.quantity for item in queryset])
        }
        return Response(status=status.HTTP_200_OK, data={'checkout_details': checkout_details})



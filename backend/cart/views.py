from .models import ShoppingCart
from .serializers import ShoppingCartModelSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from .models import ShoppingCart


class ShoppingCartViewSet(ModelViewSet):
    serializer_class = ShoppingCartModelSerializer
    queryset = ShoppingCart.objects.all()

    def create(self, request, queryset=queryset, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if queryset.filter(user=request.data['user'], product=request.data['product']):
            this_cart = ShoppingCart.objects.get(user=request.data['user'], product=request.data['product'])
            this_cart.quantity += int(request.data['quantity'])
            this_cart.save()
        else:
            self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    # def get_queryset(self):
    #     queryset = ShoppingCart.objects.all()
    #     user_id = self.request.query_params.get('user_id', default=None)
    #     if user_id:
    #         queryset = queryset.filter(user=user_id)
    #     queryset[0].new_field = 'hello'
    #     return queryset

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



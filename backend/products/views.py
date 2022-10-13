from .models import Product, ProductCategory
from .serializers import ProductCategorySerializer, ProductSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    # permission_classes = IsAuthenticated

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category', default=None)
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class ProductCategoryViewSet(ModelViewSet):
    serializer_class = ProductCategorySerializer
    queryset = ProductCategory.objects.all()

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from auth.views import LoginViewSet, RegistrationViewSet, RefreshViewSet
from products.views import ProductViewSet, ProductCategoryViewSet
from django.conf import settings
from django.conf.urls.static import static
from users.views import UserViewSet

router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('categories', ProductCategoryViewSet)
router.register('users', UserViewSet)

router.register('auth/login', LoginViewSet, basename='auth-login')
router.register('auth/register', RegistrationViewSet, basename='auth-register')
router.register('auth/refresh', RefreshViewSet, basename='auth-refresh')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

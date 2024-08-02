from django.urls import path
from . import views
from .views import ItemListCreate

urlpatterns = [
    path('', views.home, name='home'),
    path('api/items/', ItemListCreate.as_view(), name='item-list-create'),
]
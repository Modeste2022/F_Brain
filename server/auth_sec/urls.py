from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_home, name='api_home'),  # 🔄 Redirige `/api` vers une vue
]

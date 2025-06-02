from django.http import JsonResponse
from django.urls import path
from .views import login_view, register
from .views import password_reset_request

def home(request):
    return JsonResponse({"message": "Bienvenue sur l'API Authentification_Security"}, status=200)

urlpatterns = [
    path("", home),  # 🔥 Ajoute cette ligne pour éviter l'erreur 404
    path("login/", login_view, name="login"),
    path("register/", register, name="register"),
    path("password-reset/", password_reset_request, name="password_reset"),
    
]
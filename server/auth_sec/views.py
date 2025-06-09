from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.utils.crypto import get_random_string


@csrf_exempt
def register(request):
    if request.method == "POST":
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")

        if not username or not email or not password:
            return JsonResponse({"error": "Tous les champs sont obligatoires"}, status=400)

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Ce nom d'utilisateur est déjà pris"}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        login(request, user)

        return JsonResponse({"message": "Inscription réussie"}, status=201)

    return JsonResponse({"error": "Méthode non autorisée"}, status=405)


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({"message": "Connexion réussie"}, status=200)
        else:
            return JsonResponse({"error": "Identifiants incorrects"}, status=401)

    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

@csrf_exempt
def password_reset_request(request):
    if request.method == "POST":
        username = request.POST.get("username")
        new_password = request.POST.get("new_password")

        if not username or not new_password:
            return JsonResponse({"error": "Le nom d'utilisateur et le nouveau mot de passe sont obligatoires"}, status=400)

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return JsonResponse({"error": "Aucun compte trouvé avec ce nom d'utilisateur"}, status=404)

        # 🔥 Mettre à jour le mot de passe
        user.set_password(new_password)
        user.save()

        return JsonResponse({"message": "Mot de passe mis à jour avec succès"}, status=200)

    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

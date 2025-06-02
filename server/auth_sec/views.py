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
        email = request.POST.get("email")

        if not User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Aucun compte associé à cet email"}, status=404)

        # 🔥 Générer un jeton sécurisé
        token = get_random_string(50)
        user = User.objects.get(email=email)
        user.set_password(token)  # 🔥 Sauvegarde temporaire du token comme mot de passe
        user.save()

        # 🔥 Envoyer l’email avec le lien de réinitialisation
        send_mail(
            "Réinitialisation de mot de passe",
            f"Voici votre nouveau mot de passe temporaire : {token}\nModifiez-le immédiatement !",
            "tonemail@gmail.com",
            [email],
            fail_silently=False,
        )

        return JsonResponse({"message": "Un email de réinitialisation a été envoyé."}, status=200)

    return JsonResponse({"error": "Méthode non autorisée"}, status=405)

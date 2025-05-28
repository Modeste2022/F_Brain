from django.http import JsonResponse

def api_home(request):
    return JsonResponse({"message": "Bienvenue sur l'API du serveur. Ceci est projet d'authentification"})
from celery import Celery

app = Celery('my_project')
app.config_from_object("django.conf:settings", namespace="CELERY")

app.autodiscover_tasks()

from django.urls import path
from . import views

urlpatterns = [
    path('Iam/', views.Iam, name='Iam'),
    path('loki/', views.loki, name='loki'),

    path('madhu/', views.madhu, name='madhu'),
    path('sam/', views.sam, name='sam'),

    path('srikar/', views.srikar, name='srikar'),
    path('yuva/', views.yuva, name='yuva'),
]

from django.urls import path
from . import views
urlpatterns=[
    path('insert_Student/',views.insert_Student,name='insert_Student'),
    
]
from django.urls import path
from .views import upload_pdf, retrieve_pdf, delete_pdf

urlpatterns = [
    path('pdf/', upload_pdf, name='pdf-upload'),
    path('pdf/<int:pk>/', retrieve_pdf, name='pdf-retrieve'),
    path('pdf/<int:pk>/delete/', delete_pdf, name='pdf-delete'),
]

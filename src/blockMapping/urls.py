from django.urls import path
from .views import (
	map_view, 
	upload_file_view
	)

urlpatterns = [
    path('map/', map_view, name='map'),
    path('upload/', upload_file_view, name='upload'),
]
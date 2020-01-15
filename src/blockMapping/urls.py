from django.urls import path
from django.conf.urls import handler404
from .views import (
	map_view, 
	upload_file_view,
	error_404_view
	)

urlpatterns = [
    path('map/', map_view, name='map'),
    path('upload/', upload_file_view, name='upload'),
]

handler404 = error_404_view
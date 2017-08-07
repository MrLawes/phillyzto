# -*- coding:utf-8 -*-

from django.conf.urls import url
from phillyzto.data.views import shorten
from phillyzto.data.views import clicks

urlpatterns = [
    url(r'^shorten', shorten, name='data_shorten'),
    url(r'^clicks', clicks, name='data_clicks'),
]

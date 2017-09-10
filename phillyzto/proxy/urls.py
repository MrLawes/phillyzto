# -*- coding:utf-8 -*-

from django.conf.urls import url
from phillyzto.proxy.views import proxy_link_history

urlpatterns = [
    url(r'^link_history', proxy_link_history, name='proxy_link_history'),
]

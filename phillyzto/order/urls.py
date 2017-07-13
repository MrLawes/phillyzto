# -*- coding:utf-8 -*-

from django.conf.urls import url
from phillyzto.order.views import get_order_details
from phillyzto.order.views import index

urlpatterns = [
    url(r'^(?P<order_id>\w+)/$', get_order_details, name='admin_get_order_details'),
    url(r'^$', index, name='order_index'),
]

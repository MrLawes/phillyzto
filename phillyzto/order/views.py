# -*- coding:utf-8 -*-

from django.shortcuts import render_to_response
from django.shortcuts import HttpResponse
import json
from phillyzto.order.models import Order
import traceback
import datetime

def index(request):
    return render_to_response('index.html', {})


def login_index(request):
    return render_to_response('user_center.html', {})

def get_order_details(request, order_id):
    """ 获得订单信息
    :param request:
    :param order_id: 订单号
    :return:
    """
    try:
        result = dict(msg='', data=[])
        order_objs = Order.objects.filter(express_number=order_id)
        if not order_objs:
            result = {'msg': u'请输入正确的快递单号'}
            return HttpResponse(json.dumps(result))
        else:
            for order_obj in order_objs:
                order_dict = {
                    'express_number': order_obj.express_number,
                    'consignee_name': order_obj.consignee_name,
                    'status': order_obj.status,
                    'tracking_number': order_obj.tracking_number,
                }
                result['data'].append(order_dict)
    except:
        print str(datetime.datetime.now()), traceback.format_exc()
        result = {'msg': u'服务器出错'}

    return HttpResponse(json.dumps(result))

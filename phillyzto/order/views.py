# -*- coding:utf-8 -*-

from django.shortcuts import render_to_response
from django.shortcuts import HttpResponse
import json


def index(request):
    return render_to_response('waybill.html', {})


def get_order_details(request, order_id):
    """ 获得订单信息
    :param request:
    :param order_id: 订单号
    :return:
    """
    try:
        result = {}
        # TODO chenhaiou
        if order_id != 'JW052302':
            result = {'msg': u'请输入正确的快递单号(JW052302)'}
            return HttpResponse(json.dumps(result))

        result['data'] = {
            'msg': '',
            'express_number': order_id,
            'consignee_name': u'邓莎',
            'status': u'清关中',
            'tracking_number': u'无',
        }
    except:
        result = {'msg': u'服务器出错'}

    return HttpResponse(json.dumps(result))

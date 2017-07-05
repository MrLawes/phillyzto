# -*- coding:utf-8 -*-

from django.db import models


class Order(models.Model):

    express_number = models.CharField(verbose_name=u"快递单号", max_length=255, default='', db_index=True, unique=True)
    consignee_name = models.CharField(verbose_name=u"收件人名字", max_length=255, default='', db_index=True)
    status = models.CharField(verbose_name=u"包裹状态", max_length=255, default='', db_index=True)
    tracking_number = models.CharField(verbose_name=u"转运单号", max_length=255, default='', db_index=True)

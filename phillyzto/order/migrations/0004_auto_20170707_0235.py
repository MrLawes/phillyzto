# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_auto_20170707_0232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='consignee_name',
            field=models.CharField(default=b'', max_length=255, verbose_name='\u6536\u4ef6\u4eba\u540d\u5b57', db_index=True, blank=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(default=b'', max_length=255, verbose_name='\u5305\u88f9\u72b6\u6001', blank=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='tracking_number',
            field=models.CharField(default=b'', max_length=255, verbose_name='\u8f6c\u8fd0\u5355\u53f7', db_index=True, blank=True),
        ),
    ]

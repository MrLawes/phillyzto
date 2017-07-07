# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_auto_20170705_0912'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='express_number',
            field=models.CharField(default=b'', max_length=255, verbose_name='\u5feb\u9012\u5355\u53f7', db_index=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(default=b'', max_length=255, verbose_name='\u5305\u88f9\u72b6\u6001'),
        ),
    ]

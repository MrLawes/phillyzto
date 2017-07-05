# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('express_number', models.CharField(default=b'', max_length=255, verbose_name='\u5feb\u9012\u5355\u53f7', db_index=True)),
                ('consignee_name', models.CharField(default=b'', max_length=255, verbose_name='\u6536\u4ef6\u4eba\u540d\u5b57', db_index=True)),
                ('status', models.CharField(default=b'', max_length=255, verbose_name='\u5305\u88f9\u72b6\u6001', db_index=True)),
                ('tracking_number', models.CharField(default=b'', max_length=255, verbose_name='\u8f6c\u8fd0\u5355\u53f7', db_index=True)),
            ],
        ),
    ]

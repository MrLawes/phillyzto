# -*- coding:utf-8 -*-
# Register your models here.

from django.contrib import admin
from phillyzto.order.models import Order
from import_export.admin import ImportExportModelAdmin
from import_export import resources

class OrderResource(resources.ModelResource):

#    def get_export_headers(self):
#        """ 使用 models 字段中的 verbose_name
#        :return:
#        """
#        headers = []
#        for field in self.get_fields():
#            for col in self.Meta.model._meta._get_fields_cache.values()[0]:
#                if (col.name == field.column_name):
#                    headers.append(col.verbose_name)
#        return headers


    class Meta:
        model = Order
        fields = ('express_number', 'consignee_name', 'status', 'tracking_number',)
        export_order = ('express_number', 'consignee_name', 'status', 'tracking_number')
        import_id_fields = ('express_number', 'consignee_name', 'status', 'tracking_number')

class OrderAdmin(ImportExportModelAdmin):

    resource_class = OrderResource
    list_display = ('express_number', 'consignee_name', 'status', 'tracking_number')
    search_fields = ('express_number', 'consignee_name', 'status', 'tracking_number')

admin.site.register(Order, OrderAdmin)

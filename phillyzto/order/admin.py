from django.contrib import admin
from phillyzto.order.models import Order
# Register your models here.

class OrderAdmin(admin.ModelAdmin):
    list_display = ('express_number', 'consignee_name', 'status', 'tracking_number')
    search_fields = ('express_number', 'consignee_name', 'status', 'tracking_number')

admin.site.register(Order, OrderAdmin)
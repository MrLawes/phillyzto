# -*- coding:utf-8 -*-

from django.shortcuts import HttpResponse
import json

def proxy_link_history(request):
    data = {
      "data": {
        "link_history": [
          {
            "archived": False,
            "create_at": 1331669360,
            "link": "https://staging.durls.co/xnRb5V",
            "long_url": "http://www.baidu.com.com/",
            "modify_at": 1331669360,
          },
          {
            "archived": False,
            "create_at": 1331669349,
            "link": "http://nyti.ms/xr5jgq",
            "long_url": "http://nytimes.com/",
            "modify_at": 1331669350,
          },
          {
            "archived": False,
            "create_at": 1331669350,
            "link": "http://nyti.ms/ll8jxq",
            "long_url": "http://www.bing.com/",
            "modify_at": 1331669351,
          }
        ],
        "result_count": 2
      },
      "errcode": 0,
      "errmsg": "OK"
    }
    return HttpResponse(json.dumps(data))

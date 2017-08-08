# -*- coding:utf-8 -*-

from django.shortcuts import HttpResponse
import json

def shorten(request):

    long_url = request.GET.get('long_url', '')
    import hashlib
    hash = hashlib.md5(long_url).hexdigest()
    if not 'http://' in long_url or not 'https://' in long_url:
        long_url = 'http://' + long_url
    data = {
      "data": {
        "hash": hash[:6],
        "long_url": long_url,
        "url": "http://bit.ly/{hash}".format(hash=hash[:6])
      },
      "errcode": 0,
      "errmsg": "OK"
    }

    return HttpResponse(json.dumps(data))


def clicks(request):

    # http://0.0.0.0:1114/data/clicks?hash=2&hash=1&hash=3

    hashs = request.GET.getlist('hash', [])
    data = {
        "data": {
            "clicks": [],
        },
        "errcode": 0,
        "errmsg": "OK",
    }
    import time
    time_int = int(time.time())
    for index, hash in enumerate(hashs):
        info = {
            "hash": hash,
            "clicks": time_int + index
        }
        data["data"]["clicks"].append(info)

    return HttpResponse(json.dumps(data))


# -*- coding:utf-8 -*-

from django.shortcuts import HttpResponse
import json


def shorten(request):
    data = {
      "data": {
        "hash": "ze6poY",
        "long_url": "http://google.com/",
        "url": "http://bit.ly/ze6poY"
      },
      "errcode": 0,
      "errmsg": "OK"
    }
    return HttpResponse(json.dumps(data))


def clicks(request):
    data = {
        "data": {
            "clicks": [
                {
                    "hash": "ID7AM5",
                    "clicks": 21163,
                },
                {
                    "hash": "1ftt2QM",
                    "clicks": 2,
                }
            ]
        },
            "errcode": 0,
            "errmsg": "OK"
    }
    return HttpResponse(json.dumps(data))


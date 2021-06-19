/*
QX：
^http:\/\/pan\.baidu\.com\/api\/quota* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/Baidupan.js

QX MITM = pan.baidu.com
*/

var obj = JSON.parse($response.body);
obj = {
  "errno": 0,
  "used": 384777965185,
  "total": 394777965185,
  "request_id": 476193899203095010
};

$done({body: JSON.stringify(obj)});

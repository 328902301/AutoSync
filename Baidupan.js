/*
QX：
^http:\/\/pan\.baidu\.com\/api\/quota* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/Baidupan.js

QX MITM = pan.baidu.com
*/

var obj = JSON.parse($response.body);
obj = {
  "errno": 0,
  "used": 384777965185,
  "total": 11107027820544,
  "request_id": 7501873289383874371
};

$done({body: JSON.stringify(obj)});

/*
QX：
^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

QX MITM = viva.v21xy.com
*/

var obj = JSON.parse($response.body);
obj = {
  "errno": 0,
  "used": 384777965185,
  "total": 11107027820544,
  "request_id": 474303270288800000
};

$done({body: JSON.stringify(obj)});
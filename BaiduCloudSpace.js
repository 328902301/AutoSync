/*
Vivavideo unlock vip
Script data comes from @hiepkimcdtk55
Descriptions

Surge4：
http-response ^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js
QX：
^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

Surge & QX MITM = viva.v21xy.com
*/

var obj = JSON.parse($response.body);
obj = {
  "errno": 0,
  "newno": "",
  "request_id": 2625847181883700000,
  "reward": {
    "total": 0,
    "used": 0
  },
  "show_msg": "",
  "size": {
    "can_exchange": 10722249855359,
    "expire_in_7_days": false,
    "quota_extend": 0,
    "quota_free": 11107027820544,
    "quota_paid": 0,
    "quota_used": 384777965185,
    "remain": 10722249855359,
    "total": 11107027820544
  }
};

$done({body: JSON.stringify(obj)});
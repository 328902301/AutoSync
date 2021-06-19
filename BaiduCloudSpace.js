/*
QX：
^https:\/\/pan\.baidu\.com\/pmall\/space\/quotainfo url script-response-body https://raw.githubusercontent.com/byour13/Script/main/BaiduCloudSpace.js

QX MITM = pan.baidu.com
by byour13
*/

var obj = JSON.parse($response.body);
obj = {
  "errno": 0,
  "newno": "",
  "request_id": 7501873289383874371,
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

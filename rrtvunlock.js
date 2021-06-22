/*
QX：
^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

QX MITM = viva.v21xy.com
*/

var obj = JSON.parse($response.body);
obj = {
  "code": "0000",
  "msg": "Success",
  "data": {
    "sortedItems": [{
      "qualityDescription": "高清",
      "qualityCode": "SD",
      "canPlay": true,
      "canShowVip": false,
      "initialQuality": false
    }, {
      "qualityDescription": "超清",
      "qualityCode": "HD",
      "canPlay": true,
      "canShowVip": false,
      "initialQuality": false
    }, {
      "qualityDescription": "原画",
      "qualityCode": "OD",
      "canPlay": true,
      "canShowVip": false,
      "initialQuality": false
    }, {
      "qualityDescription": "AI原画",
      "qualityCode": "AI_OD",
      "canPlay": true,
      "canShowVip": false,
      "initialQuality": true
    }]
  },
  "traceId": null
};

$done({body: JSON.stringify(obj)});
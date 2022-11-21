/*************
迅雷 解锁会员
**************
[rewrite_local]
https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/WeeekWin/QuanX/main/Crack/XunLei.js
[mitm]
hostname = xluser-ssl.xunlei.com
*************/

var body = $response.body;
var obj = JSON.parse(body);

obj.vipList = [{
    "expireDate": "20990909",
    "isAutoDeduct": "0",
    "isVip": "1",
    "isYear": "1",
    "payId": "0",
    "payName": "---",
    "register": "0",
    "vasid": "2",
    "vasType": "5",
    "vipDayGrow": "20",
    "vipGrow": "840",
    "vipLevel": "7"
  }]

body = JSON.stringify(obj);
$done({body});

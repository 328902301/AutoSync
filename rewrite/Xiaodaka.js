/***********************************
小打卡 (微信小程序)
************************************
[rewrite_local]
^https?:\/\/uranus\.sharedaka\.com\/api\/v3\/user\/info\/get url script-response-body https://raw.githubusercontent.com/WeeekWin/Quanx/main/rewrite/Xiaodaka.js

[mitm] 
hostname = uranus.sharedaka.com
***********************************/

let obj = JSON.parse($response.body);
  obj.data.endTime = 4092599349000;
  obj.data.hasOpenedMember = true;
  $done({body: JSON.stringify(obj)});

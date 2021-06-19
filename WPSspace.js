/*
QX：
^https:\/\/drive\.wps\.cn\/api\/v3\/spaces url script-response-body https://raw.githubusercontent.com/byour13/Script/main/WPSspace.js

QX MITM = drive.wps.cn
by byour13
*/

var obj = JSON.parse($response.body);
obj = {
  "used": 755191104,
  "total": 1222293942784,
  "id": 231293159,
  "name": "byour13"
};

$done({body: JSON.stringify(obj)});

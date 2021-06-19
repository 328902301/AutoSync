/*
QX：
^https:\/\/drive\.wps\.cn\/api\/v3\/spaces url script-response-body nzw9314/NobyDa/Surge/JS/vivavideo.js

QX MITM = drive.wps.cn
*/

var obj = JSON.parse($response.body);
obj = {
  "used": 755191104,
  "total": 1222293942784,
  "id": 231293159,
  "name": "byour13"
};

$done({body: JSON.stringify(obj)});
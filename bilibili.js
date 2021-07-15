/*
QuantumultX:

[rewrite_local]
^https:\/\/api\.bilibili\.com\/x\/member\/v2\notice* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/bilibili.js

[mitm]
hostname = p.du.163.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

[MITM]
hostname = api.bilibili.com

**************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.data.status = 1;
body = JSON.stringify(obj);
$done({body});

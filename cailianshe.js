/*
有待验证
Loon：
http-response ^https:\/\/i\.cls\.cn\/featured\/v2\/home\/recommend\/article* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/byour13/Script/main/cailianshe.js
QX：
^https:\/\/i\.cls\.cn\/featured\/v2\/home\/recommend\/article* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/cailianshe.js
Loon&QX = i.cls.cn
*/
var body =
$response.body.replace(/unlock":\d/g,'unlock":2').replace(/unlock_num":\d+/g,'unlock_num":0')
$done({body});

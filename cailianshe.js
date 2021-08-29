/*
有待验证
Loon：
http-response ^https:\/\/i\.cls\.cn\/featured\/v2\/home\/recommend\/article* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/byour13/Script/main/1Blocker.js
QX：
^https:\/\/i\.cls\.cn\/featured\/v2\/home\/recommend\/article* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/1Blocker.js
Loon&QX = i.cls.cn
*/
var body =
$response.body.replace(/\u0075\u006e\u006c\u006f\u0063\u006b\u0022\u003a\u005c\u0064/g,'\u0075\u006e\u006c\u006f\u0063\u006b\u0022\u003a\u0032').replace(/\u0075\u006e\u006c\u006f\u0063\u006b\u005f\u006e\u0075\u006d\u0022\u003a\u005c\u0064\u002b/g,'\u0075\u006e\u006c\u006f\u0063\u006b\u005f\u006e\u0075\u006d\u0022\u003a\u0030')
$done({body});

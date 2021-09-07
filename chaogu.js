/*
QX：
^http:\/\/xgpiao\.net:6693\/login* script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

xgpiao.net:6693
*/

var obj = JSON.parse($response.body);
obj = {
  "ret_expritedtime" : "2022-09-19 16:38:01",
  "ret_valide" : 1,
  "ret_status" : 1,
  "ret_note" : "还可以使用 376 天",
  "ret_regtime" : "2021-09-05 16:38:01"
}
;

$done({body: JSON.stringify(obj)})
     
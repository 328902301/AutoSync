/*
[rewrite]
^https?:\/\/zj\.haier\.net\/api-gw\/upmapi\/appmanage\/app\/[cold]?start\/report$ url script-response-body https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/haier_start.js

[mitm]
hostname = zj.haier.net
*/

let obj = JSON.parse($response.body);
obj = {
  "retInfo" : "请求返回成功",
  "retCode" : "00000",
  "data" : null
}
$done({ body: JSON.stringify(obj) });

/*
[rewrite]
^https?:\/\/zj\.haier\.net\/api-gw\/shpmResource\/ad\/checkWhiteList$ url script-response-body https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/Haier/haier_check.js

[mitm]
hostname = zj.haier.net
*/

let obj = JSON.parse($response.body);
obj = {
  "data" : [
    {
      "startPage" : true
    },
    {
      "popAd" : true
    }
  ],
  "retCode" : "00000",
  "retInfo" : "操作成功"
}
$done({ body: JSON.stringify(obj) });

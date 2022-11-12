/*
[rewrite]
^https?:\/\/zj\.haier\.net\/omsappapi\/resource\/v2\/get\/resourceBag$ url script-response-body https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/haier_res.js

[mitm]
hostname = zj.haier.net
*/

let obj = JSON.parse($response.body);
obj = {
  "retCode" : "00000",
  "data" : {
    "resource" : [
      {
        "id" : 0,
        "deviceTypeIndex" : "",
        "resUrl" : "",
        "resType" : "configAPP",
        "resourceType" : "1",
        "resId" : "",
        "typeId" : "",
        "directionalBetaType" : "",
        "hideStatusBar" : "",
        "prodNo" : "",
        "md5" : "",
        "model" : "",
        "name" : "servicePage",
        "resVersion" : ""
      }
    ]
  },
  "retInfo" : "操作成功"
}
$done({ body: JSON.stringify(obj) });

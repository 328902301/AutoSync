/*
引用地址 https://github.com/githubacct001/QuantumultX/blob/secret/Rewrite/XiaomiMall/XiaomiMall_Open.js

[rewrite_local]
^https:\/\/api\.m\.mi\.com\/v1\/app\/start url script-response-body https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/mimall.js

[mitm]
hostname = api.m.mi.com
*/

let obj = JSON.parse($response.body);
obj = {
  "code" : 0,
  "data" : {
    "skip_splash" : true,
    "splash" : {
    }
  }
}
$done({ body: JSON.stringify(obj) });

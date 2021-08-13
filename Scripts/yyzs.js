/*
By Primovist
用药助手 解锁专业版
*/

const path1 = "/snsapi/username/";
const path2 = "/app/user/pro/stat?";
const path3 = "/app/user/init?timestamp=";

const url = $request.url;
let body = $response.body;

if (url.indexOf(path1) != -1){
body = JSON.parse(body);
body.items.expertUser = true;
body.items.expert = true;
body.items.expertStatus = 1;
body.items.professional = true;
body = JSON.stringify(body);
}

if (url.indexOf(path2) != -1){
body = JSON.parse(body);
body.data.isActive = true;
body = JSON.stringify(body);
}

if (url.indexOf(path3) != -1){
body = JSON.parse(body);
body.data.isProActive = true;
body.data.expireDate = 2048;
body.data.memberDiscount = true;
body.data.iapPurchaseVO.purchase = true;
body.data.iapPurchaseVO.message = null;
body.data.iapPurchaseVO.error = null;
body = JSON.stringify(body);
}

$done({body})

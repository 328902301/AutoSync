/*
###################################   将军℡   ##################################
宜搜小说app解锁章节付费
[rewrite_local]
^http:\/\/api\.ieasou\.com\/api\/bookapp\/chargeChapter\.m url script-response body yisouvip.js

*/

var body = $response.body; //声明一个变量body并以响应消息体赋值

var obj = JSON.parse(body); //将json格式的body转变为对象处理

obj.success = "true";
obj.charge = 0;
obj.paid = 1;
obj.accelerate = 1;

obj.vipInfo["vip"] = "true";
obj.vipInfo["vipStatus"] = 1;
obj.vipInfo["autoTime"] = 1;
obj.vipInfo["expireTime"] = 1914123030;

obj.freeInfo["freePrivilege"] = "true";
obj.freeInfo["expireTime"] = 1914123030;

obj.excPrice["status"] = 1;

obj.payInfo["balance"] = 99999;
obj.payInfo["discount"] = 100.0;

obj.activity["discount"] = 1;
obj.activity["activityType"] = 0;

body = JSON.stringify(obj); //重新打包为json字符串
$done(body); //结束修改
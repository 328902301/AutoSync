/*************************************

项目名称：Mate-翻译App 解锁订阅
下载地址：https://t.cn/AiN3YLHl
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
使用方法：先注册登录账号，如失败请重复打开！

**************************************

[rewrite_local]

^https:\/\/asia\.gikken\.co\/matesync\/(subscription|login|register_user|check_user) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mate.js

[mitm]

hostname = asia.gikken.co

*************************************/



var chxm1023 = JSON.parse($response.body);
const xxa = '/matesync/subscription';
const xxb = '/matesync/register_user';
const xxc = '/matesync/login';
const xxd = '/matesync/check_user';
const hyxx = {
  "next_bill_date" : "2099-09-09",
  "next_payment_amount" : "0",
  "paused_from" : null,
  "billing_period" : "annual",
  "cancel_url" : "itms-apps://apps.apple.com/account/subscriptions",
  "isSubscriptionVerified" : true,
  "unit_price" : "0",
  "isCancelled" : true,
  "old_status" : null,
  "update_url" : "itms-apps://apps.apple.com/account/subscriptions",
  "isLifetime" : true,
  "cancellation_effective_date" : "2099-09-09",
  "currency" : "CNY",
  "status" : "active",
  "endsOn" : "2099-09-09"
};

if ($request.url.indexOf(xxa) != -1){
chxm1023 = (hyxx);}

if ($request.url.indexOf(xxb) != -1){
chxm1023.subscriptionInfo = (hyxx);}

if ($request.url.indexOf(xxc) != -1){
chxm1023.subscriptionInfo = (hyxx);}

if ($request.url.indexOf(xxd) != -1){
chxm1023 = {"registered":true};}


$done({body : JSON.stringify(chxm1023)});

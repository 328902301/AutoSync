/*
@Author  摇光
Explain  ForOwnUse


圈X：
[rewrite_local]
# Flomo	Version:1.7.2
^https:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body flomo.js


[mitm]
hostname= = flomoapp.com


# 下载地址：
https://apps.apple.com/cn/app/flomo-%E6%B5%AE%E5%A2%A8-%E5%8D%A1%E7%89%87%E7%AC%94%E8%AE%B0/id1552314395
*/

var obj = JSON.parse($response.body);

obj.data.pro_expired_at = 2027-06-11 23:59:59;

$done({body: JSON.stringify(obj)}); 

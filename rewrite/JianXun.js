/******************************
简讯
*******************************

[rewrite_local]
^https?:\/\/api\.tipsoon\.com\/api\/v1\/top\/ad url reject-img
^https:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/WeeekWin/Quanx/main/rewrite/JianXun.js

[mitm] 
hostname = api.tipsoon.com

*******************************/

body = $response.body.replace(/\"is_vip":\w+/g, '\"is_vip":true')
$done({body});

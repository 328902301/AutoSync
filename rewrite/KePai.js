/******************************

可拍 - Al换脸变装视频

*******************************

[rewrite_local]
http:\/\/fxshot-api\.afunapp\.com\/order_api\/apple_query url script-response-body https://raw.githubusercontent.com/WeeekWin/QuanX/main/rewrite/KePai.js

[mitm] 
hostname = fxshot-api.afunapp.com

*******************************/

body = $response.body.replace(/\"vip_remain_time":\d+/g, '\"vip_remain_time":4092599349')

$done({body});

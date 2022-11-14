/***********************************
@ 微信小程序 掌上公交
@ 去除广告
************************************
[rewrite_local]
https?:\/\/wx\.mygolbs\.com\/WxBusServer\/ApiData\.do url script-response-body https://raw.githubusercontent.com/WeeekWin/QuanX/main/Rule/PocketBusAd.js

[mitm]
hostname=wx.mygolbs.com
***********************************/
var body = $response.body.replace(/Ad":1/g, 'Ad":0').replace(/Ad_ab":1/g, 'Ad_ab":1')
$done({ body });

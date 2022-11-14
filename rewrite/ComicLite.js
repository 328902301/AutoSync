/***********************************
微信小程序——漫画台Lite
************************************
[rewrite_local]
^https?:\/\/comic\.321mh\.com\/app_api\/v\d\/getcomicinfo_body url script-response-body https://raw.githubusercontent.com/WeeekWin/Quanx/main/rewrite/ComicLite.js

[mitm] 
hostname = comic.321mh.com
***********************************/
var body = $response.body.replace(/price":\d+/g,'price":0')
$done({ body });

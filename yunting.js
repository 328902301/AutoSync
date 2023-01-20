/*************************************

项目功能：云听 解锁VIP试听/可下载
下载地址：https://t.cn/A6ouQ21g
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
使用方法：VIP修改成试听模式，可下载内容。

**************************************

[rewrite_local]

^http.+(getway|ytapi)\.radio\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yunting.js

[mitm] 

hostname = *.radio.cn

*************************************/


const getway = '/getway.radio.cn';
const ytapi = '/ytsrv/srv/appUser/getUserInfoH5';
var body = $response.body;

if ($request.url.indexOf(getway) != -1){body = $response.body.replace(/\"isVip":\d+/g, '\"isVip":0').replace(/\"needPay":\d+/g, '\"needPay":0').replace(/\"songVirtualPrice":\d+/g, '\"songVirtualPrice":0').replace(/\"songNeedPay":\d+/g, '\"songNeedPay":0').replace(/\"singlePlayFlag":\w+/g, '\"singlePlayFlag":true').replace(/\"isPraise":\d+/g, '\"isPraise":0').replace(/\"auditionFlag":\w+/g, '\"auditionFlag":true').replace(/\"auditionType":\d+/g, '\"auditionType":0').replace(/\"singleDownloadFlag":\w+/g, '\"singleDownloadFlag":true');}

if ($request.url.indexOf(ytapi) != -1){
var chxm1023 = JSON.parse(body);
chxm1023.object.baseInfo["vipTime"] = "2099-09-09";
chxm1023.object.baseInfo["isVip"] = 1;
chxm1023.object.baseInfo["nickName"] = "解锁VIP免费试听";
chxm1023.object.baseInfo["userIcon"] = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIxYXjkY5BS6ASZbBBgKagb4k9gesNdX8hHeKAsyCxMUBFlflZyWJwibXWVhbggpp4Oq9OuVqS6Xeg/132";
body = JSON.stringify(chxm1023);
}

$done({body});

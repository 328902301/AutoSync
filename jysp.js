/*
 *
 *
脚本功能：鲸鱼视频无限观看
软件版本：极速版
下载地址：https://6478726.com/q4r3p.html?code=9ddU2bd3fe
脚本作者：凉意
更新时间：2022.02.18
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local] 
^https:\/\/api\.8897815\.com\/long_video\/user\/(daily/short_video_watch|info) url script-response-body https://raw.githubusercontent.com/LiangYi520/QuantumultX-Script/main/jysp.js
[mitm]
hostname = api.8897815.com
*
*
*/
var body = $response.body;
var urlq = $request.url;
var obj = JSON.parse(body);
const 1 ='/long_video/user/daily/short_video_watch';
const 2 ='/long_video/user/info';
 if (urlq.indexOf(1) != -1) {
  obj= {"code":0,"msg":"成功","data":{"freeWatchCount":999999}};
  body = JSON.stringify(obj);
}
 if (urlq.indexOf(2) != -1) {
  obj= {"code":0,"msg":"成功","data":{"userId":2872318,"nickName":"凉意","machineCode":"oi7totr4zecp96eremp7ts","agentId":0,"avatar":"3","goldCoins":99999,"phoneNumber":"","vipEndTime":"2099-01-01","bindCode":"0","userType":2,"rechargeStatus":1}};
  body = JSON.stringify(obj);
}
$done({ body });

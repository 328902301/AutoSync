/******************************

脚本功能：美图秀秀+解锁VIP
软件版本：v9.6.20
脚本作者：彭于晏
更新时间：2022-9-1
问题反馈：QQ+89996462
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]
^https:\/\/api\.xiuxiu\.meitu\.com\/v1 url script-response-body mtxx.js
[mitm] 
hostname = api.xiuxiu.meitu.com

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip';


if (url.indexOf(vip) != -1) {
    obj.data.vip_type = 1;
obj.data.sub_biz_type = 1;
obj.data.is_valid_user = 1;
obj.data.expire_days = 8888888888;
obj.data.exchange_vip = 1;
obj.data.is_new_vipsub = 1;
obj.data.home_prompt = "您的会员将于2099/01/01过期。";

	body = JSON.stringify(obj);
}


$done({body});


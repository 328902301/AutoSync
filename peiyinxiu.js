/*************************************

项目名称：配音秀 解锁会员
下载地址：https://t.cn/AiN3YLHl
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/iosapi\.peiyinxiu\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/peiyinxiu.js

[mitm]

hostname = iosapi.peiyinxiu.com

*************************************/


var chxm1023 = JSON.parse($response.body); 
const vipa = '/Api/user/GetMyInfo';
const vipb = '/api/User/GetVipDetail';

if ($request.url.indexOf(vipa) != -1){
chxm1023.data.is_vip = 1;
chxm1023.data.gold = 999999;
chxm1023.data.vip_end_time = 4092599349;
chxm1023.data.gold2 = 999999;
chxm1023.data.is_can_apply = 1;
}

if ($request.url.indexOf(vipb) != -1){
chxm1023.data.is_vip = 1;
chxm1023.data.isRenewal = 1;
chxm1023.data.vip_end_time = 4092599349;
chxm1023.data.is_can_apply = 1;
chxm1023.data.tools.status = 1;
}

$done({body : JSON.stringify(chxm1023)});

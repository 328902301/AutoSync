/****************************************

项目功能：悟饭掌悦 解锁Vip
下载地址: https://t.cn/A6o114Kq
使用说明：非一次性解锁，每次解锁需打开脚本
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

http:\/\/iosv2\.cjapi\.wufan88\.com\/user\/.+ url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/wfzy.js


[mitm] 

hostname = iosv2.cjapi.wufan88.com

****************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);
chxm1023.data.user_info.member_state = 2;
chxm1023.data.user_info.is_vip = "9A0684792021D73BE42B71491469ADFA";
body = JSON.stringify(chxm1023);
$done({body});

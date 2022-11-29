/****************************************

项目功能：小打卡 解锁VIP(App＋小程序)
下载地址：https://t.cn/A6K7nCJi
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/(.*?)\.sharedaka\.com\/api\/.+\/(user|parse|habit)\/(info|token|conf|member)\/?(.*?)*$ url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/xiaodaka.js

[mitm]

hostname = *.sharedaka.com

****************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.hasOpenedMember = true;
chxm1023.data.endTime = 4092599350000;
chxm1023.data.totalLogDays = 9999;
chxm1023.data.totalNote = 9999;
chxm1023.data.enable = true;
chxm1023.data.city = true;
chxm1023.data.showMemberStatus = 1;
chxm1023.data.showProduct = 1;
chxm1023.data.expireTimeStr = "2099-09-09 09:09:09";


body = JSON.stringify(chxm1023);

$done({body});

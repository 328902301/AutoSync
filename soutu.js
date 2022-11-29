/****************************************

项目功能：搜图神器 解锁VIP
下载地址：https://t.cn/A6ogWd6z
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^http:\/\/wallpaper\.soutushenqi\.com\/api\/v1\/account\/token url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/soutu.js


[mitm]

hostname = wallpaper.soutushenqi.com

****************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.vipPastDueTime = 4092599350000;
chxm1023.data.vipLabel = "高级用户";
chxm1023.data.vipLabelLevel = 5;
chxm1023.data.vipType = 1;


body = JSON.stringify(chxm1023);

$done({body});

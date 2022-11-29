/****************************************

项目功能：傲软全家桶

项目名称：傲软抠图 解锁Vip
下载地址：https://t.cn/A6xBOE5d

项目名称：傲软扫描 解锁Vip
下载地址：https://t.cn/A6o1jHWR

项目名称：傲软PDF转换 解锁Vip
下载地址：https://t.cn/A6o1j588

项目名称：傲软PDF编辑 解锁Vip
下载地址：https://t.cn/A6o1jCGU

项目名称：傲软投屏 解锁Vip
下载地址：https://t.cn/A65nw9gx

项目名称：咖映 解锁Vip
下载地址：https://t.cn/A6o1lsFL

项目名称：轻闪PDF 解锁Vip
下载地址：https://t.cn/A6o1iiI2

项目名称：乃糖小组件 解锁Vip
下载地址：https://t.cn/A6o1iMdP

项目名称：佐糖 解锁Vip
下载地址：https://t.cn/A6o1iVTI

项目名称：佐糖照片修复 解锁Vip
下载地址：https://t.cn/A6o1itzG

使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/arqjt.js

[mitm] 

hostname = *.aoscdn.com

****************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);
chxm1023.data.is_activated = 1;
chxm1023.data.remain_days = 999999999;
chxm1023.data.expire_time = "2099-09-09 09:09:09";
chxm1023.data.expired_at = 4092600296;
chxm1023.data.license_type = "premium";
chxm1023.data.durations = 999999999;
chxm1023.data.vip_special = 1;


body = JSON.stringify(chxm1023);

$done({body});

/*************************************

项目名称：蛋啵 解锁VIP
下载地址：https://t.cn/A69AjDYp
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]
^https?:\/\/api-sub\.meitu\.com\/.+\/user\/vip_info_by_group\.json url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/danbo.js

[mitm]
hostname = api-sub.meitu.com

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.trial_period_invalid_time = 4092599349000;
chxm1023.data.current_order_invalid_time = 4092599349000;
chxm1023.data.invalid_time = 4092599349000;
chxm1023.data.valid_time = 1666666666666;
chxm1023.data.use_vip = true;
chxm1023.data.have_valid_contract = true;
chxm1023.data.derive_type_name = "普通会员";
chxm1023.data.in_trial_period = true;
chxm1023.data.is_vip = true;

$done({body : JSON.stringify(chxm1023)});

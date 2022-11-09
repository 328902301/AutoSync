/****************************************

项目功能：傲软全家桶 解锁VIP
下载地址：http://mtw.so/5twaH6
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/aoruan.js

[mitm] 

hostname = *.aoscdn.com

****************************************/

var chxm1023 = {
  "status" : 200,
  "message" : "success",
  "data" : {
    "expired_at" : 4096408296,
    "is_activated" : 1,
    "is_lifetime" : 1,
    "expire_time" : "2099-10-23 09:09:09",
    "device_id" : 600150864,
    "period_type" : "active",
    "remain_days" : 999999999,
    "product_id" : 963,
    "has_present" : 0,
    "allowed_device_count" : 1,
    "has_buy_extend" : 0,
    "will_expire" : 0,
    "license_type" : "premium",
    "begin_activated_time" : 1645798296,
    "durations" : 999999999,
    "vip_special" : 1
  }
}
$done({body: JSON.stringify(chxm1023)});

/*
QX：
^https:\/\/one\.boohee\.com\/api\/v1\/users\/vip_status* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/weather.js

QX MITM = one.boohee.com
*/

var obj = JSON.parse($response.body);
obj = {
  "user_name": "makebyour13",
  "cellphone": "00000000000",
  "app_vip_banner_url": "https://up.boohee.cn/house/u/one/easy_member/homepage_ad2.png",
  "inactive_member_duration": 0,
  "is_member": true,
  "notice_tips": [],
  "state": "on_going",
  "gift": false,
  "coupon": false,
  "wisdom": false,
  "remain_day": 262,
  "expired_at": "2999-03-22",
  "has_gift_benefit": true,
  "has_coupon_benefit": true,
  "member_center_url": "https://member.boohee.com/easy/index",
  "member_active_url": "https://member.boohee.com/easy/active",
  "member_sale_url": "https://member.boohee.com/easy/introduce",
  "bind_cellphone_url": "https://member.boohee.com/easy/get/equity"
}
;

$done({body: JSON.stringify(obj)});

/*************************************

项目名称：美图秀秀 解锁SVIP
下载地址：https://t.cn/AiN3YLHl
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/.+\/(h\d/vip|vip\/prompt|vip|user)\/(.*?) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtxx.js

[mitm]

hostname = *.xiuxiu.meitu.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const hysj = '/vip/prompt';
const hyxx = '/vip/vip_show.json';
const user = '/user';
const hyzl = '/h5/vip/new_sub_detail';
const hymb = '/h5/vip/vip_navigation';

if ($request.url.indexOf(hysj) != -1){
chxm1023.data.home_btn_prompt = "立即查看";
chxm1023.data.home_prompt = "会员有效期至2099/09/09";
chxm1023.data.svip_bubble_text = "粉钻SVIP：有效期至2099/09/09\n粉钻VIP：有效期至2099/09/09";
chxm1023.data.beautify_btn_prompt = "已解锁";}

if ($request.url.indexOf(hyxx) != -1){
chxm1023 = {
  "degrade": 0,
  "error_code": 0,
  "data": {
    "id": "666666666666666666",
    "id_str": "666666666666666666",
    "valid_time": 4642350000,
    "sub_type": 3,
    "expire_days": -66666,
    "screen_name": "",
    "avatar_url": "",
    "in_valid_time": 4092599349,
    "gid": 1234567890,
    "s": 1,
    "vip_type": 101,
    "platform": 2,
    "sub_name": "包年",
    "renew": 2,
    "is_valid_user": 1,
    "create_time": 1666666666,
    "sub_biz_type": 1,
    "is_expire": 0
  },
  "msg": "成功",
  "error": "Ok",
  "ret": 0
};}

if ($request.url.indexOf(user) != -1){
chxm1023.data.vip_type = 1;
chxm1023.data.is_authorize = 1;
chxm1023.data.vip_icon = "https://xximg1.meitudata.com/6948531747980333892.png";
chxm1023.data.follower_count = 999000;
chxm1023.data.fan_count = 999000;
chxm1023.data.favorites_count = 999000;
chxm1023.data.be_like_count = 999000;}

if ($request.url.indexOf(hyzl) != -1){
chxm1023.data.valid_time = 4092599349;
chxm1023.data.vip_power_num = 999;
chxm1023.data.new_power_num = 999;
chxm1023.data.welfare_center_num = 999;
chxm1023.data.rights_page_vip_btn_title = "已解锁";
chxm1023.data.s = 1;
chxm1023.data.expire_days = -66666;
chxm1023.data.sub_type = 3;
chxm1023.data.old_vip_type = 4;
chxm1023.data.invalid_time = 4092599349;
chxm1023.data.hbp_vip.sub_type = 3;
chxm1023.data.hbp_vip.valid_time = 4092599349;
chxm1023.data.hbp_vip.expire_days = -66666;
chxm1023.data.hbp_vip.in_valid_time = 4092599349;
chxm1023.data.sub_biz_type = 1;
chxm1023.data.vip_type = 101;
chxm1023.data.xx_vip.sub_type = 3;
chxm1023.data.xx_vip.valid_time = 4092599349;
chxm1023.data.xx_vip.expire_days = -66666;
chxm1023.data.xx_vip.in_valid_time = 4092599349;}

if ($request.url.indexOf(hymb) != -1){
chxm1023 = {
  "degrade" : 0,
  "error_code" : 0,
  "data" : {
    "hello_text" : "欢迎使用，尊贵的SVIP用户",
    "hbp_vip" : {
      "id" : "666666666666666666",
      "id_str" : "666666666666666666",
      "valid_time" : 4092599349,
      "uid" : 1666666666,
      "sub_type" : 3,
      "sub_biz_type" : 1,
      "avatar_url" : "",
      "is_expire" : 0,
      "expire_days" : -66666,
      "gid" : 1234567890,
      "vip_type" : 101,
      "platform" : 2,
      "sub_name" : "包年",
      "renew" : 2,
      "s" : 0,
      "is_valid_user" : 1,
      "create_time" : 1666666666,
      "screen_name" : "",
      "in_valid_time" : 4092599349
    },
    "rights_general" : [
      {
        "img" : "https://xximg1.meitudata.com/6972861955604497692.png",
        "title" : "SVIP专属",
        "url" : "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=1&entrance=vip_bottom",
        "track_id" : "svip_exclusive"
      },
      {
        "img" : "https://xximg1.meitudata.com/6972861955394782490.png",
        "title" : "特色功能",
        "url" : "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=2&entrance=vip_bottom",
        "track_id" : "svip_special_function"
      },
      {
        "img" : "https://xximg1.meitudata.com/6972861955264759063.png",
        "title" : "商用无忧",
        "url" : "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=3&entrance=vip_bottom",
        "track_id" : "svip_commercial_use"
      },
      {
        "img" : "https://xximg1.meitudata.com/6972861954786608403.png",
        "title" : "多端通用",
        "url" : "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=4&entrance=vip_bottom",
        "track_id" : "svip_systems_use"
      },
      {
        "img" : "https://xximg1.meitudata.com/6972861955059238165.png",
        "title" : "共12项权益",
        "url" : "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&entrance=vip_bottom",
        "track_id" : "svip_12prerogatives"
      }
    ],
    "xx_vip" : {
      "id" : "666666666666666666",
      "id_str" : "666666666666666666",
      "valid_time" : 4092599349,
      "uid" : 1666666666,
      "sub_type" : 3,
      "sub_biz_type" : 0,
      "avatar_url" : "",
      "is_expire" : 0,
      "expire_days" : -66666,
      "gid" : 1234567890,
      "vip_type" : 1,
      "platform" : 2,
      "sub_name" : "包年",
      "renew" : 1,
      "s" : 0,
      "is_valid_user" : 1,
      "create_time" : 1666666666,
      "screen_name" : "",
      "in_valid_time" : 4092599349
    }
  },
  "msg" : "成功",
  "error" : "Ok",
  "ret" : 0
};}

$done({body : JSON.stringify(chxm1023)});


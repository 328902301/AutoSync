/****************************************

项目功能：百度网盘 解锁SVIP会员部分功能-不完整
下载地址：http://mtw.so/5IhM60
使用说明：非一次性解锁，每次解锁需打开脚本
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/bdcloud.js

[mitm]

hostname = pan.baidu.com

****************************************/


var chxm1023 = JSON.parse($response.body);

    chxm1023 = 
{
  "currenttime" : 1573473597,
  "guide_data" : {
    "title" : "超级会员 SVIP",
    "content" : "已拥有极速下载+视频倍速特权",
    "button" : {
      "text" : "会员中心",
      "action_url" : "https://pan.baidu.com/wap/vip/user?from=myvip2#svip"
    }
  },
  "request_id" : 7501873289383875000,
  "product_infos" : [
    {
      "product_id" : "5310897792128633390",
      "end_time" : 4092600296,
      "buy_time" : "1417260485",
      "cluster" : "offlinedl",
      "start_time" : 1417260485,
      "detail_cluster" : "offlinedl",
      "product_name" : "gz_telecom_exp"
    },
    {
      "product_name" : "svip2_nd",
      "product_description" : "超级会员",
      "function_num" : 0,
      "start_time" : 1553702399,
      "buy_description" : "",
      "buy_time" : 0,
      "product_id" : "1",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 4092600296,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 0
    }
  ],
  "reminder" : {
    "reminderWithContent" : [

    ],
    "advertiseContent" : [

    ]
  }
}

$done({body : JSON.stringify(chxm1023)});

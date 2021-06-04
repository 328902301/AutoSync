
/*
QX1.0.0:
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/BaiduCloud.js

MITM = pan.baidu.com
*/

let obj = JSON.parse($response.body);
obj = {
  "product_infos": [{
    "product_id": "5210897752128663390",
    "start_time": 1417260485,
    "end_time": 2147483648,
    "buy_time": "1417260485",
    "cluster": "offlinedl",
    "detail_cluster": "offlinedl",
    "product_name": "gz_telecom_exp"
  }, {
    "product_name": "svip6_th",
    "product_description": "超级会员",
    "function_num": 0,
    "start_time": 1553702399,
    "buy_description": "",
    "buy_time": 0,
    "product_id": "1",
    "auto_upgrade_to_svip": 0,
    "end_time": 1938275622,
    "cluster": "vip",
    "detail_cluster": "svip",
    "status": 0
  }],
  "currenttime": 1622742055,
  "reminder": {
    "reminderWithContent": [],
    "advertiseContent": []
  },
  "request_id": 114555772075320058
};
$done({body: JSON.stringify(obj)});

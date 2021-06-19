/*
QX：
^https://biz.caiyunapp.com/v2/user* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/cyweathervip.js

MITM = biz.caiyunapp.com
by byour13
*/

var obj = JSON.parse($response.body);
obj = {
  "result": {
    "xy_vip_expire": 0,
    "vip_expired_at": 0,
    "ranking_above": 0,
    "auto_renewal_type": "",
    "third_party_id": null,
    "svip_expired_at": 4776814707,
    "is_login": true,
    "is_xy_vip": false,
    "platform_name": "caiyun",
    "xy_svip_expire": 0,
    "third_party_ids": [],
    "score": 2000,
    "is_xy_auto_renewal": false,
    "is_primary": true,
    "phone_num": "13411000000",
    "free_trial": 0,
    "last_acted_at": 4776814707,
    "vip_type": "s",
    "is_phone_verified": true,
    "wt": {
      "vip": {
        "enabled": true,
        "is_auto_renewal": false,
        "auto_renewal_type": "",
        "svip_auto_renewal_type": "",
        "svip_expired_at": 4776814707,
        "expired_at": 0
      },
      "last_acted_at": 1622735987.0591499805,
      "svip_given": 36500,
      "created_at": 1621147570.368653059,
      "is_login": true
    },
    "device_id": "12C70000-E00A-4A1F-00AE-1FA8B2DE7E00",
    "name": "***0000",
    "bound_status": {
      "qq": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "weibo": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "google": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "apple": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "weixin": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "caiyun": {
        "username": "",
        "is_bound": true,
        "id": "60a0bfb26c9cf1000000ca6e"
      },
      "twitter": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "facebook": {
        "username": "",
        "is_bound": false,
        "id": ""
      }
    },
    "created_at": 1621147570.3678479195,
    "is_auto_renewal": false,
    "hasBeenInvited": false,
    "platform_id": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNjBhMGJmYjI2YzljZjEwMDEyNDZjYTZlIiwic3ZpcF9leHBpcmVkX2F0IjoxNjUyNjgzNTc2Ljc0MTM2NywidmlwX2V4cGlyZWRfYXQiOjB9.Thb47FIU9UsRSO0ab7efJAsHXoOxl-FelJzpF43O4AQ",
    "svip_given": 36500,
    "avatar": "https:\/\/caiyunapp.com\/imgs\/webtrs\/default.png",
    "is_vip": true,
    "gender": "0",
    "_id": "60a0bfb26c9cf1000000ca6e"
  },
  "rc": 0
};

$done({body: JSON.stringify(obj)});

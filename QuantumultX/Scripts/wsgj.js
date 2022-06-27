/*


公众号：搞鸡玩家

苹果商店下载: 网速管家

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉



本地重写

[rewrite_local]
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body wsgj.js

[mitm] 
hostname = api-v3.speedtest.cn



*/


 
var gjwj = JSON.parse($response.body); 
// 

gjwj ={
  "code": 0,
  "data": {
    "id": "11641894",
    "username": "公众号搞鸡玩家",
    "email": null,
    "phone": "13900139000",
    "nickname": "公众号搞鸡玩家",
    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/jhwHJQ9VNEQ4Hl1iaQS712Z9zLHHRMsvBQAkc11Enk3LUWJ0np1XhNibt7X1CRoULibxvQ0FJ4mEkf9V2PQ00iaDWA/132",
    "gender": null,
    "identified": "0",
    "disabled": "0",
    "password": "",
    "balance": 0,
    "integral": "99999999",
    "status": "1",
    "udid": null,
    "phoneProvince": null,
    "phoneCity": null,
    "vpnRegister": "0",
    "frozenIntegral": "0",
    "inviteId": "0",
    "winxinOpenid": null,
    "rememberToken": null,
    "loginCheck": null,
    "emailVerifiedAt": null,
    "isMajor": "1",
    "receiveSms": "0",
    "createdAt": "2022-06-22 20:53:20",
    "updatedAt": "2022-06-23 02:16:56",
    "deletedAt": null,
    "inviteTime": null,
    "vipExpire": "2099-09-09 20:53:20",
    "hashId": "veqPdo9J0WxOBwQzNj60",
    "profile": {
      "birthday": null,
      "location": null,
      "address": null,
      "website": null,
      "timezone": null,
      "introduction": null,
      "bio": null,
      "userId": "11641894",
      "countryCode": null,
      "provinceId": null,
      "cityId": null
    },
    "isVip": 1,
    "socialId": "oGACExIzJUwafX_X6TCuRjwQNpuw",
    "socialNickname": "搞鸡玩家"
  },
  "msg": "ok"
}

$done({body:JSON.stringify(gjwj)});

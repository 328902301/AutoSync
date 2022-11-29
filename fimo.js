/****************************************

项目功能：Fimo-复古胶片相机 解锁Vip
下载地址：https://t.cn/A6ouHsIk
使用说明：打开先登录在开规则，否则无法使用
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/server\.yoyiapp\.com\/fimo-user\/user$ url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/fimo.js

[mitm]

hostname = server.yoyiapp.com

****************************************/


var chxm1023 = JSON.parse($response.body);

    chxm1023 = 
{
  "films" : [
    {
      "goodId" : "fimoAesthetic400",
      "pay" : "sync",
      "goodPrice" : 6,
      "time" : "2022-10-06 13:55:01",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "Aesthetic 400"
    },
    {
      "goodId" : "fimoBusiness400",
      "pay" : "sync",
      "goodPrice" : 0,
      "time" : "2022-10-06 13:55:01",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "Business 400"
    },
    {
      "goodId" : "fimoEK80",
      "pay" : "sync",
      "goodPrice" : 0,
      "time" : "2022-10-06 13:55:01",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "EK 80"
    },
    {
      "goodId" : "fimoIFPAN100",
      "pay" : "sync",
      "goodPrice" : 6,
      "time" : "2022-10-06 13:55:01",
      "tagName" : "",
      "photo" : 2,
      "goodName" : "PAN 100"
    },
    {
      "goodId" : "fimoLMcolor100",
      "pay" : "sync",
      "goodPrice" : 0,
      "time" : "2022-10-06 13:55:01",
      "tagName" : "",
      "photo" : 0,
      "goodName" : "LM Color 100"
    }
  ],
  "subscribe" : {
    "valid" : true,
    "forever" : 1,
    "endTime" : 0
  },
  "filmsCommonOrder" : [
    "fimoBlackTea50",
    "fimoDiary400",
    "fimoLMcolor100_w",
    "fimopro_3",
    "fimoUltramax400",
    "fimoTokyo500_w"
  ],
  "user" : {
    "id" : 3750618,
    "uuid" : "ojhXLwKcLZIr8XIwuJQPNknlnifo",
    "phone" : "",
    "sex" : null,
    "time" : "2022-10-06 13:54:40",
    "wx" : null,
    "location" : "",
    "icon" : "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIcuw70M9dfxWWPnbwmFuHCvzohJeZfHc3oEmpy6BkfU8Ddwe5Gw033V6cTWl01WntRMUcqOaricxA/132",
    "orgin" : "wx",
    "platform" : 1,
    "sync" : 1,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzc1MDYxOCwiZGV2aWNlIjoiOEY1MjlFN0UtREQ1RC00NUY5LTgwNDUtRDZGOTkzNUVFMjYwIiwidGltZSI6MTY2Njk3NzMzNTk1NiwiaWF0IjoxNjY2OTc3MzM1fQ.nx6qehYTzOR1MSkrIB7cQ2fkLgCnnKKxcSMgjX8MXc0",
    "email" : "",
    "name" : "chxm1023",
    "status" : 1
  }
}


$done({body : JSON.stringify(chxm1023)});

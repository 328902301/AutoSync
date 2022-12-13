/****************************************

项目名称：WidgetArt-自定义桌面小组件
下载地址：https://t.cn/A6GugI9C
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************


[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/WidgetArt.js

[mitm] 

hostname = api.revenuecat.com

****************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "request_date_ms" : 1670916721890,
  "request_date" : "2022-12-13T07:32:01Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-12-13T07:15:45Z",
    "original_application_version" : "27",
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.ziheng.widgetart.onetime" : {
        "warning" : "仅供学习，禁止转载或售卖",
        "wechat" : "chxm1023",
        "purchase_date" : "2022-09-09T09:09:09Z",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "feedback" : "chxm1023",
        "ownership_type" : "PURCHASED"
      }
    },
    "entitlements" : {
      "all" : {
        "wechat" : "chxm1023",
        "ownership_type" : "PURCHASED",
        "product_identifier" : "com.ziheng.widgetart.onetime",
        "feedback" : "chxm1023",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "purchase_date" : "2022-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : "2022-12-13T07:15:15Z",
    "original_app_user_id" : "$RCAnonymousID:7937cc279bfe463c9495003857f22faf",
    "last_seen" : "2022-12-13T07:18:05Z"
  }
}




$done({body : JSON.stringify(chxm1023)});

/****************************************

项目名称：AdGuard
下载地址：https://t.cn/A6xe1oaK
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/AdGuard.js


[mitm]
hostname = mobile-api.adguard.org

****************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]}

$done({body : JSON.stringify(chxm1023)});

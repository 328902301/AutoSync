/***********************************
> 應用名稱：Planny
> 軟件版本：6.9.2
> 下載地址：https://apps.apple.com/cn/app/id1515324201
> 特別說明：本腳本自用，禁止轉載銷售
 
[rewrite_local]
# ～ Planny 6 解鎖會員權限
^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body planny6.js
[mitm] 
hostname= api.revenuecat.com
***********************************/

var ddgksf2013={"request_date":"2022-07-31T12:39:35Z","request_date_ms":1659271175185,"subscriber":{"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.kevinreutter.Sagittarius.PremiumLifetime","purchase_date":"2022-07-31T12:38:21Z"}},"first_seen":"2022-07-31T12:37:44Z","last_seen":"2022-07-31T12:37:44Z","management_url":null,"non_subscriptions":{"com.kevinreutter.Sagittarius.PremiumLifetime":[{"id":"e69f79ea37","is_sandbox":true,"original_purchase_date":"2022-07-31T12:38:21Z","purchase_date":"2022-07-31T12:38:21Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID:7d194fd555aa4d399b98609fa633de22","original_application_version":"1.0","original_purchase_date":"2013-08-01T07:00:00Z","other_purchases":{"com.kevinreutter.Sagittarius.PremiumLifetime":{"purchase_date":"2022-07-31T12:38:21Z"}},"subscriptions":{}}}
$done({body : JSON.stringify(ddgksf2013)});
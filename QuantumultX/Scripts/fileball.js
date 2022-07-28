/***********************************
> 應用名稱：filebox
> 軟件版本：1.1.50
> 下載地址：https://apps.apple.com/cn/app/id1558391784
> 特別說明：本腳本自用，僅解決filebox無限製檢測購買記錄，禁止轉載銷售
 
[rewrite_local]
# ～ filebox解鎖會員權限（2022-02-18）
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response filebox.js
^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-echo-response filebox.js
[mitm] 
hostname=api.revenuecat.com
***********************************/

var ddgksf2013={"request_date":"2022-07-28T01:49:56Z","request_date_ms":1658972996156,"subscriber":{"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"2021-11-28T13:34:13Z"}},"first_seen":"2021-11-28T13:33:49Z","last_seen":"2022-07-27T23:29:27Z","management_url":null,"non_subscriptions":{"filebox_pro":[{"id":"297e7dfe25","is_sandbox":false,"original_purchase_date":"2021-11-28T13:34:13Z","purchase_date":"2021-11-28T13:34:13Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID:ae5dc365079741c8a0dedd79c1450d76","original_application_version":"70","original_purchase_date":"2021-11-27T15:21:35Z","other_purchases":{"filebox_pro":{"purchase_date":"2021-11-28T13:34:13Z"}},"subscriptions":{}}}
$done({body : JSON.stringify(ddgksf2013)});

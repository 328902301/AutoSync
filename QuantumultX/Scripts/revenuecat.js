var head = $request.headers;
var ua = head['User-Agent'];

//01 Filebox
//https://apps.apple.com/cn/app/id1558391784
if (ua.indexOf('Fileball') != -1) {
    Body = {"request_date":"1983-03-15T00:00:00Z","request_date_ms":416505600000,"subscriber":{"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"1983-03-15T00:00:00Z"}},"first_seen":"1983-03-15T00:00:00Z","last_seen":"1983-03-15T00:00:00Z","management_url":null,"non_subscriptions":{"filebox_pro":[{"id":"yingzi","is_sandbox":false,"original_purchase_date":"1983-03-15T00:00:00Z","purchase_date":"1983-03-15T00:00:00Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e","original_application_version":"170","original_purchase_date":"1983-03-15T00:00:00Z","other_purchases":{"filebox_pro":{"purchase_date":"1983-03-15T00:00:00Z"}},"subscriptions":{}}};
}

//02 Taio
//https://apps.apple.com/cn/app/id1527036273
if (ua.indexOf('Taio') != -1) {
    Body = {"request_date_ms":1660324774251,"request_date":"2022-08-12T17:19:34Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-08-12T16:17:04Z","original_application_version":"1052","other_purchases":{},"management_url":"https:\/\/apps.apple.com\/account\/subscriptions","subscriptions":{"taio_1499_1y_2w0_std_v2":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"trial","expires_date":"2029-08-26T16:28:27Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-08-12T16:28:27Z","purchase_date":"2022-08-12T16:28:27Z","store":"app_store"}},"entitlements":{"full-version":{"grace_period_expires_date":null,"purchase_date":"2022-08-12T16:28:27Z","product_identifier":"taio_1499_1y_2w0_std_v2","expires_date":"2029-08-26T16:28:27Z"}},"original_purchase_date":"2022-08-12T16:16:50Z","original_app_user_id":"$RCAnonymousID:3eb1216e78ca4771948cfd0a8569858","last_seen":"2022-08-12T16:17:04Z"}};
}

//03 Pixelmator Photo
//https://apps.apple.com/cn/app/id1444636541
if (ua.indexOf('Photo') != -1) {
    Body = {"request_date_ms":"1581750589992","request_date":"2020-02-15T07:09:49Z","subscriber":{"non_subscriptions":{},"first_seen":"2020-02-14T20:28:01Z","original_application_version":"216","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"is_sandbox":false,"period_type":"trial","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","original_purchase_date":"2020-02-15T07:07:58Z","purchase_date":"2020-02-15T07:07:58Z","store":"app_store"}},"entitlements":{"premium":{"expires_date":"2099-03-15T00:00:00Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"original_purchase_date":"2020-02-14T20:26:59Z","original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","last_seen":"2020-02-14T20:28:01Z"}};
}

//04 Pillow
//https://apps.apple.com/cn/app/id878691772
if (ua.indexOf('Pillow') != -1) {
    Body = {"request_date_ms":"1581750589992","request_date":"2020-02-15T07:09:49Z","subscriber":{"non_subscriptions":{},"first_seen":"2020-02-14T20:28:01Z","original_application_version":"216","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"is_sandbox":false,"period_type":"trial","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","original_purchase_date":"2020-02-15T07:07:58Z","purchase_date":"2020-02-15T07:07:58Z","store":"app_store"}},"entitlements":{"premium":{"expires_date":"2099-03-15T00:00:00Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"original_purchase_date":"2020-02-14T20:26:59Z","original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","last_seen":"2020-02-14T20:28:01Z"}};
}

//05 VSCO
//https://apps.apple.com/cn/app/id588013838
if (ua.indexOf('VSCO') != -1) {
    Body = {"request_date":"2022-08-22T15:45:13Z","request_date_ms":1661183113727,"subscriber":{"entitlements":{"membership":{"expires_date":"2099-03-15T00:00:00Z","grace_period_expires_date":null,"product_identifier":"vsco_global_2999_annual_7D_free","purchase_date":"2022-08-22T15:42:10Z"}},"first_seen":"2022-08-22T15:29:41Z","last_seen":"2022-08-22T15:30:16Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:7bb196482332456a92f0883d972bc680","original_application_version":"4396","original_purchase_date":"2022-08-22T15:27:36Z","other_purchases":{},"subscriptions":{"vsco_global_2999_annual_7D_free":{"billing_issues_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-08-22T15:42:11Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-08-22T15:42:10Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//06 Planny 6
//https://apps.apple.com/cn/app/id1515324201
if (ua.indexOf('Planny/6828 CFNetwork') != -1) {
    Body = {"request_date":"2022-07-31T12:39:35Z","request_date_ms":1659271175185,"subscriber":{"entitlements":{"premium":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.kevinreutter.Sagittarius.PremiumLifetime","purchase_date":"2022-07-31T12:38:21Z"}},"first_seen":"2022-07-31T12:37:44Z","last_seen":"2022-07-31T12:37:44Z","management_url":null,"non_subscriptions":{"com.kevinreutter.Sagittarius.PremiumLifetime":[{"id":"e69f79ea37","is_sandbox":false,"original_purchase_date":"2022-07-31T12:38:21Z","purchase_date":"2022-07-31T12:38:21Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID:7d194fd555aa4d399b98609fa633de22","original_application_version":"1.0","original_purchase_date":"2013-08-01T07:00:00Z","other_purchases":{"com.kevinreutter.Sagittarius.PremiumLifetime":{"purchase_date":"2022-07-31T12:38:21Z"}},"subscriptions":{}}};
}

//07 谜底时钟
//https://apps.apple.com/cn/app/id1536358464
if (ua.indexOf('%E8%B0%9C%E5%BA%95%E6%97%B6%E9%92%9F') != -1) {
    Body = {"request_date":"2022-09-07T10:39:48Z","request_date_ms":1662547188167,"subscriber":{"entitlements":{"Entitlement.Pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"tech.miidii.MDClock.pro","purchase_date":"2021-07-23T04:40:29Z"}},"first_seen":"2021-11-04T01:41:55Z","last_seen":"2022-09-07T10:39:40Z","management_url":null,"non_subscriptions":{"tech.miidii.MDClock.pro":[{"id":"9d8637e31a","is_sandbox":false,"original_purchase_date":"2021-07-23T04:40:29Z","purchase_date":"2021-07-23T04:40:29Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID:a2b9499d9cf64aca9130c175a4e51b04","original_application_version":"364","original_purchase_date":"2021-07-23T04:39:03Z","other_purchases":{"tech.miidii.MDClock.pro":{"purchase_date":"2021-07-23T04:40:29Z"}},"subscriptions":{}}};
}

//08 Darkroom
//https://apps.apple.com/cn/app/id953286746
if (ua.indexOf('Darkroom') != -1) {
    Body = {"request_date":"2022-09-08T12:38:57Z","request_date_ms":1662640737186,"subscriber":{"entitlements":{"co.bergen.Darkroom.entitlement.allToolsAndFilters":{"expires_date":"2052-09-15T12:38:24Z","product_identifier":"co.bergen.Darkroom.product.year.everything","purchase_date":"2022-09-08T12:38:24Z"},"co.bergen.Darkroom.entitlement.selectiveAdjustments":{"expires_date":"2052-09-15T12:38:24Z","product_identifier":"co.bergen.Darkroom.product.year.everything","purchase_date":"2022-09-08T12:38:24Z"}},"first_seen":"2022-09-08T12:37:51Z","last_seen":"2022-09-08T12:37:51Z","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:2f245117497f4200b4683f102da726bb","original_application_version":"60600","original_purchase_date":"2022-07-30T04:21:40Z","other_purchases":{},"subscriptions":{"co.bergen.Darkroom.product.year.everything":{"billing_issues_detected_at":null,"expires_date":"2052-09-15T12:38:24Z","is_sandbox":false,"original_purchase_date":"2022-09-08T12:38:25Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-09-08T12:38:24Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//09 Scanner Pro
//https://apps.apple.com/cn/app/id333710667
if (ua.indexOf('ScannerPro') != -1) {
    Body = {"request_date":"2020-06-05T11:54:41Z","request_date_ms":1591358081473,"subscriber":{"entitlements":{"plus":{"expires_date":"2030-02-18T07:52:54Z","product_identifier":"com.premium.yearly","purchase_date":"2020-02-11T07:52:54Z"}},"first_seen":"2020-05-29T07:59:41Z","last_seen":"2020-06-05T11:46:28Z","management_url":null,"non_subscriptions":{},"original_app_user_id":"httpstmeddgksf2021","original_application_version":"5","original_purchase_date":"2020-05-29T07:47:32Z","other_purchases":{},"subscriptions":{"com.premium.yearly":{"billing_issues_detected_at":null,"expires_date":"2030-02-18T07:52:54Z","is_sandbox":false,"original_purchase_date":"2020-02-11T07:52:55Z","period_type":"normal","purchase_date":"2020-02-11T07:52:54Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

Status = 'HTTP/1.1 200 OK';
Headers = {"Content-Type": "application/json"};

const Response = {
    status: Status,
    headers: Headers,
    body: JSON.stringify(Body)
};

$done(Response);

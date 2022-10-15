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
if (ua.indexOf('Planny') != -1) {
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

//10 1Blocker
//https://apps.apple.com/cn/app/id1365531024
if (ua.indexOf('1blocker') != -1) {
    Body = {"request_date":"2022-06-25T07:36:54Z","request_date_ms":1656142614383,"subscriber":{"entitlements":{"premium":{"expires_date":"2030-11-28T01:01:01Z","grace_period_expires_date":null,"product_identifier":"blocker.ios.subscription.yearly","purchase_date":"2020-11-14T01:01:01Z"}},"first_seen":"2020-11-14T01:01:01Z","last_seen":"2020-11-14T01:01:01Z","management_url":"itms-apps://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"9C57FE95-67YU-999B-09CB-GH89HJK89","original_application_version":"900","original_purchase_date":"2020-11-14T12:43:04Z","other_purchases":{},"subscriptions":{"blocker.ios.subscription.yearly":{"billing_issues_detected_at":null,"expires_date":"2030-11-28T01:01:01Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2020-11-14T12:45:21Z","period_type":"trial","purchase_date":"2020-11-14T12:45:20Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//11 Audiomack
//https://apps.apple.com/cn/app/id921765888
if (ua.indexOf('audiomack') != -1) {
    Body = {"request_date":"2021-01-24T09:52:51Z","request_date_ms":1611453171000,"subscriber":{"entitlements":{"Premium1":{"expires_date":"2999-09-28T09:00:00Z","grace_period_expires_date":null,"product_identifier":"com.audiomack.premium.2018","purchase_date":"2021-01-24T09:51:12Z"}},"first_seen":"2021-01-23T15:26:25Z","last_seen":"2021-01-24T09:51:16Z","management_url":"itms-apps://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:98acaef952e6c42b364db358b3a48487","original_application_version":"4396","original_purchase_date":"2022-01-23T12:45:28Z","other_purchases":{},"subscriptions":{"com.audiomack.premium.2018":{"billing_issues_detected_at":null,"expires_date":"2999-09-28T09:00:00Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2021-01-24T09:51:13Z","ownership_type":"PURCHASED","period_type":"premium","purchase_date":"2021-01-24T09:51:12Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//12 Gear浏览器
//https://apps.apple.com/cn/app/id1458962238
if (ua.indexOf('Gear') != -1) {
    Body = {"request_date":"2020-06-05T11:54:41Z","request_date_ms":1591358081473,"subscriber":{"entitlements":{"pro":{"expires_date":"2099-02-18T07:52:54Z","product_identifier":"com.circles.fin.premium.yearly","purchase_date":"2020-02-11T07:52:54Z"}},"first_seen":"2020-05-29T07:59:41Z","last_seen":"2020-06-05T11:46:28Z","management_url":null,"non_subscriptions":{},"original_app_user_id":"RbhyxwVVYSgnnUEtme2444PjccJ3","original_application_version":"5","original_purchase_date":"2020-05-29T07:47:32Z","other_purchases":{},"subscriptions":{"com.circles.fin.premium.yearly":{"billing_issues_detected_at":null,"expires_date":"2099-02-18T07:52:54Z","is_sandbox":false,"original_purchase_date":"2020-02-11T07:52:55Z","period_type":"normal","purchase_date":"2020-02-11T07:52:54Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//13 图图记账
//https://apps.apple.com/cn/app/id1546356856
if (ua.indexOf('totowallet') != -1) {
    Body = {"request_date_ms":1643262989454,"request_date":"2022-01-27T05:56:29Z","subscriber":{"non_subscriptions":{"com.ziheng.totowallet.onetimepurchase":[{"id":"6060eea19b","is_sandbox":true,"purchase_date":"2022-01-27T04:17:03Z","original_purchase_date":"2022-01-27T04:17:03Z","store":"app_store"}]},"first_seen":"2021-11-24T07:17:57Z","original_application_version":"1.0","other_purchases":{"com.ziheng.totowallet.onetimepurchase":{"purchase_date":"2022-01-27T04:17:03Z"}},"management_url":"itms-apps://apps.apple.com/account/subscriptions","subscriptions":{"com.ziheng.totowallet.monthly":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2022-02-11T11:15:28Z","grace_period_expires_date":null,"unsubscribe_detected_at":"2022-01-24T05:49:32Z","original_purchase_date":"2022-01-11T11:15:29Z","purchase_date":"2022-01-11T11:15:28Z","store":"app_store"},"com.ziheng.totowallet.yearly":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"trial","expires_date":"2021-12-21T09:56:52Z","grace_period_expires_date":null,"unsubscribe_detected_at":"2021-12-19T13:27:33Z","original_purchase_date":"2021-12-18T09:56:53Z","purchase_date":"2021-12-18T09:56:52Z","store":"app_store"}},"entitlements":{"all":{"grace_period_expires_date":null,"purchase_date":"2022-01-27T04:17:03Z","product_identifier":"com.ziheng.totowallet.onetimepurchase","expires_date":null}},"original_purchase_date":"2013-08-01T07:00:00Z","original_app_user_id":"$RCAnonymousID:04d7eec58523496c9b29d3d6f4580ab6","last_seen":"2022-01-27T04:17:54Z"}};
}

//14 Aphrodite
//https://apps.apple.com/cn/app/id1568289454
if (ua.indexOf('Aphrodite') != -1) {
    Body = {"AuthorR_E":"作者R_E","request_date_ms":1591358081473,"Congratulationongrabbingsubscriptiondata":"恭喜您抓取到订阅源数据","request_date":"2020-06-05T11:54:41Z","subscriber":{"non_subscriptions":{"all":[{"id":"123","is_sandbox":false,"purchase_date":"2019-12-01T00:00:00Z","original_purchase_date":"2019-12-01T00:00:00Z","product_identifier":"com.ziheng.aphrodite.lifetime","store":"app_store"}],"com.ziheng.aphrodite.lifetime":[{"id":"123","is_sandbox":false,"purchase_date":"2019-12-01T00:00:00Z","original_purchase_date":"2019-12-01T00:00:00Z","product_identifier":"com.ziheng.aphrodite.lifetime","store":"app_store"}]},"first_seen":"2000-01-01T01:01:01Z","original_application_version":"20","other_purchases":{"com.ziheng.aphrodite.lifetime":{"is_sandbox":false,"period_type":"normal","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2030-01-01T01:01:01Z","grace_period_expires_date":null,"original_purchase_date":"2020-01-01T01:01:01Z","purchase_date":"2020-01-01T01:01:01Z","store":"app_store"}},"management_url":"itms-apps://apps.apple.com/account/subscriptions","subscriptions":{"com.ziheng.aphrodite.lifetime":{"is_sandbox":false,"period_type":"normal","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2030-01-01T01:01:01Z","grace_period_expires_date":null,"original_purchase_date":"2020-01-01T01:01:01Z","purchase_date":"2020-01-01T01:01:01Z","store":"app_store"}},"entitlements":{"all":{"grace_period_expires_date":null,"purchase_date":"2020-01-01T01:01:01Z","product_identifier":"com.ziheng.aphrodite.lifetime","expires_date":"2030-01-01T01:01:01Z"},"com.ziheng.aphrodite.lifetime":{"is_sandbox":false,"period_type":"normal","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2030-01-01T01:01:01Z","grace_period_expires_date":null,"product_identifier":"com.ziheng.aphrodite.lifetime","original_purchase_date":"2020-01-01T01:01:01Z","purchase_date":"2020-01-01T01:01:01Z","store":"app_store"}},"original_purchase_date":"2000-01-01T01:01:01Z","original_app_user_id":"0099LK05-2799-489J-09CD-D9IJSEB09876","last_seen":"2030-01-01T01:01:01Z"},"Commercialuseprohibited":"禁止商业用途","你可以加入群组获取帮助":"https://t.me/yqc_777","Forlearningreferenceonly":"仅供学习参考","Youowntherighttouseit,nodoubtaboutitbutnottoshare":"您拥有使用权这是毋庸置疑的且不可以分享","Butyoumaynotusethisdatawithoutattribution":"但你不可以使用本数据却不注明出处","Youcanjointhegroupforhelp":"https://t.me/yqc_777"};
}

//15 Apollo
//https://apps.apple.com/cn/app/id1616467801
if (ua.indexOf('apollo') != -1) {
    Body = {"request_date_ms":1643262989454,"request_date":"2022-01-27T05:56:29Z","subscriber":{"non_subscriptions":{"com.ziheng.totowallet.onetimepurchase":[{"id":"6060eea19b","is_sandbox":true,"purchase_date":"2022-01-27T04:17:03Z","original_purchase_date":"2022-01-27T04:17:03Z","store":"app_store"}]},"first_seen":"2021-11-24T07:17:57Z","original_application_version":"1.0","other_purchases":{"com.ziheng.totowallet.onetimepurchase":{"purchase_date":"2022-01-27T04:17:03Z"}},"management_url":"itms-apps://apps.apple.com/account/subscriptions","subscriptions":{"com.ziheng.totowallet.monthly":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2022-02-11T11:15:28Z","grace_period_expires_date":null,"unsubscribe_detected_at":"2022-01-24T05:49:32Z","original_purchase_date":"2022-01-11T11:15:29Z","purchase_date":"2022-01-11T11:15:28Z","store":"app_store"},"com.ziheng.totowallet.yearly":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"trial","expires_date":"2021-12-21T09:56:52Z","grace_period_expires_date":null,"unsubscribe_detected_at":"2021-12-19T13:27:33Z","original_purchase_date":"2021-12-18T09:56:53Z","purchase_date":"2021-12-18T09:56:52Z","store":"app_store"}},"entitlements":{"all":{"grace_period_expires_date":null,"purchase_date":"2022-01-27T04:17:03Z","product_identifier":"com.ziheng.totowallet.onetimepurchase","expires_date":null}},"original_purchase_date":"2013-08-01T07:00:00Z","original_app_user_id":"$RCAnonymousID:04d7eec58523496c9b29d3d6f4580ab6","last_seen":"2022-01-27T04:17:54Z"}};
}

//16 Grow
//https://apps.apple.com/cn/app/id1560604814
if (ua.indexOf('Grow') != -1) {
    Body = {"request_date_ms":1662599120248,"request_date":"2022-09-08T01:05:20Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-09-08T01:04:03Z","original_application_version":"810","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{"grow_1y_128":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"trial","expires_date":"9999-09-15T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":"2022-09-08T01:05:19Z","original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"}},"entitlements":{"grow.pro":{"grace_period_expires_date":null,"purchase_date":"2022-09-08T01:04:17Z","product_identifier":"grow_1y_128","expires_date":"9999-09-15T01:04:17Z"}},"original_purchase_date":"2022-09-07T13:05:43Z","original_app_user_id":"$RCAnonymousID:1a143bf1ce22484ca9927aa9bb41727f","last_seen":"2022-09-08T01:04:03Z"}};
}

//17 MoneyThings
//https://apps.apple.com/cn/app/id1549694221
if (ua.indexOf('MoneyThings') != -1) {
    Body = {"request_date_ms":1662963584281,"request_date":"2022-09-12T06:19:44Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-08-10T05:38:55Z","original_application_version":"318","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{"com.lishaohui.cashflow.monthlysubscription":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"9999-9-9T06:06:52Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"9999-09-12T06:06:53Z","purchase_date":"9999-09-12T06:06:52Z","store":"app_store"}},"entitlements":{"Premium":{"grace_period_expires_date":null,"purchase_date":"2022-09-12T06:06:52Z","product_identifier":"com.lishaohui.cashflow.monthlysubscription","expires_date":"9999-9-9T06:06:52Z"}},"original_purchase_date":"2022-08-09T15:58:31Z","original_app_user_id":"$RCAnonymousID:5a03aabdc1f349a0a719b60399965010","last_seen":"2022-09-12T02:54:04Z"}};
}

//18 目标地图
//https://apps.apple.com/cn/app/id1555022550
if (ua.indexOf('%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE') != -1) {
    Body = {"request_date":"2022-09-22T02:28:50Z","request_date_ms":1663813730272,"subscriber":{"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.happydogteam.relax.lifetimePro","purchase_date":"2022-09-22T02:19:32Z"}},"first_seen":"2022-09-22T02:12:43Z","last_seen":"2022-09-22T02:12:43Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:fe9dc27c6cd44b908576a7bd2eae8e24","original_application_version":"322","original_purchase_date":"2022-09-10T12:59:20Z","other_purchases":{},"subscriptions":{"com.happydogteam.relax.lifetimePro":{"billing_issues_detected_at":null,"expires_date":null,"grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-09-22T02:19:33Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-09-22T02:19:32Z","store":"app_store","unsubscribe_detected_at":"2022-09-22T02:21:43Z"}}}};
}

//19 Color Widgets
//https://apps.apple.com/cn/app/id1531594277
if (ua.indexOf('WidgetsApp') != -1) {
    Body = {"request_date":"2022-09-24T08:42:42Z","request_date_ms":1664008962171,"subscriber":{"entitlements":{"pro":{"expires_date":"2029-05-26T05:05:04Z","product_identifier":"cw_1999_ly_3d0","purchase_date":"2022-04-09T05:05:04Z"}},"first_seen":"2022-09-24T08:38:47Z","last_seen":"2022-09-24T08:38:47Z","management_url":null,"non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:b0f99bc892fa41e9841b9f906ac884ef","original_application_version":"1","original_purchase_date":"2022-09-24T07:44:56Z","other_purchases":{},"subscriptions":{"cw_1999_ly_3d0":{"billing_issues_detected_at":null,"expires_date":"2029-05-26T05:05:04Z","is_sandbox":false,"original_purchase_date":"2022-04-09T05:05:04Z","period_type":"normal","purchase_date":"2022-04-09T05:05:04Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//20 谜底黑胶
//https://apps.apple.com/cn/app/id1606306441
if (ua.indexOf('%E8%B0%9C%E5%BA%95%E9%BB%91%E8%83%B6') != -1) {
    Body = {"request_date":"2022-09-19T14:08:44Z","request_date_ms":1663596524426,"subscriber":{"entitlements":{"Entitlement.Pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"tech.miidii.MDVinyl.lifetime","purchase_date":"2022-09-19T13:58:44Z"}},"first_seen":"2022-09-19T13:57:54Z","last_seen":"2022-09-19T13:57:54Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:d855e7acfaf842a291002eef65924eb8","original_application_version":"599","original_purchase_date":"2022-09-11T05:42:36Z","other_purchases":{},"subscriptions":{"tech.miidii.MDVinyl.lifetime":{"billing_issues_detected_at":null,"expires_date":null,"grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-09-19T13:58:48Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2022-09-19T13:58:44Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//21 Anybox-跨平台书签管理及稍后读
//https://apps.apple.com/cn/app/id1593408455
if (ua.indexOf('Anybox') != -1) {
    Body = {"request_date_ms":1665733801390,"request_date":"2022-10-14T07:50:01Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-10-14T07:45:36Z","original_application_version":"47","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{"cc.anybox.Anybox.annual":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"annual","expires_date":"2029-10-14T07:49:44Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-10-14T07:49:45Z","purchase_date":"2022-10-14T07:49:44Z","store":"app_store"}},"entitlements":{"pro":{"grace_period_expires_date":null,"purchase_date":"2022-10-14T07:49:44Z","product_identifier":"cc.anybox.Anybox.annual","expires_date":"2029-10-14T07:49:44Z"}},"original_purchase_date":"2022-10-14T07:26:13Z","original_app_user_id":"$RCAnonymousID:Eric","last_seen":"2022-10-14T07:45:36Z"}};
}

//22 Vision
//https://apps.apple.com/cn/app/id1289070327
if (ua.indexOf('Vision') != -1) {
    Body = {"request_date_ms":1664685664562,"request_date":"2022-10-02T04:41:04Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-08-03T12:18:43Z","original_application_version":"319","other_purchases":{},"management_url":null,"subscriptions":{"vis_1y_2w_free":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"trial","expires_date":"9999-08-17T12:22:48Z","grace_period_expires_date":null,"unsubscribe_detected_at":"2022-08-03T12:28:20Z","original_purchase_date":"2022-08-03T12:22:48Z","purchase_date":"2022-08-03T12:22:48Z","store":"app_store"}},"entitlements":{"pro":{"grace_period_expires_date":null,"purchase_date":"2022-08-03T12:22:48Z","product_identifier":"vis_1y_2w_free","expires_date":"9999-08-17T12:22:48Z"}},"original_purchase_date":"2022-08-03T12:17:40Z","original_app_user_id":"$RCAnonymousID:df853b89cacb42f8b14c1012b9b66e6d","last_seen":"2022-10-02T03:59:06Z"}};
}

Status = 'HTTP/1.1 200 OK';
Headers = {"Content-Type": "application/json"};

const Response = {
    status: Status,
    headers: Headers,
    body: JSON.stringify(Body)
};

$done(Response);

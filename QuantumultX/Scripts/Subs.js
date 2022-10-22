var head = $request.headers;
var ua = head['User-Agent'];

//01 Planny 3
//https://apps.apple.com/cn/app/id1289070327
if (ua.indexOf('Planny') != -1) {
    Body = {"request_date":"2020-02-15T07:09:49Z","request_date_ms":"1581750589992","subscriber":{"entitlements":{"premium":{"expires_date":"2099-09-09T07:07:58Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"first_seen":"2020-02-14T20:28:01Z","last_seen":"2020-02-14T20:28:01Z","non_subscriptions":{},"original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","original_application_version":"216","original_purchase_date":"2020-02-14T20:26:59Z","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"billing_issues_detected_at":null,"expires_date":"2099-09-09T07:07:58Z","is_sandbox":false,"original_purchase_date":"2020-02-15T07:07:58Z","period_type":"normal","purchase_date":"2020-02-15T07:07:58Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//02 Anybox-跨平台书签管理及稍后读
//https://apps.apple.com/cn/app/id1593408455
if (ua.indexOf('Anybox') != -1) {
    Body = {"request_date":"2022-10-14T07:50:01Z","request_date_ms":1665733801390,"subscriber":{"entitlements":{"pro":{"expires_date":"2029-10-14T07:49:44Z","grace_period_expires_date":null,"product_identifier":"cc.anybox.Anybox.annual","purchase_date":"2022-10-14T07:49:44Z"}},"first_seen":"2022-10-14T07:45:36Z","last_seen":"2022-10-14T07:45:36Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:Eric","original_application_version":"47","original_purchase_date":"2022-10-14T07:26:13Z","other_purchases":{},"subscriptions":{"cc.anybox.Anybox.annual":{"billing_issues_detected_at":null,"expires_date":"2029-10-14T07:49:44Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-10-14T07:49:45Z","ownership_type":"PURCHASED","period_type":"annual","purchase_date":"2022-10-14T07:49:44Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//03 Rapchat：制作热门歌曲
//https://apps.apple.com/cn/app/id804913240
if (ua.indexOf('Rapchat') != -1) {
    Body = {"request_date":"2022-10-21T22:29:14Z","request_date_ms":1666391354912,"subscriber":{"entitlements":{"Gold":{"expires_date":"2029-05-26T05:05:04Z","product_identifier":"rc_4999_1y_7d_antares","purchase_date":"2022-04-09T05:05:04Z"}},"first_seen":"2022-10-21T22:28:22Z","last_seen":"2022-10-21T22:28:34Z","management_url":null,"non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:1e9e762f4c8f4f53a6e7339db8af267a","original_application_version":"10522","original_purchase_date":"2022-10-21T22:03:00Z","other_purchases":{},"subscriptions":{"rc_4999_1y_7d_antares":{"billing_issues_detected_at":null,"expires_date":"2029-05-26T05:05:04Z","is_sandbox":false,"original_purchase_date":"2022-04-09T05:05:04Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2022-04-09T05:05:04Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

Status = 'HTTP/1.1 200 OK';
Headers = {"Content-Type": "application/json"};

const Response = {
    status: Status,
    headers: Headers,
    body: JSON.stringify(Body)
};

$done(Response);

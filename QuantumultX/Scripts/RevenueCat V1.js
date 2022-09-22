var head = $request.headers;
var ua = head['User-Agent'];

//Planny 3
if (ua.indexOf('Planny') != -1) {
    Body = {"request_date":"2020-02-15T07:09:49Z","request_date_ms":"1581750589992","subscriber":{"entitlements":{"premium":{"expires_date":"2099-09-09T07:07:58Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"first_seen":"2020-02-14T20:28:01Z","last_seen":"2020-02-14T20:28:01Z","non_subscriptions":{},"original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","original_application_version":"216","original_purchase_date":"2020-02-14T20:26:59Z","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"billing_issues_detected_at":null,"expires_date":"2099-09-09T07:07:58Z","is_sandbox":false,"original_purchase_date":"2020-02-15T07:07:58Z","period_type":"normal","purchase_date":"2020-02-15T07:07:58Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

//目标地图
if (ua.indexOf('%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE') != -1) {
    Body = {"request_date":"2022-09-22T02:28:50Z","request_date_ms":1663813730272,"subscriber":{"entitlements":{"pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"com.happydogteam.relax.lifetimePro","purchase_date":"2022-09-22T02:19:32Z"}},"first_seen":"2022-09-22T02:12:43Z","last_seen":"2022-09-22T02:12:43Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:fe9dc27c6cd44b908576a7bd2eae8e24","original_application_version":"322","original_purchase_date":"2022-09-10T12:59:20Z","other_purchases":{},"subscriptions":{"com.happydogteam.relax.lifetimePro":{"billing_issues_detected_at":null,"expires_date":null,"grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-09-22T02:19:33Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-09-22T02:19:32Z","store":"app_store","unsubscribe_detected_at":"2022-09-22T02:21:43Z"}}}};
}

Status = 'HTTP/1.1 200 OK';
Headers = {"Content-Type": "application/json"};

const Response = {
    status: Status,
    headers: Headers,
    body: JSON.stringify(Body)
};

$done(Response);
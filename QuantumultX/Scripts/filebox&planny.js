/********************************
Membership unlock for filebox & Planny
Please note that you may need to reinstall app for script to work.

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ url script-request-header filebox&planny.js
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ url script-response-body filebox&planny.js

[MITM]
hostname = api.revenuecat.com
********************************/

const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
	'filebox': { name: 'filebox_pro', id: 'filebox_pro' },
	'Planny': { name: 'premium', id: 'com.kevinreutter.Sagittarius.PremiumLifetime' }
};
const data = {
	"expires_date": "2030-02-18T07:52:54Z",
	"original_purchase_date": "2020-02-11T07:52:55Z",
	"purchase_date": "2020-02-11T07:52:54Z"
};

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
	obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
	obj.subscriber.entitlement = obj.subscriber.entitlement || {};
	for (const i in list) {
		if (new RegExp(`^${i}`, `i`).test(ua)) {
			obj.subscriber.subscriptions[list[i].id] = data;
			obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
			obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
	resp.body = JSON.stringify(obj);
}

$done(resp);
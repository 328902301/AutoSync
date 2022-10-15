/********************************
Membership unlock for VSCO & 1Blocker
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-request ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js
http-response ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

[MITM]
hostname = api.revenuecat.com
********************************/

const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
	'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
	'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.yearly' }
	'Fileball': { name: 'filebox_pro', id: 'filebox_pro' }
	'Taio': { name: 'full-version', id: 'taio_1499_1y_2w0_std_v2' }
	'Photo': { name: 'premium', id: 'com.neybox.pillow.premium.year' }
	'Planny': { name: 'premium', id: 'com.kevinreutter.Sagittarius.PremiumLifetime' }
	'%E8%B0%9C%E5%BA%95%E6%97%B6%E9%92%9F': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.pro' }
	'Darkroom': { name: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', id: 'co.bergen.Darkroom.product.year.everything' }
	'%E8%B0%9C%E5%BA%95%E9%BB%91%E8%83%B6': { name: 'Entitlement.Pro', id: 'tech.miidii.MDVinyl.lifetime' }
	'Anybox': { name: 'pro', id: 'cc.anybox.Anybox.annual' }
	'Vision': { name: 'pro', id: 'vis_1y_2w_free' }
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

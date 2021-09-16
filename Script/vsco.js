/*
VSCO 解锁高级特权

***************************
QuantumultX:

[rewrite_local]
^https:\/\/(api\.revenuecat\.com\/v\d\/subscribers|vsco\.co\/api\/subscriptions\/\d\.\d\/user-subscriptions)\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

[mitm]
hostname = vsco.co, api.revenuecat.com

**************************/

let obj = JSON.parse($response.body || '{}');

if (obj.user_subscription) {
	obj.user_subscription["expires_on_sec"] = 4102415999;
	obj.user_subscription["expired"] = false;
	obj.user_subscription["payment_type"] = 2;
	obj.user_subscription["is_trial_period"] = true;
	obj.user_subscription["starts_on_sec"] = 4102415999;
	obj.user_subscription["is_active"] = true;
	obj.user_subscription["auto_renew"] = true;
	obj.user_subscription["last_verified_sec"] = 4102415999;
	obj.user_subscription["subscription_code"] = "VSCOANNUAL";
	obj.user_subscription["user_id"] = 54624336;
	obj.user_subscription["source"] = 1;
}

if (obj.subscriber) {
	obj.subscriber.subscriptions = {
		"com.circles.fin.premium.yearly": {
			"billing_issues_detected_at": null,
			"expires_date": "2099-12-31T07:52:54Z",
			"is_sandbox": false,
			"original_purchase_date": "2020-02-11T07:52:55Z",
			"period_type": "normal",
			"purchase_date": "2020-02-11T07:52:54Z",
			"store": "app_store",
			"unsubscribe_detected_at": null
		}
	};
	obj.subscriber.entitlements = {
		"membership": {
			"expires_date": "2099-12-31T07:52:54Z",
			"product_identifier": "com.circles.fin.premium.yearly",
			"purchase_date": "2020-02-11T07:52:54Z"
		}
	};
}

$done({
	body: JSON.stringify(obj)
});

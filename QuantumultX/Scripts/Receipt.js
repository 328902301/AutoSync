var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];

if (bundle_id == "com.heliang.super.widget") {
	obj = {"receipt":{"receipt_type":"Production","adam_id":1569291816,"app_item_id":1569291816,"bundle_id":"com.heliang.super.widget","application_version":"40","download_id":500935934584949171,"version_external_identifier":846821007,"receipt_creation_date":"2022-01-2602:55:19Etc/GMT","receipt_creation_date_ms":"1643165719000","receipt_creation_date_pst":"2022-01-2518:55:19America/Los_Angeles","request_date":"2022-02-0517:13:48Etc/GMT","request_date_ms":"1644081228639","request_date_pst":"2022-02-0509:13:48America/Los_Angeles","original_purchase_date":"2021-12-0119:01:34Etc/GMT","original_purchase_date_ms":"1638385294000","original_purchase_date_pst":"2021-12-0111:01:34America/Los_Angeles","original_application_version":"22","in_app":[{"quantity":"1","product_id":"com.focoslive","transaction_id":"730000766600650","original_transaction_id":"730000766600650","purchase_date":"2021-11-2517:07:45Etc/GMT","purchase_date_ms":"1637860065000","purchase_date_pst":"2021-11-2509:07:45America/Los_Angeles","original_purchase_date":"2021-11-2517:07:48Etc/GMT","original_purchase_date_ms":"1637860068000","original_purchase_date_pst":"2021-11-2509:07:48America/Los_Angeles","expires_date":"2099-09-0917:07:45Etc/GMT","expires_date_ms":"4092647115000","expires_date_pst":"2099-09-0909:07:45America/Los_Angeles","web_order_line_item_id":"730000330755327","is_trial_period":"false","is_in_intro_offer_period":"false","in_app_ownership_type":"PURCHASED"}]},"environment":"Production","latest_receipt_info":[{"quantity":"1","product_id":"com.focoslive","transaction_id":"730000766600650","original_transaction_id":"730000766600650","purchase_date":"2021-11-2517:07:45Etc/GMT","purchase_date_ms":"1637860065000","purchase_date_pst":"2021-11-2509:07:45America/Los_Angeles","original_purchase_date":"2021-11-2517:07:48Etc/GMT","original_purchase_date_ms":"1637860068000","original_purchase_date_pst":"2021-11-2509:07:48America/Los_Angeles","expires_date":"2099-09-0917:07:45Etc/GMT","expires_date_ms":"4092647115000","expires_date_pst":"2099-09-0909:07:45America/Los_Angeles","web_order_line_item_id":"730000330755327","is_trial_period":"false","is_in_intro_offer_period":"false","in_app_ownership_type":"PURCHASED","subscription_group_identifier":"20902245"}],"latest_receipt":"","status":0};
}

if (bundle_id == "xxxxx") {
	obj = 
}

if (bundle_id == "xxxxx") {
	obj = 
}

if (bundle_id == "xxxxx") {
	obj = 
}

if (bundle_id == "xxxxx") {
	obj = 
}

if (bundle_id == "xxxxx") {
	obj = 
}

if (bundle_id == "xxxxx") {
	obj = 
}

if (bundle_id == "xxxxx") {
	obj = 
}

if (bundle_id == "xxxxx") {
	obj = 
}

$done({body: JSON.stringify(obj)});

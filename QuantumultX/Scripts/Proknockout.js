/*
*Aman - 194nb.com
*/
var body = $response.body;
var objk = JSON.parse(body);

objk = {"environment":"Production", 
"receipt":{"receipt_type":"Production", "adam_id":944665061, "app_item_id":944665061, "bundle_id":"com.loveyouchenapps.knockout", "application_version":"7.69", "download_id":83014914963871, "version_external_identifier":851558724, "receipt_creation_date":"2022-09-04 12:30:49 Etc/GMT", "receipt_creation_date_ms":"1662294649000", "receipt_creation_date_pst":"2022-09-04 05:30:49 America/Los_Angeles", "request_date":"2022-09-04 12:33:30 Etc/GMT", "request_date_ms":"1662294810819", "request_date_pst":"2022-09-04 05:33:30 America/Los_Angeles", "original_purchase_date":"2016-03-26 13:57:57 Etc/GMT", "original_purchase_date_ms":"1459000677000", "original_purchase_date_pst":"2016-03-26 06:57:57 America/Los_Angeles", "original_application_version":"1.55", 
"in_app":[
{"quantity":"1", "product_id":"com.knockout.halfyearplus", "transaction_id":"730000582440350", "original_transaction_id":"730000582440350", "purchase_date":"2021-01-11 17:07:06 Etc/GMT", "purchase_date_ms":"1610384826000", "purchase_date_pst":"2021-01-11 09:07:06 America/Los_Angeles", "original_purchase_date":"2021-01-11 17:07:06 Etc/GMT", "original_purchase_date_ms":"1610384826000", "original_purchase_date_pst":"2021-01-11 09:07:06 America/Los_Angeles", "expires_date":"2099-09-09 17:07:06 Etc/GMT", "expires_date_ms":"4092647115000", "expires_date_pst":"2099-09-09 09:07:06 America/Los_Angeles", "web_order_line_item_id":"730000235883267", "is_trial_period":"false", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED"}]}, 
"latest_receipt_info":[
{"quantity":"1", "product_id":"com.knockout.halfyearplus", "transaction_id":"730000582440350", "original_transaction_id":"730000582440350", "purchase_date":"2021-01-11 17:07:06 Etc/GMT", "purchase_date_ms":"1610384826000", "purchase_date_pst":"2021-01-11 09:07:06 America/Los_Angeles", "original_purchase_date":"2021-01-11 17:07:06 Etc/GMT", "original_purchase_date_ms":"1610384826000", "original_purchase_date_pst":"2021-01-11 09:07:06 America/Los_Angeles", "expires_date":"2099-09-09 17:07:06 Etc/GMT", "expires_date_ms":"4092647115000", "expires_date_pst":"2099-09-09 09:07:06 America/Los_Angeles", "web_order_line_item_id":"730000235883267", "is_trial_period":"false", "is_in_intro_offer_period":"false", "in_app_ownership_type":"PURCHASED", "subscription_group_identifier":"20386379"}], 
"latest_receipt":"", 
"pending_renewal_info":[
{"auto_renew_product_id":"com.knockout.halfyearplus", "original_transaction_id":"730000582440350", "product_id":"com.knockout.halfyearplus", "auto_renew_status":"0"}], "status":0}
	

body = JSON.stringify(objk);

$done({body});
/*
aptv恢复购买
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body url script-response-body https://raw.githubusercontent.com/tangxj123/xian/main/aptv.js
[mitm]
hostname = api.revenuecat.com,
*/

var obj = JSON.parse($response.body);
obj={
	{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1361012099,
    "receipt_creation_date" : "2022-09-28 18:12:47 Etc/GMT",
    "bundle_id" : "com.photo.beautytuneapp",
    "original_purchase_date" : "2022-09-28 17:51:36 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1664388662000",
        "expires_date" : "2099-09-09 18:11:02 Etc/GMT",
        "expires_date_pst" : "2099-09-09 11:11:02 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "730000970737934",
        "is_trial_period" : "false",
        "original_transaction_id" : "730000970737934",
        "purchase_date" : "2022-09-28 18:11:02 Etc/GMT",
        "product_id" : "com.photo.facelab.wt1week3dtrial",
        "original_purchase_date_pst" : "2022-09-28 11:11:03 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1664388663000",
        "web_order_line_item_id" : "730000435337733",
        "expires_date_ms" : "4092647115000",
        "purchase_date_pst" : "2022-09-28 11:11:02 America/Los_Angeles",
        "original_purchase_date" : "2022-09-28 18:11:03 Etc/GMT"
      }
    ],
    "adam_id" : 1361012099,
    "receipt_creation_date_pst" : "2022-09-28 11:12:47 America/Los_Angeles",
    "request_date" : "2022-09-28 18:12:48 Etc/GMT",
    "request_date_pst" : "2022-09-28 11:12:48 America/Los_Angeles",
    "version_external_identifier" : 851202635,
    "request_date_ms" : "1664388768088",
    "original_purchase_date_pst" : "2022-09-28 10:51:36 America/Los_Angeles",
    "application_version" : "2.33.102",
    "original_purchase_date_ms" : "1664387496000",
    "receipt_creation_date_ms" : "1664388767000",
    "original_application_version" : "2.33.102",
    "download_id" : 501787974996988200
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.photo.facelab.wt1week3dtrial",
      "original_transaction_id" : "730000970737934",
      "auto_renew_product_id" : "com.photo.facelab.wt1week3dtrial",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1664388662000",
      "expires_date" : "2099-09-09 18:11:02 Etc/GMT",
      "expires_date_pst" : "2099-09-09 11:11:02 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "730000970737934",
      "is_trial_period" : "false",
      "original_transaction_id" : "730000970737934",
      "purchase_date" : "2022-09-28 18:11:02 Etc/GMT",
      "product_id" : "com.photo.facelab.wt1week3dtrial",
      "original_purchase_date_pst" : "2022-09-28 11:11:03 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20443544",
      "original_purchase_date_ms" : "1664388663000",
      "web_order_line_item_id" : "730000435337733",
      "expires_date_ms" : "4092647115000",
      "purchase_date_pst" : "2022-09-28 11:11:02 America/Los_Angeles",
      "original_purchase_date" : "2022-09-28 18:11:03 Etc/GMT"
    }
  ],
  "latest_receipt" : ""
}


$done({body: JSON.stringify(obj)});

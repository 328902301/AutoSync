/*
iHttp Brower unlock vip
QX：
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

QX MITM = buy.itunes.apple.com
*/

var obj = JSON.parse($response.body);
obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1487883620,
    "app_item_id": 1487883620,
    "bundle_id": "com.cyp.ihttpBorwserPro",
    "application_version": "60",
    "download_id": 500492800489003045,
    "version_external_identifier": 843002225,
    "receipt_creation_date": "2021-07-13 05:52:07 Etc/GMT",
    "receipt_creation_date_ms": "1626155527000",
    "receipt_creation_date_pst": "2021-07-12 22:52:07 America/Los_Angeles",
    "request_date": "2021-07-13 05:52:08 Etc/GMT",
    "request_date_ms": "1626155528424",
    "request_date_pst": "2021-07-12 22:52:08 America/Los_Angeles",
    "original_purchase_date": "2021-06-28 06:32:21 Etc/GMT",
    "original_purchase_date_ms": "1624861941000",
    "original_purchase_date_pst": "2021-06-27 23:32:21 America/Los_Angeles",
    "original_application_version": "58",
    "in_app": [{
        "quantity": "1",
        "product_id": "ihttp_browser_month_order",
        "transaction_id": "180001013111378",
        "original_transaction_id": "180001001607872",
        "purchase_date": "2021-07-13 05:43:45 Etc/GMT",
        "purchase_date_ms": "1626155025000",
        "purchase_date_pst": "2021-07-12 22:43:45 America/Los_Angeles",
        "original_purchase_date": "2021-06-28 06:53:33 Etc/GMT",
        "original_purchase_date_ms": "1624863213000",
        "original_purchase_date_pst": "2021-06-27 23:53:33 America/Los_Angeles",
        "expires_date": "2215-08-13 05:43:45 Etc/GMT",
        "expires_date_ms": "7750800036000",
        "expires_date_pst": "2215-08-12 22:43:45 America/Los_Angeles",
        "web_order_line_item_id": "180000425975183",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      },
      {
        "quantity": "1",
        "product_id": "ihttp_browser_month_order",
        "transaction_id": "180001001607872",
        "original_transaction_id": "180001001607872",
        "purchase_date": "2021-06-28 06:53:32 Etc/GMT",
        "purchase_date_ms": "1624863212000",
        "purchase_date_pst": "2021-06-27 23:53:32 America/Los_Angeles",
        "original_purchase_date": "2021-06-28 06:53:33 Etc/GMT",
        "original_purchase_date_ms": "1624863213000",
        "original_purchase_date_pst": "2021-06-27 23:53:33 America/Los_Angeles",
        "expires_date": "2021-07-01 06:53:32 Etc/GMT",
        "expires_date_ms": "1625122412000",
        "expires_date_pst": "2021-06-30 23:53:32 America/Los_Angeles",
        "web_order_line_item_id": "180000425975182",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "latest_receipt_info": [{
      "quantity": "1",
      "product_id": "ihttp_browser_month_order",
      "transaction_id": "180001013111378",
      "original_transaction_id": "180001001607872",
      "purchase_date": "2021-07-13 05:43:45 Etc/GMT",
      "purchase_date_ms": "1626155025000",
      "purchase_date_pst": "2021-07-12 22:43:45 America/Los_Angeles",
      "original_purchase_date": "2021-06-28 06:53:33 Etc/GMT",
      "original_purchase_date_ms": "1624863213000",
      "original_purchase_date_pst": "2021-06-27 23:53:33 America/Los_Angeles",
      "expires_date": "2215-08-13 05:43:45 Etc/GMT",
      "expires_date_ms": "7750800036000",
      "expires_date_pst": "2215-08-12 22:43:45 America/Los_Angeles",
      "web_order_line_item_id": "180000425975183",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20597391"
    },
    {
      "quantity": "1",
      "product_id": "ihttp_browser_month_order",
      "transaction_id": "180001001607872",
      "original_transaction_id": "180001001607872",
      "purchase_date": "2021-06-28 06:53:32 Etc/GMT",
      "purchase_date_ms": "1624863212000",
      "purchase_date_pst": "2021-06-27 23:53:32 America/Los_Angeles",
      "original_purchase_date": "2021-06-28 06:53:33 Etc/GMT",
      "original_purchase_date_ms": "1624863213000",
      "original_purchase_date_pst": "2021-06-27 23:53:33 America/Los_Angeles",
      "expires_date": "2021-07-01 06:53:32 Etc/GMT",
      "expires_date_ms": "1625122412000",
      "expires_date_pst": "2021-06-30 23:53:32 America/Los_Angeles",
      "web_order_line_item_id": "180000425975182",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20597391"
    }
  ],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "auto_renew_product_id": "ihttp_browser_month_order",
    "product_id": "ihttp_browser_month_order",
    "original_transaction_id": "180001001607872",
    "auto_renew_status": "0"
  }],
  "status": 0
};

$done({body: JSON.stringify(obj)});

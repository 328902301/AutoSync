var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];

// 01 Bazaart百色特 - 照片与视频编辑器
//https://apps.apple.com/cn/app/id515094775
if(bundle_id == "co.bazaart.app"){
obj = {
      "environment": "Production",
      "receipt": {
            "receipt_type": "Production",
            "adam_id": 515094775,
            "app_item_id": 515094775,
            "bundle_id": "co.bazaart.app",
            "application_version": "741",
            "download_id": 501353368408839240,
            "version_external_identifier": 848185411,
            "receipt_creation_date": "2022-04-28 07:16:38 Etc/GMT",
            "receipt_creation_date_ms": "1651130198000",
            "receipt_creation_date_pst": "2022-04-28 00:16:38 America/Los_Angeles",
            "request_date": "2022-04-28 07:24:35 Etc/GMT",
            "request_date_ms": "1651130675869",
            "request_date_pst": "2022-04-28 00:24:35 America/Los_Angeles",
            "original_purchase_date": "2022-04-28 05:39:07 Etc/GMT",
            "original_purchase_date_ms": "1651124347000",
            "original_purchase_date_pst": "2022-04-27 22:39:07 America/Los_Angeles",
            "original_application_version": "741",
            "in_app": [{
                  "quantity": "1",
                  "product_id": "Bazaart_Premium_Monthly_v9",
                  "transaction_id": "190001277264068",
                  "original_transaction_id": "190001277264068",
                  "purchase_date": "2022-04-28 07:16:28 Etc/GMT",
                  "purchase_date_ms": "1651130188000",
                  "purchase_date_pst": "2022-04-28 00:16:28 America/Los_Angeles",
                  "original_purchase_date": "2022-04-28 07:16:29 Etc/GMT",
                  "original_purchase_date_ms": "1651130189000",
                  "original_purchase_date_pst": "2022-04-28 00:16:29 America/Los_Angeles",
                  "expires_date": "2029-04-26 17:54:33 Etc/GMT",
                  "expires_date_ms": "1871891673000",
                  "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
                  "web_order_line_item_id": "190000554353099",
                  "is_trial_period": "true",
                  "is_in_intro_offer_period": "false",
                  "in_app_ownership_type": "PURCHASED"
            }]
      },
      "latest_receipt_info": [{
            "quantity": "1",
            "product_id": "Bazaart_Premium_Monthly_v9",
            "transaction_id": "190001277264068",
            "original_transaction_id": "190001277264068",
            "purchase_date": "2022-04-28 07:16:28 Etc/GMT",
            "purchase_date_ms": "1651130188000",
            "purchase_date_pst": "2022-04-28 00:16:28 America/Los_Angeles",
            "original_purchase_date": "2022-04-28 07:16:29 Etc/GMT",
            "original_purchase_date_ms": "1651130189000",
            "original_purchase_date_pst": "2022-04-28 00:16:29 America/Los_Angeles",
            "expires_date": "2029-04-26 17:54:33 Etc/GMT",
            "expires_date_ms": "1871891673000",
            "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
            "web_order_line_item_id": "190000554353099",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20528408"
      }],
      "latest_receipt": "",
      "pending_renewal_info": [{
            "auto_renew_product_id": "Bazaart_Premium_Monthly_v9",
            "product_id": "Bazaart_Premium_Monthly_v9",
            "original_transaction_id": "190001277264068",
            "auto_renew_status": "1"
      }],
      "status": 0
};
}

//02 Panda Widget: 桌面小组件
//https://apps.apple.com/cn/app/id1569291816
if(bundle_id == "com.heliang.super.widget"){
obj = {
      "receipt": {
            "receipt_type": "Production",
            "app_item_id": 1569291816,
            "receipt_creation_date": "2022-01-26 02:55:19 Etc/GMT",
            "bundle_id": "com.heliang.super.widget",
            "original_purchase_date": "2021-12-01 19:01:34 Etc/GMT",
            "in_app": [{
                  "quantity": "1",
                  "purchase_date_ms": "1637860065000",
                  "expires_date": "2099-09-09 17:07:45 Etc/GMT",
                  "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
                  "is_in_intro_offer_period": "false",
                  "transaction_id": "730000766600650",
                  "is_trial_period": "false",
                  "original_transaction_id": "730000766600650",
                  "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
                  "product_id": "com.focoslive",
                  "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
                  "in_app_ownership_type": "PURCHASED",
                  "original_purchase_date_ms": "1637860068000",
                  "web_order_line_item_id": "730000330755327",
                  "expires_date_ms": "4092647115000",
                  "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
                  "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT"
            }],
            "adam_id": 1569291816,
            "receipt_creation_date_pst": "2022-01-25 18:55:19 America/Los_Angeles",
            "request_date": "2022-02-05 17:13:48 Etc/GMT",
            "request_date_pst": "2022-02-05 09:13:48 America/Los_Angeles",
            "version_external_identifier": 846821007,
            "request_date_ms": "1644081228639",
            "original_purchase_date_pst": "2021-12-01 11:01:34 America/Los_Angeles",
            "application_version": "40",
            "original_purchase_date_ms": "1638385294000",
            "receipt_creation_date_ms": "1643165719000",
            "original_application_version": "22",
            "download_id": 500935934584949200
      },
      "pending_renewal_info": [{
            "product_id": "com.focoslive",
            "original_transaction_id": "730000766600650",
            "auto_renew_product_id": "com.focoslive",
            "auto_renew_status": "1"
      }],
      "status": 0,
      "latest_receipt_info": [{
            "quantity": "1",
            "purchase_date_ms": "1637860065000",
            "expires_date": "2099-09-09 17:07:45 Etc/GMT",
            "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
            "is_in_intro_offer_period": "false",
            "transaction_id": "730000766600650",
            "is_trial_period": "false",
            "original_transaction_id": "730000766600650",
            "purchase_date": "2021-11-25 17:07:45 Etc/GMT",
            "product_id": "com.focoslive",
            "original_purchase_date_pst": "2021-11-25 09:07:48 America/Los_Angeles",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20902245",
            "original_purchase_date_ms": "1637860068000",
            "web_order_line_item_id": "730000330755327",
            "expires_date_ms": "4092647115000",
            "purchase_date_pst": "2021-11-25 09:07:45 America/Los_Angeles",
            "original_purchase_date": "2021-11-25 17:07:48 Etc/GMT"
      }],
      "latest_receipt": ""
};
}

//03 ProKnockOut抠图p图修图神器&专业智能证件照制作
//https://apps.apple.com/cn/app/id944665061
if(bundle_id == "com.loveyouchenapps.knockout"){
obj = {
      "environment": "Production",
      "receipt": {
            "receipt_type": "Production",
            "adam_id": 944665061,
            "app_item_id": 944665061,
            "bundle_id": "com.loveyouchenapps.knockout",
            "application_version": "7.38",
            "download_id": 501371116553047653,
            "version_external_identifier": 848703603,
            "receipt_creation_date": "2022-05-04 12:11:38 Etc/GMT",
            "receipt_creation_date_ms": "1651666298000",
            "receipt_creation_date_pst": "2022-05-04 05:11:38 America/Los_Angeles",
            "request_date": "2022-05-04 12:11:39 Etc/GMT",
            "request_date_ms": "1651666299863",
            "request_date_pst": "2022-05-04 05:11:39 America/Los_Angeles",
            "original_purchase_date": "2022-05-04 12:06:29 Etc/GMT",
            "original_purchase_date_ms": "1651665989000",
            "original_purchase_date_pst": "2022-05-04 05:06:29 America/Los_Angeles",
            "original_application_version": "7.38",
            "in_app": [{
                  "quantity": "1",
                  "product_id": "com.knockout.7daysplus",
                  "transaction_id": "190001282772956",
                  "original_transaction_id": "190001282772956",
                  "purchase_date": "2022-05-04 12:11:15 Etc/GMT",
                  "purchase_date_ms": "1651666275000",
                  "purchase_date_pst": "2022-05-04 05:11:15 America/Los_Angeles",
                  "original_purchase_date": "2022-05-04 12:11:16 Etc/GMT",
                  "original_purchase_date_ms": "1651666276000",
                  "original_purchase_date_pst": "2022-05-04 05:11:16 America/Los_Angeles",
                  "expires_date": "2029-04-26 17:54:33 Etc/GMT",
                  "expires_date_ms": "1871891673000",
                  "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
                  "web_order_line_item_id": "190000557319569",
                  "is_trial_period": "true",
                  "is_in_intro_offer_period": "false",
                  "in_app_ownership_type": "PURCHASED"
            }]
      },
      "latest_receipt_info": [{
            "quantity": "1",
            "product_id": "com.knockout.7daysplus",
            "transaction_id": "190001282772956",
            "original_transaction_id": "190001282772956",
            "purchase_date": "2022-05-04 12:11:15 Etc/GMT",
            "purchase_date_ms": "1651666275000",
            "purchase_date_pst": "2022-05-04 05:11:15 America/Los_Angeles",
            "original_purchase_date": "2022-05-04 12:11:16 Etc/GMT",
            "original_purchase_date_ms": "1651666276000",
            "original_purchase_date_pst": "2022-05-04 05:11:16 America/Los_Angeles",
            "expires_date": "2029-04-26 17:54:33 Etc/GMT",
            "expires_date_ms": "1871891673000",
            "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
            "web_order_line_item_id": "190000557319569",
            "is_trial_period": "true",
            "is_in_intro_offer_period": "false",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "20386379"
      }],
      "latest_receipt": "",
      "pending_renewal_info": [{
            "auto_renew_product_id": "com.knockout.7daysplus",
            "product_id": "com.knockout.7daysplus",
            "original_transaction_id": "190001282772956",
            "auto_renew_status": "1"
      }],
      "status": 0
};
}

$done({body: JSON.stringify(obj)});

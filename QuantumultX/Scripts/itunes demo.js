/*
*Aman - 194nb.com 脚本功能：Picsew滚动截图+解锁订阅
*/
var body = $response.body;
var objk = JSON.parse(body);

objk = {
"receipt":{"receipt_type":"Production", "adam_id":1208145167, "app_item_id":1208145167, "bundle_id":"com.sugarmo.ScrollClip", "application_version":"3082", "download_id":9999, "version_external_identifier":837747342, "receipt_creation_date":"2020-09-13 06:58:34 Etc/GMT", "receipt_creation_date_ms":"1599980314000", "receipt_creation_date_pst":"2020-09-12 23:58:34 America/Los_Angeles", "request_date":"2020-09-13 06:59:15 Etc/GMT", "request_date_ms":"1599980355799", "request_date_pst":"2020-09-12 23:59:15 America/Los_Angeles", "original_purchase_date":"2020-09-13 06:50:28 Etc/GMT", "original_purchase_date_ms":"1599979828000", "original_purchase_date_pst":"2020-09-12 23:50:28 America/Los_Angeles", "original_application_version":"3082", "in_app":[
{"quantity":"1", "product_id":"com.sugarmo.ScrollClip.pro", "transaction_id":"1000000000000000", "original_transaction_id":"1000000000000000", "purchase_date":"2020-01-01 00:00:00 Etc/GMT", "purchase_date_ms":"1587700000000", "purchase_date_pst":"2020-01-21 00:00:00 America/Los_Angeles", "original_purchase_date":"2020-01-01 00:00:00 Etc/GMT", "original_purchase_date_ms":"1587700000000", "original_purchase_date_pst":"2020-01-01 00:00:00 America/Los_Angeles", "is_trial_period":"false"}]}, "status":0, "environment":"Production"}
	

body = JSON.stringify(objk);

$done({body});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


脚本功能：Picsew解锁专业版
软件版本：3.8.1
脚本作者：Hausd0rff

var objc = JSON.parse($response.body);
      
    objc = 
{
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1208145167,
    "app_item_id": 1208145167,
    "bundle_id": "com.sugarmo.ScrollClip",
    "application_version": "3111",
    "download_id": 75039104621192,
    "version_external_identifier": 845742650,
    "receipt_creation_date": "2021-12-20 00:59:16 Etc/GMT",
    "receipt_creation_date_ms": "1639961956000",
    "receipt_creation_date_pst": "2021-12-19 16:59:16 America/Los_Angeles",
    "request_date": "2021-12-20 01:03:52 Etc/GMT",
    "request_date_ms": "1639962232562",
    "request_date_pst": "2021-12-19 17:03:52 America/Los_Angeles",
    "original_purchase_date": "2018-11-13 13:54:02 Etc/GMT",
    "original_purchase_date_ms": "1542117242000",
    "original_purchase_date_pst": "2018-11-13 05:54:02 America/Los_Angeles",
    "original_application_version": "2911",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.pro",
      "transaction_id": "350000551516724",
      "original_transaction_id": "350000551516724",
      "purchase_date": "2019-11-29 00:08:37 Etc/GMT",
      "purchase_date_ms": "1574986117000",
      "purchase_date_pst": "2019-11-28 16:08:37 America/Los_Angeles",
      "original_purchase_date": "2019-11-29 00:08:37 Etc/GMT",
      "original_purchase_date_ms": "1574986117000",
      "original_purchase_date_pst": "2019-11-28 16:08:37 America/Los_Angeles",
      "is_trial_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt": "5L2c6ICFQGtpbmc=",
  "environment": "Production",
  "status": 0
};

$done({body: JSON.stringify(objc)});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
*Aman - 194nb.com old roll复古相机+解锁订阅
*/
var body = $response.body;
var objk = JSON.parse(body);

objk = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1570093460,
    "receipt_creation_date" : "2022-02-11 12:15:16 Etc/GMT",
    "bundle_id" : "com.zijayrate.analogcam",
    "original_purchase_date" : "2021-12-30 15:44:40 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1640879429000",
        "transaction_id" : "360001014993384",
        "is_trial_period" : "false",
        "original_transaction_id" : "360001014993384",
        "purchase_date" : "2021-12-30 15:50:29 Etc/GMT",
        "product_id" : "com.zijayrate.analogcam.vipforever10",
        "original_purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1640879429000",
        "purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
        "original_purchase_date" : "2021-12-30 15:50:29 Etc/GMT"
      }
    ],
    "adam_id" : 1570093460,
    "receipt_creation_date_pst" : "2022-02-11 04:15:16 America/Los_Angeles",
    "request_date" : "2022-02-11 12:22:48 Etc/GMT",
    "request_date_pst" : "2022-02-11 04:22:48 America/Los_Angeles",
    "version_external_identifier" : 847082545,
    "request_date_ms" : "1644582168459",
    "original_purchase_date_pst" : "2021-12-30 07:44:40 America/Los_Angeles",
    "application_version" : "3.0.2",
    "original_purchase_date_ms" : "1640879080000",
    "receipt_creation_date_ms" : "1644581716000",
    "original_application_version" : "2.7.0",
    "download_id" : 501017651398874591
  },
  "environment" : "Production",
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1640879429000",
      "transaction_id" : "360001014993384",
      "is_trial_period" : "false",
      "original_transaction_id" : "360001014993384",
      "purchase_date" : "2021-12-30 15:50:29 Etc/GMT",
      "product_id" : "com.zijayrate.analogcam.vipforever10",
      "original_purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1640879429000",
      "purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
      "original_purchase_date" : "2021-12-30 15:50:29 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"}
	

body = JSON.stringify(objk);

$done({body});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
*Aman - 194nb.com   文件管理器+解锁订阅
*/
var body = $response.body;
var objk = JSON.parse(body);

objk = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1632865859,
    "app_item_id": 1632865859,
    "bundle_id": "com.offline.document.app",
    "application_version": "2",
    "download_id": 113062239645027,
    "version_external_identifier": 850798870,
    "receipt_creation_date": "2022-07-24 20:31:36 Etc/GMT",
    "receipt_creation_date_ms": "1658694696000",
    "receipt_creation_date_pst": "2022-07-24 13:31:36 America/Los_Angeles",
    "request_date": "2022-07-24 20:31:59 Etc/GMT",
    "request_date_ms": "1658694719624",
    "request_date_pst": "2022-07-24 13:31:59 America/Los_Angeles",
    "original_purchase_date": "2022-07-14 14:01:28 Etc/GMT",
    "original_purchase_date_ms": "1657807288000",
    "original_purchase_date_pst": "2022-07-14 07:01:28 America/Los_Angeles",
    "original_application_version": "2",
    "preorder_date": "2022-07-08 18:47:46 Etc/GMT",
    "preorder_date_ms": "1657306066000",
    "preorder_date_pst": "2022-07-08 11:47:46 America/Los_Angeles",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.offline.document.app.monthly",
      "transaction_id": "730000924166880",
      "original_transaction_id": "730000924166880",
      "purchase_date": "2022-07-24 20:30:39 Etc/GMT",
      "purchase_date_ms": "1658694639000",
      "purchase_date_pst": "2022-07-24 13:30:39 America/Los_Angeles",
      "original_purchase_date": "2022-07-24 20:30:40 Etc/GMT",
      "original_purchase_date_ms": "1658694640000",
      "original_purchase_date_pst": "2022-07-24 13:30:40 America/Los_Angeles",
      "expires_date": "2099-09-09 20:30:39 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 13:30:39 America/Los_Angeles",
      "web_order_line_item_id": "730000411764582",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.offline.document.app.monthly",
    "transaction_id": "730000924166880",
    "original_transaction_id": "730000924166880",
    "purchase_date": "2022-07-24 20:30:39 Etc/GMT",
    "purchase_date_ms": "1658694639000",
    "purchase_date_pst": "2022-07-24 13:30:39 America/Los_Angeles",
    "original_purchase_date": "2022-07-24 20:30:40 Etc/GMT",
    "original_purchase_date_ms": "1658694640000",
    "original_purchase_date_pst": "2022-07-24 13:30:40 America/Los_Angeles",
    "expires_date": "2099-09-09 20:30:39 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2099-09-09 13:30:39 America/Los_Angeles",
    "web_order_line_item_id": "730000411764582",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20985028"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.offline.document.app.monthly",
    "product_id": "com.offline.document.app.monthly",
    "original_transaction_id": "730000924166880",
    "auto_renew_status": "0"
  }],
  "status": 0
}
	

body = JSON.stringify(objk);

$done({body});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
*Aman - 194nb.com  幻影相册+解锁VIP
*/
var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1000000001,
    "app_item_id": 1000000001,
    "bundle_id": "com.tech.pipe",
    "application_version": "437",
    "download_id": 99999999999999,
    "version_external_identifier": 999999999,
    "receipt_creation_date": "2222-11-11 11:11:11 Etc/GMT",
    "receipt_creation_date_ms": "4476655324000",
    "receipt_creation_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
    "request_date": "2011-11-11 11:11:11 Etc/GMT",
    "request_date_ms": "1555555555555",
    "request_date_pst": "2011-11-11 11:11:11 America/Los_Angeles",
    "original_purchase_date": "2011-11-11 11:11:11 Etc/GMT",
    "original_purchase_date_ms": "1555555555555",
    "original_purchase_date_pst": "2011-11-11 11:11:11 America/Los_Angeles",
    "original_application_version": "433",
    "in_app": [{
      "quantity": "1",
      "product_id": "yearautorenew",
      "transaction_id": "520000631442654",
      "original_transaction_id": "520000631442654",
      "purchase_date": "2011-11-11 11:11:11 Etc/GMT",
      "purchase_date_ms": "1555555555555",
      "purchase_date_pst": "2011-11-11 11:11:11 America/Los_Angeles",
      "original_purchase_date": "2011-11-11 11:11:11 Etc/GMT",
      "original_purchase_date_ms": "1555555555555",
      "original_purchase_date_pst": "2011-11-11 11:11:11 America/Los_Angeles",
      "expires_date": "2111-11-11 11:11:11 Etc/GMT",
      "expires_date_ms": "4476655324000",
      "expires_date_pst": "2222-11-11 11:11:11 America/Los_Angeles",
      "web_order_line_item_id": "520000240955544",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "yearautorenew",
    "transaction_id": "520000631442654",
    "original_transaction_id": "520000631442654",
    "purchase_date": "2011-11-11 11:11:11 Etc/GMT",
    "purchase_date_ms": "1555555555555",
    "purchase_date_pst": "2011-11-11 11:11:11 America/Los_Angeles",
    "original_purchase_date": "2011-11-11 11:11:11 Etc/GMT",
    "original_purchase_date_ms": "1555555555555",
    "original_purchase_date_pst": "2011-11-11 11:11:11 America/Los_Angeles",
    "expires_date": "2111-11-11 11:11:11 Etc/GMT",
    "expires_date_ms": "4476655324000",
    "expires_date_pst": "2222-11-11 11:11:11 America/Los_Angeles",
    "web_order_line_item_id": "520000000000000",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "99999999"
  }],
  "latest_receipt": "5L2c6ICFQGtpbmc=",
  "pending_renewal_info": [{
    "auto_renew_product_id": "yearautorenew",
    "original_transaction_id": "520000000000000",
    "product_id": "yearautorenew",
    "auto_renew_status": "1"
  }]
}

body = JSON.stringify(objc);
$done({ body });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
*Aman - 194nb.com    PrettyUp视频美化+解锁订阅
*/
var body = $response.body;
var objc = JSON.parse(body);

objc = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1000000000,"app_item_id":1000000000,"bundle_id":"com.mediaeditor.video","application_version":"437","download_id":99999999999999,"version_external_identifier":999999999,"receipt_creation_date":"2111-11-11 11:11:11 Etc/GMT","receipt_creation_date_ms":"4476655324000","receipt_creation_date_pst":"2111-11-11 11:11:11 America/Los_Angeles","request_date":"2099-11-11 11:11:11 Etc/GMT","request_date_ms":"1555555555555","request_date_pst":"2011-11-11 11:11:11 America/Los_Angeles","original_purchase_date":"2011-11-11 11:11:11 Etc/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2099-11-11 11:11:11 America/Los_Angeles","original_application_version":"433","in_app":[{"quantity":"1","product_id":"yearautorenew","transaction_id":"520000631442654","original_transaction_id":"520000631442654","purchase_date":"2011-11-11 11:11:11 Etc/GMT","purchase_date_ms":"1555555555555","purchase_date_pst":"2011-11-11 11:11:11 America/Los_Angeles","original_purchase_date":"2099-11-11 11:11:11 Etc/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2099-11-11 11:11:11 America/Los_Angeles","expires_date":"2111-11-11 11:11:11 Etc/GMT","expires_date_ms":"4476655324000","expires_date_pst":"2111-11-11 11:11:11 America/Los_Angeles","web_order_line_item_id":"520000240955544","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"yearautorenew","transaction_id":"520000631442654","original_transaction_id":"520000631442654","purchase_date":"2011-11-11 11:11:11 Etc/GMT","purchase_date_ms":"1555555555555","purchase_date_pst":"2011-11-11 11:11:11 America/Los_Angeles","original_purchase_date":"2099-11-11 11:11:11 Etc/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2099-11-11 11:11:11 America/Los_Angeles","expires_date":"2111-11-11 11:11:11 Etc/GMT","expires_date_ms":"4476655324000","expires_date_pst":"2111-11-11 11:11:11 America/Los_Angeles","web_order_line_item_id":"520000000000000","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"99999999"}],"latest_receipt":"5L2c6ICFQGtpbmc=","pending_renewal_info":[{"auto_renew_product_id":"yearautorenew","original_transaction_id":"520000000000000","product_id":"yearautorenew","auto_renew_status":"1"}]}

body = JSON.stringify(objc);
$done({ body });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
*nzw9314    bear
*/
var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];
if (bundle_id == "net.shinyfrog.bear-iOS") {
  obj = {
    status: 0,
    environment: "Production",
    receipt: {
      receipt_type: "Production",
      adam_id: 1016366447,
      app_item_id: 1016366447,
      bundle_id: "net.shinyfrog.bear-iOS",
      application_version: "7133",
      download_id: 92018757521008,
      version_external_identifier: 831147846,
      receipt_creation_date: "2019-08-10 23:17:58 Etc/GMT",
      receipt_creation_date_ms: "1565479078000",
      receipt_creation_date_pst: "2019-08-10 16:17:58 America/Los_Angeles",
      request_date: "2019-08-10 23:18:04 Etc/GMT",
      request_date_ms: "1565479084140",
      request_date_pst: "2019-08-10 16:18:04 America/Los_Angeles",
      original_purchase_date: "2016-11-05 07:20:24 Etc/GMT",
      original_purchase_date_ms: "1478330424000",
      original_purchase_date_pst: "2016-11-05 00:20:24 America/Los_Angeles",
      original_application_version: "3562",
      in_app: [
        {
          quantity: "1",
          product_id: "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
          transaction_id: "520000469131745",
          original_transaction_id: "520000469131745",
          purchase_date: "2019-08-10 23:17:57 Etc/GMT",
          purchase_date_ms: "1565479077000",
          purchase_date_pst: "2019-08-10 16:17:57 America/Los_Angeles",
          original_purchase_date: "2019-08-10 23:17:57 Etc/GMT",
          original_purchase_date_ms: "1565479077000",
          original_purchase_date_pst: "2019-08-10 16:17:57 America/Los_Angeles",
          expires_date: "2099-09-10 23:17:57 Etc/GMT",
          expires_date_ms: "4092736677000",
          expires_date_pst: "2099-09-10 16:17:57 America/Los_Angeles",
          web_order_line_item_id: "520000150747696",
          is_trial_period: "true",
          is_in_intro_offer_period: "false"
        }
      ]
    },
    latest_receipt_info: [
      {
        quantity: "1",
        product_id: "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
        transaction_id: "520000469131745",
        original_transaction_id: "520000469131745",
        purchase_date: "2019-08-10 23:17:57 Etc/GMT",
        purchase_date_ms: "1565479077000",
        purchase_date_pst: "2019-08-10 16:17:57 America/Los_Angeles",
        original_purchase_date: "2019-08-10 23:17:57 Etc/GMT",
        original_purchase_date_ms: "1565479077000",
        original_purchase_date_pst: "2019-08-10 16:17:57 America/Los_Angeles",
        expires_date: "2099-09-10 23:17:57 Etc/GMT",
        expires_date_ms: "4092736677000",
        expires_date_pst: "2099-09-10 16:17:57 America/Los_Angeles",
        web_order_line_item_id: "520000150747696",
        is_trial_period: "true",
        is_in_intro_offer_period: "false"
      }
    ],
    latest_receipt:
      "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",
    pending_renewal_info: [
      {
        auto_renew_product_id:
          "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
        original_transaction_id: "520000469131745",
        product_id: "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
        auto_renew_status: "1"
      }
    ]
  };
}
$done({body:JSON.stringify(obj)});
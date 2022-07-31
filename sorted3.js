/***********************************
> 應用名稱：filebox
> 軟件版本：1.1.50
> 下載地址：https://apps.apple.com/cn/app/id1558391784
> 特別說明：本腳本自用，僅解決filebox無限製檢測購買記錄，禁止轉載銷售
 
[rewrite_local]
# ～ filebox解鎖會員權限（2022-02-18）
^https?:\/\/api\.sortedapp\.com\/receipts\/verify url script-response-body sorted3.js
[mitm] 
hostname=api.sortedapp.com
***********************************/

var ddgksf2013={
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1306893526,
    "app_item_id": 1306893526,
    "bundle_id": "com.staysorted.Sorted",
    "application_version": "332",
    "download_id": 501517300509031600,
    "version_external_identifier": 846505293,
    "receipt_creation_date": "2022-06-25 03:19:43 Etc/GMT",
    "receipt_creation_date_ms": "1656127183000",
    "receipt_creation_date_pst": "2022-06-24 20:19:43 America/Los_Angeles",
    "request_date": "2022-06-25 03:20:31 Etc/GMT",
    "request_date_ms": "1656127231375",
    "request_date_pst": "2022-06-24 20:20:31 America/Los_Angeles",
    "original_purchase_date": "2022-06-25 03:19:35 Etc/GMT",
    "original_purchase_date_ms": "1656127175000",
    "original_purchase_date_pst": "2022-06-24 20:19:35 America/Los_Angeles",
    "original_application_version": "332",
    "in_app": []
  },
  "environment": "Production",
  "status": 0,
  "isCustomer": true,
  "isPro": true,
  "flagged": true,
  "isBundleEnabled": true
}
$done({body : JSON.stringify(ddgksf2013)});
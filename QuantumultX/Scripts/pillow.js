/***********************************

> 应用名称：Pillow：睡眠周期跟踪器
> 软件版本：4.7.1
> 下载地址：https://apps.apple.com/cn/app/id878691772
> 脚本作者：摇光
> 更新时间：2022-06-03
> 脚本功能：✅Unlock permanent VIP functions✅
> 微信账号：XXXXXXXX
> 通知频道：XXXXXXXXXXXX
> 问题反馈：XXXXXXXXXXXXXXXX
> 情況注明：暫未測試是否可用
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖


[rewrite_local]
# Todo清单（2022-06-01）@摇光
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body pillow.js


[mitm]
hostname=api.revenuecat.com

***********************************/


let body = JSON.parse($response.body)
if (body.subscriber) {
    body.subscriber.entitlements = {
        "premium": {
            "expires_date": "2055-02-22T07:07:58Z",
            "product_identifier": "com.neybox.pillow.premium.year",
            "purchase_date": "2020-02-15T07:07:58Z"
        }
    };
    body.subscriber.subscriptions = {
        "com.neybox.pillow.premium.year": {
            "billing_issues_detected_at": null,
            "expires_date": "2055-02-22T07:07:58Z",
            "is_sandbox": false,
            "original_purchase_date": "2020-02-15T07:07:58Z",
            "period_type": "trial",
            "purchase_date": "2020-02-15T07:07:58Z",
            "store": "app_store",
            "unsubscribe_detected_at": null
        }
    };
}
$done({body:JSON.stringify(body)})
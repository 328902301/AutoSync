/******************************

脚本功能：Notability +解锁订阅

下载地址：http://mtw.so/6bQodv

TG反馈群：https://t.me/gjdsyyds

TG频道群：https://t.me/gjwj6


*******************************

[rewrite_local]


^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Notability.js

[mitm] 

hostname = notability.com

*******************************/
var parse = JSON.parse($response.body);
var modifiedStatus = "HTTP/1.1 200 OK";
parse = {
    "data": {
        "processAppleReceipt": {
            "__typename": "SubscriptionResult",
            "error": 0,
            "subscription": {
                "__typename": "AppStoreSubscription",
                "status": "active",
                "originalPurchaseDate": "2020-09-28T09:09:09.000Z",
                "originalTransactionId": "100109876543210",
                "expirationDate": "2999-09-28T09:09:09.000Z",
                "productId": "com.yqc.premium_subscription",
                "tier": "premium",
                "refundedDate": null,
                "refundedReason": null,
                "user": null
            }
        }
    }
};
$done({
    "status": modifiedStatus,
    "body": JSON.stringify(parse)
});
(function (window, _encode_version, _0x464b30) {
    _0x464b30 = "al";
    try {
        _0x464b30 += "ert";
        _encode_version = encode_version;
        if (!(typeof _encode_version !== "undefined" && _encode_version === "jsjiami.com.v5")) {
            window._0x464b30("删除" + "版本号\uFF0Cjs会定期弹窗\uFF0C还请支持我们的工作");
        }
    } catch (exception) {
        window._0x464b30("删除版本号\uFF0Cjs会定期弹窗");
    }
}(window));
encode_version = "jsjiami.com.v5";

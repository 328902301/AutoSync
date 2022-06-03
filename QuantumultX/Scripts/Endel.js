/***********************************

> 應用名稱：Endel: Focus, Sleep, Relax
> 軟件版本：3.12.31（ID:847784860）
> 適用版本：2.*.*——3.12.31
> 下載地址：https://apps.apple.com/cn/app/id1346247457
> 腳本作者：摇光
> 更新時間：2022-06-03
> 腳本功能：✅Unlock permanent VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXX
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Endel（2022-06-03）@摇光
^https:\/\/api-production\.endel\.io\/v3\/call url script-response-body endel.js


[mitm] 
hostname=api-production.endel.io

***********************************/

let body = JSON.parse($response.body)
if (body.subscription) {
    body.subscription.type = "ACTIVE"
    body.subscription.store = "APP_STORE"
    $done({body:JSON.stringify(body)})
} else {
    $done({})
}

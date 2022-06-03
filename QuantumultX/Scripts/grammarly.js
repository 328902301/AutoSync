/***********************************

> 應用名稱：Grammarly - Keyboard & Editor
> 軟件版本：2.1.0
> 下載地址：https://apps.apple.com/cn/app/id1158877342
> 腳本作者：摇光
> 更新時間：2022-06-03
> 腳本功能：✅Unlock permanent VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXX
> 脚本來源：https://raw.githubusercontent.com/cpphut/scripts/main/js/grammarly.js
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Grammarly（2022-06-03）@摇光
^https:\/\/subscription\.grammarly\.com\/api\/v1\/subscription url script-response-body grammarly.js


[mitm] 
hostname = subscription.grammarly.com

***********************************/

let obj = JSON.parse($response.body)
obj.isPremium = true;
$done({body:JSON.stringify(obj)})

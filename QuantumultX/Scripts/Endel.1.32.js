/***********************************

> 應用名稱：Endel: Focus, Sleep, Relax
> 軟件版本：1.32.160
> 下載地址：https://apps.apple.com/cn/app/id1346247457
> 腳本作者：摇光
> 更新時間：2022-06-03
> 腳本功能：✅Unlock permanent VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXX
> 特別注明：此為較低版本，更新版本集合在破解合集
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Endel（2022-06-03）@摇光
^https:\/\/api-production\.endel\.io\/v1\/user url script-response-body endel.js


[mitm] 
hostname=api-production.endel.io

***********************************/

var obj = JSON.parse($response.body);
obj["subscription_info"]= {
    "type" : "IOS",
    "valid_until" : 1873089612.367564
    };
$done({body: JSON.stringify(obj)});

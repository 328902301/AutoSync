/***********************************

> 應用名稱：flomo 浮墨 - 卡片笔记
> 軟件版本：1.7.2
> 下載地址：https://apps.apple.com/cn/app/id1552314395
> 腳本作者：摇光
> 更新時間：2022-06-02
> 腳本功能：✅Unlock some VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXX
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# flomo（2022-06-02）@摇光
^https:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body flomo.js


[mitm] 
hostname=flomoapp.com

***********************************/

var obj = JSON.parse($response.body);
obj.data.pro_expired_at = "2027-06-11 23:59:59";
$done({body: JSON.stringify(obj)}); 

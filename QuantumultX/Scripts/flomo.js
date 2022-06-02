/***********************************

> 應用名稱：flomo
> 軟件版本：1.7.2
> 下載地址：https://apps.apple.com/cn/app/flomo-%E6%B5%AE%E5%A2%A8-%E5%8D%A1%E7%89%87%E7%AC%94%E8%AE%B0/id1552314395
> 腳本作者：摇光
> 更新時間：2022-06-02
> 腳本功能：✅Unlock some VIP functions✅
> 微信賬號：XXXXXXXXXXXXXXXXXX
> 通知頻道：XXXXXXXXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXXXX
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Flomo（2022-06-02）@ddgksf2013
^https:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body flomo.js


[mitm] 
hostname=flomoapp.com

***********************************/

var obj = JSON.parse($response.body);
obj.data.pro_expired_at = "2027-06-11 23:59:59";
$done({body: JSON.stringify(obj)}); 

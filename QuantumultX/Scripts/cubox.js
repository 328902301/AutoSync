/***********************************

> 應用名稱：Cubox
> 軟件版本：6.10.0
> 下載地址：https://apps.apple.com/cn/app/cubox-%E6%94%B6%E8%97%8F%E9%98%85%E8%AF%BB-%E6%A0%87%E6%B3%A8%E7%AC%94%E8%AE%B0/id1113361350
> 腳本作者：摇光
> 更新時間：2022-06-02
> 腳本功能：✅Unlock some VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXXX
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Flomo（2022-06-02）@ddgksf2013
^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body cubox.js


[mitm] 
hostname=cubox.pro

***********************************/

var obj = JSON.parse($response.body);
obj.data.isExpire = false;
obj.data.expireTime = "2029-06-01T21:50:27+08:00";
obj.data.payTime = "2020-01-01T08:00:00+08:00";
$done({body: JSON.stringify(obj)}); 

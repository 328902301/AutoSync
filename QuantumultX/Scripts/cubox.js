/***********************************

> 應用名稱：Cubox - 收藏阅读 & 标注笔记
> 軟件版本：6.10.0
> 下載地址：https://apps.apple.com/cn/app/id1113361350
> 腳本作者：摇光
> 更新時間：2022-06-02
> 腳本功能：✅Unlock some VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXX
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Cubox（2022-06-02）@摇光
^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body cubox.js


[mitm] 
hostname=cubox.pro

***********************************/

var obj = JSON.parse($response.body);
obj.data.isExpire = false;
obj.data.expireTime = "2029-06-01T21:50:27+08:00";
obj.data.payTime = "2020-01-01T08:00:00+08:00";
$done({body: JSON.stringify(obj)}); 

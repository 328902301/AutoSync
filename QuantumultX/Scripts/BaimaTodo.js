/***********************************

> 應用名稱：Todo清单 - 跨平台待办事项与番茄钟
> 軟件版本：1.31
> 下載地址：https://apps.apple.com/cn/app/id1566997654
> 腳本作者：摇光
> 更新時間：2022-06-01
> 腳本功能：✅Unlock permanent VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXX
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Todo清单（2022-06-01）@摇光
^https:\/\/www\.evestudio\.cn\/todoList\/getDetailUser url script-response-body BaimaTodo.js


[mitm] 
hostname=www.evestudio.cn

***********************************/

var obj = JSON.parse($response.body);
obj.data.vip = true;
obj.data.vipDeadTime = 9961626781227;
$done({body: JSON.stringify(obj)}); 

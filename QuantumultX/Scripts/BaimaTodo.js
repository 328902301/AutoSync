/***********************************

> 應用名稱：Todo清单
> 軟件版本：1.31
> 下載地址：https://apps.apple.com/cn/app/todo%E6%B8%85%E5%8D%95-%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E4%B8%8E%E7%95%AA%E8%8C%84%E9%92%9F/id1566997654
> 腳本作者：摇光
> 更新時間：2022-06-01
> 腳本功能：✅Unlock permanent VIP functions✅
> 微信賬號：XXXXXXXX
> 通知頻道：XXXXXXXXXXXX
> 問題反饋：XXXXXXXXXXXXXXXX
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣


[rewrite_local]
# Todo清单（2022-06-01）
^https:\/\/www\.evestudio\.cn\/todoList\/getDetailUser url script-response-body BaimaTodo.js


[mitm] 
hostname=www.evestudio.cn

***********************************/

var obj = JSON.parse($response.body);
obj.data.vip = true;
obj.data.vipDeadTime = 9961626781227;
$done({body: JSON.stringify(obj)}); 

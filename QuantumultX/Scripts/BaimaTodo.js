/*
@Author  摇光
Explain  ForOwnUse


圈X：
[rewrite_local]
# 白马Todo清单 Version:1.31
^https:\/\/www\.evestudio\.cn\/todoList\/getDetailUser url script-response-body baimaTodo.js


[mitm]
hostname= = www.evestudio.cn


# 下载地址：
https://apps.apple.com/cn/app/todo%E6%B8%85%E5%8D%95-%E8%B7%A8%E5%B9%B3%E5%8F%B0%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E4%B8%8E%E7%95%AA%E8%8C%84%E9%92%9F/id1566997654
*/

var obj = JSON.parse($response.body);

obj.data.vip = true;
obj.data.vipDeadTime = 9961626781227;

$done({body: JSON.stringify(obj)}); 

/*

麻豆短视频

下载地址：
https://mdsv01.com/?pc=157a3f6f-1440-4d8f-bf83-112cfc3e0fb1


公众号：捷径指令大全

QuanX:

[rewrite_local]
#麻豆短视频 by:Luke
^https:\/\/mda\..+\.site\/api\/(auth\/login|mine\/myHome) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/madou.js
^https:\/\/mda\..+\.site\/api\/operation\/video\/buy url response-body "code":\d+ response-body "code":200
^https:\/\/mda\..+\.site\/api\/auth\/startupAdv url reject-200

[MitM]
mda.*.site

*/


let obj = JSON.parse($response.body);
obj.msg.user.vipLevel = "shallowCard";
obj.msg.user.vipExpire = 9876543210000;
obj.msg.user.name = "捷径指令大全";
obj.msg.user.textMsgNum = 999;
obj.msg.user.voiceMsgNum = 999;
obj.msg.user.voteNum = 999;
obj.msg.balance = 999;

$done({body: JSON.stringify(obj)});

/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:

# 麻豆短视频解锁会员
^https:\/\/mda\..+\.site\/api\/(auth\/login|mine\/myHome|wallet\/query) url script-response-body https://6678888.xyz/quantumultX/mddsp.js
^https:\/\/mda\..+\.site\/api\/operation\/video\/buy url response-body "code":\d+ response-body "code":200


[mitm]
hostname = mda.*.site

*/

let obj = JSON.parse($response.body);
obj.msg.user.vipLevel = "shallowCard";
obj.msg.user.vipExpire = 4092647115000;
obj.msg.user.name = "ios黑科技";
obj.msg.user.textMsgNum = 999;
obj.msg.user.voiceMsgNum = 888;
obj.msg.user.voteNum = 777;
obj.msg.balance = 666;

$done({body: JSON.stringify(obj)});

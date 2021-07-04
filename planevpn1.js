/*
QX：
^https:\/\/0ka8kt0n\.api\.lncldglobal\.com\/1.1\/classes\/TPPipeConfig* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/planevpn1.js

QX MITM = 0ka8kt0n.api.lncldglobal.com
*/

var obj = JSON.parse($response.body);
obj = {
  "results": [{
    "holidaySale": "null",
    "showFastEntry": false,
    "refreshProxyTimeStage": "2020-12-15 08:17",
    "updatedAt": "2021-05-27T02:01:58.955Z",
    "alertMessage": "付费后不限时间、不限流量、不限速度，网速更快，体验更好哦。||没有支付方式怎么办?\\n您可以尝试查询下如何使用苹果礼品卡购买。||连接VPN遇到问题怎么办?\\n请在APP里面『重置VPN』试试。&&After payment, the proxies are faster, unlimited traffic, unlimited time,  unlimited speed, better experience.||Have no payment method?\\nYou can try to find out how to use Apple gift cards to purchase.||Have trouble connecting?\\nPlease try to 『Reset VPN』 in the APP.",
    "objectId": "5d5df1b7bbbf150008f3e310",
    "lcAppKeys": "1fcdWXBKIAg1nlCfb8XRY5+iEjxSPAqT0lPlT+RSCJSI\/kr5eK79ARGher3GugqiV4n0zn7sGT\/XNMobpa7u7Q==",
    "createdAt": "2019-08-22T01:36:55.961Z",
    "allowVersion": "2.3.8, 2.3.9, 2.4.0, 2.4.1,\n2.4.2, 2.4.3, 2.4.4, 2.4.5",
    "showPlaneAD": false,
    "updateLink": "https:\/\/apps.apple.com\/app\/id1471511787",
    "disableInCN": false,
    "enableRejectADRuleSet": true
  }]
}
;

$done({body: JSON.stringify(obj)});

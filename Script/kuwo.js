
/*


***************************
QuantumultX:

[rewrite_local]
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body kuwo.js
[mitm]
hostname = musicpay.kuwo.cn, vip1.kuwo.cn,

***************************
Surge4 or Loon: 

[Script]
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+  http://musicpay.kuwo.cn/music.pay?uid=2 302
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=Kuwo.js
[MITM]
hostname = musicpay.kuwo.cn, vip1.kuwo.cn,

**************************/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "2";
	obj.data["vipLuxuryExpire"] = "1835312949000";
	obj.data["time"] = "1961170340993";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "1835312949000";
	obj.data["vipOverSeasExpire"] = "1835312949000";
	obj.data["vipExpire"] = "1835312949000";
	obj.data["vip3Expire"] = "1835312949000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});

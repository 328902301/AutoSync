
/******************************

[rewrite_local]
^https:\/\/api-sub\.meitu\.com url script-response-body Wink.js
[mitm] 
hostname = api-sub.meitu.com

********************************/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user';


if (url.indexOf(vip) != -1) {
    obj.data.is_vip = true;
	body = JSON.stringify(obj);
}
$done({body});

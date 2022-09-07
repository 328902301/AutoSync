/*
中华万年历不完全会员，勉强干掉广告，里面的功能没用过

警告⚠️警告⚠️警告⚠️警告⚠️警告⚠️警告⚠️警告⚠️
请勿使用规则牟利，不然后果自负！
此脚本仅供学习交流，严禁以任何形式贩卖此脚本，请于下载后24小时内删除，否则产生的一切后果将由使用者本人承担，脚本作者不对脚本内任何内容负法律责任！
警告⚠️警告⚠️警告⚠️警告⚠️警告⚠️警告⚠️警告
<General ℡>
[rewrite_local]
^https?:\/\/v2-client\.suishenyun\.cn\/api\/auth\/sign\/userinfo?url script-response-body zhwnl.js
[mitm] 
hostname = v2-client.suishenyun.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/auth/sign/userinfo';

if (url.indexOf(vip) != -1) {
    obj.data.vip_expire_date = 7994894389;
    obj.data.vip_status = 1;
    body = JSON.stringify(obj);
}
$done({body});

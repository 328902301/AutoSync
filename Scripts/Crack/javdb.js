/******************************
引用地址 https://github.com/yqc007/QuantumultX/blob/master/JavDBCrack.js

脚本功能：JavDB解锁会员
软件版本：1.9.12
官网地址：https://javdb.com/
下载地址：https://t.me/yqc_123
脚本作者：Hausd0rff
更新时间：2022-06-02
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：注册时填写邀请码：rckasw
        可无限延长脚本的使用期限
*******************************
[rewrite_local]
# > JavDB解锁会员
^https?:\/\/.+\.com\/api\/v1\/ads$ url reject-200
^https?:\/\/.+\.com\/api\/v1\/(movies\/.*\/play|startup) url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/javdb.js

[mitm] 
hostname = shukego.com, yiliang8888.com, 91mingyang.com, mnter.com

*******************************/

var hausd0rff = $request['\x68\x65\x61\x64\x65\x72\x73'];
hausd0rff['\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e']='\x42\x65\x61\x72\x65\x72 \x65\x79\x4a\x68\x62\x47\x63\x69\x4f\x69\x4a\x49\x55\x7a\x49\x31\x4e\x69\x4a\x39\x2e\x65\x79\x4a\x70\x5a\x43\x49\x36\x4d\x54\x51\x30\x4d\x6a\x51\x34\x4d\x79\x77\x69\x64\x58\x4e\x6c\x63\x6d\x35\x68\x62\x57\x55\x69\x4f\x69\x4a\x35\x63\x57\x4d\x77\x4d\x44\x63\x69\x66\x51\x2e\x6c\x30\x61\x64\x5a\x35\x6f\x34\x6a\x61\x6f\x35\x73\x39\x70\x69\x6f\x37\x49\x5a\x70\x62\x62\x64\x67\x30\x48\x73\x54\x64\x73\x6f\x6e\x7a\x6a\x2d\x63\x48\x58\x68\x38\x79\x77';
hausd0rff['\x73\x69\x67\x6e\x61\x74\x75\x72\x65'] = '\x34\x35\x61\x65\x62\x66\x32\x32\x33\x39\x66\x35\x33\x33\x36\x31\x31\x62\x31\x37\x32\x61\x38\x65\x63\x66\x66\x30\x33\x36\x61\x33';
$done({
    headers : hausd0rff
});


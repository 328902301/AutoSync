/*******************************
app下载地址：商店搜索：看漫

  公众号：木木IOS分享 原十三座州府
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/api-cdn\.321mh\.com\/comic-api\/v2 url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/kmh.js
[mitm] 
hostname = *.*.*

*******************************/

var body=$response['body'];var url=$request['url'];var obj=JSON['parse'](body);const vip='/comic/getcomicmaindata';if(url['indexOf'](vip)!=-0x1){body=replace(/price":((\d)+)/ig,body,'price\x22:0');body=replace(/isbuy":((\d)+)/ig,body,'isbuy\x22:0');}function replace(_0x1dc1fd,_0x1a2e05,_0x41aa7e){return _0x1a2e05['replace'](_0x1dc1fd,function(_0xb8120e){return _0x41aa7e;});}$done({'body':body});

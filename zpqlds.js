/****************************************

项目名称：PhotoSlip-照片清理大师
下载地址：https://t.cn/A6XMsIv7
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/www2\.tigeroom\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zpqlds.js


[mitm] 

hostname = www2.tigeroom.com

****************************************/


body = $response.body.replace(/\"isVip":"\d+"/g, '\"isVip":"1"').replace(/\"viptime":"(.*?)"/g, '\"viptime":"2099-09-09"')

$done({body});

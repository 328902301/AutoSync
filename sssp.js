/****************************************

脚本功能：涩涩视频——去除所有广告
下载地址：https://48478.xyz/
网页在线：https://files.yuchenglw.com
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https://files.yuchenglw.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/sssp.js

[mitm]

hostname = files.yuchenglw.com

****************************************/


var body=$response.body; 

body = body.replace(/(<div class="banner">) (.*?)(<\/div>)/g,'<!--  -->');


body = body.replace(/(<div class="speaker">)(.*?)(<\/div>)/g,'<!--  -->');


body = body.replace(/(<div id="popup">)(.*?)(<\/div>)/g,'<!--  -->');



body = body.replace(/(<div class="float-app">)(.*?)(<\/div>)/g,'<!--  -->');



body = body.replace(/(<div id="carousel")(.*?)(<\/div>)/g,'<!--  -->');


body = body.replace(/(<div class="header fixed-top">)(.*?)(<\/div>)/g,'<!--  -->');

$done(body); 

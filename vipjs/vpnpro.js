/*


[rewrite_local]

^http:\/\/.+\.jiaofei8\.cn\/api\/user\/my url script-response-body ktgsvip.js

*.jiaofei8.cn

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

body=body.replace(/vip":\d+/g,'vip":0').replace(/transfer_enable":\d+/g,'transfer_enable":999991288490189').replace(/offset":\d+/g,'offset":0').replace(/expire_time":.+?,/g,'expire_time":"2099-09-09",'); 


$done({body});

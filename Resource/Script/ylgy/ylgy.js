/*
脚本来自Telegram的Surge Pro群组热心网友 @小白脸，由于暂无Telegram用户名，所以这里仅署名昵称。
*/

var Body = JSON.parse($response.body);
switch ($request.url.match(/map|personal|json/)[0]){
 case "map":
 Body.data = '046ef1bab26e5b9bfe2473ded237b572';
 break;
 case "personal":
 var objk = Body.data;
objk["daily_count"] = "1e+308";
objk["nick_name"] = "站在我下面的都是辣鸡";
  break;
 default:
$done({ body: $response.body
.replace(/false/g,'true') });
 }
$done({body: JSON.stringify(Body)});

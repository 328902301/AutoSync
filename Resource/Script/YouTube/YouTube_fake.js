/*
脚本作者：Maasea
引用地址：https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube-fake.js
*/
let statusCode = 204
const isQuanX = typeof $task !== "undefined";
if (isQuanX) statusCode = "HTTP/1.1 204 No Content"
$done({ status: statusCode })
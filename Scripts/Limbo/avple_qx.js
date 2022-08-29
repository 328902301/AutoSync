// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_avple.js

let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Css/avple.css" type="text/css">'
let rBody = '</body>'
let newJavaScript = '<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Scripts/Limbo/avple.js"></script></body>';
let body = $response.body
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});

// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/contentFarm/surge_contentFarm.js

let regex_head = '<head>';
let Style = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/contentFarm.css">';
let regex_body = '</body>';
let JavaScript = '<script async="async" src="https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/Limbo/contentFarm.js"></script></body>';
let body = $response.body
.replace(regex_head, Style)
.replace(regex_body, JavaScript);
$done({body});

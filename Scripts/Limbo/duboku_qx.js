// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_duboku.js

let Old = '</body>'
let New = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Css/duboku.css" type="text/css"><script type="text/javascript"  src="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Scripts/Limbo/duboku.js"></script></body>';
let body = $response.body
.replace(Old, New);
$done({body});

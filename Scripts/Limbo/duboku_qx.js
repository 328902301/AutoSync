// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_duboku.js

let Old = '</body>'
let New = '<link rel="stylesheet" href="https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/duboku.css" type="text/css"><script type="text/javascript"  src="https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/Limbo/duboku.js"></script></body>';
let body = $response.body
.replace(Old, New);
$done({body});

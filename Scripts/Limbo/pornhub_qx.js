// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_pornhub.js

let ele = '<head>';
let replacex = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/pornhub.css" type="text/css" /><script type="text/javascript" async="async" src="https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/Limbo/Adblock4limbo.user.js"></script>'
let ele_1 = '<script>';
let replacey = '<script type="text/javascript" src="https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/Limbo/Adblock4limbo.user.js"></script><script>'
let body = $response.body
    .replace(ele, replacex)
$done({ body });

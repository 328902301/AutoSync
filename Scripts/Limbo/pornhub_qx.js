// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_pornhub.js

let ele = '<head>';
let replacex = '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Css/pornhub.css" type="text/css" /><script type="text/javascript" async="async" src="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Scripts/Limbo/Adblock4limbo.user.js"></script>'
let ele_1 = '<script>';
let replacey = '<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Scripts/Limbo/Adblock4limbo.user.js"></script><script>'
let body = $response.body
    .replace(ele, replacex)
$done({ body });

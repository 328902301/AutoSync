// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_tvn.js

let ele = '<head>'
let elere = '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX/Css/tvn.css" type="text/css">';
let ele2 = '</body>';
let ele2re = '<script type="text/javascript"  src="//limbopro.com/Adguard/tvn.js"></script>';
let body = $response.body
    .replace(ele2, ele2re)
    .replace(ele, elere);
$done({ body });

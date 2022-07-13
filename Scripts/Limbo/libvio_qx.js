// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_libvio.js

let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/libvio.css" type="text/css">'
let rBody = '</body>'
let newJavaScript = '<script type="text/javascript" async="async" src="https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/Limbo/libvio.js"></script></body>';
let body = $response.body
    .replace(rHead, newStyle)
    .replace(rBody, newJavaScript);
$done({ body });

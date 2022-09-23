let ele = '<head>';
let eleReplace = '<head><link rel="stylesheet" href="https://ghproxy.com/https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/WebPage/CSS/Adblock4limbo.user.css" type="text/css" /><script type="text/javascript" async="async" src="https://ghproxy.com/https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/WebPage/Adblock4limbo.user.js"></script>'
let body = $response.body
    .replace(ele, eleReplace)
$done({ body });

let ele = '<head>';
let eleReplace = '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/Scripts/WebPage/CSS/Adblock4limbo.user.css" type="text/css" /><script type="text/javascript" async="async" src="https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/Scripts/WebPage/Adblock4limbo.user.js"></script>'
let body = $response.body
    .replace(ele, eleReplace)
$done({ body });

let ele = '<head>';
let eleReplace = '<head><link rel="stylesheet" href="https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/WebPage/CSS/Adblock4limbo.user.css" type="text/css" /><script type="text/javascript" async="async" src="https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/WebPage/Adblock4limbo.user.js"></script>'
let body = $response.body
    .replace(ele, eleReplace)
$done({ body });

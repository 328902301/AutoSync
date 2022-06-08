/* 2022-06-07 */
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/Scripts/WebPage/CSS/cupbox.css" type="text/css">');
$done({ body });

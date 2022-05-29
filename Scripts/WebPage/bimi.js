/* 2022-05-28 */
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/Scripts/WebPage/CSS/bimi.css" type="text/css">');
$done({ body });

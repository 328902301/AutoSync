/* 2022-05-28 */
var body = $response.body.replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/Scripts/WebPage/CSS/zhenbuka.css" type="text/css">').replace(/'6572'/g, "'6578'");
$done({ body });

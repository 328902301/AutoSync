/* 2022-05-28 */
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/Scripts/WebPage/CSS/lezhu.css" type="text/css">')
    .replace(/jquerys.js\?v/g, "ddgksf2013.js?v");
$done({ body });

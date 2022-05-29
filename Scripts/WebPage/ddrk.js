/* 2022-05-28 */
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/Scripts/WebPage/CSS/ddrk.css" type="text/css"><script type="text/javascript" async="async" src="//limbopro.com/Adguard/ddrk.js"></script>');
$done({ body });

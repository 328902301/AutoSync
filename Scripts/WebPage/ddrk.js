/*
2022-05-28
*/

var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/ddrk.css" type="text/css"><script type="text/javascript" async="async" src="//limbopro.com/Adguard/ddrk.js"></script>');
$done({ body });

/*
2022-05-28
*/

var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://ghproxy.com/https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/gimytv.css" type="text/css">');
$done({ body });

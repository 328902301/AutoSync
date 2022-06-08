/* 2022-06-07 */
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/cupbox.css" type="text/css">');
$done({ body });

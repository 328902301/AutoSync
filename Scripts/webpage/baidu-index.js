let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://gitlab.com/RuCu6/QuanX/-/raw/main/Css/baidu-index.css" type="text/css" />'
let body = $response.body.replace(rHead, newStyle);
$done({ body });

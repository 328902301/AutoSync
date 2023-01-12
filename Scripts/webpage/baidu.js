let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/baidu.css" type="text/css" />'
let body = $response.body.replace(rHead, newStyle);
$done({ body });

// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_91porn.js

let eleOne = '<head>'
let newStyle = '<head><link rel=\"stylesheet\" href=\"https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/91porn.css\" type=\"text/css\">'
var eleTwo = '</body>'
var newJavaScript = '<script type=\"text/javascript\"  async="async" src=\"https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/Limbo/91porn.js\"></script></body>'
let body = $response.body
    .replace(eleOne, newStyle)
    .replace(eleTwo, newJavaScript);
$done({ body });

// 引用地址 https://github.com/limbopro/Adblock4limbo/blob/main/Adguard/surge_javmost.js

let regex_1 = '<title>'
let body_1 = '<link rel=\"stylesheet\" href=\"https://raw.githubusercontent.com/RuCu6/QuanX/main/Css/javmost.css\" type=\"text/css\"><script type="text/javascript" async="async" src="https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/Limbo/javmost.js"></script><title>'
let body = $response.body
    .replace(regex_1, body_1)
$done({ body });

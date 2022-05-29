var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ddgksf2013/Cuttlefish/Html/CSS/ddrk.css" type="text/css"><script type="text/javascript" async="async" src="//limbopro.com/Adguard/ddrk.js"></script>');
$done({ body });

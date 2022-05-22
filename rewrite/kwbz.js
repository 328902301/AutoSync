





var body = $response.body   
    .replace(/svipIcon":".*?"/g, 'svipIcon":"https://raw.githubusercontent.com/Orz-3/face/master/HK.png"');
$done({ body });

/* 

^http://(.+).kuwo.cn(/v2/api/user/info|/a.p|/vip/v2/user/vip) url script-response-body https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/kwbz.js


 */





var body = $response.body   
    .replace(/svipIcon":".*?"/g, 'svipIcon":"https://raw.githubusercontent.com/Orz-3/face/master/HK.png"');
$done({ body });

var body = $response.body
    .replace(/\"vipStatus\":3/, "\"vipStatus\":6")
    .replace(/\"expireTime\":1547308799000/, "\"expireTime\":2524521600000");
$done({ body });

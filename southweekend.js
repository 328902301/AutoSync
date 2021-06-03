body =
$response.body.replace(/vip_type":\w/g,'vip_type":s').replace(/svip_given":\d+/g,'svip_given":3650').replace(/is_vip":\w+/g,'is_vip":true').replace(/enabled":\w+/g,'enabled":true').replace(/svip_expired_at":\d+/g,'svip_expired_at":1936627200')
$done({body});
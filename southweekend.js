body =
$response.body.replace(/member_type":\d/g,'member_type":"s\"').replace(/expire_time":\w+/g,'expire_time":"2064475516"').replace(/user":\{[^\}]+\}/g,'user":{"islogin":true,"isview":true,"isNewsStand":2,"member_type":5,"expire_time":"2064475516","isdigg":true,"isfav":true}')
$done({body});

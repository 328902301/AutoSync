body =
$response.body.replace(/member_type":\d/g,'member_type":5').replace(/expire_time":\w+/g,'expire_time":"2030-05-05"').replace(/user":\{[^\\}]+\\}/g,'user":{"islogin":true,"isview":true,"isNewsStand":2,"member_type":5,"expire_time":"2030-05-05","isdigg":true,"isfav":true}')
$done({body});
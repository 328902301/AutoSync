/*
By nzw9314
彩云天气 解锁VIP
*/

let obj = JSON.parse($response.body);

    obj.result.vip_expired_at = 4075798974,
    obj.result.is_xy_vip = true,
    obj.result.xy_vip_expire = 0,
    obj.result.is_vip = true

$done({body: JSON.stringify(obj)});

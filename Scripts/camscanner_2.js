/*
By ICU2Vmile
扫描全能王 解锁VIP，云扫描不可用
CamScanner unlocks pro, Cloud scanning is not available
*/

let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1643731200"}}};
$done({body: JSON.stringify(obj)});

/**
 * @supported AE5E51FDD7AA
 */
/*


[rewrite_local]

#简影解锁会员
http:\/\/api\.jianmovie\.com\/(cardinfo|productinfo|balance|expense) url script-response-body https://raw.githubusercontent.com/byour13/Script/main/jianyin.js


MITM = api.jianmovie.com


*/


body = $response.body.replace(/"is_vip":\d+/g, '"is_vip":1').replace(/"vip_type":\d+/g, '"vip_type":1').replace(/"vip_expire_time":\d+/g, '"vip_expire_time":4092647115').replace(/"vip":\d+/g, '"vip":1').replace(/"balance":\d+/g, '"balance":0').replace(/"success":\d+/g, '"success":1')

$done({body});

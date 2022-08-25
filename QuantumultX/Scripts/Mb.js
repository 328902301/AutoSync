/*
###############################
TG Channel：https://t.me/QuantX
苹果商店下载: 幕布
修改内容：解锁永久会员 
注意事项：每次解锁需启动圈叉
##############################

本地重写
[rewrite_local]
^https:\/\/api2.mubu.com\/v3\/api\/user/* url script-response-body https://raw.githubusercontent.com/WSL33099/QuantumultX/main/Script/Mb.js
[mitm]
hostname= api2.mubu.com

*/



let body = $response.body
console.log(body)
try {
    let obj = JSON.parse(body)
    if (obj.code == 0 && obj.data) {
        obj.data.expert = true;
        obj.data.level = 1;
        obj.data.vipEndDate = "22220222"
        obj.data.name = "莫离"
        obj.data.wxName = "莫离"
        body = JSON.stringify(obj)
    }
} catch(e) {
    console.error(__name, 'error', e.message)
}
$done(body)

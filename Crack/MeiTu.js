/******************************
美图秀秀
*******************************
[rewrite_local]
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/WeeekWin/QuanX/main/Crack/MeiTu.js
[mitm] 
hostname = api.xiuxiu.meitu.com,h5.xiuxiu.meitu.com
*******************************/
 
var obj = JSON.parse($response.body);
    obj.data.valid_time = 4092599349;
    obj.data.is_expire = 0;
    obj.data.expire_days = -9999999999;
    obj.data.vip_type = 101;
    obj.data.is_valid_user = 1;
    obj.data.screen.name = "WeeekWin";
    obj.data.in_valid_time = 4092599349;
    obj.data.home_prompt = "会员有效期至2099/09/09";
    obj.data.home_btn_prompt = "立即查看";
$done({ body: JSON.stringify(obj) });

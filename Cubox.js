#cubox-收藏阅读

var body = $response.body;
var url = $request.url;
var chxm1023 = JSON.parse(body);

const vip = '/userInfo';

if (url.indexOf(vip) != -1) {
    chxm1023.data.level = 1;
    chxm1023.data.expireTime = "2099-09-09T09:09:09+09:09";
    chxm1023.data.nickName = "chxm1023";
    chxm1023.data.thirdNickName = "chxm1023";
    chxm1023.data.isExpire = false;
    chxm1023.data.active = true;
    chxm1023.data.payTime = 1660006006;
    body = JSON.stringify(chxm1023);
}


$done({body});

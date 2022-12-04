// 2022-12-04 10:35

var url = $request.url;
var body = $response.body;

if (!body) {
  $done({});
}

// 简讯
if (/^https?:\/\/api\.tipsoon\.com\/api\/v1\/user\/info$/.test(url)) {
  let obj = JSON.parse(body);
  obj.data.is_vip = true;
  obj.data.vip_expire_time = "2040-01-01 23:59:59";
  body = JSON.stringify(obj);
}

$done({ body });

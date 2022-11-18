const path1 = "/interface/sdk/sdkad.php";
const path2 = "/wbapplua/wbpullad.lua";
var obj = JSON.parse($response.body)

if ($request.url.indexOf(path1) != -1) {
  for (let item of obj['ads']) {
    item['displaytime'] = 0;
    item['begintime'] = '2040-12-27 00:00:01';
    item['endtime'] = '2040-12-27 23:59:59';
  }
  if (obj.background_delay_display_time) obj.background_delay_display_time = 60*60*24*365;
  if (obj.show_push_splash_ad) obj.show_push_splash_ad = false;
  if (obj.ads) obj.ads = [];
  body = JSON.stringify(obj) + 'OK';
}

if ($request.url.indexOf(path2) != -1) {
  if (obj.cached_ad && obj.cached_ad.ads) obj.cached_ad.ads = [];
  body = JSON.stringify(obj);
}

$done({body});

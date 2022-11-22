// 鸣谢 @yichahucha, @zmqcherish

var url = $request.url;
var body = $response.body;

const path1 = '/interface/sdk/sdkad.php';
const path2 = '/wbapplua/wbpullad.lua';

if (!$response.body) {
  $done({});
}

if (url.indexOf(path1) != -1) {
  let tmp = /\{.*\}/;
  body = body.match(tmp);
  let obj = JSON.parse(body);
  if (obj.needlocation) obj.needlocation = false;
  if (obj.show_push_splash_ad) obj.show_push_splash_ad = false;
  if (obj.code) obj.code = 200;
  if (obj.background_delay_display_time) obj.background_delay_display_time = 60 * 60 * 24 * 366;
  if (obj.lastAdShow_delay_display_time) obj.lastAdShow_delay_display_time = 60 * 60 * 24 * 366;
  if (obj.realtime_ad_video_stall_time) obj.realtime_ad_video_stall_time = 60 * 60 * 24 * 366;
  if (obj.realtime_ad_timeout_duration) obj.realtime_ad_timeout_duration = 60 * 60 * 24 * 366;
  if (obj.ads) obj.ads = [];
  body = JSON.stringify(obj) + 'OK';
}

if (url.indexOf(path2) != -1) {
  let obj = JSON.parse(body);
  if (obj.cached_ad && obj.cached_ad.ads && obj.cached_ad.delete_days) {
    obj.cached_ad.ads = [];
    obj.cached_ad.delete_days = 1;
  }
  body = JSON.stringify(obj);
}

$done({body});

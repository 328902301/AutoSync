// 鸣谢 @yichahucha, @zmqcherish

const launchAdUrl1 = '/interface/sdk/sdkad.php';
const launchAdUrl2 = '/wbapplua/wbpullad.lua';

var body = $response.body;
var url = $request.url;

function modifyMain(url, data) {
  if (url.indexOf(launchAdUrl1) > -1) {
    let temp = data.match(/\{.*\}/);
    if (!temp) return data;
    data = JSON.parse(temp);
    if (data.needlocation) data.needlocation = false;
    if (data.show_push_splash_ad) data.show_push_splash_ad = false;
    if (data.code) data.code = 200;
    if (data.background_delay_display_time) data.background_delay_display_time = 60 * 60 * 24 * 366;
    if (data.lastAdShow_delay_display_time) data.lastAdShow_delay_display_time = 60 * 60 * 24 * 366;
    if (data.realtime_ad_video_stall_time) data.realtime_ad_video_stall_time = 60 * 60 * 24 * 366;
    if (data.realtime_ad_timeout_duration) data.realtime_ad_timeout_duration = 60 * 60 * 24 * 366;
    if (data.ads) data.ads = [];
    return JSON.stringify(data) + 'OK';
  }
  if (url.indexOf(launchAdUrl2) > -1) {
    data = JSON.parse(data);
    if (data.cached_ad && data.cached_ad.ads && data.cached_ad.delete_days) {
      data.cached_ad.ads = [];
      data.cached_ad.delete_days = 1;
    }
    return JSON.stringify(data);
  }
  return data;
}

body = modifyMain(url, body);
$done({body});

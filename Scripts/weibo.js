// 2023-02-02 10:30

if (!$response.body) $done({});
const url = $request.url;
let obj = null;

if (url.includes("/interface/sdk/sdkad.php")) {
  let obj = JSON.parse($response.body.substring(0, body.length - 2));
  if (obj.needlocation) {
    obj.needlocation = false;
  }
  if (obj.show_push_splash_ad) {
    obj.show_push_splash_ad = false;
  }
  if (obj.code) {
    obj.code = 200;
  }
  if (obj.background_delay_display_time) {
    obj.background_delay_display_time = 31536000; // 60 * 60 * 24 * 365 = 31536000
  }
  if (obj.lastAdShow_delay_display_time) {
    obj.lastAdShow_delay_display_time = 31536000;
  }
  if (obj.realtime_ad_video_stall_time) {
    obj.realtime_ad_video_stall_time = 31536000;
  }
  if (obj.realtime_ad_timeout_duration) {
    obj.realtime_ad_timeout_duration = 31536000;
  }
  if (obj.ads) {
    for (let item of obj.ads) {
      item.displaytime = 0;
      item.displayintervel = 31536000;
      item.allowdaydisplaynum = 0;
      item.begintime = "2040-01-01 00:00:00";
      item.endtime = "2040-01-01 23:59:59";
    }
  }
} else {
  let obj = JSON.parse($response.body);
  // 首页签到
  if (url.includes("/2/checkin/show")) {
    obj.show = 0;
  } else if (url.includes("/wbapplua/wbpullad.lua")) {
    if (obj.cached_ad.ads) {
      for (let item of obj.cached_ad.ads) {
        item.start_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
        item.show_count = 0;
        item.duration = 31536000; // 60 * 60 * 24 * 365 = 31536000
        item.end_date = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
      }
    }
  }
}

body = JSON.stringify(obj);
$done({ body });

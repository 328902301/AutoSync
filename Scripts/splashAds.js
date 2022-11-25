// 鸣谢 @yichahucha, @yjqiang

var url = $request.url;
var body = $response.body;

if (url.includes('uve.weibo.com/interface/sdk/sdkad.php')) {
  let tmp = /\{.*\}/;
  body = body.match(tmp);
  let obj = JSON.parse(body);
  if (obj.needlocation) obj.needlocation = false;
  if (obj.show_push_splash_ad) obj.show_push_splash_ad = false;
  if (obj.code) obj.code = 200;
  if (obj.background_delay_display_time) obj.background_delay_display_time = 31536000; // 60 * 60 * 24 * 365 = 31536000
  if (obj.lastAdShow_delay_display_time) obj.lastAdShow_delay_display_time = 31536000;
  if (obj.realtime_ad_video_stall_time) obj.realtime_ad_video_stall_time = 31536000;
  if (obj.realtime_ad_timeout_duration) obj.realtime_ad_timeout_duration = 31536000;
  //if (obj.ads) obj.ads = [];
  for (let item of obj['ads']) {
    item['displaytime'] = 0;
    item['displayintervel'] = 31536000;
    item['allowdaydisplaynum'] = 0;
    item['begintime'] = '2040-01-01 00:00:00';
    item['endtime'] = '2040-01-01 23:59:59';
  }
  body = JSON.stringify(obj) + 'OK';
}

if (url.includes('uve.weibo.com/wbapplua/wbpullad.lua')) {
  let obj = JSON.parse(body);
  /**
  if (obj.cached_ad && obj.cached_ad.ads && obj.cached_ad.delete_days) {
    obj.cached_ad.ads = [];
    obj.cached_ad.delete_days = 1;
  }
  */
  for (let item of obj['cached_ad']['ads']) {
    item['start_date'] = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
    item['show_count'] = 0;
    item['duration'] = 31536000; // 60 * 60 * 24 * 365 = 31536000
    item['end_date'] = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
  }
  body = JSON.stringify(obj);
}

if (url.includes('mi.com/v1/app/start')) {
  let obj = JSON.parse(body);
  obj.code = 0;
  if (obj.data.skip_splash && obj.data.splash) {
    obj.data.skip_splash = true;
    obj.data.splash = [];
  }
  obj.info = 'ok';
  obj.desc = '成功';
  body = JSON.stringify(obj);
}

$done({body});

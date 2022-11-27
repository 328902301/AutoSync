// 2022-11-27 23:58

var url = $request.url;
var body = $response.body;

if (!body) {
  $done({});
}

// 12306
if (url.includes('ad.12306.cn/ad/ser/getAdList')) {
  let obj = JSON.parse(body);
  if (obj.materialsList) {
    if (obj.materialsList.length == 1) {
      obj.materialsList[0].filePath = '';
      obj.advertParam.fixedscreen = -1;
      obj.advertParam.skipTime = 1000;
      obj.advertParam.skipTimeAgain = 0;
      obj.advertParam.index = 0;
    } else if (obj.materialsList.length > 1) {
      obj.materialsList = [];
    }
  }
  body = JSON.stringify(obj);
}

// 京东
if (url.includes('jd.com/client.action?functionId=start')) {
  let obj = JSON.parse(body);
  for (let i = 0; i < obj.images.length; i++) {
    for (let j = 0; j < obj.images[i].length; j++) {
      if (obj.images[i][j].showTimes) {
        obj.images[i][j].showTimes = 0;
        obj.images[i][j].onlineTime = "2040-01-01 00:00:00";
        obj.images[i][j].referralsTime = "2040-01-02 00:00:00";
        obj.images[i][j].time = 0;
      }
    }
  }
  obj.countdown = 100;
  obj.showTimesDaily = 0;
  body = JSON.stringify(obj);
}

// 美团外卖
if (url.includes('wmapi.meituan.com/api/v7/loadInfo')) {
  let obj = JSON.parse(body);
  delete obj.data.startpicture.ad;
  delete obj.data.startpicture.mk;
  body = JSON.stringify(obj);
}

// 微博 php
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
  for (let item of obj['ads']) {
    item['displaytime'] = 0;
    item['displayintervel'] = 31536000;
    item['allowdaydisplaynum'] = 0;
    item['begintime'] = '2040-01-01 00:00:00';
    item['endtime'] = '2040-01-01 23:59:59';
  }
  body = JSON.stringify(obj) + 'OK';
}

// 微博 lua
if (url.includes('uve.weibo.com/wbapplua/wbpullad.lua')) {
  let obj = JSON.parse(body);
  for (let item of obj['cached_ad']['ads']) {
    item['start_date'] = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
    item['show_count'] = 0;
    item['duration'] = 31536000; // 60 * 60 * 24 * 365 = 31536000
    item['end_date'] = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
  }
  body = JSON.stringify(obj);
}

// 小米商城
if (url.includes('mi.com/v1/app/start')) {
  let obj = JSON.parse(body);
  obj.code = 0;
  if (obj.data.skip_splash && obj.data.splash) {
    obj.data.skip_splash = true;
    delete obj.data.splash;
  }
  obj.info = 'ok';
  obj.desc = '成功';
  body = JSON.stringify(obj);
}

$done({body});

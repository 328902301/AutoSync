// 2022-11-28 17:30

var url = $request.url;
var body = $response.body;

if (!body) {
  $done({});
}

// 12306
if (url.includes('ad.12306.cn/ad/ser/getAdList')) {
  let obj = JSON.parse(body);
    if (obj.materialsList) {
      for (let i = 0; i < obj.materialsList.length; i++) {
      obj.materialsList[i].filePath = '';
      obj.advertParam.skipTime = 500;
      obj.advertParam.showSkipBtn = 0;
      obj.advertParam.skipTimeAgain = 5;
    }
  }
  body = JSON.stringify(obj);
}

// 嘀嗒出行
if (url.includes('didapinche.com/ad/cx/startup?')) {
  let obj = JSON.parse(body);
  if (obj.hasOwnProperty("startupPages") == true) {
    obj.show_time = 1;
    obj.full_screen = 0;
    let startupPages = [];
    obj.startupPages.forEach((element) => {
      element["width"] = 1;
      element["height"] = 1;
      element["page_url"] = "#";
      startupPages.push(element);
    });
    obj.startupPages = startupPages;
    body = JSON.stringify(obj);
  }
}

// 多点
if (url.includes('cmsapi.dmall.com/app/home/homepageStartUpPic')) {
  let obj = JSON.parse(body);
  for (let i = 0; i < obj["data"]["welcomePage"].length; i++) {
    obj["data"]["welcomePage"][i]["onlineTime"] = 2208960000000;
    obj["data"]["welcomePage"][i]["offlineTime"] = 2209046399000;
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
        obj.images[i][j].onlineTime = '2040-01-01 00:00:00';
        obj.images[i][j].referralsTime = '2040-01-01 23:59:59';
        obj.images[i][j].time = 0;
      }
    }
  }
  obj.countdown = 100;
  obj.showTimesDaily = 0;
  body = JSON.stringify(obj);
}

// 联享家
if (url.includes('mi.gdt.qq.com/gdt_mview.fcg')) {
  let obj = JSON.parse(body);
  obj.seq = "0";
  obj.reqinterval = 0;
  delete obj.last_ads;
  delete obj.data;
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

// 小爱音箱
if (url.includes('hd.mina.mi.com/splashscreen/alert')) {
  let obj = JSON.parse(body);
  let data = [];
  for (let i = 0; i < obj.data.length; i++) {
    let ad = obj.data[i];
    ad.start = "2208960000000";
    ad.end = "2209046399000";
    ad.stay = 1;
    ad.maxTimes = 1;
    data.push(ad);
  }
  obj.data = data;
  body = JSON.stringify(obj);
}

// 小米商城
if (url.includes('mi.com/v1/app/start')) {
  let obj = JSON.parse(body);
  obj.code = 0;
  obj.data.skip_splash = true;
  delete obj.data.splash;
  obj.info = 'ok';
  obj.desc = '成功';
  body = JSON.stringify(obj);
}

$done({body});

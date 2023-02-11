// 2023-02-11 22:30

if (!$response.body) $done({});
const url = $request.url;
var body = $response.body;

function getCube(p) {
  if (/^https:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\?/.test(p)) {
    return "嘀嗒出行-开屏广告";
  }
  if (/^https:\/\/cmsapi\.dmall\.com\/app\/home\/homepageStartUpPic/.test(p)) {
    return "多点-开屏广告";
  }
  if (/^https:\/\/(jdforrepam|api\.huikaiju)\.com\/api\/v1\/startup\?/.test(p)) {
    return "JavDB";
  }
  if (/^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=start/.test(p)) {
    return "京东-开屏广告";
  }
  if (/^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg/.test(p)) {
    return "联享家-开屏广告";
  }
  if (/^https:\/\/wmapi\.meituan\.com\/api\/v7\/loadInfo/.test(p)) {
    return "美团外卖-开屏广告";
  }
  if (/^https:\/\/hd\.mina\.mi\.com\/splashscreen\/alert/.test(p)) {
    return "小爱音箱-开屏广告";
  }
  if (/^https:\/\/api\.m\.mi\.com\/v1\/app\/start$/.test(p)) {
    return "小米商城-开屏广告";
  }
  if (/^https:\/\/api\.zhihu\.com\/commercial_api\/app_float_layer$/.test(p)) {
    return "知乎-首页右下角悬浮框";
  }
}

switch (getCube(url)) {
  case "嘀嗒出行-开屏广告":
    try {
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
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`嘀嗒出行-开屏广告, 出现异常: ` + error);
    }
    break;
  case "多点-开屏广告":
    try {
      let obj = JSON.parse(body);
      for (let i = 0; i < obj["data"]["welcomePage"].length; i++) {
        obj["data"]["welcomePage"][i]["onlineTime"] = 2208960000000;
        obj["data"]["welcomePage"][i]["offlineTime"] = 2209046399000;
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`多点-开屏广告, 出现异常: ` + error);
    }
    break;
  case "JavDB":
    try {
      let obj = JSON.parse(body);
      if (obj.data.splash_ad) {
        obj.data.splash_ad.enabled = false;
        obj.data.splash_ad.overtime = 0;
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`JavDB, 出现异常: ` + error);
    }
    break;
  case "京东-开屏广告":
    try {
      let obj = JSON.parse(body);
      for (let i = 0; i < obj.images.length; i++) {
        for (let j = 0; j < obj.images[i].length; j++) {
          if (obj.images[i][j].showTimes) {
            obj.images[i][j].showTimes = 0;
            obj.images[i][j].onlineTime = "2040-01-01 00:00:00";
            obj.images[i][j].referralsTime = "2040-01-01 23:59:59";
            obj.images[i][j].time = 0;
          }
        }
      }
      obj.countdown = 100;
      obj.showTimesDaily = 0;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`京东-开屏广告, 出现异常: ` + error);
    }
    break;
  case "联享家-开屏广告":
    try {
      let obj = JSON.parse(body);
      obj.seq = "0";
      obj.reqinterval = 0;
      delete obj.last_ads;
      delete obj.data;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`联享家-开屏广告, 出现异常: ` + error);
    }
    break;
  case "美团外卖-开屏广告":
    try {
      let obj = JSON.parse(body);
      delete obj.data.startpicture.ad;
      delete obj.data.startpicture.mk;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`美团外卖-开屏广告, 出现异常: ` + error);
    }
    break;
  case "小爱音箱-开屏广告":
    try {
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
    } catch (error) {
      console.log(`小爱音箱-开屏广告, 出现异常: ` + error);
    }
    break;
  case "小米商城-开屏广告":
    try {
      let obj = JSON.parse(body);
      obj.code = 0;
      obj.data.skip_splash = true;
      delete obj.data.splash;
      obj.info = "ok";
      obj.desc = "成功";
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`小米商城-开屏广告, 出现异常: ` + error);
    }
    break;
  case "知乎-首页右下角悬浮框":
    try {
      let obj = JSON.parse(body);
      if ("feed_egg" in obj) obj = {};
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`知乎-首页右下角悬浮框, 出现异常: ` + error);
    }
    break;
  default:
    break;
}

$done({ body });

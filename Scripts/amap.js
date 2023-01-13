// 2023-01-13 12:42

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj.data) {
  if (url.includes("/faas/amap-navigation/main-page")) {
    // 高德地图-首页卡片
    if (obj.data.cardList) {
      obj.data.cardList = obj.data.cardList.filter(
        (item) => item.dataKey === "LoginCard"
      );
    }
  } else if (url.includes("/promotion-web/resource")) {
    // 高德地图-打车
    delete obj.data.banner;
    delete obj.data.bubble;
    // delete obj.data.icon;
    delete obj.data.popup;
    delete obj.data.tips;
  } else if (url.includes("/shield/dsp/profile/index/nodefaasv3")) {
    // 高德地图-我的
    if (obj.data.cardList) {
      obj.data.cardList = obj.data.cardList.filter(
        (item) => item.dataKey === "MyOrderCard"
      );
    }
  } else if (url.includes("/valueadded/alimama/splash_screen")) {
    // 高德地图-开屏广告
    if (obj.data.ad) {
      for (let item of obj.data.ad) {
        item.set.setting.display_time = 0;
        item.creative[0].start_time = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
        item.creative[0].end_time = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
      }
    }
  }
}

body = JSON.stringify(obj);
$done({ body });

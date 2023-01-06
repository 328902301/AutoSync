// 2023-01-06 20:02

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj.data) {
  // 小红书-开屏广告-config
  if (url.includes("/v1/system_service/config")) {
    //obj.data.tabbar.tabs = Object.values(obj.data.tabbar.tabs).filter((item) => !item.title === "购买");
    delete obj.data.store;
    delete obj.data.splash;
    delete obj.data.loading_img;
  } else if (url.includes("/v2/system_service/splash_config")) {
    // 小红书-开屏广告-splash_config
    obj.data.ads_groups.forEach((i) => {
      i.start_time = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
      i.end_time = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
      if (i.ads) {
        i.ads.forEach((j) => {
          j.start_time = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
          j.end_time = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
        });
      }
    });
  } else if (url.includes("/v6/homefeed")) {
    // 小红书-信息流广告
    obj.data = obj.data.filter((d) => !d.ads_info);
  }
}

body = JSON.stringify(obj);
$done({ body });

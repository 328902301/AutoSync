// 2023-01-29 17:55

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj.data) {
  if (url.includes("/faas/amap-navigation/main-page")) {
    // 首页卡片
    if (obj.data.cardList) {
      obj.data.cardList = obj.data.cardList.filter(
        (item) => item.dataKey === "LoginCard"
      );
    }
    if (obj.data.mapBizList) {
      obj.data.mapBizList = [];
    }
  } else if (url.includes("/promotion-web/resource")) {
    // 打车页面
    let item = ["banner", "bubble", "icon", "popup", "tips"];
    if (obj.data) {
      item.forEach((i) => {
        obj.data[i] = [];
      });
    }
  } else if (url.includes("/shield/dsp/profile/index/nodefaasv3")) {
    // 我的页面
    if (obj.data.cardList) {
      obj.data.cardList = obj.data.cardList.filter(
        (item) => item.dataKey === "MyOrderCard"
      );
    }
  } else if (url.includes("/shield/frogserver/aocs")) {
    // 首页右上角图层
    if (obj.data.operation_layer) {
      obj.data.operation_layer = {
        status: 1,
        version: "",
        value: ""
      };
    }
    // 首页右上角动图
    if (obj.data.home_business_position_config) {
      obj.data.home_business_position_config = {
        status: 1,
        version: "",
        value: ""
      };
    }
  } else if (url.includes("/shield/search/nearbyrec_smart")) {
    // 附近页面
    if (obj.data.modules) {
      obj.data.modules = obj.data.modules.filter(
        (item) =>
          item === "head" || item === "search_hot_words" || item === "feed_rec"
      );
    }
  } else if (url.includes("/shield/search/poi/detail")) {
    // 景点详情页
    let item = [
      "check_in", // 足迹打卡
      "multi_page_anchor", // 二级导航菜单
      "reviews", // 用户评价
      "scenic_recommend", //景点建议
      "operation_banner" //横版图片推广
    ];
    if (obj.data.modules) {
      item.forEach((i) => {
        obj.data[i] = {};
      });
    }
  } else if (url.includes("/valueadded/alimama/splash_screen")) {
    // 开屏广告
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

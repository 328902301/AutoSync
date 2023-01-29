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
    if (obj.data.banner) {
      obj.data.banner = [];
    }
    if (obj.data.bubble) {
      obj.data.bubble = [];
    }
    if (obj.data.icon) {
      obj.data.icon = [];
    }
    if (obj.data.popup) {
      obj.data.popup = [];
    }
    if (obj.data.tips) {
      obj.data.tips = [];
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
    // 搜索地点详情页
    if (obj.data.modules) {
      // 足迹打卡
      if (obj.data.modules.check_in) {
        obj.data.modules.check_in = {};
      }
      // 二级导航菜单
      if (obj.data.modules.multi_page_anchor) {
        obj.data.modules.multi_page_anchor = {};
      }
      // 用户评价
      if (obj.data.modules.reviews) {
        obj.data.modules.reviews = {};
      }
      // 景点建议
      if (obj.data.modules.scenic_recommend) {
        if (obj.data.modules.scenic_recommend.data) {
          obj.data.modules.scenic_recommend.data.max_num_poi = 3;
        }
      }
      // 横版图片推广
      if (obj.data.modules.operation_banner) {
        obj.data.modules.operation_banner = {};
      }
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

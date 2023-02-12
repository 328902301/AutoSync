// 2023-02-12 10:25

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

if (url.includes("/appview/v3/zhomre")) {
  // 我的页面
  body = body.replace(/<body><div\sid="root".*<\/div><script>>/g, "");
  $done({ body });
} else {
  let obj = JSON.parse(body);
  if (url.includes("/commercial_api/app_float_layer")) {
    // 悬浮图标
    if ("feed_egg" in obj) {
      obj = {};
    }
  } else if (url.includes("/moments_v3")) {
    if (obj.data) {
      obj.data = obj.data.filter((i) => !i.title.includes("为您推荐"));
    }
  } else if (url.includes("/topstory/hot-lists/everyone-seeing")) {
    // 热榜信息流
    if (obj.data.data) {
      obj.data.data = obj.data.data.filter((i) => !i.card_id.includes("AT_"));
    }
  } else if (url.includes("/topstory/recommend_v2")) {
    // 推荐信息流
    if (obj.data) {
      obj.data = obj.data.filter((i) => {
        if (
          i.type === "market_card" &&
          i.fields?.header?.url &&
          i.fields.body?.video?.id
        ) {
          let videoID = getUrlParamValue(item.fields.header.url, "videoID");
          if (videoID) {
            i.fields.body.video.id = videoID;
          }
        } else if (i.type === "common_card") {
          // 推广视频
          if (i.extra?.type === "zvideo") {
            let videoUrl = i.common_card.feed_content.video.customized_page_url;
            let videoID = getUrlParamValue(videoUrl, "videoID");
            if (videoID) {
              i.common_card.feed_content.video.id = videoID;
            }
          } else if (i.common_card?.feed_content?.video?.id) {
            let search = '"feed_content":{"video":{"id":';
            let str = $response.body.substring(
              $response.body.indexOf(search) + search.length
            );
            let videoID = str.substring(0, str.indexOf(","));
            i.common_card.feed_content.video.id = videoID;
          } else if (
            i.common_card?.footline?.elements?.text?.panel_text?.includes(
              "广告"
            )
          ) {
            return false;
          }
          return true;
        } else if (i.type === "pin_aggregation_card") {
          // 信息流横排卡片
          return false;
        } else if (i.type === "feed_advert") {
          // 伪装成正常内容的卡片
          return false;
        }
        return true;
      });
    }
  } else if (url.includes("/people/homepage_entry")) {
    const item = [
      // "钱包",
      // "付费咨询",
      // "传视频",
      // "开直播",
      // "芝士商单",
      "书架",
      "已购",
      // "创作训练营",
      // "活动广场",
      // "圆桌",
      "专题",
      // "圈子",
      "社区共建",
      "帮助与客服"
      // "盐值分"
    ];
    if (obj.list) {
      obj.list = obj.list.filter((i) => i.name.includes(item));
    }
  } else if (url.includes("/people/self")) {
    if (obj.vip_info) {
      obj.vip_info.is_vip = true;
      delete obj.vip_info.entrance_v2;
      obj.vip_info.vip_type = 2;
      delete obj.vip_info.entrance.sub_title;
      delete obj.vip_info.entrance.title;
      delete obj.vip_info.entrance.button_text;
      delete obj.vip_info.entrance.sub_title_new;
      obj.vip_info.entrance.identity = "super_svip";
      obj.vip_info.entrance.expires_day = "2040-01-01";
      delete obj.vip_info.entrance_new;
    }
  }
  $done({ body: JSON.stringify(obj) });
}

function getUrlParamValue(url, queryName) {
  return Object.fromEntries(
    url
      .substring(url.indexOf("?") + 1)
      .split("&")
      .map((pair) => pair.split("="))
  )[queryName];
}

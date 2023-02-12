// 2023-02-12 10:25

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

if (url.includes("/appview/v3/zhomre")) {
  body = body.replace(/<body><div\sid="root".*<\/div><script>>/g, "");
  $done({ body });
} else {
  // 修复number类型精度丢失
  body = body.replace(/(\w+"+\s?):\s?(\d{15,})/g, '$1:"$2"');
  let obj = JSON.parse(body);
  if (url.includes("/commercial_api/app_float_layer")) {
    if ("feed_egg" in obj) {
      obj = {};
    }
  } else if (url.includes("/moments_v3")) {
    if (obj.data) {
      obj.data = obj.data.filter((i) => !i.title.includes("为您推荐"));
    }
  } else if (url.includes("/topstory/hot-lists/everyone-seeing")) {
    if (obj.data.data) {
      obj.data.data = obj.data.data.filter((i) => !i.card_id.includes("AT_"));
    }
  } else if (url.includes("/topstory/recommend_v2")) {
    const newData = (element) => {
      const elementStr = JSON.stringify(element);
      // 是否为广告
      const isAd =
        element["card_type"] === "slot_event_card" ||
        element["card_type"] === "slot_video_event_card" ||
        element.hasOwnProperty("ad") ||
        // 非常恶心伪装成普通内容的广告
        (element["brief"] && element["brief"].indexOf("slot_card") >= 0) ||
        // 训练营
        (element["extra"] && element["extra"]["type"] === "Training");
      // 是否为流媒体
      const isStream =
        isAd !== true &&
        elementStr.search(
          /"(type|style)+"\s?:\s?"(drama|zvideo|Video|BIG_IMAGE)+"/i
        ) >= 0;
      const removeStream = isStream && settings_recommend_stream;
      // 是否为想法
      const isPin =
        isStream !== true &&
        elementStr.search(/"(type|style)+"\s?:\s?"pin"/i) >= 0;
      const removePin = isPin && settings_remove_pin;
      // 是否为文章
      const isArticle =
        elementStr.search(/"(type|style)+"\s?:\s?"article"/i) >= 0;
      const removeArticle = isArticle && settings_remove_article;
      return !(isAd || removePin || removeArticle || removeStream);
    };
    obj.data = obj.data.filter(newData);
    // if (obj.data) {
    //   obj.data = obj.data.filter(
    //     (i) =>
    //       !i.common_card.footline.elements.text.panel_text?.includes("广告")
    //   );
    // }
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

// 2023-02-12 10:25

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

if (url.includes("/appview/v3/zhomre")) {
  body = body.replace(/<body><div\sid="root".*<\/div><script>>/g, "");
  $done({ body });
} else {
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
    if (obj.data) {
      obj.data = obj.data.filter(
        (i) =>
          !i.common_card?.footline[0].elements[0].text.panel_text.includes("广告")
      );
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

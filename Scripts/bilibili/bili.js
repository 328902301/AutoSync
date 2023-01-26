// 2023-01-26 17:32

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj.data) {
  // 哔哩哔哩-强制设置的皮肤
  if (url.includes("/x/resource/show/skin")) {
    if (obj.data.common_equip) {
      delete obj.data.common_equip;
    }
  } else if (url.includes("/x/resource/show/tab/v2")) {
    // 哔哩哔哩-标签页
    if (obj.data.tab) {
      obj.data.tab = obj.data.tab.filter(
        (item) =>
          item.name === "直播" ||
          item.name === "推荐" ||
          item.name === "热门" ||
          item.name === "影视"
      );
      fixPos(obj.data.tab);
    }
    if (obj.data.top) {
      let newTop = [];
      for (let item of obj.data.top) {
        if (item.name === "消息") {
          newTop.push(item);
        }
      }
      obj.data.top = newTop;
      fixPos(obj.data.top);
    }
    if (obj.data.bottom) {
      obj.data.bottom = obj.data.bottom.filter(
        (item) => !(item.name === "发布" || item.name === "会员购")
      );
      fixPos(obj.data.bottom);
    }
  } else if (url.includes("/x/resource/top/activity")) {
    // 哔哩哔哩-右上角活动入口
    if (obj.data.hash && obj.data.online.icon) {
      obj.data.hash = "";
      obj.data.online.icon = "";
    }
  } else if (url.includes("/x/v2/account/mine")) {
    // 哔哩哔哩-我的页面
    // 标准版：
    // 396离线缓存 397历史记录 398我的收藏 399稍后再看 171个性装扮 172我的钱包 407联系客服 410设置
    // 港澳台：
    // 534离线缓存 8历史记录 4我的收藏 428稍后再看
    // 352离线缓存 1历史记录 405我的收藏 402个性装扮 404我的钱包 544创作中心
    // 概念版：
    // 425离线缓存 426历史记录 427我的收藏 428稍后再看 171创作中心 430我的钱包 431联系客服 432设置
    // 国际版：
    // 494离线缓存 495历史记录 496我的收藏 497稍后再看 741我的钱包 742稿件管理 500联系客服 501设置
    // 622为会员购中心 425开始为概念版id
    const itemList = new Set([396, 397, 398, 399]);
    if (obj.data?.sections_v2) {
      obj.data.sections_v2.forEach((element) => {
        element.items = element.items.filter((e) => itemList.has(e.id));
        element.button = {};
        element.be_up_title = "";
        element.tip_icon = "";
        element.tip_title = "";
        if (["推荐服务", "更多服务", "创作中心"].includes(element.title)) {
          element.title = "";
          element.type = "";
        }
      });
      if (obj.data?.live_tip) {
        obj.data.live_tip = {};
      }
      if (obj.data?.answer) {
        obj.data.answer = {};
      }
      obj.data.vip_section = "";
      obj.data.vip_section_v2 = "";
      // 开启本地会员标识
      obj.data.vip_type = 2;
      obj.data.vip.type = 2;
      obj.data.vip.status = 1;
      obj.data.vip.vip_pay_type = 1;
      obj.data.vip.due_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
    }
  } else if (url.includes("/x/v2/account/myinfo")) {
    // 哔哩哔哩-会员清晰度
    obj.data.vip.type = 2;
    obj.data.vip.status = 1;
    obj.data.vip.vip_pay_type = 1;
    obj.data.vip.due_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
  } else if (url.includes("/x/v2/feed/index?")) {
    // 推荐去广告，最后问号不能去掉，以免匹配到story模式
    if (obj.data?.items) {
      obj.data.items = obj.data.items.filter(
        (item) =>
          !item.banner_item &&
          !item.ad_info &&
          item.card_goto.includes("ad") &&
          [
            "small_cover_v2",
            "large_cover_v1",
            "large_cover_single_v9"
          ].includes(item.card_type)
      );
    }
  } else if (url.includes("/x/v2/feed/index/story")) {
    if (obj.data?.items) {
      obj.data.items = obj.data.items.filter(
        (item) => !item.ad_info && item.card_goto.includes("ad")
      );
    }
  } else if (url.includes("/x/v2/search/square")) {
    // 哔哩哔哩-热搜广告
    obj.data = {
      type: "history",
      title: "搜索历史",
      search_hotword_revision: 2
    };
    // delete obj.data;
  } else if (url.includes("/x/v2/splash")) {
    // 哔哩哔哩-开屏广告
    if (obj.data.show) {
      delete obj.data.show;
    }
  } else if (
    url.includes("/pgc/page/bangumi") ||
    url.includes("/pgc/page/cinema/tab")
  ) {
    // 哔哩哔哩-观影页广告
    if (obj.result?.modules) {
      obj.result.modules.forEach((module) => {
        if (module.style.startsWith("banner")) {
          module.items = module.items.filter((i) => i.link.includes("play"));
        } else if (module.style.startsWith("function")) {
          module.items = module.items.filter((i) =>
            i.blink.startsWith("bilibili")
          );
        } else if (module.style.startsWith("tip")) {
          module.items = [];
        }
      });
    }
  } else if (url.includes("/xlive/app-room/v1/index/getInfoByRoom")) {
    // 哔哩哔哩-直播广告
    if (obj.data?.activity_banner_info) {
      obj.data.activity_banner_info = null;
    }
    if (obj.data?.shopping_info) {
      obj.data.shopping_info = { is_show: 0 };
    }
    if (
      obj.data?.new_tab_info?.outer_list &&
      obj.data?.new_tab_info?.outer_list.length > 0
    ) {
      obj.data.new_tab_info.outer_list =
        obj.data.new_tab_info.outer_list.filter((i) => i.biz_id !== 33);
    }
  }
}

// 修复pos
function fixPos(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos = i + 1;
  }
}

body = JSON.stringify(obj);
$done({ body });

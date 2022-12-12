// 2022-12-12 17:41

var url = $request.url;
var body = $response.body;

function adAppName(adUrls) {
  if (/^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList/.test(adUrls)) return "12306-开屏广告";
  if (/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(adUrls)) return "哔哩哔哩-强制设置的皮肤";
  if (/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(adUrls)) return "哔哩哔哩-标签页";
  if (/^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity\?/.test(adUrls)) return "哔哩哔哩-右上角活动入口";
  if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(adUrls)) return "哔哩哔哩-我的页面";
  if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test(adUrls)) return "哔哩哔哩-会员清晰度";
  if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index/.test(adUrls)) return "哔哩哔哩-推荐广告";
  if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square\?/.test(adUrls)) return "哔哩哔哩-热搜广告";
  if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(adUrls)) return "哔哩哔哩-开屏广告";
  if (/^https?:\/\/api\.bilibili\.com\/pgc\/page\/cinema\/tab\?/.test(adUrls)) return "哔哩哔哩-观影页广告";
  if (/^https?:\/\/api\.live\.bilibili.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(adUrls)) return "哔哩哔哩-直播广告";
  if (/^https?:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\?/.test(adUrls)) return "嘀嗒出行-开屏广告";
  if (/^https?:\/\/cmsapi\.dmall\.com\/app\/home\/homepageStartUpPic/.test(adUrls)) return "多点-开屏广告";
  if (/^https?:\/\/api\.ithome\.com\/json\/(listpage|newslist)\/news/.test(adUrls)) return "IT之家-appList";
  if (/^https?:\/\/api\.ithome\.com\/json\/slide\/index/.test(adUrls)) return "IT之家-appSlide";
  if (/^https?:\/\/m\.ithome\.com\/api\/news\/newslistpageget/.test(adUrls)) return "IT之家-mobileWeb";
  if (/^https?:\/\/napi\.ithome\.com\/api\/(news|topmenu)\/(getfeeds|index)/.test(adUrls)) return "IT之家-newAppFeed";
  if (/^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start/.test(adUrls)) return "京东-开屏广告"
  if (/^https?:\/\/api.coolapk.com\/v6\/feed\/detail/.test(adUrls)) return "酷安-detail";
  if (/^https?:\/\/api.coolapk.com\/v6\/feed\/replyList/.test(adUrls)) return "酷安-replyList";
  if (/^https?:\/\/api.coolapk.com\/v6\/main\/dataList/.test(adUrls)) return "酷安-dataList";
  if (/^https?:\/\/api.coolapk.com\/v6\/main\/indexV8/.test(adUrls)) return "酷安-index";
  if (/^https?:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg/.test(adUrls)) return "联享家-开屏广告";
  if (/^https?:\/\/wmapi\.meituan\.com\/api\/v7\/loadInfo/.test(adUrls)) return "美团外卖-开屏广告";
  if (/^https?:\/\/app-api\.smzdm\.com\/util\/loading/.test(adUrls)) return "什么值得买-开屏广告";
  if (/^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list/.test(adUrls)) return "什么值得买-百科广告";
  if (/^https?:\/\/haojia-api\.smzdm\.com\/home\/list/.test(adUrls)) return "什么值得买-好价广告";
  if (/^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul/.test(adUrls)) return "什么值得买-好价详情页广告";
  if (/^https?:\/\/homepage-api\.smzdm\.com\/v3\/home/.test(adUrls)) return "什么值得买-首页广告";
  if (/^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags/.test(adUrls)) return "什么值得买-搜索标签广告";
  if (/^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10/.test(adUrls)) return "什么值得买-搜索结果广告";
  if (/^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner/.test(adUrls)) return "什么值得买-会员权益中心banner广告";
  if (/^https?:\/\/hd\.mina\.mi\.com\/splashscreen\/alert/.test(adUrls)) return "小爱音箱-开屏广告";
  if (/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v1\/system_service\/config\?/.test(adUrls)) return "小红书-开屏广告-config";
  if (/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v2\/system_service\/splash_config$/.test(adUrls)) return "小红书-开屏广告-splash_config"
  if (/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v6\/homefeed\/categories\?/.test(adUrls)) return "小红书-信息流广告";
  if (/^https?:\/\/api\.m\.mi\.com\/v1\/app\/start$/.test(adUrls)) return "小米商城-开屏广告";
  if (/^https?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2/.test(adUrls)) return "知乎-开屏广告";
  if (/^https?:\/\/api\.zhihu\.com\/commercial_api\/app_float_layer$/.test(adUrls)) return "知乎-首页右下角悬浮框";
  // if (/^https?:\/\/api\.zhihu\.com\/topstory\/recommend/.test(adUrls)) return "知乎-推荐列表";
  // if (/^https?:\/\/appcloud2\.zhihu\.com\/v3\/config$/.test(adUrls)) return "知乎-appcloud2_config"
  // if (/^https?:\/\/www\.zhihu\.com\/api\/v4\/answers\/\d+\/recommendations/.test(adUrls)) return "知乎-回答下方广告";
  // if (/^https?:\/\/www\.zhihu\.com\/api\/v4\/articles\/\d+\/recommendation/.test(adUrls)) return "知乎-文章回答下方广告";
  // if (/^https?:\/\/api\.zhihu\.com\/(questions\/\d+\/feeds|v4\/questions\/\d+\/answers)\?/.test(adUrls)) return "知乎-问题回答列表";
  return "";
}

if (!body) $done({});
switch (adAppName(url)) {
  case "12306-开屏广告":
    try {
      let obj = JSON.parse(body);
      if (obj.materialsList) {
        for (let i = 0; i < obj.materialsList.length; i++) {
          obj.materialsList[i].filePath = "";
        }
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`12306-开屏广告, 出现异常`);
    }
    break;
  case "哔哩哔哩-强制设置的皮肤":
    try {
      let obj = JSON.parse(body);
      if (obj.data && obj.data.common_equip) delete obj.data.common_equip;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-强制设置的皮肤, 出现异常`);
    }
    break;
  case "哔哩哔哩-标签页":
    try {
      // 修复pos
      function fixPos(arr) {
        for (let i = 0; i < arr.length; i++) {
          arr[i].pos = i + 1;
        }
      }
      let obj = JSON.parse(body);
      if (obj.data && obj.data.tab) {
        obj.data.tab = obj.data.tab.filter((item) => {
          if (
            item.name === "直播" ||
            item.name === "推荐" ||
            item.name === "热门" ||
            item.name === "影视"
          ) {
            return true;
          }
          return false;
        });
        fixPos(obj.data.tab);
      }
      if (obj.data && obj.data.top) {
        obj.data.top = obj.data.top.filter((item) => {
          if (item.name === "游戏中心") return false;
          return true;
        });
        fixPos(obj.data.top);
      }
      if (obj.data && obj.data.bottom) {
        obj.data.bottom = obj.data.bottom.filter((item) => {
          if (item.name === "发布" || item.name === "会员购") {
            return false;
          }
          return true;
        });
        fixPos(obj.data.bottom);
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-标签页, 出现异常`);
    }
    break;
  case "哔哩哔哩-右上角活动入口":
    try {
      let obj = JSON.parse(body);
      if (obj.data && obj.data.hash && obj.data.online.icon) {
        obj.data.hash = "";
        obj.data.online.icon = "";
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-右上角活动入口, 出现异常`);
    }
    break;
  case "哔哩哔哩-我的页面":
    try {
      let obj = JSON.parse(body);
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
      obj["data"]["sections_v2"]?.forEach((element, index) => {
        let items = element["items"].filter((e) => {
          return itemList.has(e.id);
        });
        obj["data"]["sections_v2"][index].button = {};
        delete obj["data"]["sections_v2"][index].tip_icon;
        delete obj["data"]["sections_v2"][index].be_up_title;
        delete obj["data"]["sections_v2"][index].tip_title;
        for (let i = 0; i < obj["data"]["sections_v2"].length; i++) {
          if (
            obj.data.sections_v2[i].title === "推荐服务" ||
            obj.data.sections_v2[i].title === "更多服务" ||
            obj.data.sections_v2[i].title === "创作中心"
          ) {
            delete obj.data.sections_v2[i].title;
            delete obj.data.sections_v2[i].type;
          }
        }
        obj["data"]["sections_v2"][index]["items"] = items;
        delete obj.data.vip_section_v2;
        delete obj.data.vip_section;
        delete obj.data.live_tip;
        delete obj.data.answer;
        // 开启本地会员标识 2022-03-05 add by ddgksf2013
        obj.data.vip_type = 2;
        obj.data.vip.type = 2;
        obj.data.vip.status = 1;
        obj.data.vip.vip_pay_type = 1;
        obj.data.vip.due_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
      });
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-我的页面, 出现异常`);
    }
    break;
  case "哔哩哔哩-会员清晰度":
    try {
      let obj = JSON.parse(body);
      obj.data.vip.type = 2;
      obj.data.vip.status = 1;
      obj.data.vip.vip_pay_type = 1;
      obj.data.vip.due_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-会员清晰度, 出现异常`);
    }
    break;
  case "哔哩哔哩-推荐广告":
    try {
      let obj = JSON.parse(body);
      if (obj.data.items?.length) {
        obj.data.items = obj.data.items.filter((i) => {
          const { card_type: cardType, card_goto: cardGoto } = i;
          if (cardType && cardGoto) {
            if (cardType === "banner_v8" && cardGoto === "banner") {
              if (i.banner_item) {
                // 去除判断条件 首页横版内容全部去掉
                // for (const v of i.banner_item) {
                //   if (v.type) {
                //     if (v.type === "ad") return false;
                //   }
                // }
                return false;
              }
            } else if (
              cardType === "cm_v2" &&
              [
                "ad_web_s",
                "ad_av",
                "ad_web_gif",
                "ad_player",
                "ad_inline_3d"
              ].includes(cardGoto)
            ) {
              // ad_player大视频广告 ad_web_gif大gif广告 ad_web_s普通小广告 ad_av创作推广广告 ad_inline_3d 上方大的视频3d广告
              return false;
            } else if (cardType === "small_cover_v10" && cardGoto === "game") {
              // 游戏广告
              return false;
            } else if (cardType === "cm_double_v9" && cardGoto === "ad_inline_av") {
              // 创作推广-大视频广告
              return false;
            }
          }
          return true;
        });
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-推荐广告, 出现异常`);
    }
    break;
  case "哔哩哔哩-热搜广告":
    try {
      let obj = JSON.parse(body);
      if (obj.data) delete obj.data;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-热搜广告, 出现异常`);
    }
    break;
  case "哔哩哔哩-开屏广告":
    try {
      let obj = JSON.parse(body);
      if (obj.data && obj.data.show) delete obj.data.show;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-开屏广告, 出现异常`);
    }
    break;
  case "哔哩哔哩-观影页广告":
    try {
      let obj = JSON.parse(body);
      obj.result.modules?.forEach((module) => {
        // 头部banner
        if (module.style.startsWith("banner")) {
          module.items = module.items.filter(
            (i) => !(i.source_content && i.source_content.ad_content)
          );
        }
      });
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-观影页广告, 出现异常`);
    }
    break;
  case "哔哩哔哩-直播广告":
    try {
      let obj = JSON.parse(body);
      if (obj.data.activity_banner_info) obj["data"]["activity_banner_info"] = null;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`哔哩哔哩-直播广告, 出现异常`);
    }
    break;
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
      console.log(`嘀嗒出行-开屏广告, 出现异常`);
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
      console.log(`多点-开屏广告, 出现异常`);
    }
    break;
  case "IT之家-appList":
    try {
      let obj = JSON.parse(body);
      obj.newslist = obj.newslist.filter((n) => !n.aid);
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`IT之家-appList, 出现异常`);
    }
    break;
  case "IT之家-appSlide":
    try {
      let obj = JSON.parse(body);
      const newList = obj.filter((i) => !i.isad);
      obj.splice(0, obj.length);
      obj.push(...newList);
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`IT之家-appSlide, 出现异常`);
    }
    break;
  case "IT之家-mobileWeb":
    try {
      let obj = JSON.parse(body);
      obj.Result = obj.Result.filter((r) =>
        r.NewsTips.every((t) => t.TipName !== "广告")
      );
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`IT之家-mobileWebx, 出现异常`);
    }
    break;
  case "IT之家-newAppFeed":
    try {
      let obj = JSON.parse(body);
      let list = obj.data.list;
      const newList = [];
      for (const item of list) {
        if (
          item.feedContent.smallTags &&
          item.feedContent.smallTags.some((s) => s.text === "广告")
        ) {
          continue;
        }
        if (item.feedContent.focusNewsData) {
          const newNewsData = item.feedContent.focusNewsData.filter((n) => !n.isAd);
          item.feedContent.focusNewsData = newNewsData;
        }
        newList.push(item);
      }
      obj.data.list = newList;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`IT之家-newAppFeed, 出现异常`);
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
      console.log(`京东-开屏广告, 出现异常`);
    }
    break;
  case "酷安-replyList":
    try {
      let obj = JSON.parse(body);
      obj.data = Object.values(obj.data).filter((item) => item.id);
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`酷安-replyList, 出现异常`);
    }
    break;
  case "酷安-detail":
    try {
      let obj = JSON.parse(body);
      obj.data.hotReplyRows = Object.values(obj.data.hotReplyRows).filter(
        (item) => item["id"]
      );
      obj.data.include_goods_ids = [];
      obj.data.include_goods = [];
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`酷安-detail, 出现异常`);
    }
    break;
  case "酷安-dataList":
    try {
      let obj = JSON.parse(body);
      obj.data = Object.values(obj.data).filter((item) =>
        !(item["entityTemplate"] == "sponsorCard" || item.title == "精选配件")
      );
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`酷安-dataList, 出现异常`);
    }
    break;
  case "酷安-index":
    try {
      let obj = JSON.parse(body);
      obj.data = Object.values(obj.data).filter((item) =>
        !(
          item["entityTemplate"] == "sponsorCard" ||
          item.entityId == 8639 ||
          item.entityId == 33066 ||
          item.entityId == 32557 ||
          item.title.indexOf("值得买") != -1
        )
      );
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`酷安-index, 出现异常`);
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
      console.log(`联享家-开屏广告, 出现异常`);
    }
    break;
  case "美团外卖-开屏广告":
    try {
      let obj = JSON.parse(body);
      delete obj.data.startpicture.ad;
      delete obj.data.startpicture.mk;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`美团外卖-开屏广告, 出现异常`);
    }
    break;
  case "什么值得买-开屏广告":
    try {
      let obj = JSON.parse(body);
      obj.data.forEach((element) => {
        element.start_date = "2040-01-01 00:00:00";
        element.end_date = "2040-01-01 23:59:59";
        element.unix_start_date = "2208960000"; // 什么值得买 Unix 时间戳 2040-01-01 00:00:00
        element.unix_end_date = "2209046399"; // 什么值得买 Unix 时间戳 2040-01-01 23:59:59
        element.is_show_ad = "0";
      });
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-开屏广告, 出现异常`);
    }
    break;
  case "什么值得买-百科广告":
    try {
      let obj = JSON.parse(body);
      obj.data.rows = obj.data.rows.filter((element) => {
        return (!element.hasOwnProperty("ad_banner_id") || element.ad_banner_id == "");
      });
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-百科广告, 出现异常`);
    }
    break;
  case "什么值得买-好价广告":
    try {
      let obj = JSON.parse(body);
      let bigBanner = obj.data.banner.big_banner.filter((element) => {
        return element.ad_banner_id == "";
      });
      obj.data.banner.big_banner = bigBanner;
      let rows = obj.data.rows.filter((element) => {
        return !element.hasOwnProperty("ad_banner_id");
      });
      // 什么值得买 红包相关
      obj.data.banner.hongbao_banner = [];
      obj.data.banner.module_banner.hongbao = {};
      // 什么值得买 不显示皮肤
      // 什么值得买 obj.data.banner.skin = {};
      obj.data.rows = rows;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-好价广告, 出现异常`);
    }
    break;
  case "什么值得买-好价详情页广告":
    try {
      let obj = JSON.parse(body);
      obj.data.lanmu_qikan = {};
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-好价详情页广告, 出现异常`);
    }
    break;
  case "什么值得买-首页广告":
    try {
      let obj = JSON.parse(body);
      let component = [];
      obj.data.component.forEach((element) => {
        if (element.zz_type === "banner") {
          let bannerList = element.zz_content.filter((banner) => {
            return banner.tag !== "广告";
          });
          element.zz_content = bannerList;
          // 什么值得买 去除信息流中的广告
        } else if (element.zz_type === "list") {
          let contentList = element.zz_content.filter((content) => {
            return content.zz_content.model_type !== "ads";
          });
          element.zz_content = contentList;
          // 什么值得买 去除首页背景颜色
        } else if (element.zz_type === "circular_banner") {
          element.zz_content.circular_banner_option.background = "1";
          element.zz_content.circular_banner_option.color_card = "#ffffff";
          element.zz_content.circular_banner_option.img = "";
        }
        // 什么值得买 最顶部的banner和红包不显示
        if (element.zz_type !== "top_banner" && element.zz_type !== "hongbao") {
          component.push(element);
        }
      });
      obj.data.component = component;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-首页广告, 出现异常`);
    }
    break;
  case "什么值得买-搜索标签广告":
    try {
      let obj = JSON.parse(body);
      obj.data.hongbao = {};
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-搜索标签广告, 出现异常`);
    }
    break;
  case "什么值得买-搜索结果广告":
    try {
      let obj = JSON.parse(body);
      obj.data.rows = obj.data.rows.filter((element) => {
        return element.article_tag !== "广告";
      });
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-搜索结果广告, 出现异常`);
    }
    break;
  case "什么值得买-会员权益中心banner广告":
    try {
      let obj = JSON.parse(body);
      obj.data.big_banner = obj.data.big_banner.filter((element) => {
        return element.logo_title !== "广告";
      });
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`什么值得买-会员权益中心banner广告, 出现异常`);
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
      console.log(`小爱音箱-开屏广告, 出现异常`);
    }
    break;
  case "小红书-开屏广告-config":
    try {
      let obj = JSON.parse($response.body);
      //obj.data.tabbar.tabs = Object.values(obj.data.tabbar.tabs).filter((item) => !item.title == "购买");
      delete obj.data.store;
      delete obj.data.splash;
      delete obj.data.loading_img;
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`小红书-开屏广告-config, 出现异常`);
    }
    break;
  case "小红书-开屏广告-splash_config":
    try {
      let obj = JSON.parse(body);
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
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`小红书-开屏广告-splash_config, 出现异常`);
    }
    break;
  case "小红书-处理信息流广告":
    try {
      let obj = JSON.parse(body);
      obj.data = obj.data.filter((d) => !d.ads_info);
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`小红书-处理信息流广告, 出现异常`);
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
      console.log(`小米商城-开屏广告, 出现异常`);
    }
    break;
  case "知乎-开屏广告":
    try {
      let obj = JSON.parse(body);
      if (obj.launch && obj.launch.ads) obj.launch.ads = [];
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`知乎-开屏广告, 出现异常`);
    }
    break;
  case "知乎-首页右下角悬浮框":
    try {
      let obj = JSON.parse(body);
      if ("feed_egg" in obj) obj = {};
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`知乎-首页右下角悬浮框, 出现异常`);
    }
    break;
  // case "知乎-推荐列表":
  //   try {
  //     function getUrlParamValue(url, queryName) {
  //       return Object.fromEntries(
  //         url
  //           .substring(url.indexOf("?") + 1)
  //           .split("&")
  //           .map((pair) => pair.split("="))
  //       )[queryName];
  //     }
  //     let obj = JSON.parse(body);
  //     if (obj.data) {
  //       obj.data = obj.data.filter((item) => {
  //         if (item.extra?.type === "zvideo") {
  //           let videoUrl = item.common_card.feed_content.video.customized_page_url;
  //           let videoID = getUrlParamValue(videoUrl, "videoID");
  //           if (videoID) item.common_card.feed_content.video.id = videoID;
  //         } else if (
  //           item.type === "market_card" &&
  //           item.fields?.header?.url &&
  //           item.fields.body?.video?.id
  //         ) {
  //           let videoID = getUrlParamValue(item.fields.header.url, "videoID");
  //           if (videoID) item.fields.body.video.id = videoID;
  //         } else if (item.common_card?.feed_content?.video?.id) {
  //           let search = '"feed_content":{"video":{"id":';
  //           let str = $response.body.substring(
  //             $response.body.indexOf(search) + search.length
  //           );
  //           let videoID = str.substring(0, str.indexOf(","));
  //           item.common_card.feed_content.video.id = videoID;
  //         }
  //         return item.type !== "feed_advert";
  //       });
  //     }
  //     body = JSON.stringify(obj);
  //   } catch (error) {
  //     console.log(`知乎-推荐列表, 出现异常`);
  //   }
  //   break;
  // case "知乎-appcloud2_config":
  //   try {
  //     let obj = JSON.parse(body);
  //     if (obj.config?.zhcnh_thread_sync?.ZHBackUpIP_Switch_Open === "1") {
  //       obj.config.zhcnh_thread_sync.ZHBackUpIP_Switch_Open = "0";
  //     }
  //     body = JSON.stringify(obj);
  //   } catch (error) {
  //     console.log(`知乎-appcloud2_config, 出现异常`);
  //   }
  //   break;
  // case "知乎-回答下方广告":
  //   try {
  //     let obj = JSON.parse(body);
  //     if (obj.paging) body.paging = null;
  //     if (obj.data) body.data = null;
  //     body = JSON.stringify(obj);
  //   } catch (error) {
  //     console.log(`知乎-回答下方广告, 出现异常`);
  //   }
  //   break;
  // case "知乎-文章回答下方广告":
  //   try {
  //     let obj = JSON.parse(body);
  //     if (obj.ad_info) obj.ad_info = null;
  //     body = JSON.stringify(obj);
  //   } catch (error) {
  //     console.log(`知乎-文章回答下方广告, 出现异常`);
  //   }
  //   break;
  // case "知乎-问题回答列表":
  //   try {
  //     let obj = JSON.parse(body);
  //     if (obj.data.ad_info) obj.data.ad_info = null;
  //     if (obj.ad_info) obj.ad_info = null;
  //     body = JSON.stringify(obj);
  //   } catch (error) {
  //     console.log(`知乎-问题回答列表, 出现异常`);
  //   }
  //   break;
  default:
    break;
}

$done({ body });

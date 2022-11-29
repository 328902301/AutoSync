// 2022-11-29 17:20

var url = $request.url;
var body = $response.body;

function isresponse() {
  if (!body) {
    return false;
  } else {
    return true;
  }
}

if (isresponse = true) {
  switch (true) {
    // 12306 开屏广告
    case /^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList/.test(url):
      try {
        let obj = JSON.parse(body);
        if (obj.materialsList) {
          for (let i = 0; i < obj.materialsList.length; i++) {
            obj.materialsList[i].filePath = "";
            obj.advertParam.skipTime = 500;
            obj.advertParam.showSkipBtn = 0;
            obj.advertParam.skipTimeAgain = 5;
          }
        }
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 去除强制设置的皮肤
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(url):
      try {
        let obj = JSON.parse(body);
        if (obj && obj.hasOwnProperty("data")) obj["data"]["common_equip"] = {};
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 标签页处理，如去除会员购等等
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(url):
      try {
        // 39直播 40推荐 41热门 545追番 151影视 442动画, 99直播 100推荐 101热门 554动画
        // 442开始为概念版id，适配港澳台代理模式
        const tabList = new Set([39, 40, 41, 151]);
        // 尝试使用tab name直观修改
        // const tabNameList = new Set(['直播', '推荐', '热门', '影视']);
        // if (obj['data']['tab']) {
        //   let tab = obj['data']['tab'].filter((e) => {
        //   return tabNameList.has(e.name) || tabList.has(e.id);
        //   });
        //   obj['data']['tab'] = tab;
        // }
        // 222游戏中心 107概念版游戏中心 176消息中心
        const topList = new Set([176]);
        // 标准版
        // 177首页 178频道 179动态 181我的
        // 概念版
        // 102首页 103频道 104动态 106我的
        // 港澳台
        // 486首页 487频道 488动态 490我的
        // 102开始为概念版id
        const bottomList = new Set([177, 179, 181]);
        let obj = JSON.parse(body);
        if (obj["data"]["tab"]) {
          let tab = obj["data"]["tab"].filter((e) => {
            return tabList.has(e.id);
          });
          obj["data"]["tab"] = tab;
        }
        if (obj["data"]["top"]) {
          let top = obj["data"]["top"].filter((e) => {
            return topList.has(e.id);
          });
          obj["data"]["top"] = top;
        }
        if (obj["data"]["bottom"]) {
          let bottom = obj["data"]["bottom"].filter((e) => {
            return bottomList.has(e.id);
          });
          obj["data"]["bottom"] = bottom;
        }
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 去除右上角活动入口
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity\?/.test(url):
      try {
        let obj = JSON.parse(body);
        if (obj.data && obj.data.hash && obj.data.online.icon) {
          obj.data.hash = "";
          obj.data.online.icon = "";
        }
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 我的页面处理，去除一些推广按钮
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(url):
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
          delete obj["data"]["sections_v2"][index].be_up_title;
          delete obj["data"]["sections_v2"][index].tip_icon;
          delete obj["data"]["sections_v2"][index].tip_title;
          for (let i = 0; i < obj["data"]["sections_v2"].length; i++) {
            if (obj.data.sections_v2[i].title === "推荐服务") {
              delete obj.data.sections_v2[i].title;
              delete obj.data.sections_v2[i].type;
            }
            if (obj.data.sections_v2[i].title === "更多服务") {
              delete obj.data.sections_v2[i].title;
              delete obj.data.sections_v2[i].type;
            }
            if (obj.data.sections_v2[i].title === "创作中心") {
              delete obj.data.sections_v2[i].title;
              delete obj.data.sections_v2[i].type;
            }
          }
          obj["data"]["sections_v2"][index]["items"] = items;
          // 开启本地会员标识 2022-03-05 add by ddgksf2013
          delete obj.data.vip_section_v2;
          delete obj.data.vip_section;
          if (obj.data.hasOwnProperty("live_tip")) obj["data"]["live_tip"] = {};
          if (obj.data.hasOwnProperty("answer")) obj["data"]["answer"] = {};
          obj["data"]["vip_type"] = 2;
          obj["data"]["vip"]["type"] = 2;
          obj["data"]["vip"]["status"] = 1;
          obj["data"]["vip"]["vip_pay_type"] = 1;
          obj["data"]["vip"]["due_date"] = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
        });
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 解锁1080p高码率 2022-03-05 add by ddgksf2013
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test(url):
      try {
        let obj = JSON.parse(body);
        obj["data"]["vip"]["type"] = 2;
        obj["data"]["vip"]["status"] = 1;
        obj["data"]["vip"]["vip_pay_type"] = 1;
        obj["data"]["vip"]["due_date"] = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 推荐广告处理 最后问号不能去掉 以免匹配到story模式
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test(url):
      try {
        let obj = JSON.parse(body);
        let items = [];
        for (let item of obj["data"]["items"]) {
          if (item.hasOwnProperty("banner_item")) {
            continue;
          } else if (
            !item.hasOwnProperty("ad_info") &&
            item.card_goto.indexOf("ad") === -1 &&
            (item["card_type"] === "small_cover_v2" ||
              item["card_type"] === "large_cover_v1")
          ) {
            items.push(item);
          }
        }
        obj["data"]["items"] = items;
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 开屏广告处理
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(url):
      try {
        let obj = JSON.parse(body);
        if (obj.data && obj.data.show) delete obj.data.show;
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 热搜去广告
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square\?/.test(url):
      try {
        let obj = JSON.parse(body);
        if (obj.data) delete obj.data;
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 哔哩哔哩 观影页去广告
    case /^https?:\/\/api\.bilibili\.com\/pgc\/page\/cinema\/tab\?/.test(url):
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
      } catch {}
      break;
      // 哔哩哔哩 直播去广告
    case /^https?:\/\/api\.live\.bilibili.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(url):
      try {
        let obj = JSON.parse(body);
        if (obj.data.activity_banner_info)
          obj["data"]["activity_banner_info"] = null;
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 嘀嗒出行 开屏广告
    case /^https?:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\?/.test(url):
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
          body = JSON.stringify(obj);
        }
      } catch {}
      break;
      // 多点 开屏广告
    case /^https?:\/\/cmsapi\.dmall\.com\/app\/home\/homepageStartUpPic/.test(url):
      try {
        let obj = JSON.parse(body);
        for (let i = 0; i < obj["data"]["welcomePage"].length; i++) {
          obj["data"]["welcomePage"][i]["onlineTime"] = 2208960000000;
          obj["data"]["welcomePage"][i]["offlineTime"] = 2209046399000;
        }
        body = JSON.stringify(obj);
      } catch {}
      break;
      // IT之家 mobileWebRegex
    case /^https?:\/\/m\.ithome\.com\/api\/news\/newslistpageget/.test(url):
      try {
        obj.Result = obj.Result.filter((r) =>
          r.NewsTips.every((t) => t.TipName !== "广告")
        );
        body = JSON.stringify(obj);
      } catch {}
      break;
      // IT之家 appRegex
    case /^https?:\/\/api\.ithome\.com\/json\/(listpage|newslist)\/news/.test(url):
      try {
        obj.newslist = obj.newslist.filter((n) => !n.aid);
        body = JSON.stringify(obj);
      } catch {}
      break;
      // IT之家 appSlideRegex
    case /^https:\/\/api\.ithome\.com\/json\/slide\/index/.test(url):
      try {
        const newList = obj.filter((i) => !i.isad);
        obj.splice(0, obj.length);
        obj.push(...newList);
        body = JSON.stringify(obj);
      } catch {}
      break;
      // IT之家 newAppFeed
    case /^https:\/\/napi\.ithome\.com\/api\/(news|topmenu)\/(getfeeds|index)/.test(url):
      try {
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
      } catch {}
      break;
      // 京东 开屏广告
    case /^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start/.test(url):
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
      } catch {}
      break;
      // 酷安 replyList
    case /^https?:\/\/api.coolapk.com\/v6\/feed\/replyList/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data = Object.values(obj.data)
          .filter((item) => item.id);
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 酷安 index
    case /^https?:\/\/api.coolapk.com\/v6\/main\/indexV8/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data = Object.values(obj.data)
          .filter(
            (item) =>
            !(
              item["entityTemplate"] == "sponsorCard" ||
              item.entityId == 8639 ||
              item.entityId == 33066 ||
              item.entityId == 32557 ||
              item.title.indexOf("值得买") != -1
            )
          );
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 酷安 dataList
    case /^https?:\/\/api.coolapk.com\/v6\/main\/dataList/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data = Object.values(obj.data)
          .filter(
            (item) =>
            !(item["entityTemplate"] == "sponsorCard" || item.title == "精选配件")
          );
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 酷安 detail
    case /^https?:\/\/api.coolapk.com\/v6\/feed\/detail/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data.hotReplyRows = Object.values(obj.data.hotReplyRows)
          .filter(
            (item) => item["id"]
          );
        obj.data.include_goods_ids = [];
        obj.data.include_goods = [];
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 联享家 开屏广告
    case /^https?:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.seq = "0";
        obj.reqinterval = 0;
        delete obj.last_ads;
        delete obj.data;
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 美团外卖 开屏广告
    case /^https?:\/\/wmapi\.meituan\.com\/api\/v7\/loadInfo/.test(url):
      try {
        let obj = JSON.parse(body);
        delete obj.data.startpicture.ad;
        delete obj.data.startpicture.mk;
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 什么值得买 处理开屏广告
    case /^https?:\/\/app-api\.smzdm\.com\/util\/loading/.test(url):
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
      } catch {}
      break;
      // 什么值得买 去除百科广告
    case /^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data.rows = obj.data.rows.filter((element) => {
          return (
            !element.hasOwnProperty("ad_banner_id") || element.ad_banner_id == ""
          );
        });
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 什么值得买 去除好价广告
    case /^https?:\/\/haojia-api\.smzdm\.com\/home\/list/.test(url):
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
      } catch {}
      break;
      // 什么值得买 去除好价详情页广告
    case /^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data.lanmu_qikan = {};
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 什么值得买 处理首页广告
    case /^https?:\/\/homepage-api\.smzdm\.com\/v3\/home/.test(url):
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
      } catch {}
      break;
      // 什么值得买 去除搜索标签广告
    case /^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data.hongbao = {};
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 什么值得买 去除搜索结果广告
    case /^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data.rows = obj.data.rows.filter((element) => {
          return element.article_tag !== "广告";
        });
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 什么值得买 去除值会员权益中心banner广告
    case /^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data.big_banner = obj.data.big_banner.filter((element) => {
          return element.logo_title !== "广告";
        });
        body = JSON.stringify(obj);
      } catch {}
      break;

      // 微博 开屏广告 php
    case /^https?:\/\/(sdk|wb)app\.uve\.weibo\.com\/interface\/sdk\/sdkad.php/.test(url):
      try {
        let tmp = /\{.*\}/;
        body = body.match(tmp);
        let obj = JSON.parse(body);
        if (obj.needlocation) obj.needlocation = false;
        if (obj.show_push_splash_ad) obj.show_push_splash_ad = false;
        if (obj.code) obj.code = 200;
        if (obj.background_delay_display_time)
          obj.background_delay_display_time = 31536000; // 60 * 60 * 24 * 365 = 31536000
        if (obj.lastAdShow_delay_display_time)
          obj.lastAdShow_delay_display_time = 31536000;
        if (obj.realtime_ad_video_stall_time)
          obj.realtime_ad_video_stall_time = 31536000;
        if (obj.realtime_ad_timeout_duration)
          obj.realtime_ad_timeout_duration = 31536000;
        for (let item of obj["ads"]) {
          item["displaytime"] = 0;
          item["displayintervel"] = 31536000;
          item["allowdaydisplaynum"] = 0;
          item["begintime"] = "2040-01-01 00:00:00";
          item["endtime"] = "2040-01-01 23:59:59";
        }
        body = JSON.stringify(obj) + "OK";
      } catch {}
      break;
      // 微博 开屏广告 lua
    case /^https?:\/\/(sdk|wb)app\.uve\.weibo\.com\/wbapplua\/wbpullad.lua/.test(url):
      try {
        let obj = JSON.parse(body);
        for (let item of obj["cached_ad"]["ads"]) {
          item["start_date"] = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
          item["show_count"] = 0;
          item["duration"] = 31536000; // 60 * 60 * 24 * 365 = 31536000
          item["end_date"] = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
        }
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 小爱音箱 开屏广告
    case /^https?:\/\/hd\.mina\.mi\.com\/splashscreen\/alert/.test(url):
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
      } catch {}
      break;
      // 小红书 开屏广告
    case /^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v2\/system_service\/splash_config$/.test(url):
      try {
        let obj = JSON.parse(body);
        const nextTime = dayjs()
          .add(20, "year");
        //console.log(`小红书开屏广告去除开始：总计${obj.data.ads_groups.length}组，每组广告数量${JSON.stringify(obj.data.ads_groups.map((i) => i.ads.length))}，下次再见${nextTime.format('YYYY/MM/DD')}`);
        obj.data.ads_groups.forEach((i) => {
          i.start_time = nextTime.valueOf()
            .toString();
          i.end_time = nextTime.add(1, "day")
            .valueOf()
            .toString();
          i.ads.forEach((j) => {
            j.start_time = nextTime.valueOf()
              .toString();
            j.end_time = nextTime.add(1, "day")
              .valueOf()
              .toString();
          });
        });
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 小红书 处理信息流广告
    case /^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v6\/homefeed\/categories\?/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.data = obj.data.filter((d) => !d.ads_info);
        body = JSON.stringify(obj);
      } catch {}
      break;
      // 小米商城 开屏广告
    case /^https?:\/\/api\.m\.mi\.com\/v1\/app\/start$/.test(url):
      try {
        let obj = JSON.parse(body);
        obj.code = 0;
        obj.data.skip_splash = true;
        delete obj.data.splash;
        obj.info = "ok";
        obj.desc = "成功";
        body = JSON.stringify(obj);
      } catch {}
      break;
    default:
  }
} else {
  $done({});
}

$done({body});

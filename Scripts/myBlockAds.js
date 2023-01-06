// 2023-01-06 14:41

var body = $response.body;
var url = $request.url;

function getCube(p) {
  if (/^https:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\?/.test(p)) return "嘀嗒出行-开屏广告";
  if (/^https:\/\/cmsapi\.dmall\.com\/app\/home\/homepageStartUpPic/.test(p)) return "多点-开屏广告";
  if (/^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/main-page(-location)?\?/.test(p)) return "高德地图-首页卡片";
  if (/^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/main-page-assets\?/.test(p)) return "高德地图-首页消息";
  if (/^https:\/\/sns\.amap\.com\/ws\/msgbox\/pull(3|_mp)\?/.test(p)) return "高德地图-首页消息";
  if (/^https:\/\/m5\.amap\.com\/ws\/shield\/dsp\/profile\/index\/nodefaasv3\?/.test(p)) return "高德地图-我的";
  if (/^https:\/\/(api-access\.pangolin-sdk-toutiao|is\.snssdk)\.com\/api\/ad\/union\/sdk\/get_ads/.test(p)) return "广告联盟-穿山甲";
  if (/^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ$/.test(p)) return "广告联盟-快手联盟";
  if (/^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg\?/.test(p)) return "广告联盟-优量汇";
  if (/^https:\/\/api\.ithome\.com\/json\/(listpage|newslist)\/news/.test(p)) return "IT之家-appList";
  if (/^https:\/\/api\.ithome\.com\/json\/slide\/index/.test(p)) return "IT之家-appSlide";
  if (/^https:\/\/m\.ithome\.com\/api\/news\/newslistpageget/.test(p)) return "IT之家-mobileWeb";
  if (/^https:\/\/napi\.ithome\.com\/api\/(news|topmenu)\/(getfeeds|index)/.test(p)) return "IT之家-newAppFeed";
  if (/^https:\/\/(jdforrepam|api\.huikaiju)\.com\/api\/v1\/startup\?/.test(p)) return "JavDB";
  if (/^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=start/.test(p)) return "京东-开屏广告";
  if (/^https:\/\/api.coolapk.com\/v6\/feed\/detail/.test(p)) return "酷安-detail";
  if (/^https:\/\/api.coolapk.com\/v6\/feed\/replyList/.test(p)) return "酷安-replyList";
  if (/^https:\/\/api.coolapk.com\/v6\/main\/dataList/.test(p)) return "酷安-dataList";
  if (/^https:\/\/api.coolapk.com\/v6\/main\/indexV8/.test(p)) return "酷安-index";
  if (/^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg/.test(p)) return "联享家-开屏广告";
  if (/^https:\/\/wmapi\.meituan\.com\/api\/v7\/loadInfo/.test(p)) return "美团外卖-开屏广告";
  if (/^https:\/\/app-api\.smzdm\.com\/util\/loading/.test(p)) return "什么值得买-开屏广告";
  if (/^https:\/\/baike-api\.smzdm\.com\/home_v3\/list/.test(p)) return "什么值得买-百科广告";
  if (/^https:\/\/haojia-api\.smzdm\.com\/home\/list/.test(p)) return "什么值得买-好价广告";
  if (/^https:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul/.test(p)) return "什么值得买-好价详情页广告";
  if (/^https:\/\/homepage-api\.smzdm\.com\/v3\/home/.test(p)) return "什么值得买-首页广告";
  if (/^https:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags/.test(p)) return "什么值得买-搜索标签广告";
  if (/^https:\/\/s-api\.smzdm\.com\/sou\/list_v10/.test(p)) return "什么值得买-搜索结果广告";
  if (/^https:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner/.test(p)) return "什么值得买-会员权益中心banner广告";
  if (/^https:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/sdkad\.php$/.test(p)) return "微博-开屏广告-sdkad";
  if (/^https:\/\/wbapp\.uve\.weibo\.com\/wbapplua\/wbpullad\.lua\?wm=/.test(p)) return "微博-开屏广告-wbpullad";
  if (/^https:\/\/hd\.mina\.mi\.com\/splashscreen\/alert/.test(p)) return "小爱音箱-开屏广告";
  if (/^https:\/\/edith\.xiaohongshu\.com\/api\/sns\/v1\/system_service\/config\?/.test(p)) return "小红书-开屏广告-config";
  if (/^https:\/\/edith\.xiaohongshu\.com\/api\/sns\/v2\/system_service\/splash_config$/.test(p)) return "小红书-开屏广告-splash_config";
  if (/^https:\/\/edith\.xiaohongshu\.com\/api\/sns\/v6\/homefeed\?/.test(p)) return "小红书-信息流广告";
  if (/^https:\/\/api\.m\.mi\.com\/v1\/app\/start$/.test(p)) return "小米商城-开屏广告";
  if (/^https:\/\/api\.zhihu\.com\/commercial_api\/app_float_layer$/.test(p)) return "知乎-首页右下角悬浮框";
  return "";
}

if (!body) {
  $done({});
} else {
  switch (getCube(url)) {
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
        console.log(`嘀嗒出行-开屏广告, 出现异常: ` + error);
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
        console.log(`多点-开屏广告, 出现异常: ` + error);
      }
      break;
    case "高德地图-首页卡片":
      try {
        let obj = JSON.parse(body);
        if (obj.data && obj.data.cardList) {
          obj.data.cardList = obj.data.cardList.filter((item) => {
            return item.dataKey === "LoginCard";
          });
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`高德地图-首页卡片, 出现异常: ` + error);
      }
      break;
    case "高德地图-首页消息":
      try {
        let obj = JSON.parse(body);
        if (obj.msgs) {
          obj.msgs = [];
        } else if (obj.data.pull3 && obj.data.pull3.msgs) {
          obj.data.pull3.msgs = [];
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`高德地图-首页消息, 出现异常: ` + error);
      }
      break;
    case "高德地图-我的":
      try {
        let obj = JSON.parse(body);
        if (obj.data && obj.data.cardList) {
          for (let i = 0; i < obj.data.cardList.length; i++) {
            obj.data.cardList.localCache = false;
          }
          obj.data.cardList = obj.data.cardList.filter((item) => {
            return (
              // item.dataKey === "AnnualBillCardV2" || // 年度报告
              item.dataKey === "MyOrderCard" || // 我的订单
              // item.dataKey === "GdRecommendCard" || // 高德推荐
              item.dataKey === "SceneVehicleCard_recommend" || // 我的车辆
              item.dataKey === "SceneVehicleCard_function" // 我的车辆
              // item.dataKey === "PopularActivitiesCard" // 热门活动
              // item.dataKey === "GameExcitation" || // 小德爱消除
              // item.dataKey === "GoodsShelvesCard" || // 精选服务
              // item.dataKey === "DiyMap_function" || // DIY 地图
            );
          });
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`高德地图-我的, 出现异常: ` + error);
      }
      break;
    case "广告联盟-穿山甲":
      try {
        let obj = JSON.parse(body);
        if (obj.message) {
          obj = {
            "request_id": 'F5617E54-3FF4-4052-9B09-4227D09B5105',
            "status_code": 20001,
            "reason": 112,
            "desc": "该代码位请求量过大且消耗过低，因此填充率控制在10%以内，该策略每日生效，如果当天该代码位的消耗上涨或请求量小于5000，则次日不会命中该策略"
          };
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`广告联盟-穿山甲, 出现异常: ` + error);
      }
      break;
    case "广告联盟-快手联盟":
      try {
        let obj = JSON.parse(body);
        if (obj.result === 1) {
          obj.result = 40003;
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`广告联盟-快手联盟, 出现异常: ` + error);
      }
      break;
    case "广告联盟-优量汇":
      try {
        let obj = JSON.parse(body);
        if ('ret' in obj) {
          if (obj.ret === 0) obj.ret = 102006;
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`广告联盟-优量汇, 出现异常: ` + error);
      }
      break;
    case "IT之家-appList":
      try {
        let obj = JSON.parse(body);
        obj.newslist = obj.newslist.filter((n) => !n.aid);
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`IT之家-appList, 出现异常: ` + error);
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
        console.log(`IT之家-appSlide, 出现异常: ` + error);
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
        console.log(`IT之家-mobileWebx, 出现异常: ` + error);
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
        console.log(`IT之家-newAppFeed, 出现异常: ` + error);
      }
      break;
    case "JavDB":
      try {
        let obj = JSON.parse(body);
        if (obj.data.splash_ad) {
          obj.data.splash_ad.enabled = false;
          obj.data.splash_ad.overtime = 0;
        };
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`JavDB, 出现异常: ` + error);
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
        console.log(`京东-开屏广告, 出现异常: ` + error);
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
        console.log(`酷安-detail, 出现异常: ` + error);
      }
      break;
    case "酷安-replyList":
      try {
        let obj = JSON.parse(body);
        obj.data = Object.values(obj.data).filter((item) => item.id);
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`酷安-replyList, 出现异常: ` + error);
      }
      break;
    case "酷安-dataList":
      try {
        let obj = JSON.parse(body);
        obj.data = Object.values(obj.data).filter((item) =>
          !(item["entityTemplate"] === "sponsorCard" || item.title === "精选配件")
        );
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`酷安-dataList, 出现异常: ` + error);
      }
      break;
    case "酷安-index":
      try {
        let obj = JSON.parse(body);
        obj.data = Object.values(obj.data).filter((item) =>
          !(
            item["entityTemplate"] === "sponsorCard" ||
            item.entityId === 8639 ||
            item.entityId === 33066 ||
            item.entityId === 32557 ||
            item.title.indexOf("值得买") !== -1 ||
            item.title.indexOf("红包") !== -1
          )
        );
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`酷安-index, 出现异常: ` + error);
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
        console.log(`联享家-开屏广告, 出现异常: ` + error);
      }
      break;
    case "美团外卖-开屏广告":
      try {
        let obj = JSON.parse(body);
        delete obj.data.startpicture.ad;
        delete obj.data.startpicture.mk;
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`美团外卖-开屏广告, 出现异常: ` + error);
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
        console.log(`什么值得买-开屏广告, 出现异常: ` + error);
      }
      break;
    case "什么值得买-百科广告":
      try {
        let obj = JSON.parse(body);
        obj.data.rows = obj.data.rows.filter((element) => {
          return (!element.hasOwnProperty("ad_banner_id") || element.ad_banner_id === "");
        });
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`什么值得买-百科广告, 出现异常: ` + error);
      }
      break;
    case "什么值得买-好价广告":
      try {
        let obj = JSON.parse(body);
        let bigBanner = obj.data.banner.big_banner.filter((element) => {
          return element.ad_banner_id === "";
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
        console.log(`什么值得买-好价广告, 出现异常: ` + error);
      }
      break;
    case "什么值得买-好价详情页广告":
      try {
        let obj = JSON.parse(body);
        obj.data.lanmu_qikan = {};
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`什么值得买-好价详情页广告, 出现异常: ` + error);
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
        console.log(`什么值得买-首页广告, 出现异常: ` + error);
      }
      break;
    case "什么值得买-搜索标签广告":
      try {
        let obj = JSON.parse(body);
        obj.data.hongbao = {};
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`什么值得买-搜索标签广告, 出现异常: ` + error);
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
        console.log(`什么值得买-搜索结果广告, 出现异常: ` + error);
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
        console.log(`什么值得买-会员权益中心banner广告, 出现异常: ` + error);
      }
      break;
    case "微博-开屏广告-sdkad":
      try {
        body = body.match(/\{.*\}/);
        let obj = JSON.parse(body);
        if (obj.needlocation) obj.needlocation = false;
        if (obj.show_push_splash_ad) obj.show_push_splash_ad = false;
        if (obj.code) obj.code = 200;
        if (obj.background_delay_display_time) {
          obj.background_delay_display_time = 31536000; // 60 * 60 * 24 * 365 = 31536000
        }
        if (obj.lastAdShow_delay_display_time) {
          obj.lastAdShow_delay_display_time = 31536000;
        }
        if (obj.realtime_ad_video_stall_time) {
          obj.realtime_ad_video_stall_time = 31536000;
        }
        if (obj.realtime_ad_timeout_duration) {
          obj.realtime_ad_timeout_duration = 31536000;
        }
        for (let item of obj["ads"]) {
          item["displaytime"] = 0;
          item["displayintervel"] = 31536000;
          item["allowdaydisplaynum"] = 0;
          item["begintime"] = "2040-01-01 00:00:00";
          item["endtime"] = "2040-01-01 23:59:59";
        }
        body = JSON.stringify(obj) + "OK";
      } catch (error) {
        console.log(`微博-开屏广告-sdkad, 出现异常: ` + error);        
      }
      break;
    case "微博-开屏广告-wbpullad":
      try {
        let obj = JSON.parse(body);
        for (let item of obj["cached_ad"]["ads"]) {
          item["start_date"] = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
          item["show_count"] = 0;
          item["duration"] = 31536000; // 60 * 60 * 24 * 365 = 31536000
          item["end_date"] = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`微博-开屏广告-wbpullad, 出现异常: ` + error);
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
        console.log(`小爱音箱-开屏广告, 出现异常: ` + error);
      }
      break;
    case "小红书-开屏广告-config":
      try {
        let obj = JSON.parse(body);
        //obj.data.tabbar.tabs = Object.values(obj.data.tabbar.tabs).filter((item) => !item.title === "购买");
        if (obj.data) {
          delete obj.data.store;
          delete obj.data.splash;
          delete obj.data.loading_img;
        }
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`小红书-开屏广告-config, 出现异常: ` + error);
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
        console.log(`小红书-开屏广告-splash_config, 出现异常: ` + error);
      }
      break;
    case "小红书-信息流广告":
      try {
        let obj = JSON.parse(body);
        obj.data = obj.data.filter((d) => !d.ads_info);
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`小红书-信息流广告, 出现异常: ` + error);
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
        console.log(`小米商城-开屏广告, 出现异常: ` + error);
      }
      break;
    case "知乎-首页右下角悬浮框":
      try {
        let obj = JSON.parse(body);
        if ("feed_egg" in obj) obj = {};
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`知乎-首页右下角悬浮框, 出现异常: ` + error);
      }
      break;
    default:
      break;
  }
  $done({ body });
}

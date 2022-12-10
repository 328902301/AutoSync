// 2022-12-10 13:30

var url = $request.url;
var body = $response.body;
var adAppName = "";

if (/^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList/.test(url)) adAppName = "12306-开屏广告";
if (/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(url)) adAppName = "哔哩哔哩-强制设置的皮肤";
if (/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(url)) adAppName = "哔哩哔哩-标签页";
if (/^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity\?/.test(url)) adAppName = "哔哩哔哩-右上角活动入口";
if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(url)) adAppName = "哔哩哔哩-我的页面";
if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test(url)) adAppName = "哔哩哔哩-会员清晰度";
if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index/.test(url)) adAppName = "哔哩哔哩-推荐广告";
if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(url)) adAppName = "哔哩哔哩-开屏广告";
if (/^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square\?/.test(url)) adAppName = "哔哩哔哩-热搜广告";
if (/^https?:\/\/api\.bilibili\.com\/pgc\/page\/cinema\/tab\?/.test(url)) adAppName = "哔哩哔哩-观影页广告";
if (/^https?:\/\/api\.live\.bilibili.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(url)) adAppName = "哔哩哔哩-直播广告";
if (/^https?:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\?/.test(url)) adAppName = "嘀嗒出行-开屏广告";
if (/^https?:\/\/cmsapi\.dmall\.com\/app\/home\/homepageStartUpPic/.test(url)) adAppName = "多点-开屏广告";
if (/^https?:\/\/m\.ithome\.com\/api\/news\/newslistpageget/.test(url)) adAppName = "IT之家-mobileWebRegex";
if (/^https?:\/\/api\.ithome\.com\/json\/(listpage|newslist)\/news/.test(url)) adAppName = "IT之家-appRegex";
if (/^https?:\/\/api\.ithome\.com\/json\/slide\/index/.test(url)) adAppName = "IT之家-appSlideRegex";
if (/^https?:\/\/napi\.ithome\.com\/api\/(news|topmenu)\/(getfeeds|index)/.test(url)) adAppName = "IT之家-newAppFeed";
if (/^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start/.test(url)) adAppName = "京东-开屏广告"
if (/^https?:\/\/api.coolapk.com\/v6\/feed\/replyList/.test(url)) adAppName = "酷安-replyList";
if (/^https?:\/\/api.coolapk.com\/v6\/main\/indexV8/.test(url)) adAppName = "酷安-index";
if (/^https?:\/\/api.coolapk.com\/v6\/main\/dataList/.test(url)) adAppName = "酷安-dataList";
if (/^https?:\/\/api.coolapk.com\/v6\/feed\/detail/.test(url)) adAppName = "酷安-detail";
if (/^https?:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg/.test(url)) adAppName = "联享家-开屏广告";
if (/^https?:\/\/wmapi\.meituan\.com\/api\/v7\/loadInfo/.test(url)) adAppName = "美团外卖-开屏广告";
if (/^https?:\/\/app-api\.smzdm\.com\/util\/loading/.test(url)) adAppName = "什么值得买-开屏广告";
if (/^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list/.test(url)) adAppName = "什么值得买-百科广告";
if (/^https?:\/\/haojia-api\.smzdm\.com\/home\/list/.test(url)) adAppName = "什么值得买-好价广告";
if (/^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul/.test(url)) adAppName = "什么值得买-好价详情页广告";
if (/^https?:\/\/homepage-api\.smzdm\.com\/v3\/home/.test(url)) adAppName = "什么值得买-首页广告";
if (/^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags/.test(url)) adAppName = "什么值得买-搜索标签广告";
if (/^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10/.test(url)) adAppName = "什么值得买-搜索结果广告";
if (/^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner/.test(url)) adAppName = "什么值得买-会员权益中心banner广告";
if (/^https?:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/sdkad.php/.test(url)) adAppName = "微博-开屏广告-sdkad";
if (/^https?:\/\/wbapp\.uve\.weibo\.com\/wbapplua\/wbpullad.lua/.test(url)) adAppName = "微博-开屏广告-wbpullad";
if (/^https?:\/\/hd\.mina\.mi\.com\/splashscreen\/alert/.test(url)) adAppName = "小爱音箱-开屏广告";
if (/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v1\/system_service\/config\?/.test(url)) adAppName = "小红书-开屏广告-config";
if (/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v2\/system_service\/splash_config$/.test(url)) adAppName = "小红书-开屏广告-splash_config"
if (/^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v6\/homefeed\/categories\?/.test(url)) adAppName = "小红书-信息流广告";
if (/^https?:\/\/api\.m\.mi\.com\/v1\/app\/start$/.test(url)) adAppName = "小米商城-开屏广告";
if (/^https?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2/.test(url)) adAppName = "知乎-开屏广告";
if (/^https?:\/\/api\.zhihu\.com\/commercial_api\/app_float_layer$/.test(url)) adAppName = "知乎-首页右下角悬浮框";
// if (/^https?:\/\/api\.zhihu\.com\/topstory\/recommend/.test(url)) adAppName = "知乎-推荐列表";
// if (/^https?:\/\/appcloud2\.zhihu\.com\/v3\/config$/.test(url)) adAppName = "知乎-appcloud2_config"
// if (/^https?:\/\/www\.zhihu\.com\/api\/v4\/answers\/\d+\/recommendations/.test(url)) adAppName = "知乎-回答下方广告";
// if (/^https?:\/\/www\.zhihu\.com\/api\/v4\/articles\/\d+\/recommendation/.test(url)) adAppName = "知乎-文章回答下方广告";
// if (/^https?:\/\/api\.zhihu\.com\/(questions\/\d+\/feeds|v4\/questions\/\d+\/answers)\?/.test(url)) adAppName = "知乎-问题回答列表";

if (!body) {
  $done({});
} else {
  switch (adAppName) {
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
        console.log(`12306-开屏广告 出现异常`);
      }
      break;
    case "哔哩哔哩-强制设置的皮肤":
      try {
        let obj = JSON.parse(body);
        if (obj.data && obj.data.common_equip) delete obj.data.common_equip;
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`哔哩哔哩-强制设置的皮肤 出现异常`);
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
        console.log(`哔哩哔哩-标签页 出现异常`);
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
        console.log(`哔哩哔哩-右上角活动入口 出现异常`);
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
        console.log(`哔哩哔哩-我的页面 出现异常`);
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
        console.log(`哔哩哔哩-会员清晰度 出现异常`);
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
                  for (const v of i.banner_item) {
                    if (v.type) {
                      if (v.type === "ad") return false;
                    }
                  }
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
        console.log(`哔哩哔哩-推荐广告 出现异常`);
      }
      break;
    case "哔哩哔哩-开屏广告":
      try {
        let obj = JSON.parse(body);
        if (obj.data && obj.data.show) delete obj.data.show;
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`哔哩哔哩-开屏广告 出现异常`);
      }
      break;
    case "哔哩哔哩-热搜广告":
      try {
        let obj = JSON.parse(body);
        if (obj.data) delete obj.data;
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`哔哩哔哩-热搜广告 出现异常`);
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
        console.log(`哔哩哔哩-观影页广告 出现异常`);
      }
      break;
    case "哔哩哔哩-直播广告":
      try {
        let obj = JSON.parse(body);
        if (obj.data.activity_banner_info) obj["data"]["activity_banner_info"] = null;
        body = JSON.stringify(obj);
      } catch (error) {
        console.log(`哔哩哔哩-直播广告 出现异常`);
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
        console.log(`嘀嗒出行-开屏广告 出现异常`);
      }
      break;
    default:
      break;
  }
}

$done({ body });

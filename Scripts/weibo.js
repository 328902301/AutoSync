// https://github.com/zmqcherish/proxy-script/blob/main/weibo_main.js
// 2022-12-15 07:47

// 主要的选项配置
const mainConfig = {
  isDebug: false, // 开启调试 会打印运行中部分日志
  // 个人中心配置 其中多数是可以直接在更多功能里直接移除
  removeHomeVip: true, // 个人中心的 vip 栏
  removeHomeCreatorTask: true, // 个人中心创作者中心下方的轮播图

  // 微博详情页配置
  removeRelate: true, // 相关推荐
  removeGood: true, // 微博主好物种草
  removeFollow: true, // 关注博主
  modifyMenus: true, // 编辑上下文菜单
  removeRelateItem: true, // 评论区相关内容
  removeRecommendItem: true, // 评论区推荐内容
  removeRewardItem: true, // 微博详情页打赏模块

  // removeLiveMedia: true, // 首页顶部直播
  removeNextVideo: true, // 关闭自动播放下一个视频
  removePinedTrending: true, // 删除热搜列表置顶条目

  removeInterestFriendInTopic: true, // 超话 超话里的好友
  removeInterestTopic: true, // 超话 可能感兴趣的超话 + 好友关注
  removeInterestUser: true, // 用户页 可能感兴趣的人
  removeUnfollowTopic: true, // 超话 未关注的
  removeUnusedPart: true, // 超话 乱七八糟没用的部分

  removeLvZhou: true, // 绿洲模块
  removeSearchWindow: true, // 搜索页滑动窗口 有的不是广告
};

// 菜单配置
const itemMenusConfig = {
  creator_task: false, // 转发任务
  mblog_menus_custom: false, // 寄微博
  mblog_menus_video_later: false, // 可能是稍后再看 没出现过
  mblog_menus_comment_manager: false, // 评论管理
  mblog_menus_avatar_widget: false, // 头像挂件
  mblog_menus_card_bg: false, // 卡片背景
  mblog_menus_long_picture: true, // 生成长图
  mblog_menus_delete: true, // 删除
  mblog_menus_edit: true, // 编辑
  mblog_menus_edit_history: true, // 编辑记录
  mblog_menus_edit_video: true, // 编辑视频
  mblog_menus_sticking: false, // 置顶
  mblog_menus_open_reward: false, // 赞赏
  mblog_menus_novelty: false, // 新鲜事投稿
  mblog_menus_favorite: false, // 收藏
  mblog_menus_promote: false, // 推广
  mblog_menus_modify_visible: false, // 设置分享范围
  mblog_menus_copy_url: true, // 复制链接
  mblog_menus_follow: false, // 关注
  mblog_menus_video_feedback: false, // 播放反馈
  mblog_menus_shield: true, // 屏蔽
  mblog_menus_report: true, // 投诉
  mblog_menus_apeal: false, // 申诉
  mblog_menus_home: false // 返回首页
};
const modifyCardsUrls = ["/2/cardlist", "/2/video/community_tab", "/2/searchall"];
const modifyStatusesUrls = [
  "/2/groups/timeline",
  "/2/statuses/friends/timeline",
  "/2/statuses/unread_friends_timeline",
  "/2/statuses/unread_hot_timeline"
];
const otherUrls = {
  "/2/checkin/show": "removeCheckin", // 签到任务
  "/2/comments/build_comments": "removeComments", // 微博详情页评论区相关内容
  "/2/container/get_item": "containerHandler", // 列表相关
  "/2/messageflow": "removeMsgAd",
  "/2/page?": "removePage", // 超话签到的按钮 /2/page/button 加?区别
  "/2/profile/container_timeline": "userHandler", // 用户主页
  "/2/profile/me": "removeHome", // 个人页模块
  "/2/search/container_discover": "removeSearch",
  "/2/search/container_timeline": "removeSearch",
  "/2/search/finder": "removeSearchMain",
  "/2/statuses/container_timeline": "removeMain", // 新版主页广告
  "/2/statuses/unread_topic_timeline": "topicHandler", // 超话 tab
  "/2/statuses/video_mixtimeline": "nextVideoHandler", // 取消自动播放下一个视频
  "/2/statuses/extend": "itemExtendHandler", // 微博详情页
  "/2/video/tiny_stream_video_list": "nextVideoHandler", // 取消自动播放下一个视频
  "/2/video/remind_info": "removeVideoRemind" // tab2 菜单上的假通知
};

function getModifyMethod(url) {
  for (const s of modifyCardsUrls) {
    if (url.indexOf(s) !== -1) return "removeCards";
  }
  for (const s of modifyStatusesUrls) {
    if (url.indexOf(s) !== -1) return "removeTimeLine";
  }
  for (const [path, method] of Object.entries(otherUrls)) {
    if (url.indexOf(path) !== -1) return method;
  }
  return null;
}

function isAd(data) {
  if (!data) return false;
  if (data.mblogtypename === "广告" || data.mblogtypename === "热推") {
    return true;
  }
  if (data.promotion && data.promotion.type === "ad") return true;
  return false;
}

function isBlock(data) {
  let blockIds = mainConfig.blockIds || [];
  if (blockIds.length === 0) return false;
  let uid = data.user.id;
  for (const blockId of blockIds) {
    if (blockId === uid) return true;
  }
  return false;
}

// 新版主页广告
function removeMain(data) {
  if (!data.items) return data;
  let newItems = [];
  for (let item of data.items) {
    if (!isAd(item.data)) newItems.push(item);
  }
  data.items = newItems;
  log("removeMain success");
  return data;
}

function topicHandler(data) {
  const cards = data.cards;
  if (!cards) return data;
  if (!mainConfig.removeUnfollowTopic && !mainConfig.removeUnusedPart) {
    return data;
  }
  let newCards = [];
  for (let c of cards) {
    let addFlag = true;
    if (c.mblog) {
      let btns = c.mblog.buttons;
      if (mainConfig.removeUnfollowTopic && btns) {
        if (btns[0].type === "follow") addFlag = false;
      }
    } else {
      if (!mainConfig.removeUnusedPart) continue;
      if (c.itemid === "bottom_mix_activity") {
        addFlag = false;
      } else if (c?.top?.title === "正在活跃") {
        addFlag = false;
      } else if (c.card_type === 200 && c.group) {
        addFlag = false;
      } else {
        let cGroup = c.card_group;
        if (!cGroup) continue;
        let cGroup0 = cGroup[0];
        if (["guess_like_title", "cats_top_title", "chaohua_home_readpost_samecity_title"].indexOf(cGroup0.itemid) !== -1) {
          addFlag = false;
        } else if (cGroup.length > 1) {
          let newCardGroup = [];
          for (let cg of cGroup) {
            if (["chaohua_discovery_banner_1", "bottom_mix_activity"].indexOf(cg.itemid) === -1) {
              newCardGroup.push(cg);
            }
          }
          c.card_group = newCardGroup;
        }
      }
    }
    if (addFlag) newCards.push(c);
  }
  data.cards = newCards;
  log("topicHandler success");
  return data;
}

function removeSearchMain(data) {
  let channels = data.channelInfo.channels;
  if (!channels) return data;
  for (let channel of channels) {
    let payload = channel.payload;
    if (!payload) continue;
    removeSearch(payload);
  }
  log("remove_search main success");
  return data;
}

function checkSearchWindow(item) {
  if (!mainConfig.removeSearchWindow) return false;
  if (item.category !== "card") return false;
  return (item.data?.itemid === "finder_window" || item.data?.itemid === "more_frame");
}

// 发现页
function removeSearch(data) {
  if (!data.items) return data;
  let newItems = [];
  for (let item of data.items) {
    if (item.category === "feed") {
      if (!isAd(item.data)) newItems.push(item);
    } else {
      if (!checkSearchWindow(item)) newItems.push(item);
    }
  }
  // 去除搜索框填充词
  if (data.loadedInfo) {
    data.loadedInfo.searchBarContent = [];
  }
  data.items = newItems;
  log("remove_search success");
  return data;
}

function removeMsgAd(data) {
  if (!data.messages) return;
  let newMsgs = [];
  for (let msg of data.messages) {
    if (msg.msg_card?.ad_tag) continue;
    newMsgs.push(msg);
  }
  data.messages = newMsgs;
  return data;
}

// 删除热搜列表置顶条目
function removePage(data) {
  removeCards(data);
  if (mainConfig.removePinedTrending && data.cards && data.cards.length > 0) {
    if (data.cards[0].card_group) {
      data.cards[0].card_group = data.cards[0].card_group.filter((c) => !c?.itemid?.includes("t:51"));
    }
  }
  return data;
}

function removeCards(data) {
  if (!data.cards) return;
  let newCards = [];
  for (const card of data.cards) {
    let cardGroup = card.card_group;
    if (cardGroup && cardGroup.length > 0) {
      let newGroup = [];
      for (const group of cardGroup) {
        let cardType = group.card_type;
        if (cardType !== 118) newGroup.push(group);
      }
      card.card_group = newGroup;
      newCards.push(card);
    } else {
      let cardType = card.card_type;
      if ([9, 165].indexOf(cardType) !== -1) {
        if (!isAd(card.mblog)) newCards.push(card);
      } else {
        newCards.push(card);
      }
    }
  }
  data.cards = newCards;
}

function lvZhouHandler(data) {
  if (!mainConfig.removeLvZhou) return;
  if (!data) return;
  let struct = data.common_struct;
  if (!struct) return;
  let newStruct = [];
  for (const s of struct) {
    if (s.name !== "绿洲") newStruct.push(s);
  }
  data.common_struct = newStruct;
}

function removeTimeLine(data) {
  for (const s of ["ad", "advertises", "trends"]) {
    if (data[s]) delete data[s];
  }
  if (!data.statuses) return;
  let newStatuses = [];
  for (const s of data.statuses) {
    if (!isAd(s)) {
      lvZhouHandler(s);
      if (!isBlock(s)) newStatuses.push(s);
    }
  }
  data.statuses = newStatuses;
}

function removeHomeVip(data) {
  if (!data.header) return data;
  // let vipCenter = data.header.vipCenter;
  // if (vipCenter) {
  //   vipCenter.icon = '';
  //   vipCenter.title.content = '会员中心';
  // }
  if (data.header.vipView) {
    data.header.vipView = null;
  }
  return data;
}

// 移除tab2的假通知
function removeVideoRemind(data) {
  data.bubble_dismiss_time = 0;
  data.exist_remind = false;
  data.image_dismiss_time = 0;
  data.image = "";
  data.tag_image_english = "";
  data.tag_image_english_dark = "";
  data.tag_image_normal = "";
  data.tag_image_normal_dark = "";
}

// 微博详情页
function itemExtendHandler(data) {
  if (mainConfig.removeRelate || mainConfig.removeGood) {
    if (data.trend && data.trend.titles) {
      let title = data.trend.titles.title;
      if (mainConfig.removeRelate && title === "相关推荐") {
        delete data.trend;
      } else if (mainConfig.removeGood && title === "博主好物种草") {
        delete data.trend;
      }
    }
  }
  if (mainConfig.removeFollow) {
    if (data.follow_data) data.follow_data = null;
  }
  if (mainConfig.removeRewardItem) {
    if (data.reward_info) data.reward_info = null;
  }
  // 删除超话新帖和新用户通知
  if (data.page_alerts) data.page_alerts = null;
  // 广告 暂时判断逻辑根据图片  https://h5.sinaimg.cn/upload/1007/25/2018/05/03/timeline_icon_ad_delete.png
  try {
    let picUrl = data.trend.extra_struct.extBtnInfo.btn_picurl;
    if (picUrl.indexOf("timeline_icon_ad_delete") !== -1) delete data.trend;
  } catch (error) {}
  if (mainConfig.modifyMenus && data.custom_action_list) {
    let newActions = [];
    for (const item of data.custom_action_list) {
      let _t = item.type;
      let add = itemMenusConfig[_t];
      if (add === undefined) {
        newActions.push(item);
      } else if (_t === "mblog_menus_copy_url") {
        newActions.unshift(item);
      } else if (add) {
        newActions.push(item);
      }
    }
    data.custom_action_list = newActions;
  }
}

function updateFollowOrder(item) {
  try {
    for (let d of item.items) {
      if (d.itemId === "mainnums_friends") {
        let s = d.click.modules[0].scheme;
        d.click.modules[0].scheme = s.replace("231093_-_selfrecomm", "231093_-_selffollowed");
        log("updateFollowOrder success");
        return;
      }
    }
  } catch (error) {
    log("updateFollowOrder fail");
  }
}

function updateProfileSkin(item, k) {
  try {
    let profileSkin = mainConfig[k];
    if (!profileSkin) return;
    let i = 0;
    for (let d of item.items) {
      if (!d.image) continue;
      try {
        dm = d.image.style.darkMode;
        if (dm !== "alpha") d.image.style.darkMode = "alpha";
        d.image.iconUrl = profileSkin[i++];
        if (d.dot) d.dot = [];
      } catch (error) {}
    }
    log("updateProfileSkin success");
  } catch (error) {
    log("updateProfileSkin fail");
  }
}

function removeHome(data) {
  if (!data.items) return data;
  let newItems = [];
  for (let item of data.items) {
    let itemId = item.itemId;
    if (itemId === "profileme_mine") {
      if (mainConfig.removeHomeVip) item = removeHomeVip(item);
      updateFollowOrder(item);
      newItems.push(item);
    } else if (itemId === "100505_-_top8") {
      updateProfileSkin(item, "profileSkin1");
      newItems.push(item);
    } else if (itemId === "100505_-_newcreator") {
      if (item.type === "grid") {
        updateProfileSkin(item, "profileSkin2");
        newItems.push(item);
      } else {
        if (!mainConfig.removeHomeCreatorTask) newItems.push(item);
      }
    } else if (
      [
        "mine_attent_title",
        "100505_-_meattent_pic",
        "100505_-_newusertask",
        "100505_-_vipkaitong",
        "100505_-_hongbao2022",
        "100505_-_adphoto",
        "100505_-_advideo",
        "2022pk_game_tonglan"
      ].indexOf(itemId) !== -1
    ) {
      continue;
    } else if (itemId.match(/100505_-_meattent_-_\d+/)) {
      continue;
    } else {
      newItems.push(item);
    }
  }
  data.items = newItems;
  return data;
}

// 移除tab1签到
function removeCheckin(data) {
  log("remove tab1签到");
  data.show = 0;
}

// // 首页直播
// function removeMediaHomelist(data) {
//   if (mainConfig.removeLiveMedia) {
//     log("remove 首页直播");
//     data.data = [];
//   }
// }

// 评论区相关和推荐内容
function removeComments(data) {
  let delType = ["广告"];
  if (mainConfig.removeRelateItem) delType.push("相关内容");
  if (mainConfig.removeRecommendItem) delType.push(...["推荐", "热推"]);
  // if (delType.length === 0) return;
  let items = data.datas || [];
  if (items.length === 0) return;
  let newItems = [];
  for (const item of items) {
    let adType = item.adType || "";
    if (delType.indexOf(adType) === -1) {
      newItems.push(item);
    }
  }
  log("remove 评论区相关和推荐内容");
  data.datas = newItems;
}

// 处理感兴趣的超话和超话里的好友
function containerHandler(data) {
  if (mainConfig.removeInterestFriendInTopic) {
    if (data.card_type_name === "超话里的好友") {
      log("remove 超话里的好友");
      data.card_group = [];
    }
  }
  if (mainConfig.removeInterestTopic && data.itemid) {
    if (data.itemid.indexOf("infeed_may_interest_in") !== -1) {
      log("remove 感兴趣的超话");
      data.card_group = [];
    } else if (data.itemid.indexOf("infeed_friends_recommend") !== -1) {
      log("remove 超话好友关注");
      data.card_group = [];
    }
  }
}

// 可能感兴趣的人
function userHandler(data) {
  data = removeMain(data);
  if (!mainConfig.removeInterestUser) return data;
  if (!data.items) return data;
  let newItems = [];
  for (let item of data.items) {
    let isAdd = true;
    if (item.category === "group") {
      try {
        if (item.items[0]["data"]["desc"] === "可能感兴趣的人") isAdd = false;
      } catch (error) {}
    }
    if (isAdd) newItems.push(item);
  }
  data.items = newItems;
  log("removeMain sub success");
  return data;
}

function nextVideoHandler(data) {
  if (mainConfig.removeNextVideo) {
    data.statuses = [];
    data.tab_list = [];
    log("nextVideoHandler");
  }
}

// function unreadCountHandler(data) {
//   let ext = data.ext_new;
//   if (!ext) return;
//   if (!ext.creator_task) return;
//   ext.creator_task.text = '';
// }

function log(data) {
  if (mainConfig.isDebug) console.log(data);
}

var url = $request.url;
var body = $response.body;
let method = getModifyMethod(url);

if (method) {
  log(method);
  var func = eval(method);
  let data = JSON.parse(body);
  new func(data);
  body = JSON.stringify(data);
}

$done({ body });

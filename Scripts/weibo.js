// 2023-02-06 16:05

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

if (url.includes("/interface/sdk/sdkad.php")) {
  // 开屏广告
  let obj = JSON.parse(body.substring(0, body.length - 2));
  if (obj.needlocation) {
    obj.needlocation = false;
  }
  if (obj.show_push_splash_ad) {
    obj.show_push_splash_ad = false;
  }
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
  if (obj.ads) {
    for (let item of obj.ads) {
      item.displaytime = 0;
      item.displayintervel = 31536000;
      item.allowdaydisplaynum = 0;
      item.begintime = "2040-01-01 00:00:00";
      item.endtime = "2040-01-01 23:59:59";
    }
  }
  body = JSON.stringify(obj) + "OK";
  $done({ body });
} else {
  let obj = JSON.parse(body);
  if (url.includes("/2/checkin/show")) {
    // 首页签到
    if (obj.show) {
      obj.show = 0;
    }
  } else if (url.includes("/2/client/publisher_list")) {
    // 首页发布按钮
    if (obj.elements) {
      obj.elements = obj.elements.filter(
        (a) =>
          a.app_name === "写微博" ||
          a.app_name === "图片" ||
          a.app_name === "视频"
      );
    }
  } else if (url.includes("/2/comments/build_comments")) {
    // 评论区相关和推荐内容
    let delType = ["广告"];
    delType.push("相关内容");
    delType.push(...["推荐", "热推"]);
    if (obj.datas) {
      let items = obj.datas || [];
      if (items.length > 0) {
        let newItems = [];
        for (let item of items) {
          // 移除头像挂件、勋章、评论气泡
          if (item.data?.user) {
            removeAvatar(item.data.user);
          }
          if (item.data?.comment_bubble) {
            item.data.comment_bubble = {};
          }
          let adType = item.adType || "";
          // 移除评论区推广
          if (delType.indexOf(adType) === -1) {
            // 移除过滤提示
            if (item.type === 6) {
              continue;
            } else {
              newItems.push(item);
            }
          }
        }
        obj.datas = newItems;
      }
    } else if (obj.root_comments) {
      let items = obj.root_comments || [];
      if (items.length > 0) {
        let newItems = [];
        for (let item of items) {
          // 移除头像挂件、勋章、评论气泡
          if (item?.user) {
            removeAvatar(item.user);
          }
          if (item?.comment_bubble) {
            item.comment_bubble = {};
          }
          let adType = item.adType || "";
          // 移除评论区推广
          if (delType.indexOf(adType) === -1) {
            // 移除过滤提示
            if (item.type === 6) {
              continue;
            } else {
              newItems.push(item);
            }
          }
        }
        obj.root_comments = newItems;
      }
    }
  } else if (url.includes("/2/messageflow/notice")) {
    // 消息动态页
    if (obj.messages) {
      let newMsgs = [];
      for (let msg of obj.messages) {
        if (msg.msg_card?.ad_tag) {
          continue;
        } else {
          newMsgs.push(msg);
        }
      }
      obj.messages = newMsgs;
    }
  } else if (url.includes("/2/profile/me")) {
    // 我的页面
    if (obj.vipHeaderBgImage) {
      obj.vipHeaderBgImage = {};
    }
    if (obj.items) {
      let newItems = [];
      for (let item of obj.items) {
        let itemId = item.itemId;
        if (itemId === "profileme_mine") {
          if (item.header.vipView) {
            item.header.vipView = {};
          }
          if (item.header.vipCenter) {
            item.header.vipCenter = {};
          }
          if (item.header.vipIcon) {
            item.header.vipIcon = {};
          }
          for (let d of item.items) {
            if (d.itemId === "mainnums_friends") {
              let s = d.click.modules[0].scheme;
              d.click.modules[0].scheme = s.replace(
                "231093_-_selfrecomm",
                "231093_-_selffollowed"
              );
            }
          }
          newItems.push(item);
        } else if (itemId === "100505_-_top8") {
          if (item.items) {
            item.items = item.items.filter(
              (i) =>
                i.itemId === "100505_-_album" || // 我的相册
                i.itemId === "100505_-_like" || // 赞/收藏
                i.itemId === "100505_-_watchhistory" || // 浏览记录
                i.itemId === "100505_-_draft" // 草稿箱
              // i.itemId === "100505_-_pay" || // 我的钱包
              // i.itemId === "100505_-_ordercenter" || // 我的订单
              // i.itemId === "100505_-_productcenter" || // 创作中心
              // i.itemId === "100505_-_promote" || // 广告中心
            );
          }
          newItems.push(item);
        } else if (item.category === "mine") {
          if (itemId === "100505_-_manage") {
            if (item.style) {
              item.style = {};
            }
            // 移除分隔符的点点点
            if (item.images) {
              item.images = {};
            }
            newItems.push(item);
          } else if (itemId === "100505_-_manage2") {
            // 移除面板样式
            if (item.footer) {
              item.footer = {};
            }
            // 移除框内推广
            if (item.body) {
              item.body = {};
            }
            newItems.push(item);
          } else {
            // 其他项目全部移除
            continue;
          }
        } else {
          // 其他项目全部移除
          continue;
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/push/active")) {
    // 首页右上角红包图标
    if (obj?.feed_redpacket) {
      obj.feed_redpacket.starttime = "2208960000";
      obj.feed_redpacket.interval = "31536000";
      obj.feed_redpacket.endtime = "2209046399";
    }
  } else if (url.includes("/2/search/")) {
    if (url.includes("container_discover")) {
      removeSearch(obj);
      if (obj.loadedInfo) {
        // 去除搜索框填充词
        if (obj.loadedInfo.searchBarContent) {
          obj.loadedInfo.searchBarContent = [];
        }
        // 去除搜索背景图片
        if (obj.loadedInfo.headerBack) {
          obj.loadedInfo.headerBack.channelStyleMap = {};
        }
      }
    } else if (url.includes("container_timeline")) {
      removeSearch(obj);
    } else if (url.includes("finder")) {
      removeSearchMain(obj);
    }
  } else if (url.includes("/2/statuses/")) {
    // 信息流
    if (obj.loadedInfo?.headers) {
      obj.loadedInfo.headers = {};
    }
    if (obj.items) {
      let newItems = [];
      for (let item of obj.items) {
        if (!isAd(item.data)) {
          if (item.category === "feed") {
            newItems.push(item);
          } else {
            // 移除所有的推广
            continue;
          }
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/cardlist")) {
    if (obj.cards) {
      let newCards = [];
      for (let card of obj.cards) {
        let cardGroup = card.card_group;
        if (cardGroup?.length > 0) {
          let newGroup = [];
          for (let group of cardGroup) {
            let cardType = group.card_type;
            if (cardType !== 118) {
              if (!isAd(group.mblog)) {
                removeAvatar(group.mblog);
                // 关注按钮
                if (group.mblog?.buttons) {
                  group.mblog.buttons = [];
                }
                newGroup.push(group);
              }
            }
          }
          card.card_group = newGroup;
          newCards.push(card);
        } else {
          let cardType = card.card_type;
          if ([9, 165, 180, 1007].indexOf(cardType) !== -1) {
            if (!isAd(card.mblog)) {
              newCards.push(card);
            }
          } else {
            newCards.push(card);
          }
        }
      }
      obj.cards = newCards;
    }
  } else if (url.includes("/2/!/huati/discovery_home_bottom_channels")) {
    // 超话左上角、右上角图标
    if (obj.button_configs) {
      obj.button_configs = [];
    }
    // 广场页
    if (obj.channelInfo.channel_list) {
      obj.channelInfo.channel_list = obj.channelInfo.channel_list.filter(
        (t) => t.title !== "广场"
      );
    }
  } else if (url.includes("/2/!/live/media_homelist")) {
    // 首页顶部直播
    if (obj.data) {
      obj.data = [];
    }
  } else if (url.includes("/v1/ad/realtime")) {
    // 开屏广告
    if (obj.ads) {
      for (let item of obj.ads) {
        item.daily_display_cnt = 50; // "total_display_cnt" : 50,
        item.end_time = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
        item.begin_time = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
      }
    }
  } else if (url.includes("/wbapplua/wbpullad.lua")) {
    // 开屏广告
    if (obj.cached_ad.ads) {
      for (let item of obj.cached_ad.ads) {
        item.start_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
        item.show_count = 0;
        item.duration = 31536000; // 60 * 60 * 24 * 365 = 31536000
        item.end_date = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
      }
    }
  }
  body = JSON.stringify(obj);
  $done({ body });
}

// 判断信息流是不是广告、热推
function isAd(data) {
  if (!data) {
    return false;
  }
  if (data.mblogtypename === "广告") {
    return true;
  }
  if (data.mblogtypename === "热推") {
    return true;
  }
  // if (data.promotion?.type === "ad") {
  //   return true;
  // }
  // if (data.page_info?.actionlog?.source === "ad") {
  //   return true;
  // }
  // if (data.content_auth_info?.content_auth_title === "广告") {
  //   return true;
  // }
  // if (data.common_struct?.[0]?.actionlog?.source?.includes("ad")) {
  //   return true;
  // }
  return false;
}

// 移除头像挂件、勋章
function removeAvatar(data) {
  if (!data) {
    return data;
  }
  if (data.cardid) {
    data.cardid = "";
  }
  if (data.icons) {
    data.icons = [];
  }
  if (data.avatargj_id) {
    data.avatargj_id = "";
  }
  return data;
}

function checkSearchWindow(item) {
  if (item.category !== "card") {
    return false;
  }
  if (
    item.data?.card_type === 19 ||
    item.data?.card_type === 208 ||
    item.data?.card_type === 217 ||
    item.data?.card_type === 1005 ||
    item.data?.itemid === "finder_window" ||
    item.data?.itemid === "more_frame" ||
    item.data?.mblog?.page_info?.actionlog?.source?.includes("ad")
  ) {
    return true;
  }
  return false;
}

// 发现页
function removeSearch(data) {
  if (!data.items) {
    return data;
  }
  let newItems = [];
  for (let item of data.items) {
    if (item.category === "feed") {
      if (!isAd(item.data)) {
        newItems.push(item);
      }
    } else {
      if (!checkSearchWindow(item)) {
        // 搜索页中间的热议话题、热门人物
        if (item.category === "group") {
          continue;
        }
        newItems.push(item);
      }
    }
  }
  data.items = newItems;
  return data;
}

function removeSearchMain(data) {
  let channels = data.channelInfo.channels;
  if (!channels) {
    return data;
  }
  for (let channel of channels) {
    let payload = channel.payload;
    if (!payload) {
      continue;
    }
    removeSearch(payload);
  }
  return data;
}

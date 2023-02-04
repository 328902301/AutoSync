// 2023-02-02 10:30

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

if (url.includes("/interface/sdk/sdkad.php")) {
  obj = JSON.parse(body.substring(0, body.length - 2));
} else {
  obj = JSON.parse(body);
}

if (url.includes("/2/checkin/show")) {
  // 首页签到
  if (obj.show) {
    obj.show = 0;
  }
} else if (url.includes("/2/client/publisher_list")) {
  // 首页发布按钮
  if (obj.elements) {
    obj.elements = obj.elements.filter(
      (e) =>
        e.app_name === "写微博" ||
        e.app_name === "图片" ||
        e.app_name === "视频"
    );
  }
} else if (url.includes("/2/comments/build_comments")) {
  // 微博详情页评论区相关内容
  let delType = ["广告"];
  delType.push("相关内容");
  delType.push(...["推荐", "热推"]);
  if (obj.datas) {
    let items = obj.datas || [];
    if (items.length > 0) {
      let newItems = [];
      for (let item of items) {
        // 移除头像挂件、勋章、评论气泡
        if (item.data) {
          removeUserCard(item.data);
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
        removeUserCard(item);
        if (item.comment_bubble) {
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
} else if (url.includes("/2/container/get_item")) {
  // 感兴趣的超话和超话里的好友
  if (obj.card_type_name === "超话里的好友") {
    obj.card_group = [];
  }
  if (obj.itemid.includes("infeed_may_interest_in")) {
    obj.card_group = [];
  } else if (data.itemid.includes("infeed_friends_recommend")) {
    obj.card_group = [];
  }
} else if (url.includes("/2/messageflow")) {
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
} else if (url.includes("/interface/sdk/sdkad.php")) {
  // 开屏广告sdkad
  if (obj.needlocation) {
    obj.needlocation = false;
  }
  if (obj.show_push_splash_ad) {
    obj.show_push_splash_ad = false;
  }
  if (obj.code) {
    obj.code = 200;
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
} else if (url.includes("/wbapplua/wbpullad.lua")) {
  // 开屏广告pullad
  if (obj.cached_ad.ads) {
    for (let item of obj.cached_ad.ads) {
      item.start_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
      item.show_count = 0;
      item.duration = 31536000; // 60 * 60 * 24 * 365 = 31536000
      item.end_date = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
    }
  }
}

// 移除评论区头像挂件、勋章
function removeUserCard(data) {
  if (data?.user?.cardid) {
    data.user.cardid = "";
  }
  if (data?.user?.icons) {
    data.user.icons = [];
  }
  if (data?.user?.avatargj_id) {
    data.user.avatargj_id = "";
  }
  return data;
}

if (url.includes("/interface/sdk/sdkad.php")) {
  body = JSON.stringify(obj) + "OK";
} else {
  body = JSON.stringify(obj);
}

$done({ body });

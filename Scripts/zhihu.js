const url = $request.url;
let body = $response.body;

if (!$response.body) {
  $done({});
} else {
  if (/^https:\/\/api\.zhihu\.com\/people\/self$/.test(url)) {
    // 获取用户信息 - 隔离用户数据，开启本地盐选会员等
    let obj = JSON.parse(body);
    if (obj?.id?.vip_info?.is_vip) {
      // 在APP显示VIP，仅自己可见，打开后才能使用屏蔽关键词解锁
      if (obj["vip_info"]["is_vip"] === false) {
        obj["vip_info"]["is_vip"] = true;
        obj["vip_info"]["vip_type"] = 2;
        obj["vip_info"]["vip_icon"] = {
          url: "https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae",
          night_mode_url:
            "https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae"
        };
        obj["vip_info"]["vip_icon_v2"] = {
          url: "https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae",
          night_mode_url:
            "https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae"
        };
        obj["vip_info"]["entrance"] = {
          icon: {
            url: "https://pic3.zhimg.com/v2-5b7012c8c22fd520f5677305e1e551bf.png",
            night_mode_url:
              "https://pic4.zhimg.com/v2-e51e3252d7a2cb016a70879defd5da0b.png"
          },
          title: "盐选会员 为你严选好内容",
          expires_day: "2099-12-31",
          sub_title: null,
          button_text: "首月 9 元",
          jump_url: "zhihu://vip/purchase",
          button_jump_url: "zhihu://vip/purchase",
          sub_title_new: null,
          identity: "super_svip"
        };
        obj["vip_info"]["entrance_new"] = {
          left_button: {
            title: "精选会员内容",
            description: "为您严选好内容",
            jump_url: "zhihu://market/home"
          },
          right_button: {
            title: "开通盐选会员",
            description: "畅享 10w+ 场优质内容等特权",
            jump_url: "zhihu://vip/purchase"
          }
        };
        obj["vip_info"]["entrance_v2"] = {
          title: "我的超级盐选会员",
          sub_title: "畅享 5000W+ 优质内容",
          jump_url: "zhihu://market/home",
          button_text: "查看会员",
          sub_title_color: "#F8E2C4",
          sub_title_list: ["畅享 5000W+ 优质内容"],
          card_jump_url: "zhihu://market/home"
        };
      }
    }
    response = { body: JSON.stringify(obj) };
  } else if (/^https?:\/\/appcloud2\.zhihu\.com\/v\d+\/config/.test(url)) {
    // 优化软件配置 - 优化下发的配置文件来实现某些效果
    let obj = JSON.parse(body);
    obj["config"]["homepage_feed_tab"]["tab_infos"] = obj["config"][
      "homepage_feed_tab"
    ]["tab_infos"].filter((e) => {
      // 将活动标签设置为已过期
      if (e["tab_type"] === "activity_tab") {
        e["end_time"] = (new Date() - 120000).toString().slice(0, 10);
        return true;
      } else {
        return false;
      }
    });
    obj["config"]["zvideo_max_number"] = 1;
    // 似乎是控制内部弹窗
    obj["config"]["is_show_followguide_alert"] = false;
    // 似乎是某个地方的标签，待定
    delete obj["config"]["hp_channel_tab"];
    // 灰色模式
    if (obj["config"]["zombie_conf"]) {
      obj["config"]["zombie_conf"]["zombieEnable"] = false;
    }
    if (obj["config"]["gray_mode"]) {
      obj["config"]["gray_mode"]["enable"] = false;
      obj["config"]["gray_mode"]["start_time"] = "4092566400";
      obj["config"]["gray_mode"]["end_time"] = "4092566400";
    }
    // 屏蔽8.X版本以上本地DNS解析，以下修改不清楚哪些是有效的，暂时全部保留
    if (obj["config"].hasOwnProperty("zhcnh_thread_sync")) {
      obj["config"]["zhcnh_thread_sync"]["LocalDNSSetHostWhiteList"] = [];
      obj["config"]["zhcnh_thread_sync"]["isOpenLocalDNS"] = "0";
      obj["config"]["zhcnh_thread_sync"]["ZHBackUpIP_Switch_Open"] = "0";
      obj["config"]["zhcnh_thread_sync"]["dns_ip_detector_operation_lock"] =
        "1";
      obj["config"]["zhcnh_thread_sync"][
        "ZHHTTPSessionManager_setupZHHTTPHeaderField"
      ] = "1";
    }
    response = { body: JSON.stringify(obj) };
  } else if (
    /^https?:\/\/m-cloud\.zhihu\.com\/api\/cloud\/config\/all\?/.test(url)
  ) {
    // 去除灰色主题
    let obj = JSON.parse(body);
    if (obj.data && obj.data["configs"]) {
      obj.data["configs"].forEach((element) => {
        if (element["configKey"] === "feed_gray_theme") {
          element["configValue"].start_time = "1669824000";
          element["configValue"].end_time = "1669824001";
          element.status = false;
        }
      });
    }
    response = { body: JSON.stringify(obj) };
  } else if (/^https:\/\/api\.zhihu\.com\/topstory\/recommend/.test(url)) {
    // 推荐页 - 移除黑名单用户发布的文章、去除广告，及自定义一些屏蔽项目
    // 移除推荐列表中的想法
    const settings_remove_pin = true;
    // 移除推荐列表的流媒体
    const settings_recommend_stream = true;
    // 移除推荐列表的文章
    const settings_remove_article = true;

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
      // 是否匹配脚本关键词过滤
      let matchKeyword = false;
      if (isStream !== true && settings_blocked_keywords) {
        for (let i = 0; i < keywords.length; i++) {
          if (elementStr.search(keywords[i]) >= 0) {
            matchKeyword = true;
            break;
          }
        }
      }
      return !(
        isAd ||
        removePin ||
        removeArticle ||
        removeStream ||
        matchKeyword
      );
    };

    // 修复number类型精度丢失
    let obj = body.replace(/(\w+"+\s?):\s?(\d{15,})/g, '$1:"$2"');
    obj["data"] = obj["data"].filter(newData);
    response = { body: JSON.stringify(obj) };
  } else if (/^https?:\/\/api\.zhihu\.com\/(v4\/)?questions\/\d+/.test(url)) {
    // 问题的回答列表 - 移除黑名单用户的回答、去除广告
    let obj = JSON.parse(body);
    // 去除广告
    delete obj["ad_info"];
    // 去除回答列表中的黑名单用户
    if (obj["data"]) {
      let newData = [];
      for (let element of obj.data) {
        let blackUserName = "";
        const answerId = element.target.id.toString();
        try {
          if ("target" in element) {
            blackUserName = element["target"]["author"]["name"];
          }
        } catch (ex) {}
        // 显示仅作者自己可见的回答，允许复制
        if ("target" in element) {
          element["target"]["visible_only_to_author"] = false;
          element["target"]["is_visible"] = true;
          element["target"]["is_copyable"] = true;
        }
        newData.push(element);
      }
      obj.data = newData;
    }
    response = { body: JSON.stringify(obj) };
  } else if (/^https?:\/\/api\.zhihu\.com\/next-data\?/.test(url)) {
    // 回答信息流 - 移除黑名单用户的回答、去除广告
    let obj = JSON.parse(body);
    let newData = [];
    obj.data.data.forEach((element) => {
      element["ad_info"] = { data: "" };
      newData.push(element);
    });
    obj.data.data = newData;
    response = { body: JSON.stringify(obj) };
  } else if (
    /^https?:\/\/api\.zhihu\.com\/notifications\/v3\/message/.test(url)
  ) {
    // 消息页 - 折叠官方消息、屏蔽营销消息
    let obj = JSON.parse(body);
    let newItems = [];
    for (let item of obj["data"]) {
      if (item["detail_title"] === "官方帐号消息") {
        let unread_count = item["unread_count"];
        if (unread_count > 0) {
          item["content"]["text"] = "未读消息" + unread_count + "条";
        } else {
          item["content"]["text"] = "全部消息已读";
        }
        item["is_read"] = true;
        item["unread_count"] = 0;
        newItems.push(item);
      } else if (item["detail_title"] !== "活动助手") {
        newItems.push(item);
      }
    }
    obj["data"] = newItems;
    response = { body: JSON.stringify(obj) };
  } else if (
    /^https?:\/\/api\.zhihu\.com\/comment_v5\/(answers|pins|comments?|articles)\/\d+\/(root|child)_comment/.test(
      url
    ) ||
    /^https?:\/\/www\.zhihu\.com\/api\/v\d\/articles\/\d+\/recommendation\?/.test(
      url
    ) ||
    /^https?:\/\/www\.zhihu\.com\/api\/v4\/comment_v5\/answers\/\d+\/abstract_comment\?/.test(
      url
    )
  ) {
    // 评论页及子页面 - 去除黑名单用户发表的评论
    // 文章页 - 去除底部卡片广告
    // 回答页底部评论摘要 - 移除黑名单用户发表的评论
    let obj = JSON.parse(body);
    obj["ad_info"] = {};
    response = { body: JSON.stringify(obj) };
  } else if (
    /^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/.*(entry=(?!(preload-topstory|preload-search|preload-subscription)))?/.test(
      url
    )
  ) {
    // 回答内容优化 - 付费、营销、推广内容文首提醒
    let insertText = "";

    // 付费内容提醒
    if (
      (body.indexOf("查看完整内容") >= 0 ||
        body.indexOf("查看全部章节") >= 0) &&
      body.indexOf("paid") >= 0
    ) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(247 104 104 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #f36;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M821.333333 138.666667c64.8 0 117.333333 52.533333 117.333334 117.333333v149.333333a32 32 0 0 1-32 32 74.666667 74.666667 0 0 0 0 149.333334 32 32 0 0 1 32 32v149.333333c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V618.666667a32 32 0 0 1 32-32 74.666667 74.666667 0 0 0 0-149.333334 32 32 0 0 1-32-32V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666zM428.576 329.994667a32 32 0 0 0-43.733333-2.581334l-1.514667 1.344a32 32 0 0 0-2.581333 43.733334L452.565333 458.666667H405.333333l-1.877333 0.053333A32 32 0 0 0 373.333333 490.666667l0.053334 1.877333A32 32 0 0 0 405.333333 522.666667h80v42.666666H405.333333l-1.877333 0.053334A32 32 0 0 0 373.333333 597.333333l0.053334 1.877334A32 32 0 0 0 405.333333 629.333333h80v42.666667l0.053334 1.877333A32 32 0 0 0 517.333333 704l1.877334-0.053333A32 32 0 0 0 549.333333 672v-42.666667H618.666667l1.877333-0.053333A32 32 0 0 0 650.666667 597.333333l-0.053334-1.877333A32 32 0 0 0 618.666667 565.333333h-69.333334v-42.666666H618.666667l1.877333-0.053334A32 32 0 0 0 650.666667 490.666667l-0.053334-1.877334A32 32 0 0 0 618.666667 458.666667h-47.253334l71.84-86.186667 1.248-1.589333a32 32 0 0 0-50.421333-39.381334L512 430.016l-82.08-98.506667z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #f36;white-space: nowrap;font-weight: 600;">本文为付费内容</span></div><div></div></div></a>';
    }

    // 营销推广提醒
    else if (
      body.indexOf("ad-link-card") >= 0 ||
      body.indexOf("xg.zhihu.com") >= 0 ||
      body.indexOf("营销平台") >= 0
    ) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(8 188 212 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #00bcd4;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M128 765.952q0 26.624 18.432 45.056t45.056 18.432l191.488 0 0 128-254.976 0q-26.624 0-49.664-10.24t-40.448-27.648-27.648-40.448-10.24-49.664l0-637.952q0-25.6 10.24-49.152t27.648-40.448 40.448-27.136 49.664-10.24l701.44 0q26.624 0 49.664 10.24t40.448 27.136 27.648 40.448 10.24 49.152l0 251.904-128 1.024 0-61.44q0-26.624-18.432-45.056t-45.056-18.432l-574.464 0q-26.624 0-45.056 18.432t-18.432 45.056l0 382.976zM990.208 705.536q21.504 18.432 22.016 34.304t-20.992 33.28q-21.504 18.432-51.2 41.472t-60.928 48.128-61.952 49.152-55.296 43.52q-26.624 20.48-43.52 15.36t-16.896-31.744q1.024-16.384 0-40.448t-1.024-41.472q0-19.456-10.752-24.064t-31.232-4.608q-21.504 0-39.936-0.512t-35.84-0.512-36.352-0.512-41.472-0.512q-9.216 0-19.968-2.048t-19.456-7.168-14.336-15.36-5.632-27.648l0-80.896q0-31.744 15.36-42.496t48.128-10.752q30.72 1.024 61.44 1.024t71.68 1.024q29.696 0 46.08-5.12t16.384-25.6q-1.024-14.336 0.512-35.328t1.536-37.376q0-26.624 14.336-33.28t36.864 10.752q22.528 18.432 52.736 43.008t61.952 50.688 62.976 51.2 54.784 44.544z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #00bcd4;white-space: nowrap;font-weight: 600;">本文含有营销推广</span></div><div></div></div></a>';
    }

    // 购物推广提醒
    else if (body.indexOf("mcn-link-card") >= 0) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(8 188 212 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #00bcd4;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M346.112 806.912q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM772.096 808.96q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM944.128 227.328q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l21.504 0 21.504 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM867.328 194.56l-374.784 0 135.168-135.168q23.552-23.552 51.712-24.064t51.712 23.04z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #00bcd4;white-space: nowrap;font-weight: 600;">本文含有购物推广</span></div><div></div></div></a>';
    }

    // 彩蛋
    else if (Math.floor(Math.random() * 200) === 7) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(74 162 56 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #619201;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg class="icon" style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M512 85.333333c71.477333 0 159.68 57.546667 229.258667 147.018667C817.845333 330.826667 864 455.978667 864 586.666667c0 211.808-148.501333 352-352 352S160 798.474667 160 586.666667c0-130.688 46.144-255.84 122.741333-354.314667C352.32 142.88 440.522667 85.333333 512 85.333333z m0 64c-48.213333 0-120.096 46.912-178.741333 122.314667C265.109333 359.253333 224 470.762667 224 586.666667c0 175.616 119.050667 288 288 288s288-112.384 288-288c0-115.904-41.109333-227.402667-109.258667-315.018667C632.096 196.234667 560.213333 149.333333 512 149.333333z m-74.666667 522.666667a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m-96-128a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #619201;white-space: nowrap;font-weight: 600;">本文为免费内容</span></div><div></div></div></a>';
    }

    if (insertText !== "") {
      const matchStr = body.match(/(richText[^<]*>)(.)/)[1];
      const start = body.lastIndexOf(matchStr) + matchStr.length;
      response = {
        body: body.slice(0, start) + insertText + body.slice(start)
      };
    }
  } else if (/^https?:\/\/api\.zhihu\.com\/moments_v3\?/.test(url)) {
    // 关注页 - 去广告
    let obj = body.replace(/(\w+"+\s?):\s?(\d{15,})/g, '$1:"$2"');
    let data;
    const settings_remove_stream = true;
    const settings_remove_recommend = true;
    const settings_remove_activity = true;
    data = obj.data.filter((item) => {
      // 转发的想法是否含有黑名单用户
      const isBlackUserPin =
        item.target &&
        item.target["origin_pin"] &&
        item.target["origin_pin"].author;
      // 是否为流媒体
      const isStream =
        settings_remove_stream && item["target_type"] === "zvideo";
      // 是否为推荐关注用户
      const isRecommend =
        settings_remove_recommend && item.type === "recommend_user_card_list";
      // 是否为关注的问题有新动态
      const isActivity =
        settings_remove_activity && item.type === "message_activity_card";
      return !(isBlackUserPin || isStream || isRecommend || isActivity);
    });
    obj["data"] = data;
    response = { body: JSON.stringify(obj) };
  } else if (
    /^https?:\/\/api\.zhihu\.com\/topstory\/hot-lists(\?|\/)/.test(url)
  ) {
    // 热榜页 - 去广告
    let obj = JSON.parse(body);
    if (obj["data"]) {
      obj["data"] = obj["data"].filter((e) => {
        return (
          e["type"] === "hot_list_feed" || e["type"] === "hot_list_feed_video"
        );
      });
    }
    response = { body: JSON.stringify(obj) };
  } else if (/^https?:\/\/api\.zhihu\.com\/search\/preset_words\?/.test(url)) {
    // 搜索页 - 去除预置广告
    let obj = JSON.parse(body);
    if (obj.hasOwnProperty("preset_words") && obj["preset_words"]["words"]) {
      obj["preset_words"]["words"] = obj["preset_words"]["words"].filter(
        (element) => {
          return element["type"] !== "ad";
        }
      );
      response = { body: JSON.stringify(obj) };
    }
  }
  $done({ response });
}

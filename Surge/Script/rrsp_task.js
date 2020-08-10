const cookie = JSON.parse($persistentStore.read("rrsp_cookie"));
const cookieName = '人人视频'

let signinfo = {};
if (cookie) {
  all();
} else {
  $notification.post("人人视频", "", "签到失败，请获取Cookie后重试！");
  $done();
}

async function all() {
  try {
    await callback();
    await signdaily();
    await signwelfare();
    await getquestion();
    if (week() == "星期日") {
      await openbag();
    }
    if (!signinfo.hasAnswered) {
      await answerquestion();
      await getquestion();
    }
    await openbox(
      "copperbox",
      "铜宝箱",
      "simpleBody=nUuymDQ/BcC2Q6QH21Tjww23J7qtVaDlUN17k1/KY%2BXGDsRVwDRJ8YfjAMraptIL%0D%0A4t2g56kUpDGFsn9z6%2BofyiL5QwfBYZBZOTw9stNt9mc%3D"
    );
    await openbox(
      "silverbox",
      "银宝箱",
      "simpleBody=nUuymDQ/BcC2Q6QH21Tjww23J7qtVaDlUN17k1/KY%2BXGDsRVwDRJ8YfjAMraptIL%0D%0ADPPhFllL7eBnJs52RODWxxe9rquyWdYcDcbyirN6KiE%3D"
    );
    await openbox(
      "goldenbox",
      "金宝箱",
      "simpleBody=3abxJMn7LwEdH8u1Xpe2qN6AtFpDhBrmviLyoU%2BunKwnS1IGS7DIfS0HiKtt03G0%0D%0A/zVCARFyXUFFrOxLRrgAS4m/u4BiQYWJzTUeUqLAFZk%3D"
    );
    await getinfo()
    showmsg();
    $done();
  } catch (e) {
    console.log(`签到失败: ${e}`);
    $done();
  }
}

function callback() {
  return new Promise((resolve, reject) => {
    let arr = {
      growthRecordDtos: [
        {
          userId: cookie.user,
          clientVersion: "4.6.1",
          deviceId: cookie.device,
          playDuration: rd(),
          clientType: "ios_rrsp_jzsp",
          objId: an(),
          type: "season",
          playTime: tt()
        }
      ]
    };
    let url = {
      url: "https://api.rr.tv/constant/growthCallback",
      headers: {
        Host: "api.rr.tv",
        clientVersion: "4.6.1",
        clientType: "ios_rrsp_jzsp",
        "User-Agent": "PUClient/4.6.1 (iPhone; iOS 13.4.1; Scale/2.00)",
        Connection: "keep-alive",
        token: cookie.token,
        "Accept-Language": "zh-Hans-CN;q=1",
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br"
      },
      body:
        "growthStr=" + escape(JSON.stringify(arr)) + "&token=" + cookie.token
    };
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo.callback = JSON.parse(data);
        resolve();
      } catch (e) {
        $notification.post("人人视频", `今日观影: 失败`, `说明: ${e}`);
        resolve();
      }
    });
  });
}

function openbag() {
  return new Promise((resolve, reject) => {
    let url = {
      url: "https://api.rr.tv/rrtv-activity/sign/openBag",
      headers: {
        Host: "api.rr.tv",
        clientVersion: "4.6.1",
        clientType: "ios_rrsp_jzsp",
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.6.1",
        Connection: "keep-alive",
        token: cookie.token,
        "Accept-Language": "zh-cn",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept-Encoding": "gzip, deflate, br",
        Referer: "https://mobile.rr.tv/",
        Origin: "https://mobile.rr.tv"
      }
    };
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo.openbag = JSON.parse(data);
        resolve();
      } catch (e) {
        $notification.post("人人视频", `每周抽奖: 失败`, `说明: ${e}`);
        resolve();
      }
    });
  });
}

function signdaily() {
  return new Promise((resolve, reject) => {
    let url = {
      url: "https://api.rr.tv/rrtv-activity/sign/sign",
      headers: {
        Host: "api.rr.tv",
        clientVersion: "4.6.1",
        clientType: "ios_rrsp_jzsp",
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.6.1",
        Connection: "keep-alive",
        token: cookie.token,
        "Accept-Language": "zh-cn",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept-Encoding": "gzip, deflate, br",
        Referer: "https://mobile.rr.tv/",
        Origin: "https://mobile.rr.tv"
      }
    };
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo.signdaily = JSON.parse(data);
        resolve();
      } catch (e) {
        $notification.post("人人视频", `每日签到: 失败`, `说明: ${e}`);
        resolve();
      }
    });
  });
}

function signwelfare() {
  return new Promise((resolve, reject) => {
    let url = {
      url: "https://api.rr.tv/dailyWelfare/getWelfare",
      headers: {
        Host: "api.rr.tv",
        clientVersion: "4.6.1",
        clientType: "ios_rrsp_jzsp",
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.6.1",
        Connection: "keep-alive",
        token: cookie.token,
        "Accept-Language": "zh-cn",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept-Encoding": "gzip, deflate, br",
        Referer: "https://mobile.rr.tv/",
        Origin: "https://mobile.rr.tv"
      }
    };
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo.signwelfare = JSON.parse(data);
        resolve();
      } catch (e) {
        $notification.post("人人视频", `每日经验: 失败`, `说明: ${e}`);
        resolve();
      }
    });
  });
}

function getinfo() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://api.rr.tv/user/profile`,
      headers: { token: cookie.token }
    };
    url.headers['clientType'] = `ios_rrsp_jzsp`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Connection'] = `keep-alive`
    url.headers['clientVersion'] = `4.3.5`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded; charset=UTF-8`
    url.headers['Origin'] = `https://mobile.rr.tv`
    url.headers['Referer'] = `https://mobile.rr.tv/`
    url.headers['Accept'] = `application/json, text/plain, */*`
    url.headers['Host'] = `api.rr.tv`
    url.headers['Accept-Language'] = `zh-cn`
    url.headers['Content-Length'] = `0`
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.3.5'
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo.userinfo = JSON.parse(data)
        resolve()
      } catch (e) {
        $notification.post(cookieName, `获取会员信息: 失败`, `说明: ${e}`)
        console.log(`❌ ${cookieName} getinfo - 获取会员信息失败: ${e}`)
        console.log(`❌ ${cookieName} getinfo - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function getquestion() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://api.rr.tv/v3plus/question/getQuestion`,
      headers: { token: cookie.token }
    };
    url.headers["clientType"] = "web";
    url.headers["Accept-Encoding"] = `gzip, deflate, br`;
    url.headers["Connection"] = `keep-alive`;
    url.headers["clientVersion"] = "3.6.0";
    url.headers[
      "Content-Type"
    ] = `application/x-www-form-urlencoded; charset=UTF-8`;
    url.headers["Origin"] = `https://mobile.rr.tv`;
    url.headers["Referer"] = "http://mobile.rr.tv/appWeb/";
    url.headers["Accept"] = `application/json, text/plain, */*`;
    url.headers["Host"] = `api.rr.tv`;
    url.headers["Accept-Language"] = `zh-cn`;
    url.headers["User-Agent"] =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.6.1";
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo.question = JSON.parse(data);
        signinfo.questionopts = {};
        for (opt of signinfo.question.data.question.optionViewList) {
          signinfo.questionopts[opt.id] = opt;
          if (!signinfo.answeropt) signinfo.answeropt = opt;
          else
            signinfo.answeropt =
              opt.answererCount > signinfo.answeropt.answererCount
                ? opt
                : signinfo.answeropt;
        }
        signinfo.hasAnswered = signinfo.question.data.question.hasAnswered;
        if (signinfo.hasAnswered) {
          signinfo.selectId = signinfo.question.data.question.selectId;
          signinfo.isRight = signinfo.questionopts[signinfo.selectId].isRight;
        }
        resolve();
      } catch (e) {
        $notification.post("人人视频", `获取问题: 失败`, `说明: ${e}`);
        resolve();
      }
    });
  });
}

function answerquestion() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://api.rr.tv/v3plus/question/answerQuestion`,
      headers: { token: cookie.token }
    };
    url.body = `optionId=${signinfo.answeropt.id}`;
    url.headers["clientType"] = `ios_rrsp_jzsp`;
    url.headers["Accept-Encoding"] = `gzip, deflate, br`;
    url.headers["Connection"] = `keep-alive`;
    url.headers["clientVersion"] = `4.3.5`;
    url.headers[
      "Content-Type"
    ] = `application/x-www-form-urlencoded; charset=UTF-8`;
    url.headers["Origin"] = `https://mobile.rr.tv`;
    url.headers["Referer"] = `https://mobile.rr.tv/`;
    url.headers["Accept"] = `application/json, text/plain, */*`;
    url.headers["Host"] = `api.rr.tv`;
    url.headers["Accept-Language"] = `zh-cn`;
    url.headers["User-Agent"] =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 App/RRSPApp platform/iPhone AppVersion/4.3.5";
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo.answerquestion = JSON.parse(data);
        resolve();
      } catch (e) {
        $notification.post("人人视频", `回答问题: 失败`, `说明: ${e}`);
        resolve();
      }
    });
  });
}

function openbox(boxcode, boxname, body) {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://api.rr.tv/v3plus/taskCenter/openBox`,
      headers: { token: cookie.token }
    };
    url.body = body;
    url.headers["Accept"] = `*/*`;
    url.headers["Accept-Encoding"] = `gzip, deflate, br`;
    url.headers["Accept-Language"] = `zh-Hans-CN;q=1, en-US;q=0.9`;
    url.headers["Connection"] = `keep-alive`;
    url.headers["Content-Type"] = `application/x-www-form-urlencoded`;
    url.headers["Host"] = `api.rr.tv`;
    url.headers[
      "User-Agent"
    ] = `PUClient/4.3.6 (iPhone; iOS 13.3.1; Scale/2.00)`;
    url.headers["clientType"] = `ios_rrsp_jzsp`;
    url.headers["clientVersion"] = `4.3.6`;
    url.headers["deviceMode"] = `iPhone 8`;
    url.headers["p"] = `iOS`;
    $httpClient.post(url, (error, response, data) => {
      try {
        signinfo[boxcode] = JSON.parse(data);
        resolve();
      } catch (e) {
        $notification.post("人人视频", `打开${boxname}: 失败`, `说明: ${e}`);
        resolve();
      }
    });
  });
}

function showmsg() {
  let subTitle = ''
  let detail = ''
  if (signinfo.signdaily) {
    subTitle = `签到: `
    if (signinfo.signdaily.code == '0000' || signinfo.signdaily.code == '8750') {
      subTitle += signinfo.signdaily.code == '0000' ? '成功; ' : ''
      subTitle += signinfo.signdaily.code == '8750' ? '重复; ' : ''
    } else {
      subTitle += '失败; '
    }
  }
  if (signinfo.signwelfare) {
    subTitle += `福利: `
    if (signinfo.signwelfare.code == '0000' || signinfo.signwelfare.code == '8623') {
      subTitle += signinfo.signwelfare.code == '0000' ? '成功; ' : ''
      subTitle += signinfo.signwelfare.code == '8623' ? '重复; ' : ''
    } else {
      subTitle += '失败;'
    }
  }
  if (signinfo.question && signinfo.questionopts) {
    subTitle += `答题: ${signinfo.isRight ? '✅' : '❌'}`
  }

  if (signinfo.userinfo.code == '0000') {
    const levelStr = signinfo.userinfo.data.user.levelStr ? ` (${signinfo.userinfo.data.user.levelStr})` : ``
    detail = `等级: ${signinfo.userinfo.data.user.level}${levelStr}, 银币: ${signinfo.userinfo.data.user.silverCount}`
  } else {
    detail = `编码: ${signinfo.userinfo.code}, 说明: ${signinfo.userinfo.msg}`
  }

  if (signinfo.question.data.question) {
    detail += `\n查看答题详情`
    detail += `\n\n问题: ${signinfo.question.data.question.questionStr}`
    for (key in signinfo.questionopts) detail += `\n选项: ${signinfo.questionopts[key].optionStr}, 回答人数: ${signinfo.questionopts[key].answererCount} (${signinfo.questionopts[key].percent})`
    if (signinfo.selectId) {
      detail += `\n最佳回答: ${signinfo.answeropt.optionStr}`
      detail += `\n我的回答: ${signinfo.questionopts[signinfo.selectId].optionStr}`
      detail += `${signinfo.isRight ? '✅' : '❌'}\n`
    } else {
      detail += `\n最佳回答: ${signinfo.answeropt.optionStr}\n`
    }
  }

  if (signinfo.copperbox) {
    if (signinfo.copperbox.code == '0000') {
      for (box of signinfo.copperbox.data.boxs) detail += `\n铜宝箱: ${box.rewardName} (+${box.rewardNum})`
    } else {
      detail += `\n铜宝箱: ${signinfo.copperbox.msg}`
    }
  }

  if (signinfo.silverbox) {
    if (signinfo.silverbox.code == '0000') {
      for (box of signinfo.silverbox.data.boxs) detail += `\n银宝箱: ${box.rewardName} (+${box.rewardNum})`
    } else {
      detail += `\n银宝箱: ${signinfo.silverbox.msg}`
    }
  }

  if (signinfo.goldenbox) {
    if (signinfo.goldenbox.code == '0000') {
      for (box of signinfo.goldenbox.data.boxs) detail += `\n金宝箱: ${box.rewardName} (+${box.rewardNum})`
    } else {
      detail += `\n金宝箱: ${signinfo.goldenbox.msg}`
    }
  }
  $notification.post(cookieName, subTitle, detail)
}

function rd() {
  return Math.floor(Math.random() * -30 + 10800);
}

function tt() {
  return parseInt(+new Date() / 1000);
}

function an() {
  return Math.floor(Math.random() * 99 + 153300);
}

function week() {
  return "星期" + "日一二三四五六".charAt(new Date().getDay());
}
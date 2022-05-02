/**
 * @ZhouStarStar9527
 * @description 支持多账号
 * @description 入口：京东APP -> 首页 -> 领京豆 -> 双签领豆
 * @description 必须添加重写规则，并手动签到一次，否则无法签到成功
 */
const $ = Env('京东金融双签');

let _log, _desc;
let _beans;

function jdSignIn(cookie) {
  const eventName = '【京东签到】';
  const option = getOption('https://api.m.jd.com/client.action?functionId=signBeanAct&appid=ld', {
    Cookie: cookie,
    Referer: 'https://wqs.jd.com/',
  });

  return new Promise((resolve, reject) => {
    $.get(option, (err, resp, data) => {
      try {
        _data = JSON.parse(data).data;
        if (resp.statusCode === 200 && _data) {
          if (_data.status === '1') {
            _beans += Number(_data.dailyAward.beanAward.beanCount) || 0;
            _log.push(`🟢${eventName}: 获得${_data.dailyAward.beanAward.beanCount}个京豆`);
            _desc.push(`🟢${eventName}`);
          } else if (_data.status === '2') {
            _log.push(`🟡${eventName}: 今天已签到`);
          }
        } else {
          throw err || data;
        }
      } catch (error) {
        error !== data ? _log.push(`🔴${eventName}: ${error}\n${data}`) : _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

function jrSignIn(cookie, signBody) {
  const eventName = '【金融签到】';
  const option = getOption(`https://ms.jr.jd.com/gw/generic/hy/h5/m/jrSign?_=${ts()}&${signBody}`, {
    Cookie: cookie,
    'User-Agent': userAgent('jr'),
    Accept: 'application/json',
    Origin: 'https://member.jr.jd.com',
    Referer:
      'https://member.jr.jd.com/activity/sign/v5/indexV2.html?channelLv=shuangqian&sid=dace0970cf046301400564834161022w',
  });

  return new Promise((resolve, reject) => {
    $.get(option, (err, resp, data) => {
      try {
        if (
          resp.statusCode === 200 &&
          JSON.parse(data).resultCode === 0 &&
          JSON.parse(data).resultData.resBusiCode === 0
        ) {
          _log.push(`🟢${eventName}: 数据加密，故这里不知道具体获取多少金贴，请到京东金融App查看`);
          _desc.push(`🟢${eventName}`);
        } else {
          throw err || data;
        }
      } catch (error) {
        error !== data ? _log.push(`🔴${eventName}: ${error}\n${data}`) : _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

function jdJrDoubleSignReward(cookie) {
  const eventName = '【京融双签领奖】';
  const option = getOption(
    `https://nu.jr.jd.com/gw/generic/jrm/h5/m/process?_=${ts()}&reqData=%7B%22actCode%22%3A%22F68B2C3E71%22%2C%22type%22%3A4%2C%22frontParam%22%3A%7B%22belong%22%3A%22jingdou%22%7D%2C%22riskDeviceParam%22%3A%22%7B%5C%22fp%5C%22%3A%5C%229847ae780d67b91a200f87e5b0307ead%5C%22%2C%5C%22eid%5C%22%3A%5C%22PK7BGV22IJOGPW3RIR37RVVQAOL5MA5WG546B63HZIG7QIRJM4XZZHFT2UYT57ZL5EOKRLPDA3F6NWU2HIGXIVDUFY%5C%22%2C%5C%22sdkToken%5C%22%3A%5C%22%5C%22%2C%5C%22sid%5C%22%3A%5C%22%5C%22%7D%22%7D`,
    {
      Cookie: cookie,
      Referer: 'https://m.jr.jd.com/integrate/signin/index.html',
      Origin: 'https://m.jr.jd.com',
      Accept: 'application/json',
    }
  );

  return new Promise((resolve, reject) => {
    $.post(option, (err, resp, data) => {
      try {
        if (
          resp.statusCode === 200 &&
          JSON.parse(data).resultData &&
          JSON.parse(data).resultData.data &&
          JSON.parse(data).resultData.data.businessMsg === '成功'
        ) {
          bean = JSON.parse(data).resultData.data.businessData.businessData.awardListVo[0].count;
          _beans += bean;
          _log.push(`🟢${eventName}: 获得${bean}个京豆`);
          _desc.push(`🟢${eventName}`);
        } else {
          throw err || data;
        }
      } catch (error) {
        error !== data ? _log.push(`🔴${eventName}: ${error}\n${data}`) : _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
      } finally {
        resolve();
      }
    });
  });
}

function jdJrDoubleSignInfo(cookie) {
  const eventName = '【京融双签状态】';
  const option = getOption(
    `https://nu.jr.jd.com/gw/generic/jrm/h5/m/process?_=${ts()}&reqData=%7B%22actCode%22%3A%22F68B2C3E71%22%2C%22type%22%3A9%2C%22frontParam%22%3A%7B%22channel%22%3A%22JD%22%2C%22belong%22%3A%22jingdou%22%7D%7D`,
    {
      Cookie: cookie,
      Referer: 'https://m.jr.jd.com/integrate/signin/index.html',
      Origin: 'https://m.jr.jd.com',
      Accept: 'application/json',
    }
  );

  return new Promise((resolve, reject) => {
    $.post(option, (err, resp, data) => {
      try {
        if (resp.statusCode === 200 && JSON.parse(data).resultData && JSON.parse(data).resultData.code === 200) {
          signStatus = JSON.parse(data).resultData.data.businessData;
          _log.push(
            `🟢${eventName}: ${signStatus.signInJd ? '✓ 京东签到完成' : '⨉ 京东签到未完成'} ${
              signStatus.signInJr ? '✓ 金融签到完成' : '⨉ 金融签到未完成'
            } ${signStatus.get ? '✓ 签礼包已领' : '⨉ 双签礼包未领'} `
          );
          resolve(signStatus);
        } else {
          throw err || data;
        }
      } catch (error) {
        error !== data ? _log.push(`🔴${eventName}: ${error}\n${data}`) : _log.push(`🔴${eventName}: ${error}`);
        _desc.push(`🔴${eventName}`);
        resolve();
      }
    });
  });
}

async function main(cookieObj) {
  _beans = 0;
  _log = [`\n++++++++++${cookieObj.nickname}++++++++++\n`];
  _desc = [];

  if (!cookieObj.jrSignBody) {
    throw '请按照重写规则说明手动完成一次京东金融中签到';
  }

  const signStatus = await jdJrDoubleSignInfo(cookieObj.cookie);

  if (signStatus) {
    if (!signStatus.get) {
      if (signStatus.signInJd && signStatus.signInJr && !signStatus.double_sign_status) {
        await jdJrDoubleSignReward(cookieObj.cookie);
        await randomWait();
      } else {
        if (!signStatus.signInJd) {
          await jdSignIn(cookieObj.cookie);
          await randomWait();
        }
        if (!signStatus.signInJr) {
          await jrSignIn(cookieObj.cookie, cookieObj.jrSignBody);
          await randomWait();
        }
        await jdJrDoubleSignReward(cookieObj.cookie);
        await randomWait();
      }

      const [nickname, totalBeans] = await getUserInfo(cookieObj.cookie);
      $.subt = `${nickname}, 京豆: ${totalBeans}(+${_beans})`;
    } else {
      $.subt = `${cookieObj.nickname}，今日已完成 ~`;
    }
  } else {
    throw '获取京融双签状态失败';
  }
}

!(async () => {
  let cookieObjs = $.getdata('GLOBAL_JD_COOKIES');
  const specifyUserId = $.getdata('GLOBAL_SPECIFY_USER_ID');

  if (cookieObjs && JSON.parse(cookieObjs).length > 0) {
    cookieObjs = JSON.parse(cookieObjs);
    if (specifyUserId && specifyUserId.indexOf('jd_') !== -1) {
      // 实现一次执行一个账号
      cookieObjs = cookieObjs.filter((cookie) => cookie.userId === specifyUserId);
    }
    let i = 1;
    for (const cookieObj of cookieObjs) {
      try {
        await main(cookieObj);
      } catch (error) {
        _log.push(`🔴${error}`);
        _desc.push(`🔴${error}`);
        $.subt = `${cookieObj.nickname}`;
      } finally {
        $.log(..._log);
        $.desc = _desc.join('');
        $.msg($.name, $.subt || '', $.desc);
      }

      // 切换账号等待至少5秒
      if (i < JSON.parse(cookieObjs).length) {
        await randomWait(5000);
      }
      i++;
    }
  } else {
    throw '请先获取会话';
  }
})()
  .catch((e) => {
    $.subt = '🔴 脚本执行异常';
    $.msg($.name, $.subt, e);
    $.logErr(e);
  })
  .finally(() => {
    $.done();
  });

function getOption(url, headers, body = '') {
  // 默认的option
  let _headers = {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-cn',
    Connection: 'keep-alive',
    Host: url.match(/\/\/([\w\.]*)/)[1],
    'User-Agent': userAgent('jd'),
  };

  return {
    url: url + (body ? `&body=${encodeURIComponent(JSON.stringify(body))}` : ''),
    headers: Object.assign({}, _headers, headers),
  };
}

function userAgent(app) {
  // 获取不同app的user-agent
  return {
    jd: 'jdapp;iPhone;10.5.2;;;M/5.0;JDEbook/openapp.jdreader;appBuild/168069;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CQZwZtO3CzGzYtC0DtG1YJG1DJGmY2HuYWHsDzdrENVwDJGyZNvwEK%3D%3D%22%2C%22sv%22%3A%22CJGkDq%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1651124892%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;',
    jx: 'jdpingou;iPhone;5.25.0;appBuild/100934;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/4;pap/JA2019_3111789;supportJDSHWK/1;ef/1;ep/%7B%22ciphertype%22:5,%22cipher%22:%7B%22ud%22:%22ENO0ZNunDtc0CwPtCtHwZQPtDtU2DWUnYtO0Dzu5DwDsZWGyYzTsZq==%22,%22bd%22:%22YXLmbQU=%22,%22iad%22:%22%22,%22sv%22:%22CJGkDq==%22%7D,%22ts%22:1651399595,%22hdid%22:%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=%22,%22version%22:%221.0.3%22,%22appname%22:%22com.360buy.jdpingou%22,%22ridx%22:-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    safari:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    jr: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/application=JDJR-App&deviceId=5383333424033364d243836433d243643373-d293831473d2938334544313542464145403&eufv=1&clientType=ios&iosType=iphone&clientVersion=6.3.40&HiClVersion=6.3.40&isUpdate=0&osVersion=14.6&osName=iOS&screen=896*414&src=App Store&netWork=1&netWorkType=1&CpayJS=UnionPay/1.0 JDJR&stockSDK=stocksdk-iphone_4.1.0&sPoint=MTAwMDcjI2RpYW9xaTQwMDI%3D&jdPay=(*#@jdPaySDK*#@jdPayChannel=jdfinance&jdPayChannelVersion=6.3.40&jdPaySdkVersion=4.00.35.01&jdPayClientName=iOS*#@jdPaySDK*#@)',
  }[app];
}

// prettier-ignore
function ts(){return new Date().getTime()}
// prettier-ignore
function randomWait(min) { randomTime = ((Math.random() / 5) * 10000 + (min || 1000)).toFixed(0); _log.push(`⏳休息${randomTime}ms`); return new Promise((resolve) => setTimeout(resolve, randomTime)) }
// prettier-ignore
function getUserInfo(cookie){const eventName='【用户信息】';const option={url:'https://wq.jd.com/user/info/QueryJDUserInfo?g_login_type=1&sceneval=2',headers:{Accept:'*/*','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-cn',Host:'wq.jd.com',Cookie:cookie,Connection:'keep-alive',Referer:'https://wqs.jd.com/','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',},};return new Promise((resolve,reject)=>{$.get(option,(err,resp,data)=>{try{if(resp.statusCode===200&&JSON.parse(data).retcode===0&&JSON.parse(data).base){const nickname=JSON.parse(data).base.nickname;const totalBeans=JSON.parse(data).base.jdNum;_log.push(`🟢${eventName}:${nickname}当前有${totalBeans}个京豆`);resolve([nickname,totalBeans])}else{throw err||data;}}catch(error){error!==data?_log.push(`🔴${eventName}:${error}\n${data}`):_log.push(`🔴${eventName}:${error}`);_desc.push(`🔴${eventName}`);resolve([])}})})}
// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } isShadowrocket() { return "undefined" != typeof $rocket } isStash() { return "undefined" != typeof $environment && $environment["stash-version"] } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: i, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: i, statusCode: r, headers: o, rawBody: h }, s.decode(h, this.encoding)) }, t => { const { message: i, response: r } = t; e(i, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { let i = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...o } = t; this.got[s](r, o).then(t => { const { statusCode: s, statusCode: r, headers: o, rawBody: h } = t; e(null, { status: s, statusCode: r, headers: o, rawBody: h }, i.decode(h, this.encoding)) }, t => { const { message: s, response: r } = t; e(s, r, r && i.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, i = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": i } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

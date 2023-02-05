/*
脚本名称：京东 WSKEY
更新时间：2023-01-30
使用方法：打开 京东App --> 消息中心（右上角）获取京东 WSKEY。
注意事项：脚本抓取的WSKEY默认自动提交到服务器（自动上车），可通过BoxJs设置关闭自动提交功能。
重写订阅：https://raw.githubusercontent.com/FoKit/Scripts/main/rewrite/get_jd_wskey.sgmodule
BoxJs 订阅：https://raw.githubusercontent.com/FoKit/Scripts/main/boxjs/fokit.boxjs.json

================Quantumult X配置=================
[rewrite_local]
^https:\/\/api\-dd\.jd\.com\/client\.action\?functionId=getSessionLog url script-request-header https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/get_jd_wskey.js

[MITM]
hostname = api-dd.jd.com

====================Surge配置====================
[Script]
京东 WSKEY = type=http-request,pattern=^https:\/\/api\-dd\.jd\.com\/client\.action\?functionId=getSessionLog,requires-body=0,max-size=0,timeout=1000,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/get_jd_wskey.js,script-update-interval=0

[MITM]
hostname = %APPEND% api-dd.jd.com

====================Loon配置=====================
[Script]
http-request ^https:\/\/api\-dd\.jd\.com\/client\.action\?functionId=getSessionLog tag=京东 WSKEY, script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/get_jd_wskey.js,requires-body=0

[MITM]
hostname = api-dd.jd.com

*/

const $ = new Env('京东 WSKEY');
const WSKEY = $request.headers['Cookie'] || $request.headers['cookie'];
const pin = encodeURIComponent(WSKEY.match(/pin=([^=;]+?);/)[1]);
const key = WSKEY.match(/wskey=([^=;]+?);/)[1];
$.bot_token = $.getdata('WSKEY_TG_BOT_TOKEN') || '';
$.chat_ids = $.getdata('WSKEY_TG_USER_ID') || [];
$.autoUpload = $.getdata('WSKEY_AUTO_UPLOAD') || '';

!(async () => {
  if (!pin || !key) {
    $.msg('⚠️ WSKEY 获取失败');
    $.done();
  }
  const cookie = `wskey=${key};pt_pin=${pin};`;
  const userName = pin;
  const decodeName = decodeURIComponent(userName);
  let cookiesData = JSON.parse($.getdata('wskeyList') || '[]');
  let updateIndex;
  const existCookie = cookiesData.find((item, index) => {
    const ck = item.cookie;
    const Account = ck ? ck.match(/pin=.+?;/) ? ck.match(/pin=(.+?);/)[1] : null : null;
    const verify = userName === Account;
    if (verify) {
      updateIndex = index;
      if (ck !== cookie) {
        $.needUpload = true;
      }
    }
    return verify;
  });
  if (existCookie) {
    cookiesData[updateIndex].cookie = cookie;
  } else {
    cookiesData.push({ userName: decodeName, cookie: cookie, });
    $.needUpload = true;
  }

  if ($.autoUpload !== "false") {  // 自动上传
    if ($.needUpload) {
      if (typeof $.chat_ids != 'object') {
        $.chat_ids = JSON.parse($.chat_ids);
      }
      if ($.chat_ids.length < 1) {
        $.log('Use Cloudflare Worker...\n')
        await updateCookie_1(cookie, chat_id = []);
      } else {
        for (const chat_id of $.chat_ids) {
          $.log('Use Cloudflare Worker...\n')
          let update = await updateCookie_1(cookie, chat_id);
          if ($.bot_token && !update) {
            $.log('Use Telegram API...\n')
            await updateCookie_2(cookie, chat_id);
          }
        }
      }
      if ($.success) {
        $.setdata(JSON.stringify(cookiesData, null, 2), 'wskeyList');
      } else {
        $.subt = '⚠️ WSKEY 提交失败。';
        $.msg($.subt, cookie);
      }
    } else {
      $.msg('⚠️ 无需更新 WSKEY。', cookie);
    }
  } else {  // 本地使用
    $.subt = '🎉 WSKEY 获取成功。';
    $.msg($.subt, cookie);
  }
  return;
})().catch((e) => $.logErr(e)).finally(() => $.done());

function updateCookie_1(wskey, chat_id) {
  url = "https://api.fokit.cn/submit";
  if ($.bot_token) {
    url += `?bot_token=${$.bot_token}`;
  };
  if (chat_id != []) {
    url += `&chat_id=${chat_id}`;
  };
  let opt = {
    url,
    body: `text=${wskey}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    timeout: 10000,
  };
  return new Promise(resolve => {
    $.post(opt, async (err, resp, data) => {
      try {
        if (err) {
          $.log(`${JSON.stringify(err)}\n`);
          $.success = false;
        } else {
          data = JSON.parse(data);
          if (data.ok) {
            $.subt = '🎉 WSKEY 提交成功。';
            $.msg($.subt, wskey);
            $.success = true;
          } else if (data.error_code === 400) {
            $.subt = '⚠️ Telegram bot 无发送消息权限。';
            $.msg($.subt, wskey);
            $.success = false;
          } else if (data.error_code === 401) {
            $.subt = '⚠️ Telegram bot token 填写错误。';
            $.msg($.subt, wskey);
            $.success = false;
          } else {
            $.log("请求失败：", typeof data, $.toStr(data));
            $.success = false;
          }
        }
      } catch (error) {
        $.logErr(error);
      } finally {
        resolve($.success);
      }
    })
  })
}

function updateCookie_2(wskey, chat_id) {
  return new Promise((resolve) => {
    const opts = {
      url: `https://api.telegram.org/bot${$.bot_token}/sendMessage`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `chat_id=${chat_id}&text=${wskey}&disable_web_page_preview=true`,
    };
    $.post(opts, (err, resp, data) => {
      try {
        if (err) {
          $.log(`${JSON.stringify(err)}\n`);
          $.success = false;
        } else {
          data = JSON.parse(data);
          if (data.ok) {
            $.subt = '🎉 WSKEY 提交成功。';
            $.msg($.subt, wskey);
            $.success = true;
          } else if (data.error_code === 400) {
            $.subt = '⚠️ Telegram bot 无发送消息权限。';
            $.msg($.subt, wskey);
            $.success = false;
          } else if (data.error_code === 401) {
            $.subt = '⚠️ Telegram bot token 填写错误。';
            $.msg($.subt, wskey);
            $.success = false;
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve($.success);
      }
    });
  });
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,n]=i.split("@"),a={url:`http://${n}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),n=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(n);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t&&t.error||"UndefinedError"));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:n}=t,a=s.decode(n,this.encoding);e(null,{status:i,statusCode:r,headers:o,rawBody:n,body:a},a)},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t&&t.error||"UndefinedError"));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:n}=t,a=i.decode(n,this.encoding);e(null,{status:s,statusCode:r,headers:o,rawBody:n,body:a},a)},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}queryStr(t){let e="";for(const s in t){let i=t[s];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),e+=`${s}=${i}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.isSurge()||this.isQuanX()||this.isLoon()?$done(t):this.isNode()&&process.exit(1)}}(t,e)}

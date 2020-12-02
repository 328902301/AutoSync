// 互助池里的互助码 每个月10 20 30号清空一次
// tks: https://github.com/whyour/hundun/blob/master/quanx/shareCode-auto.js
// 不在更新，使用上面的js更友好
const $ = API("0201",true);
//种豆得豆
const beanURL = 'http://api.turinglabs.net/api/v1/jd/bean/create/'
//农场
const farmURL = 'http://api.turinglabs.net/api/v1/jd/farm/create/'
//萌宠物
const petURL = 'http://api.turinglabs.net/api/v1/jd/pet/create/'
//东东工厂
const ddfactoryURL = 'http://api.turinglabs.net/api/v1/jd/ddfactory/create/'
//京喜工厂
const jxfactoryURL = 'http://api.turinglabs.net/api/v1/jd/jxfactory/create/'


//农场互助码
const farmCode0 = 'b35c3b33225d315bc4510'
const farmCode1 ='f15344332acf576'
//萌宠的互助码
const petCode0 = 'MTE1NDA11223wMzQxMjA5MTU='
const petCode1 = 'MTAxO22333k4ODY4MQ=='
//种豆得豆的
const beanCode0 = 'gkk433xxddeddbavnyhehdci'
const beanCode1 ='nuxd2i4axqwddsedjj6whp4'
//东东工厂
const ddfactory0 = 'P04zesfesdds9LkQ'
const ddfactory1 ='P04z54Xssccde9CNnojw'
//京喜工厂
const jxfactory0 = 'Raaxeedds7xwfLQ=='
const jxfactory1 ='tvwIssccsU5yerA=='
//京喜工厂厂长
//const jxgoldmanager0 = ''

join(beanURL, beanCode0, "种豆0")
join(beanURL, beanCode1, "种豆1")
join(farmURL, farmCode0, "农场0")
join(farmURL, farmCode1, "农场1")
join(petURL, petCode0, "萌宠0")
join(petURL, petCode1, "萌宠1")
join(ddfactoryURL, ddfactory0, "东东工厂0")
join(ddfactoryURL, ddfactory1, "东东工厂1")
join(jxfactoryURL, jxfactory0, "京喜工厂0")
join(jxfactoryURL, jxfactory1, "京喜工厂1")

function join(url,code,tip){
    $.http.get(url + code + "/").then(res => {
        $.notify(tip + ":" + JSON.parse(res.body).message)
        $done()
    })
}




// prettier-ignore
/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, o = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !o, isJSBox: o, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: o, isScriptable: i, isNode: n } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const a = e.baseURL; a && !r.test(l.url || "") && (l.url = a ? a + l.url : l.url); const h = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || o || n) f = new Promise((e, t) => { (n ? require("request") : $httpClient)[u.toLowerCase()](l, (s, o, i) => { s ? t(s) : e({ statusCode: o.status || o.statusCode, headers: o.headers, body: i }) }) }); else if (i) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const $ = h ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${h} ms`)), h) }) : null; return ($ ? Promise.race([$, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: o, isSurge: i, isNode: n, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (n) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (o || i) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), n) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (o || i) && $persistentStore.write(e, this.name), n && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), i || o) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); n && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), i || o ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : n ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), i || o) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); n && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", a = {}) { const h = a["open-url"], c = a["media-url"]; if (s && $notify(e, t, l, a), i && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: h }), o) { let s = {}; h && (s.openUrl = h), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (n || u) { const s = l + (h ? `\n点击跳转: ${h}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}] LOG: ${e}`) } info(e) { console.log(`[${this.name}] INFO: ${e}`) } error(e) { console.log(`[${this.name}] ERROR: ${e}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { s || o || i ? $done(e) : n && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } }(e, t) }
/*****************************************************************************/

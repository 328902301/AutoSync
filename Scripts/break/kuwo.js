/*
地址：https://github.com/nameking77/Qx/blob/main/rewrite/kw.js
脚本功能：完美解锁酷我音乐
脚本作者：king
下载地址：https://is.gd/CWqKMX
更新时间：2022.8.16
脚本频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
代码重构:这版是 最完美！！！的酷我解锁
当前版本:10.2.8

[rewrite_local]
# 完美解锁酷我音乐
^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* url script-response-body https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/kw.js

[mitm]
hostname = *.kuwo.cn, *.lrts.me
*/

//  Progcessed By JSDec in 0.05s
//  JSDec - JSDec.js.org

const url = $request.url;
const method = $request.method;
const modKey =
  "Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSNQQVJUI5lv72QNZSN43Pj/qdzatHQP4Pp/H1YxyP36rv3qBcnnJy/55YouIczRc3eJjXExRgo54qdyTYRMYoS9GzNn/edR3hSNnMn9PnElBCfZhkL0R5kZ9JBFCM3vNOy7Cnp6RVyAG0GFHv/g2q1yqkJxibyDro5nlnnvHjhZrsOvSvTXI1BBUlQjGoRqqCTDUvHLoiNwWMoKKfxtswWQiXjoQ6mL5dazxjUsbsHzC1N8YNMVtzf8gBryr3nMWS44wyUpi1/0WhGTRW1wsCllO1DB24+ibTFH/yftWN+/apM9vbQAkc/J+aFy/01plK7rsGNwWYYKG0sr6CS8dGQzy0On6aFo07hiU+wjUEFSVCOf/wKzzX5Cn/OLMKeVa1BPDxV5tm39vCrsxIG6T29VHWx8ck93S/nXCm2dHfojuLySZKJ50B1FaN5uFIY+LA1RbO/0sL+CoSJhoNOLibzt75c5dleW+lbwxLAAdBh5AFq4Z1Uj8bPjm5mHcGWQuBAyZIO+ie8wP4yvWwQFf1ENJiNQQVJUIzwCo22cpAtoAzYZWm3XFPfSlov4G15JGaaHL2X5FG5BTeUwwbBiQfwUpcb6oT8dbIKh2SsUZCeJZW43lLI0UIo9u3y1+P4GMtOKEZ7Sx0aQ3ewknthU2tpL0gnykFtiEtKBxcfHjJEen158zVXrbxxC0W35SmaYOOwgAmEMfxwHI1BBUlQjhVUHnBabnJcnmXCICcyUBglrZkXcNLwg91p4889vKFTLlzROHTt20UzjfKWsNK3U8pYgKYXPbQtSzIuRheEEQDFhLvEhIGKaB6yDoacDLJZ0jgFRIKKFBkbK0VE4nIABi1qgQOXvq1sG4QeupjfEWYqMX8EyyqPHrsDiCltAF1wjUEFSVCNybeUusnxJF2zswj8xQtfPiwfDj3TwKWxKXCmkheqHy7/0Qpyc84xWvq+YXktsU97wUZLHrgJmARudJmQNEwAweIdHMafcwreBy731z6kGLojy5TLgTN7XSm5Ar+hgOW+1ZwkWLyrVvaCdO/8/zdYl1w/PQUCs6dw0ThIeahwjpQ==";

if (url.includes("/a.p") && method == "POST") {
  let body = $response.body
    .replace(/"playright":\d+/g, '"playright":1')
    .replace(/"downright":\d+/g, '"downright":1')
    .replace(/"policytype":\d+/g, '"policytype":3')
    .replace(/"policy":\d+/g, '"policy":5');
  $done({ body });
} else if (url.includes("/a.p") && url.includes("getvip")) {
  let obj = JSON.parse(body);
  obj.packs.end = 0x790e11d00;
  obj.packs.bought_vip = 0x1;
  obj.packs.type = 0x1;
  obj.packs.period = 0x1f;
  obj.packs.bought_vip_end = 0x790e11d00;
  body = JSON.stringify(obj);
  $done({ body });
} else {
  $done({});
}

if (url.includes("/vip/enc/user/vip") && method == "GET") {
  let body = modKey;
  $done({ body });
}

if (url.includes("/vip/v2/user/vip") && url.includes("op=ui")) {
  let obj = JSON.parse(body);
  obj.data.vipIcon = "https://image.kuwo.cn/fe/f2d09ac0-b959-404f-86fa-dc65c715c0e96.png";
  obj.data.iconJumpUrl =
    "http://vip1.kuwo.cn/vip/vue/anPay/pay/index.html?pageType=avip&MBOX_WEBCLOSE=1&FULLHASARROW=1";
  obj.data.growthValue = "21600";
  obj.data.vipTag = "VIP6";
  obj.data.vipOverSeasExpire = "0";
  obj.data.time = "1659582730304";
  obj.data.goSvipPage = "1";
  obj.data.isNewUser = "1";
  obj.data.vipmIcon = "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png";
  obj.data.svipIcon = "https://image.kuwo.cn/fe/f2d09ac0-b959-404f-86fa-dc65c715c0e96.png";
  obj.data.vipmExpire = "32495443200000";
  obj.data.biedSong = "0";
  obj.data.luxuryIcon = "https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png";
  obj.data.userType = "3";
  obj.data.isYearUser = "2";
  obj.data.vip3Expire = "0";
  obj.data.experienceExpire = "0";
  obj.data.luxAutoPayUser = "2";
  obj.data.biedAlbum = "1";
  obj.data.vipLuxuryExpire = "32495443200000";
  obj.data.vipmAutoPayUser = "2";
  obj.data.svipAutoPayUser = "2";
  obj.data.vipExpire = "32495443200000";
  obj.data.svipExpire = "32495443200000";
  body = JSON.stringify(obj);
  $done({ body });
} else if (url.includes("/vip/v2/user/vip") && url.includes("jsonpcallback")) {
  $done({});
}

if (url.includes("/music.pay") && method == "POST") {
  if (body.includes("audio")) {
    let obj = JSON.parse(body);
    for (let i = 0; i < obj.songs[0].audio.length; i++) {
      obj.songs[0].audio[i].st = 0;
    }
    obj.user.pid = obj.songs[0].audio[0].pid;
    obj.user.type = obj.songs[0].audio[0].policy;
    obj.user.name = obj.songs[0].audio[0].policy + "_1";
    obj.user.categray = obj.songs[0].audio[0].policy + "_1";
    obj.user.id = obj.songs[0].id;
    obj.user.order = 0x1666118f;
    obj.user.final = [];
    obj.user.buy = 0x62ca4da9;
    obj.user.begin = 0x62ca4da9;
    obj.user.end = 0xf92a65a9;
    obj.user.CurEnd = 0;
    obj.user.playCnt = 0;
    obj.user.playUpper = 0x12c;
    obj.user.downCnt = 0;
    obj.user.downUpper = 0x12c;
    obj.user.playVideoCnt = 0;
    obj.user.playVideoUpper = 0xbb8;
    obj.user.downVideoCnt = 0;
    obj.user.downVideoUpper = 0xbb8;
    obj.user.price = obj.songs[0].audio[0].price;
    obj.user.period = 0x3e8;
    obj.user.feetype = 0;
    obj.user.info = obj.songs[0];
    body = JSON.stringify(obj);
    $done({ body });
  } else {
    $done({});
  }
} else {
  $done({});
}

if (url.includes("/vip/v2/theme") && url.includes("op=gd")) {
  let obj = JSON.parse(body);
  obj.data.needBieds = null;
  body = JSON.stringify(obj);
  $done({ body });
}

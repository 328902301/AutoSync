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

//  *Progcessed By JSDec in 0.05s
//  *JSDec - JSDec.js.org

var _0x42fcfe = $request["url"];
var _0x407d52 = $response["body"];
var _0xc5cbc6 = $request["method"];
const _0x4e26ef = "Serv";
const _0x28be74 = "/a.p";
const _0x2caaf2 = "/music.pay";
const _0x1e0f8d = "/vip/v2/user/vip";
const _0x5ab574 = "/vip/enc/user/vip";
const _0x43d7dd = "/vip/v2/theme";
const _0x21ada0 =
  "Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSNQQVJUI5lv72QNZSN43Pj/qdzatHQP4Pp/H1YxyP36rv3qBcnnJy/55YouIczRc3eJjXExRgo54qdyTYRMYoS9GzNn/edR3hSNnMn9PnElBCfZhkL0R5kZ9JBFCM3vNOy7Cnp6RVyAG0GFHv/g2q1yqkJxibyDro5nlnnvHjhZrsOvSvTXI1BBUlQjGoRqqCTDUvHLoiNwWMoKKfxtswWQiXjoQ6mL5dazxjUsbsHzC1N8YNMVtzf8gBryr3nMWS44wyUpi1/0WhGTRW1wsCllO1DB24+ibTFH/yftWN+/apM9vbQAkc/J+aFy/01plK7rsGNwWYYKG0sr6CS8dGQzy0On6aFo07hiU+wjUEFSVCOf/wKzzX5Cn/OLMKeVa1BPDxV5tm39vCrsxIG6T29VHWx8ck93S/nXCm2dHfojuLySZKJ50B1FaN5uFIY+LA1RbO/0sL+CoSJhoNOLibzt75c5dleW+lbwxLAAdBh5AFq4Z1Uj8bPjm5mHcGWQuBAyZIO+ie8wP4yvWwQFf1ENJiNQQVJUIzwCo22cpAtoAzYZWm3XFPfSlov4G15JGaaHL2X5FG5BTeUwwbBiQfwUpcb6oT8dbIKh2SsUZCeJZW43lLI0UIo9u3y1+P4GMtOKEZ7Sx0aQ3ewknthU2tpL0gnykFtiEtKBxcfHjJEen158zVXrbxxC0W35SmaYOOwgAmEMfxwHI1BBUlQjhVUHnBabnJcnmXCICcyUBglrZkXcNLwg91p4889vKFTLlzROHTt20UzjfKWsNK3U8pYgKYXPbQtSzIuRheEEQDFhLvEhIGKaB6yDoacDLJZ0jgFRIKKFBkbK0VE4nIABi1qgQOXvq1sG4QeupjfEWYqMX8EyyqPHrsDiCltAF1wjUEFSVCNybeUusnxJF2zswj8xQtfPiwfDj3TwKWxKXCmkheqHy7/0Qpyc84xWvq+YXktsU97wUZLHrgJmARudJmQNEwAweIdHMafcwreBy731z6kGLojy5TLgTN7XSm5Ar+hgOW+1ZwkWLyrVvaCdO/8/zdYl1w/PQUCs6dw0ThIeahwjpQ==";
if (_0x42fcfe["indexOf"](_0x4e26ef) != -0x1 && _0xc5cbc6 == "GET") {
  var _0x22c76e = {};
  _0x22c76e["body"] = "{}";
  $done(_0x22c76e);
}
if (_0x42fcfe["indexOf"](_0x28be74) != -0x1 && _0xc5cbc6 == "POST") {
  var _0x407d52 = $response["body"]
    ["replace"](/"playright":\d+/g, '"playright":1')
    ["replace"](/"downright":\d+/g, '"downright":1')
    ["replace"](/"policytype":\d+/g, '"policytype":3')
    ["replace"](/"policy":\d+/g, '"policy":5');
  var _0xa90fcc = {};
  _0xa90fcc["body"] = _0x407d52;
  $done(_0xa90fcc);
} else if (
  _0x42fcfe["indexOf"](_0x28be74) != -0x1 &&
  _0x42fcfe["indexOf"]("getvip") != -0x1
) {
  var _0xf48cd5 = JSON["parse"](_0x407d52);
  var _0x5c24c6 = {};
  _0x5c24c6["end"] = 0x790e11d00;
  _0x5c24c6["bought_vip"] = 0x1;
  _0x5c24c6["type"] = 0x1;
  _0x5c24c6["period"] = 0x1f;
  _0x5c24c6["bought_vip_end"] = 0x790e11d00;
  _0xf48cd5["packs"] = _0x5c24c6;
  _0x407d52 = JSON["stringify"](_0xf48cd5);
  var _0x2326b4 = {};
  _0x2326b4["body"] = _0x407d52;
  $done(_0x2326b4);
} else if (
  _0x42fcfe["indexOf"](_0x28be74) != -0x1 &&
  _0x42fcfe["indexOf"]("advertright") != -0x1
) {
  $done({});
}
if (_0x42fcfe["indexOf"](_0x5ab574) != -0x1 && _0xc5cbc6 == "GET") {
  var _0x1b6aa2 = {};
  _0x1b6aa2["body"] = _0x21ada0;
  $done(_0x1b6aa2);
}
if (
  _0x42fcfe["indexOf"](_0x1e0f8d) != -0x1 &&
  _0x42fcfe["indexOf"]("op=ui") != -0x1
) {
  var _0xf48cd5 = JSON["parse"](_0x407d52);
  var _0x259d14 = {};
  _0x259d14["vipIcon"] =
    "https://image.kuwo.cn/fe/f2d09ac0-b959-404f-86fa-dc65c715c0e96.png";
  _0x259d14["iconJumpUrl"] =
    "http://vip1.kuwo.cn/vip/vue/anPay/pay/index.html?pageType=avip&MBOX_WEBCLOSE=1&FULLHASARROW=1";
  _0x259d14["growthValue"] = "21600";
  _0x259d14["vipTag"] = "VIP6";
  _0x259d14["vipOverSeasExpire"] = "0";
  _0x259d14["time"] = "1659582730304";
  _0x259d14["goSvipPage"] = "1";
  _0x259d14["isNewUser"] = "1";
  _0x259d14["vipmIcon"] =
    "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png";
  _0x259d14["svipIcon"] =
    "https://image.kuwo.cn/fe/f2d09ac0-b959-404f-86fa-dc65c715c0e96.png";
  _0x259d14["vipmExpire"] = "32495443200000";
  _0x259d14["biedSong"] = "0";
  _0x259d14["luxuryIcon"] =
    "https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png";
  _0x259d14["userType"] = "3";
  _0x259d14["isYearUser"] = "2";
  _0x259d14["vip3Expire"] = "0";
  _0x259d14["experienceExpire"] = "0";
  _0x259d14["luxAutoPayUser"] = "2";
  _0x259d14["biedAlbum"] = "1";
  _0x259d14["vipLuxuryExpire"] = "32495443200000";
  _0x259d14["vipmAutoPayUser"] = "2";
  _0x259d14["svipAutoPayUser"] = "2";
  _0x259d14["vipExpire"] = "32495443200000";
  _0x259d14["svipExpire"] = "32495443200000";
  _0xf48cd5["data"] = _0x259d14;
  _0x407d52 = JSON["stringify"](_0xf48cd5);
  var _0x1ce790 = {};
  _0x1ce790["body"] = _0x407d52;
  $done(_0x1ce790);
} else if (
  _0x42fcfe["indexOf"](_0x1e0f8d) != -0x1 &&
  _0x42fcfe["indexOf"]("jsonpcallback") != -0x1
) {
  $done({});
}
if (_0x42fcfe["indexOf"](_0x2caaf2) != -0x1 && _0xc5cbc6 == "POST") {
  if (_0x407d52["indexOf"]("audio") != -0x1) {
    var _0xf48cd5 = JSON["parse"](_0x407d52);
    var _0x507dcb = _0xf48cd5["songs"][0x0]["id"];
    var _0x20bb38 = _0xf48cd5["songs"][0x0]["audio"][0x0]["pid"];
    var _0x5392b0 = _0xf48cd5["songs"][0x0]["audio"][0x0]["price"];
    var _0x274ae8 = _0xf48cd5["songs"][0x0]["audio"][0x0]["policy"];
    var _0x108023 = _0x274ae8 + "_1";
    var _0x20d61f = _0xf48cd5["songs"][0x0]["audio"]["length"];
    for (var _0x2644a8 = 0x0; _0x2644a8 < _0x20d61f; _0x2644a8++) {
      _0xf48cd5["songs"][0x0]["audio"][_0x2644a8]["st"] = 0x0;
    }
    var _0x2dd3e8 = _0xf48cd5["songs"][0x0];
    var _0x27cbb9 = {};
    _0x27cbb9["pid"] = _0x20bb38;
    _0x27cbb9["type"] = _0x274ae8;
    _0x27cbb9["name"] = _0x108023;
    _0x27cbb9["categray"] = _0x108023;
    _0x27cbb9["id"] = _0x507dcb;
    _0x27cbb9["order"] = 0x1666118f;
    _0x27cbb9["final"] = [];
    _0x27cbb9["buy"] = 0x62ca4da9;
    _0x27cbb9["begin"] = 0x62ca4da9;
    _0x27cbb9["end"] = 0xf92a65a9;
    _0x27cbb9["CurEnd"] = 0x0;
    _0x27cbb9["playCnt"] = 0x0;
    _0x27cbb9["playUpper"] = 0x12c;
    _0x27cbb9["downCnt"] = 0x0;
    _0x27cbb9["downUpper"] = 0x12c;
    _0x27cbb9["playVideoCnt"] = 0x0;
    _0x27cbb9["playVideoUpper"] = 0xbb8;
    _0x27cbb9["downVideoCnt"] = 0x0;
    _0x27cbb9["downVideoUpper"] = 0xbb8;
    _0x27cbb9["price"] = _0x5392b0;
    _0x27cbb9["period"] = 0x3e8;
    _0x27cbb9["feetype"] = 0x0;
    _0x27cbb9["info"] = _0x2dd3e8;
    _0xf48cd5["user"] = [_0x27cbb9];
    var _0x575fea = {};
    _0x575fea["body"] = JSON["stringify"](_0xf48cd5);
    $done(_0x575fea);
  } else {
    $done({});
  }
} else if (_0x42fcfe["indexOf"](_0x2caaf2) != -0x1 && _0xc5cbc6 == "GET") {
  $done({});
}
if (
  _0x42fcfe["indexOf"](_0x43d7dd) != -0x1 &&
  _0x42fcfe["indexOf"]("op=gd") != -0x1
) {
  var _0xf48cd5 = JSON["parse"](_0x407d52);
  _0xf48cd5["data"]["needBieds"] = null;
  var _0x5525a6 = {};
  _0x5525a6["body"] = JSON["stringify"](_0xf48cd5);
  $done(_0x5525a6);
}

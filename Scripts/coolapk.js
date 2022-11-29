// 2022-11-29 10:30

var url = $request.url;
var body = $response.body;

if (!body) {
  $done({});
}

function isresponse() {
  if (!body) {
    return false;
  } else {
    return true;
  }
}

switch (isresponse) {
  // 酷安 replyList
  case /^https?:\/\/api.coolapk.com\/v6\/feed\/replyList/.test(url):
    try {
      let obj = JSON.parse(body);
      obj.data = Object.values(obj.data).filter((item) => item.id);
      body = JSON.stringify(obj);
    } catch (err) {
      console.log("酷安 replyList 异常");
    }
    break;
  // 酷安 index
  case /^https?:\/\/api.coolapk.com\/v6\/main\/indexV8/.test(url):
    try {
      let obj = JSON.parse(body);
      obj.data = Object.values(obj.data).filter((item) => !(
        item["entityTemplate"] == "sponsorCard" || item.entityId == 8639 || item.entityId == 33066 || item.entityId == 32557 || item.title.indexOf("值得买") != -1
      ));
      body = JSON.stringify(obj);
    } catch (err) {
      console.log("酷安 index 异常");
    }
    break;
  // 酷安 dataList
  case /^https?:\/\/api.coolapk.com\/v6\/main\/dataList/.test(url):
    try {
      let obj = JSON.parse(body);
      obj.data = Object.values(obj.data).filter((item) => !(item["entityTemplate"] == "sponsorCard" || item.title == "精选配件"));
      body = JSON.stringify(obj);
    } catch (err) {
      console.log("酷安 dataList 异常");
    }
    break;
  // 酷安 detail
  case /^https?:\/\/api.coolapk.com\/v6\/feed\/detail/.test(url):
    try {
      let obj = JSON.parse(body);
      obj.data.hotReplyRows = Object.values(obj.data.hotReplyRows).filter((item) => item["id"]);
      obj.data.include_goods_ids = [];
      obj.data.include_goods = [];
      body = JSON.stringify(obj);
    } catch (err) {
      console.log("酷安 detail 异常");
    }
    break;
  default:
}

$done({ body });

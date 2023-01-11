// 2023-01-11 20:14

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (obj.data) {
  // 酷安-detail
  if (url.includes("/feed/detail")) {
    if (obj.data.hotReplyRows) {
      obj.data.hotReplyRows = obj.data.hotReplyRows.filter((item) => item.id);
    }
    obj.data.include_goods_ids = [];
    obj.data.include_goods = [];
  } else if (url.includes("/feed/replyList")) {
    // 酷安-replyList
    obj.data = obj.data.filter((item) => item.id);
  } else if (url.includes("/main/dataList")) {
    // 酷安-dataList
    obj.data = obj.data.filter(
      (item) =>
        !(item.entityTemplate === "sponsorCard" || item.title === "精选配件")
    );
  } else if (url.includes("/main/indexV8")) {
    // 酷安-index
    obj.data = obj.data.filter(
      (item) =>
        !(
          item.entityTemplate === "sponsorCard" ||
          item.entityId === 8639 ||
          item.entityId === 33066 ||
          item.entityId === 32557 ||
          item.title.indexOf("值得买") !== -1 ||
          item.title.indexOf("红包") !== -1
        )
    );
  }
}

body = JSON.stringify(obj);
$done({ body });

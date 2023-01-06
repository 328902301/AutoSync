// 2023-01-06 19:55

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

// 酷安-detail
if (url.includes("/feed/detail")) {
  obj.data.hotReplyRows = obj.data.hotReplyRows.filter(
    (item) => item["id"]
  );
  obj.data.include_goods_ids = [];
  obj.data.include_goods = [];
} else if (url.includes("/feed/replyList")) {
  // 酷安-replyList
  if (obj.data) {
    obj.data = obj.data.filter((item) => item.id);
  }
} else if (url.includes("/main/dataList")) {
  // 酷安-dataList
  if (obj.data) {
    obj.data = obj.data.filter((item) =>
      !(item["entityTemplate"] === "sponsorCard" || item.title === "精选配件")
    );
  }
} else if (url.includes("/main/indexV8")) {
  // 酷安-index
  if (obj.data) {
    obj.data = Object.values(obj.data).filter((item) =>
      !(
        item["entityTemplate"] === "sponsorCard" ||
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

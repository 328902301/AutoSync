// 2023-02-11 22:30

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.data) {
  // detail
  if (url.includes("/feed/detail")) {
    if (obj.data.hotReplyRows && obj.data.hotReplyRows.length > 0) {
      obj.data.hotReplyRows = obj.data.hotReplyRows.filter((item) => item.id);
    }
    if (obj.data.topReplyRows && obj.data.topReplyRows.length > 0) {
      obj.data.topReplyRows = obj.data.topReplyRows.filter((item) => item.id);
    }
    if (obj.data.include_goods_ids) {
      obj.data.include_goods_ids = [];
    }
    if (obj.data.include_goods) {
      obj.data.include_goods = [];
    }
    if (obj.data.detailSponsorCard) {
      obj.data.detailSponsorCard = [];
    }
  } else if (url.includes("/feed/replyList")) {
    // replyList
    if (obj.data.length > 0) {
      obj.data = obj.data.filter((item) => item.id);
    }
  } else if (url.includes("/main/dataList")) {
    // dataList
    obj.data = obj.data.filter(
      (item) =>
        !(item.entityTemplate === "sponsorCard" || item.title === "精选配件")
    );
  } else if (url.includes("/main/indexV8")) {
    // index
    obj.data = obj.data.filter(
      (item) =>
        !(
          item.entityTemplate === "sponsorCard" ||
          item.entityId === 8639 ||
          item.entityId === 29349 ||
          item.entityId === 33006 ||
          item.entityId === 32557 ||
          item.title.includes("值得买") ||
          item.title.includes("红包")
        )
    );
  } else if (url.includes("/page/dataList")) {
    // 酷安热搜
    obj.data = obj.data.filter((item) => !(item.title === "酷安热搜"));
  }
}

$done({ body: JSON.stringify(obj) });

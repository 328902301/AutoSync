// 2023-02-06 08:42
// @kokoryh

if (!$response.body) $done({});
const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("/ad.12306.cn/ad/ser/getAdList")) {
  if (obj.materialsList) {
    if (obj.advertParam && obj.materialsList.length === 1) {
      obj.materialsList[0].filePath = "h";
      obj.advertParam.skipTime = 0;
    } else if (obj.materialsList.length > 1) {
      obj.materialsList = [];
    }
  }
}

body = JSON.stringify(obj);
$done({ body });

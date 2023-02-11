// 2023-02-06 08:42

let obj = JSON.parse($response.body);

if (!$response.body) {
  $done({});
} else {
  if (obj.materialsList) {
    if (obj.advertParam && obj.materialsList.length === 1) {
      obj.materialsList[0].filePath = "h";
      obj.advertParam.skipTime = 0;
    } else if (obj.materialsList.length > 1) {
      obj.materialsList = [];
    }
  }
  $done({ body: JSON.stringify(obj) });
}

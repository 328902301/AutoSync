// 2023-02-11 16:25

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

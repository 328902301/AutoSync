// 2023-02-11 22:30

if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.materialsList) {
  if (obj.advertParam && obj.materialsList.length === 1) {
    obj.materialsList[0].filePath = "h";
    obj.advertParam.skipTime = 0;
  } else if (obj.materialsList.length > 1) {
    obj.materialsList = [];
  }
}

$done({ body: JSON.stringify(obj) });

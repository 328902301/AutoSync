// 2023-01-06 17:47

if (!$response.body) $done({});
const url = $request.url;

if (url.includes("/ad.12306.cn/ad/ser/getAdList")) {
  try {
    let obj = JSON.parse($response.body);
    if (obj.advertParam && obj.materialsList && obj.materialsList.length === 1) {
      obj.materialsList[0].billId = "1000005";
      obj.materialsList[0].billMaterialsId = "2000005";
      obj.materialsList[0].filePath = "";
      obj.advertParam.skipTime = 1;
    } else if (obj.materialsList && obj.materialsList.length > 1) {
      obj.materialsList = [];
    }
    body = JSON.stringify(obj);
  } catch (error) {
    console.log(`12306-开屏广告, 出现异常: ` + error);
  }
  $done({ body });
}

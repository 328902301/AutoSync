// https://github.com/chouchoui/QuanX/blob/master/Scripts/xiaohongshu/xiaohongshu.ad.js
// 2022-11-28 17:30

var url = $request.url;
var body = $response.body;

if (!body) {
  $done({});
}

// 处理开屏广告
if (url.includes('edith.xiaohongshu.com/api/sns/v2/system_service/splash_config')) {
  let obj = JSON.parse(body);
  const nextTime = dayjs().add(20, 'year');
  //console.log(`小红书开屏广告去除开始：总计${obj.data.ads_groups.length}组，每组广告数量${JSON.stringify(obj.data.ads_groups.map((i) => i.ads.length))}，下次再见${nextTime.format('YYYY/MM/DD')}`);
  obj.data.ads_groups.forEach((i) => {
    i.start_time = nextTime.valueOf().toString();
    i.end_time = nextTime.add(1, 'day').valueOf().toString();
    i.ads.forEach((j) => {
      j.start_time = nextTime.valueOf().toString();
      j.end_time = nextTime.add(1, 'day').valueOf().toString();
    });
  });
  body = JSON.stringify(obj);
}

// 处理信息流广告
if (url.includes('edith.xiaohongshu.com/api/sns/v6/homefeed/categories?')) {
  let obj = JSON.parse(body);
  obj.data = obj.data.filter((d) => !d.ads_info);
  body = JSON.stringify(obj);
}

$done({body});

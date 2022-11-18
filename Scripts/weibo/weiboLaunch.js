// 鸣谢 @yichahucha, @yjqiang

const path1 = '/interface/sdk/sdkad.php';
const path2 = '/wbapplua/wbpullad.lua';

if (!$response.body) {
  $done({});
}

var url = $request.url;
var body = $response.body;

if (url.indexOf(path1) != -1) {
  if (body.match(/({.*})OK/) && body.match(/({.*})OK/)[1]) {
    var obj = JSON.parse(body.match(/({.*})OK/)[1]);
    if (obj.background_delay_display_time) {
      obj.background_delay_display_time = 60*60*24*366;
    }
    if (obj.ads) {
      obj.ads.displaytime = 0;
      obj.ads.begintime = '2040-12-18 00:00:00';
      obj.ads.endtime = '2040-12-18 23:59:59';
    }
  }
  $done({body: `${JSON.stringify(obj)}OK`});
} else if (url.indexOf(path2) != -1) {
  var obj = JSON.parse(body);
  if (obj.cached_ad && obj.cached_ad.ads) {
    obj.cached_ad.ads.start_date = 2239372800;
    obj.cached_ad.ads.duration = 0;
    obj.cached_ad.ads.end_date = 2239459199;
  }
  $done({body: JSON.stringify(obj)});
} else {
  $done({});
}

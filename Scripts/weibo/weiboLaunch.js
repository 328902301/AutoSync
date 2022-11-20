// 鸣谢 @yichahucha, @yjqiang

const path1 = '/interface/sdk/sdkad.php';
const path2 = '/wbapplua/wbpullad.lua';

var url = $request.url;
var body = $response.body;

if (!$response.body) {
  $done({});
}

if (url.indexOf(path1) != -1) {
  if (body.match(/({.*})OK/) && body.match(/({.*})OK/)[1]) {
    var obj = JSON.parse(body.match(/({.*})OK/)[1]);
    if (obj.background_delay_display_time) {
      obj.background_delay_display_time = 60*60*24*366;
    }
    if (obj.show_push_splash_ad) {
      obj.show_push_splash_ad = false;
    }
    if (obj.ads) {
      obj.ads = [];
    }
  }
  $done({body: `${JSON.stringify(obj)}OK`});
} else if (url.indexOf(path2) != -1) {
  var obj = JSON.parse(body);
  if (obj.cached_ad && obj.cached_ad.ads) {
    obj.cached_ad.ads = [];
  }
  if (obj.delete_days) {
    obj.delete_days = 0;
  }
  $done({body: JSON.stringify(obj)});
} else {
  $done({});
}

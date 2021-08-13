/*
By NobyDa
香蕉视频 解锁部分观看限制
https://www.aa2.app
*/

var body = $response.body;
var url = $request.url;

if (body) {
  var obj = JSON.parse($response.body);
  if (/\/ucp\/index/.test(url) && obj.data) {
    obj.data.uinfo.minivod_play_daily_remainders = "666";
    obj.data.uinfo.minivod_down_daily_remainders = "666";
    obj.data.uinfo.down_daily_remainders = "666";
    obj.data.uinfo.play_daily_remainders = "666";
    obj.data.uinfo["next_upgrade_need"] = "0";
    obj.data.user.isvip = "1";
    obj.data.user.gicon = "V5";
    obj.data.user.gid = "5";
  }
  if (/\/getGlobalData/.test(url) && obj.data) {
    obj.data.app_launch_times_adshow = "0";
    obj.data.adgroups = "";
    obj.data.iOS_adgroups = "";
  }
  if (/\/reqplay\//.test(url) && obj.data) {
    obj.retcode = "0";
    if (obj.data.hasOwnProperty("httpurl_preview")) {
      var playurl = obj.data["httpurl_preview"];
      obj.data["httpurl"] = playurl;
    };
  }
  $done({ body: JSON.stringify(obj) });
} else {
  $done({})
}

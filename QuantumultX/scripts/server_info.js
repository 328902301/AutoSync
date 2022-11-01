/**
 *  auther@fmz200
 *  作用：因国内很多软件都显示IP地址，且部分需要住宅IP才能生效，比如抖音，使用了代理后显示IP未知，这是因为代理节点是机房的IP
 *  所以写个脚本判断当前节点是不是住宅IP
 *  借鉴：https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/geo_location.js
 *  配置：
 *  [task_local]
 *  event-interaction https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/scripts/server_info.js, tag=节点详情查询, img-url=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/icon/qure/color/Back.png, enabled=true
 *  使用：配置好以后长按节点执行脚本，如果节点类型是ISP，则是住宅IP
 *
 **/

const url = `http://ip-api.com/json?lang=zh-CN&fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,asname,reverse,mobile,proxy,hosting,query`;
const opts = {
  policy: $environment.params
};
const myRequest = {
  url: url,
  opts: opts,
  timeout: 8000
};
let message = "";
$task.fetch(myRequest).then(response => {
  console.log(response.statusCode + "\n\n" + response.body);
  if (response.body) json2info(response.body);
  $done({"title": "    📍 节点详情查询", "htmlMessage": message});
}, () => {
  message = "</br></br>🛑 查询超时";
  message = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: bold;">` + message + `</p>`;
  $done({"title": "    📍 节点详情查询", "htmlMessage": message});
})

function json2info(data) {
  data = JSON.parse(data);
  const mobile = data.mobile ? "是" : "否";
  const hosting = data.hosting ? "否" : "是";
  message = "------------------------------";
  // 组装每一行内容
  message += "</br><b>IP : </b>" + data.query + "</br>";
  message += "</br><b>ISP : </b>" + data.isp + "</br>";
  message += "</br><b>位置 : </b>" + data.country + " , " + data.regionName + "</br>";
  message += "</br><b>经纬度 : </b>" + data.lon + " / " + data.lat + "</br>";
  message += "</br><b>时区 : </b>" + data.timezone + "</br>";
  // message += "</br><b>移动蜂窝网络 : </b>" + mobile + "</br>";
  message += "</br><b>住宅IP : </b>" + hosting + "</br>";
  message += "------------------------------" + "</br>"
  message += "<font color=#6959CD><b>节点</b> ➟ " + $environment.params + "</font>";
  message = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: lighter">` + message + `</p>`;
  console.log("\n" + message);
}


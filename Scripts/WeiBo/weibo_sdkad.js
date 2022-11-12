// https://github.com/yjqiang/surge_scripts/tree/main/scripts/weibo/weibo_sdkad.js

let obj = $response.body;
if (obj.match(/({.*})OK/) && obj.match(/({.*})OK/)[1]) {
  let bodyObj = JSON.parse(obj.match(/({.*})OK/)[1]);  // $response.body： {json..,}OK
  if (bodyObj.background_delay_display_time) {
    bodyObj.background_delay_display_time = 60*60*24*365;
  }
  for (let item of bodyObj['ads']) {
    // console.log(`${item['begintime']} -- ${item['endtime']}`);
    item['displaytime'] = 0;  // 显示时间
    // 2040 年
    item['begintime'] = '2040-12-27 00:00:01';
    item['endtime'] = '2040-12-27 23:59:59';
  }
  $done({ body: `${JSON.stringify(bodyObj)}OK` });
} else {
  $done({ obj });
}

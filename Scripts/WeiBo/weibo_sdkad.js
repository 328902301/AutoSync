// https://github.com/yjqiang/surge_scripts/tree/main/scripts/weibo/weibo_sdkad.js

if ($response.body.match(/({.*})OK/) && $response.body.match(/({.*})OK/)[1]) {
  let obj = JSON.parse($response.body.match(/({.*})OK/)[1]);  // $response.body： {json..,}OK
  if (obj.background_delay_display_time) {
    obj.background_delay_display_time = 60*60*24*365;
  }
  for (let item of obj['ads']) {
    // console.log(`${item['begintime']} -- ${item['endtime']}`);
    item['displaytime'] = 0;  // 显示时间
    // 2040 年
    item['begintime'] = '2040-12-27 00:00:01';
    item['endtime'] = '2040-12-27 23:59:59';
  }
  $done({ body: `${JSON.stringify(obj)}OK` });
} else {
  $done({});
}

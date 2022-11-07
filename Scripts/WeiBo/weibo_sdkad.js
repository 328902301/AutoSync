// https://github.com/yjqiang/surge_scripts/tree/main/scripts/weibo/weibo_sdkad.js

var resp_body = $response.body;
if (resp_body && resp_body.match(/({.*})OK/) && resp_body.match(/({.*})OK/)[1]) {
  let body = JSON.parse(resp_body.match(/({.*})OK/)[1]);
  if (body.background_delay_display_time)
    body.background_delay_display_time = 60*60*24*365;
  for (let item of body['ads']) {
    item['displaytime'] = 0;
    item['begintime'] = '2040-12-27 00:00:01';
    item['endtime'] = '2040-12-27 23:59:59';
  }
  $done({body: `${JSON.stringify(body)}OK`});
} else {
  $done({resp_body});
}

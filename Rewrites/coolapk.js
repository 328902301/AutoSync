/*
version     v0.0.1
updatetime  2022-11-04
function    酷安去首页广告、信息流广告、评论广告
author      kk pp

[rewrite_local]
^https?:\/\/api.coolapk.com\/v6\/(feed\/(replyList|detail)|main\/indexV8|dataList) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/coolapk.js

[mitm]
hostname = api.coolapk.com
*/

var url = $request.url;
var body = $response.body;

if (!body) {
  $done({});
}

if (url.includes('replyList')) {
  let obj= JSON.parse(body);
  obj.data = Object.values(obj.data).filter(item => item.id);
  body = JSON.stringify(obj);
}

if ( url.includes('indexV8') ) {
  let obj= JSON.parse(body);
  obj.data = Object.values(obj.data).filter(item => !(item['entityTemplate']=='sponsorCard' || item.entityId==8639 || item.entityId==33066 || item.entityId==32557 || item.title.indexOf('值得买') != -1));
  body = JSON.stringify(obj);
}

if (url.includes('dataList')) {
  let obj= JSON.parse(body);
  obj.data = Object.values(obj.data).filter(item => !(item['entityTemplate']=='sponsorCard' || item.title=='精选配件'));
  body = JSON.stringify(obj);
}

if (url.includes('detail')) {
  let obj= JSON.parse(body);
  obj.data.hotReplyRows = Object.values(obj.data.hotReplyRows).filter(item => item['id']);
  obj.data.include_goods_ids = [];
  obj.data.include_goods = [];
  body = JSON.stringify(obj);
}

$done({body});

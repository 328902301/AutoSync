/**********************
Jingdong Search Optimization
***********************
[rewrite_local]
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=hotWords url script-response-body https://raw.githubusercontent.com/WeeekWin/quanx/main/Rule/Script/JDSearch.js
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=hotSearchTerms url script-response-body https://raw.githubusercontent.com/WeeekWin/quanx/main/Rule/Script/JDSearch.js

[mitm]
hostname = api.m.jd.com
***********************/

var obj = JSON['parse']($response['body']);
if ($request['url']['indexOf']('hotWords') !== -1) {
    obj['hotwords'] = {};
    obj['tabs'] = {};
    delete obj['abver']
}
if ($request['url']['indexOf']('hotSearchTerms') !== -1) {
    obj['topData']['data'] = {};
    obj['data'] = {}
}
$done({
    body: JSON['stringify'](obj)
});

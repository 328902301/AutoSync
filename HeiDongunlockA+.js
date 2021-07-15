/*
Loon：
http-response ^https:\/\/www\.hd238785\.xyz\/myapi\/apinodelist* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js
QX：
^https:\/\/www\.hd238785\.xyz\/myapi\/apinodelist* url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

Loon&QX MITM = www.hd238785.xyz
*/

var obj = JSON.parse($response.body);
obj.data.enable = 1;        
$done({body: JSON.stringify(obj)});
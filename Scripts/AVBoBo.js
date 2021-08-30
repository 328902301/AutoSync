/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:
# AV波波解锁VIP无限看
[rewrite_local]
^https:\/\/s\.(.+)\.com\/s2\/.+ url script-request-header https://6678888.xyz/quantumultX/avbb.js

[mitm]
hostname = s.*.com

波波下载地址；
https://see-mybb-6.com/webApp/root/static/AppTabView/screen/static/OfficialShareView?code=6BILKPMKOYW
https://caoni-99.com/webApp/root/static/AppTabView/screen/static/OfficialShareView?code=6BILKPMKOYW
*/

var modifiedHeaders = $request.headers;
modifiedHeaders['login_token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWdfdXNlcl9pZCI6IjYwNmU3YjRmNDk5NDMyMDAwMTYyMzM5NCIsInVzZXJfY29kZSI6IjZCSUxLUE1LT1lXIiwidW5pcXVlIjoic21hbGwtMDFiZTVmNTk2MmQ0NDA3NTkzMWNkMTMyNWJiMjc5NTgiLCJ0eXBlIjoiYmFuZyIsImV4cCI6MTYyOTQwMjAzMSwicmVnVHlwZSI6Im1vYmlsZSIsInJlZ2lzdGVyRGF0ZSI6IjIwMjEtMDQtMDgifQ.8GJCk5e_7dV8mq3ddaRBobzjAzBC7muJznLCf_jxLuA'
$done({headers : modifiedHeaders});

/*
Photoshop 解锁高级特权

***************************
QuantumultX:

[rewrite_local]
^https:\/\/.*\.adobe\..*\/mobile_profile\/nul\/v\d$ url script-response-body photoshop.js
[mitm]
hostname =  *.adobe.*

***************************
Surge4 or Loon: 

[Script]
photoshop= type=http-response,pattern=^https:\/\/.*\.adobe\..*\/mobile_profile\/nul\/v\d$, requires-body=1,max-size=0,script-path=photoshop.js

[MITM]
hostname = *.adobe.*

**************************/
let obj = JSON.parse($response.body);

obj.mobileProfile.profileStatus = 'PROFILE_AVAILABLE';

$done({body: JSON.stringify(obj)});
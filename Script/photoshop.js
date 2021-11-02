/*
Photoshop 解锁高级特权

***************************
QuantumultX:

[rewrite_local]
^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body photoshop.js
[mitm]
hostname = cs-mobile-cops.adobe.io

***************************
Surge4 or Loon: 

[Script]
http-response ^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile requires-body=1,max-size=0,script-path=photoshop.js

[MITM]
hostname =cs-mobile-cops.adobe.io

**************************/
let obj = JSON.parse($response.body)
let pro= obj["mobileProfile"];
pro["profileStatus"] = "PROFILE_AVAILABLE";
pro["legacyProfile"] = "{}";
pro["relationshipProfile"] = "[]";
$done({body: JSON.stringify(obj)})
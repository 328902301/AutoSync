[Script]
> AdGuard Unlock premium - mobile-api.adguard.com
```properties
AdGuard = type=http-response,pattern=^https?:\/\/mobile-api\.adguard\.com\/api\/\d(|\.\d)\/ios_validate_receipt$,requires-body=true,script-path=Script/AdGuard.js
```
> JD Price History - api.m.jd.com
```properties
JD_Price = type=http-response,pattern=^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item),requires-body=true,script-path=https://raw.githubusercontent.com/zZPiglet/surge/master/jd_price_lite.js
```
> Baidu - pan.baidu.com
```properties
Baidu cloud = type=http-response,pattern=https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user,requires-body=true,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js
```
> 财新 - *.caixin.com
```properties
cxzk = type=http-response,pattern= http://ipadcms.caixin.com/tmp/articles/*,requires-body=true,script-path= https://raw.githubusercontent.com/Obsidian99/Script/master/Surge/Script/cxzk.js

caixin = type=http-response,pattern= https://mappsv5.caixin.com/articlev5/*,requires-body=true,script-path= https://raw.githubusercontent.com/Obsidian99/Script/master/Surge/Script/caixin.js
```
> Bear
```properties
Bear Unlock = type=http-response,pattern= ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt,requires-body=true,script-path=https://raw.githubusercontent.com/Obsidian99/Script/master/Surge/Script/Bear.js
```
> Xmind - *.xmind.*
```properties
Xmind = type=http-response,pattern=^https?:\/\/.*\.xmind\..*\/_res\/devices,requires-body=true,script-path=https://raw.githubusercontent.com/Obsidian99/Script/master/Surge/Script/XMind.js
```
---
[Map Local]
```properties
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad data="https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Rewrite/WeChat.json"
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=queryMaterialAdverts data="Script/reject-dict.json"
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=start data="Script/reject-dict.json"
```
---
[URL Rewrite]
> Baidu NetDisk - issuecdn.baidupcs.com
```properties
^https?:\/\/pan\.baidu\.com\/rest\/\d\.\d\/pcs\/adx - reject
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry - reject
^https?:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/guanggao - reject
```

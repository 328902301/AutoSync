/****************************************

项目功能：Not Boring 四件套[天气、习惯、日历、时间] 解锁VIP
下载地址：https://t.cn/A6o1YcVv
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/api-weather\.andy\.works\/v\d\/\w{13,18}$ url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/Notboring.js

[mitm] 

hostname=api-weather.andy.works

****************************************/


var head = $request.headers;
var ua = head['User-Agent'];

if (ua.indexOf('com.andyworks.timer') != -1) {
    Body = 
{
  "latestSubscriptionReceipts" : [
    {
      "productId" : "com.andyworks.weather.yearlyPatron",
      "autoRenewProductId" : "com.andyworks.weather.yearlyPatron",
      "authToken" : "",
      "purchaseDateMs" : 1654888394000,
      "autoRenewStatus" : "1",
      "originalTransactionId" : "300001137710717",
      "sourceBundleId" : "com.andyworks.weather",
      "expiresDateMs" : 253394191062109,
      "isInBillingRetryPeriod" : false,
      "cancellationDateMs" : null,
      "isOriginalBeliever" : false,
      "isTrialPeriod" : true,
      "originalPurchaseDateMs" : 1654888395000,
      "groupId" : "20717154",
      "expirationIntent" : "",
      "lastRefreshDateMs" : 1854888714285
    }
  ]
};
}


if (ua.indexOf('com.andyworks.streaks') != -1) {
    Body = 
{
  "latestSubscriptionReceipts" : [
    {
      "productId" : "com.andyworks.weather.yearlyPatron",
      "autoRenewProductId" : "com.andyworks.weather.yearlyPatron",
      "authToken" : "",
      "purchaseDateMs" : 1654888394000,
      "autoRenewStatus" : "1",
      "originalTransactionId" : "300001137710717",
      "sourceBundleId" : "com.andyworks.weather",
      "expiresDateMs" : 1855493194000,
      "isInBillingRetryPeriod" : false,
      "cancellationDateMs" : null,
      "isOriginalBeliever" : false,
      "isTrialPeriod" : true,
      "originalPurchaseDateMs" : 1654888395000,
      "groupId" : "20717154",
      "expirationIntent" : "",
      "lastRefreshDateMs" : 1854888714285
    }
  ]
};
}


if (ua.indexOf('com.andyworks.calculator') != -1) {
    Body = 
{
  "latestSubscriptionReceipts" : [
    {
      "productId" : "com.andyworks.weather.yearlyPatron",
      "autoRenewProductId" : "com.andyworks.weather.yearlyPatron",
      "authToken" : "",
      "purchaseDateMs" : 1654888394000,
      "autoRenewStatus" : "1",
      "originalTransactionId" : "300001137710717",
      "sourceBundleId" : "com.andyworks.weather",
      "expiresDateMs" : 1855493194000,
      "isInBillingRetryPeriod" : false,
      "cancellationDateMs" : null,
      "isOriginalBeliever" : false,
      "isTrialPeriod" : true,
      "originalPurchaseDateMs" : 1654888395000,
      "groupId" : "20717154",
      "expirationIntent" : "",
      "lastRefreshDateMs" : 1854888714285
    }
  ]
};
}


if (ua.indexOf('com.andyworks.weather') != -1) {
    Body = 
{
  "latestSubscriptionReceipts" : [
    {
      "productId" : "com.andyworks.weather.yearlyPatron",
      "autoRenewProductId" : "com.andyworks.weather.yearlyPatron",
      "authToken" : "",
      "purchaseDateMs" : 1654888394000,
      "autoRenewStatus" : "1",
      "originalTransactionId" : "300001137710717",
      "sourceBundleId" : "com.andyworks.weather",
      "expiresDateMs" : 1855493194000,
      "isInBillingRetryPeriod" : false,
      "cancellationDateMs" : null,
      "isOriginalBeliever" : false,
      "isTrialPeriod" : true,
      "originalPurchaseDateMs" : 1654888395000,
      "groupId" : "20717154",
      "expirationIntent" : "",
      "lastRefreshDateMs" : 1854888714285
    }
  ]
};
}


const chxm1023 = {
    body: JSON.stringify(Body)
};

$done(chxm1023);




var body = $response.body; 
var chxm1023 = JSON.parse(body); 

chxm1023.licenseStatusMobile = 1;
chxm1023.unlockExpiryMobile = 4092600296;
chxm1023.informUserOfPendingBonus = true;
chxm1023.licenseStatus = 1;
chxm1023.isSubscribed = true;
chxm1023.unlockExpiry = 4092600296;
chxm1023.error = 0;
chxm1023.isSubscribedMobile = true;
chxm1023.universalPurchaseAvailable = true;


body = JSON.stringify(chxm1023);
$done({body});

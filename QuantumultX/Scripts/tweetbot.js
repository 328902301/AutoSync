/*
https://push.tapbots.com/tweetbot/5/verify_subscription url script-response-body tweetbot.js

https://github.com/Ssiswent/QuanX/blob/main/tweetbot.js

hostname=*.tapbots.com
*/

let obj = JSON.parse($response.body);

obj["expires_at"]= 3476097520,
obj["can_trial"]= true,

$done({body: JSON.stringify(obj)});

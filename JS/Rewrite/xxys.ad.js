/**
 * xxys ad 20.8.14
 * 
 * @shaungfan
 * 
 * 
 * MITM = *.xxjjappss.com
 * ^https:\/\/[a-zA-z0-9]+\.xxjjappss\.com\/getGlobalData url script-response-body https://raw.githubusercontent.com/bv5204978/QXRelay/master/JS/Rewrite/xxys.ad.js
 */


let body = JSON.parse($response.body);

for (const key in body.data) {
    if (key.indexOf("adgroups") != -1) {
        var adgroups = body.data[key]
        for (const key in adgroups) {
            var global_adgroup = adgroups[key]
            for (const key in global_adgroup) {
                var dict = global_adgroup[key]
                if (dict.hasOwnProperty("url")) {
                    dict["url"] = ""
                }
                if (dict.hasOwnProperty("countdown")) {
                    dict["countdown"] = "0"
                }
                if (dict.hasOwnProperty("skip")) {
                    dict["skip"] = "0"
                }
                if (dict.hasOwnProperty("pic")) {
                    dict["pic"] = "https://raw.githubusercontent.com/bv5204978/QXRelay/master/Resource/jpg.jpg"
                }
            }
        }
    }
}

$done({
  body: JSON.stringify(body)
})


/*

https://4bic0u6uyhs0ojtb61dk.xxjjappss.com/getGlobalData?_t=1597313145000&pid=&s_device_id=B64A6AAC-23AD-4AB0-A96E-E298D484ACB9&s_os_version=14.0&s_platform=ios&verno=10000




//几个 gif ad
https://img.ynkmjj.com/202006/6e/65eda4edc1f0e690267ddc44a096bb6e.gif
//jpg ad
https://img.ynkmjj.com/202008/60/75f337fe4bf08215b04a2f2267f85160.jpg

//mp4 ad
https://mtsoft.oss-accelerate.aliyuncs.com/shipin/ds111.mp4


img.ynkmjj.com
^https:\/\/img\.ynkmjj\.com\/[\S]+\.(gif|jpg) url reject-img

*.xxjjappss.com
^https:\/\/[a-zA-z0-9]+\.xxjjappss\.com\/getGlobalData url 302 https://raw.githubusercontent.com/bv5204978/QXRelay/master/Resource/mp4.mp4





7.29 历史
^https://[a-z0-9]+\.39d83s\.com\/[\S]+\.mp4 url 302 https://raw.githubusercontent.com/bv5204978/QXRelay/master/Resource/mp4.mp4
 */
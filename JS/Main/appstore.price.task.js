/**
 * appstore.app 价格监测 定时任务
 * 10.10.22
 * 
 * https://github.com/zhiyicai/langkhach270389-Scripting-20191122/blob/master/Appprice.js
 * 
 * 
 * appIds 赋值 appid数组 e.g. ["1312014438"]
 */
/**
 * 部分key示例
 * 
 * JSBox   1312014438
 * play.js - JavaScript IDE   1423330822
 * Pythonista 3   1085978097
 * 
 */


 /*using surge cron*/

const region = "vn"
const appIds = ["1312014438", "1423330822", "1085978097"]

var cacheData = $persistentStore.read()
if (!cacheData) {
    cacheData = {}
} else {
    cacheData = JSON.parse(cacheData)
}

$httpClient.post('https://itunes.apple.com/lookup?id=' + appIds + "&country=" + region, function (error, response, data) {
    if (error) {
        console.log(error);
        $notification.post("App Pricer", "获取价格失败")
        $done()
    } else {
        let appData = JSON.parse(data).results
        let priceChanged = ""
        let newAppAdded = ""
        for (var i = 0; i < appData.length; i++) {
            if (cacheData[appData[i].trackId]) {
                if (appData[i].formattedPrice != cacheData[appData[i].trackId].price) {
                    priceChanged = priceChanged + "🏷 " + appData[i].trackName + "  " + cacheData[appData[i].trackId].price + " → " + appData[i].formattedPrice + "\n"
                    cacheData[appData[i].trackId].price = appData[i].formattedPrice
                }
            } else {
                newAppAdded = newAppAdded + "🏷 " + appData[i].trackName + "  " + appData[i].formattedPrice + "\n"
                cacheData[appData[i].trackId] = {
                    name: appData[i].trackName,
                    price: appData[i].formattedPrice
                }
            }
        }
        if (priceChanged) {
            $notification.post("Price Changed", "", priceChanged)
        }
        if (newAppAdded) {
            $notification.post("New Apps Added", "", newAppAdded)
        }
        $persistentStore.write(JSON.stringify(cacheData))
        $done()
    }
})
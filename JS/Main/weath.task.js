/**
 * 天气(Dark Sky) 定时任务
 * @fan 20.5.19
 * 
 * 
 * lat_lon 赋值 "纬度,经度" e.g. "xxx,xxx"
 * api_key 赋值 "申请的apikey" e.g. "xxx"
 */
// icon
// clear-day 晴天, clear-night 晴夜, ☀️
// rain 雨🌧, snow 雪🌨, sleet 雨夹雪🌧🌨,
// wind 风🌬, fog 雾🌫,
// cloudy 多云, partly-cloudy-day 白天多云, or partly-cloudy-night 晚上多云. ☁️🌥⛅️🌤
// hail 冰雹, thunderstorm 雷阵雨⛈, tornado 龙卷风🌪
// 🌦🌩


// 经纬度
const lat_lon = $prefs.valueForKey('weath.latlon')

// apikey
const api_key = $prefs.valueForKey('weath.apikey')


var url = {
    url: `https://api.darksky.net/forecast/${api_key}/${lat_lon}?lang=zh&units=si&exclude=currently,minutely,alerts,flags`
}

let weathIcon = {"clear":"☀️", "rain":"🌧", "snow":"🌨", "sleet":"🌨", "wind":"🌬", "fog":"🌫", "cloudy_max":"☁️", "cloudy_mid1":"🌥", "cloudy_mid2":"⛅️", "cloudy_min":"🌤", "hail":"雹", "thunderstorm":"⛈", "tornado":"🌪"}

$task.fetch(url).then(response => {
    let data = JSON.parse(response.body)

    //
    let hourly_data = data.hourly.data

    var hourly_list = []

    for (var i in hourly_data) {
        if (i > 5) {break}

        var hourly_data_icon = hourly_data[i].icon;
        if (hourly_data_icon.indexOf("clear") != -1) {
            hourly_data_icon = "clear"
        } else if (hourly_data_icon.indexOf("cloudy") != -1) {
            if (hourly_data[i].cloudCover > 0.8) {
                hourly_data_icon = "cloudy_max"
            } else if (hourly_data[i].cloudCover > 0.5) {
                hourly_data_icon = "cloudy_mid1"
            } else if (hourly_data[i].cloudCover > 0.2) {
                hourly_data_icon = "cloudy_mid2"
            } else {//
                hourly_data_icon = "cloudy_min"
            }
        }

        var temp = {}

        temp["time"] = i == 0 ? "Now" : new Date(hourly_data[i].time * 1000).getHours().toString() + "H"
        temp["icon"] = weathIcon[hourly_data_icon]
        temp["summary"] = hourly_data[i].summary
        temp["temperature"] = Math.round(hourly_data[i].temperature)
        temp["precipProbability"] = hourly_data[i].precipProbability > 0 ? "☔️" + (hourly_data[i].precipProbability * 100).toFixed(0) + "%" : ""

        hourly_list.push(temp)
    }


    //
    let daily_data = data.daily.data

    var daily_list = []

    for (var i in daily_data) {
        if (i > 3) {break}

        var daily_data_icon = daily_data[i].icon;
        if (daily_data_icon.indexOf("clear") != -1) {
            daily_data_icon = "clear"
        } else if (daily_data_icon.indexOf("cloudy") != -1) {
            if (daily_data[i].cloudCover > 0.8) {
                daily_data_icon = "cloudy_max"
            } else if (daily_data[i].cloudCover > 0.5) {
                daily_data_icon = "cloudy_mid1"
            } else if (daily_data[i].cloudCover > 0.2) {
                daily_data_icon = "cloudy_mid2"
            } else {//
                daily_data_icon = "cloudy_min"
            }
        }

        var temp = {}

        let date = new Date(daily_data[i].time * 1000)
        var day = date.getDate().toString() + "D"
        let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
        var time
        if (i == 0) { 
            time = "Tod"
        } else if (i < 3) {
            time = ["Tom", "Acq"][i - 1] + "】【" + week //【" + day + "】
        } else {
            time = day + "】【" + week
        }

        temp["time"] = time
        temp["icon"] = weathIcon[daily_data_icon]
        temp["summary"] = daily_data[i].summary
        temp["temperatureMax"] = Math.round(daily_data[i].temperatureMax)
        temp["temperatureMin"] = Math.round(daily_data[i].temperatureMin)
        temp["precipProbability"] = daily_data[i].precipProbability > 0 ? "☔️" + (daily_data[i].precipProbability * 100).toFixed(0) + "%" : ""

        daily_list.push(temp)
    }

    let currHourly = `【${hourly_list[0].time}】 ${hourly_list[0].icon}${hourly_list[0].summary} ${hourly_list[0].precipProbability} ${hourly_list[0].temperature}`
    let currDaily = `【${daily_list[0].time}】 ${daily_list[0].icon}${daily_list[0].summary} ${daily_list[0].precipProbability} ${daily_list[0].temperatureMax}/${daily_list[0].temperatureMin}`

    var more = `${currHourly}\n${currDaily}\n【长按显示更多天气】\n\n`

    for (let i in hourly_list) {
        if (i == 0) { continue }

        let dict = hourly_list[i]
        more = more + `\n【${dict.time}】 ${dict.icon}${dict.summary} ${dict.precipProbability} ${dict.temperature}`
    }
    more = more + "\n\n"
    for (let i in daily_list) {
        if (i == 0) { continue }

        let dict = daily_list[i]
        more = more + `\n【${dict.time}】\n${dict.icon}${dict.summary} ${dict.precipProbability} ${dict.temperatureMax}/${dict.temperatureMin}`
    }

    console.log(`Weath:\n${more}`)
    $notify("Weath", "", more)

    $done();
}, reason => {
    console.log(`Weath:\n${reason.error}`)
    $notify("Weath", "", reason.error)

    $done();
})

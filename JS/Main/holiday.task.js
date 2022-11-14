
/**
 * 节日提醒 定时任务
 * @fan 20.7.15
 * 
 * 
 * imps 自定义节日
 * {"name":"节日名称", "start":"开始日期", "end":"结束日期(可省略)"}
 * 日期格式 xxxx-xx-xx
 * gapDay 多少天以内提醒(天)
 */


let imps = [{"name":"Fanの生日", "start":"10-21"}]
let gapDay = 35


var url = {
    url:"https://raw.githubusercontent.com/bv5204978/QXRelay/master/Api/holiday.json"
}

$task.fetch(url).then(response => {
    let data = JSON.parse(response.body)
// fetch(url.url).then(response => response.json()).then(data => {

    let imps_list = imps.concat(data)

    //当前时间
    let currDate = new Date()
    let currYear = currDate.getFullYear()
    let currStr = `${currDate.getFullYear()}-${("0" + (currDate.getMonth() + 1)).slice(-2)}-${("0" + currDate.getDate()).slice(-2)}`

    

    //排序
    imps_list.sort((a, b) => {

        var aDate;
        var bDate;

        if (a.start.split("-").length < 3) {
            aDate = new Date(`${currYear}-${a.start}`)
        } else {
            aDate = new Date(a.start)
        }
        if (b.start.split("-").length < 3) {
            bDate = new Date(`${currYear}-${b.start}`)
        } else {
            bDate = new Date(b.start)
        }

        return aDate - bDate
    });


    let currTime = new Date(currStr).getTime()
    
    var more = []
    for (var i in imps_list) {
        var imp = imps_list[i]

        if (imp.start.split("-").length < 3) {
            imp.start = currYear + "-" + imp.start
        }

        if (imp.end == undefined || imp.end.length == 0 || new Date(imp.end) < new Date(imp.start)) {
            imp.end = imp.start
        }

        let sTime = new Date(imp.start).getTime()
        let sDay = (sTime - currTime) / 1000 / 3600 / 24

        let eTime = new Date(imp.end).getTime()
        let eDay = (eTime - currTime) / 1000 / 3600 / 24

        if (sDay <= gapDay && eDay > 0) {
            if (sDay == eDay) {
                more.push(`\n距离【${imp.name}】还有【${sDay}】天`)
            } else if (sDay > 0) {
                more.push(`\n距离【${imp.name}】还有【${sDay}】天, 将为期${eDay - sDay + 1}天`)
            } else {
                more.push(`\n距离【${imp.name}】结束还有【${eDay}】天`)
            }
        }
    }


    if (more.length > 0) {
        console.log(`倒数日:\n${more.toString()}`)
        $notify("倒数日", "", more.toString())
    }

    $done();
}, reason => {
    console.log(`倒数日:\n${reason.error}`)
    $notify("倒数日", "", reason.error)

    $done();
})
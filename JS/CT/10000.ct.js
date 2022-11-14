/**
 * 微信公众号.安徽电信.个人中心.签到
 * 
 * @fan 2022.10.14
 * https://github.com/bv5204978/QXRelay/blob/master/JS/CT/10000.ct.js
 * 
 * 
 * MITM = wx.ah.189.cn
 * ^http:\/\/wx\.ah\.189\.cn\/AhdxTjyl\/qd\.do url script-request-body https://raw.githubusercontent.com/bv5204978/QXRelay/master/JS/CT/10000.ct.js
 * 
 * 5 0 * * * https://raw.githubusercontent.com/bv5204978/QXRelay/master/JS/CT/10000.ct.js, tag=电信签到, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Alpha/10000.png, enabled=true
 * 
 */


const taskName = '安徽电信公众号.签到'

const cookieKey = 'fan_10000_cookie'
const bodyKey = 'fan_10000_body'

const isRequest = typeof $request != "undefined"


start()

async function start() {
    if (isRequest) {
        getToken()
        $done({})
    } else {
        const r = await sign()
        $notify(taskName, "", r)
        console.log(`${taskName}\n${r}`)
        $done()
    }
}


// token
function getToken() {
    const cookieVal = $request.headers['Cookie']
    const bodyVal = $request.body

    if (cookieVal != null && bodyVal != null) {

        let cookie = $prefs.setValueForKey(cookieVal, cookieKey)
        let body = $prefs.setValueForKey(bodyVal, bodyKey)

        if (cookie && body) {
            $notify(taskName, 'cookie写入成功', '详见日志')
            console.log(`${taskName}\nCookie: ${cookieVal}\nBody: ${bodyVal}`)
        } else {
            $notify(taskName, 'cookie写入失败', '详见日志')
            console.log(`${taskName}\nCookie: ${cookieVal}\nBody: ${bodyVal}`)
        }
    } else {
        $notify(taskName, 'cookie获取失败', '详见日志')
        console.log(`${taskName}\nCookie: ${cookieVal}\nBody: ${bodyVal}`)
    }
}

// sign
function sign() {
    return new Promise((resolve) => {

        const cookieVal = $prefs.valueForKey(cookieKey)
        const bodyVal = $prefs.valueForKey(bodyKey)

        if (cookieVal != null && bodyVal != null) {
            const url = 'http://wx.ah.189.cn/AhdxTjyl/qd.do'

            const req = {
                url: url,
                method: 'POST',
                headers: {
                    'Cookie': cookieVal
                },
                body: bodyVal
            }

            $task.fetch(req).then(response => {
                console.log(`${taskName}\n请求结果: ${response.body}`)

                if (response.statusCode == 200) {
                    const body = JSON.parse(response.body)
                    if (body.code == 0) {
                        resolve('签到成功')
                    } else {
                        resolve(`签到失败: ${body.obj}`)
                    }
                } else {
                    resolve(`签到失败: \nresponse.status: ${response.status}`)
                }

            }, reason => {
                resolve(`请求失败: ${reason.error}`)
            })
        } else {
            resolve(`请先获取Cookie`)
        }
    })
}






//分开写

// const name = '安徽电信公众号.签到'

// const cookieKey = 'fan_10000_cookie'
// const bodyKey = 'fan_10000_body'

// const cookieVal = $request.headers['Cookie']
// const bodyVal = $request.body

// if (cookieVal != null && bodyVal != null) {

//     let cookie = $prefs.setValueForKey(cookieVal, cookieKey)
//     let body = $prefs.setValueForKey(bodyVal, bodyKey)

//     if (cookie && body) {
//         $notify(name,'cookie写入成功','详见日志')
//         console.log(name)
//         console.log(`${cookieVal}\n${bodyVal}`)
//     }
// }
// $done({})


// const name = '安徽电信公众号.签到'

// const cookieKey = 'fan_10000_cookie'
// const bodyKey = 'fan_10000_body'

// const cookieVal = $prefs.valueForKey(cookieKey)
// const bodyVal = $prefs.valueForKey(bodyKey)

// if (cookieVal != null && bodyVal != null) {
//     const url = 'http://wx.ah.189.cn/AhdxTjyl/qd.do'

//     const req = {
//         url: url,
//         method: 'POST',
//         headers: {
//             'Cookie': cookieVal
//         },
//         body: bodyVal
//     }

//     $task.fetch(req).then(response => {
//         console.log(response.body)
//         $done()
//     }, reason => {
//         console.log(reason.error)
//         $done()
//     })
// }

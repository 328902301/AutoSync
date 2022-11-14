/**
 * purefast.小鸡.签到
 * 
 * @fan 2022.10.15
 * https://github.com/bv5204978/QXRelay/blob/master/JS/CT/purefast.ct.js
 * 
 * 
 * MITM = purefast.net
 * ^https:\/\/purefast\.net\/user\/checkin  url script-request-body https://raw.githubusercontent.com/bv5204978/QXRelay/master/JS/CT/purefast.ct.js
 * 
 * 5 0 * * * https://raw.githubusercontent.com/bv5204978/QXRelay/master/JS/CT/purefast.ct.js, tag=PureFast签到, img-url=, enabled=true
 * 
 */


const taskName = 'PureFast.签到'

const cookieKey = 'fan_PureFast_cookie'

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

    if (cookieVal != null) {

        let cookie = $prefs.setValueForKey(cookieVal, cookieKey)

        if (cookie) {
            $notify(taskName, 'cookie写入成功', '详见日志')
            console.log(`${taskName}\nCookie: ${cookieVal}`)
        } else {
            $notify(taskName, 'cookie写入失败', '详见日志')
            console.log(`${taskName}\nCookie: ${cookieVal}`)
        }
    } else {
        $notify(taskName, 'cookie获取失败', '详见日志')
        console.log(`${taskName}\nCookie: ${cookieVal}`)
    }
}

// sign
function sign() {
    return new Promise((resolve) => {

        const cookieVal = $prefs.valueForKey(cookieKey)

        if (cookieVal != null) {
            const url = 'https://purefast.net/user/checkin'

            const req = {
                url: url,
                method: 'POST',
                headers: {
                    'Cookie': cookieVal
                },
            }

            $task.fetch(req).then(response => {
                console.log(`${taskName}\n请求结果: ${response.body}`)

                if (response.statusCode == 200) {

                    try {
                        const body = JSON.parse(response.body)
                        if (body.ret == 1) {
                            resolve(`签到成功: ${body.msg}`)
                        } else {
                            resolve(`签到失败: ${body.msg}`)
                        }
                    } catch (error) {
                        resolve(`签到失败: Cookie失效`)
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
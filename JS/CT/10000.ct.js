/**
 * 安徽电信.个人中心.签到(微信公众号)
 * 
 * @fan 2022.11.25
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
const ahdxKey = 'FAN_10000'

const isRequest = typeof $request != "undefined"



!(async function () {
    if (isRequest) {
        const msg = getToken()
        console.log(`${taskName}\n${msg}`)
        $notify(taskName, '', msg)
        $done({})
    } else {
        const msg = await sign()
        console.log(`${taskName}\n${msg}`)
        $notify(taskName, "", msg)
        $done()
    }
})()


// token
function getToken() {
    const cookieValue = $request.headers['Cookie']
    const bodyValue = $request.body

    if (cookieValue != null && bodyValue != null) {

        const ahdxValue = { 'cookie': cookieValue, 'body': bodyValue }
        const ahdxStr = JSON.stringify(ahdxValue)
        const ahdx = $prefs.setValueForKey(ahdxStr, ahdxKey)

        console.log(`${taskName}\ncookie: ${cookieValue}\nbody: ${bodyValue}`)

        return ahdx ? 'cookie&body写入成功' : 'cookie&body写入失败'
    } else {

        console.log(`${taskName}\ncookie: ${cookieValue}\nbody: ${bodyValue}`)

        return 'cookie&body获取失败'
    }
}

// sign
function sign() {
    return new Promise((resolve) => {

        const ahdxStr = $prefs.valueForKey(ahdxKey)

        if (ahdxStr != null) {
            const ahdxValue = JSON.parse(ahdxStr)

            const cookieValue = ahdxValue['cookie']
            const bodyValue = ahdxValue['body']


            const url = 'http://wx.ah.189.cn/AhdxTjyl/qd.do'

            const req = {
                url: url,
                method: 'POST',
                headers: {
                    'Cookie': cookieValue
                },
                body: bodyValue
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
                    resolve(`签到失败: \nstatus: ${response.status}`)
                }

            }, reason => {
                resolve(`请求失败: ${reason.error}`)
            })
        } else {
            resolve(`请先获取cookie&body`)
        }
    })
}
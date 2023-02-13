// 常用方法
// 样例 https://github.com/crossutility/Quantumult-X

$prefs.setValueForKey(val, key)
$prefs.valueForKey(key)
$prefs.removeValueForKey(key)
$prefs.removeAllValues()

console.log(message)
$notify(title, subtitle, message)


setTimeout(function () { }, interval)
str = JSON.stringify(obj)
obj = JSON.parse(str)



// Rewrite
headers
'Cookie'
'User-Agent'
'Content-Type': 'application/json' | ''
'Host': ''

$request
$request.sessionIndex 9
$request.scheme https
$request.method POST GET
$request.url 完整url
$request.path 后路径
$request.headers
$request.body

$done({}) $done({ path: '', headers: headers, body: body })


$reponse
$reponse.sessionIndex
$reponse.statusCode
$reponse.headers
$reponse.body
$reponse.bodyBytes(我不会用 不管了)

$done({}) $done({ status: 'HTTP/1.1 200 OK', headers: headers, body: body })
// HTTP/1.1 307 Temporary Redirect


$task
$done()




    // Rewrite
    ^ http://url url
// 对url 拒绝 | 成功无内容 | 成功1pxgif | 成功{} | 成功[] 
reject | reject - 200 | reject - img | reject - dict | reject - array
// 302 
302 xxx | 307 xxx
// 
request - header ^ GET / resource4 / HTTP / 1\.1(\r\n) request - header GET / api / HTTP / 1.1$1
request - header(\r\n)User - Agent:.+(\r\n) request - header $1User - Agent: Mozilla / 5.0(Macintosh; Intel Mac OS X 10_11_1) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 71.0.3578.98 Safari / 537.36$2
//
response - body "info": \[.+\], "others" response - body "info": [], "others"
// 只有$request, -header时body无
script - request - header request - header.js
script - request - body request - body.js
// $$都有, -header时body都无), -body时$request.body无
script - response - body response - body.js
script - response - header response - header.js
// 似乎只有 $request及.url.headers 一般不用
echo - response text / html echo - response index.html
script - echo - response script - echo.js





icon 144




/** 一般使用
const isRequest = typeof $request != "undefined"
const isResponse = typeof $response != "undefined"

const taskName = ''
const xxxKey = 'FAN_XXX'

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
    const cookieVal = $request.headers['Cookie']
    if (cookieValue != null) {
        const xxxValue = { 'cookie': cookieValue }
        const xxxStr = JSON.stringify(xxxValue)
        const xxx = $prefs.setValueForKey(xxxStr, xxxKey)
        console.log(`${taskName}\ncookie: ${cookieValue}`)
        return xxx ? 'cookie写入成功' : 'cookie写入失败'
    } else {
        console.log(`${taskName}\ncookie: ${cookieValue}`)
        return 'cookie获取失败'
    }
}

// sign
function sign() {
    return new Promise((resolve) => {

        const xxxStr = $prefs.valueForKey(xxxKey)

        if (xxxStr != null) {
            const xxxValue = JSON.parse(xxxStr)
            const cookieValue = xxxValue['cookie']

            const url = 'https://xxx'

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
                    const body = JSON.parse(response.body)
                    if (body.code == 0) {
                        resolve('签到成功')
                    } else {
                        resolve(`签到失败: ${body.obj}`)
                    }
                } else {
                    resolve(`签到失败: \nstatus: ${response.status}`)
                }
                try { throw new Error('')} catch {}
            }, reason => {
                resolve(`请求失败: ${reason.error}`)
            })
        } else {
            resolve(`请先获取cookie&body`)
        }
    })
}





//多任务

!(async function () {
  console.log('kaishi')

  //
  await Promise.all([
    func1(),
    func2()
  ]).then((values) => {
    console.log(values)
  })
  
  //
  const msg = await func3()
  console.log(msg)
  
  //
  console.log('jieshu')
  $done()
})()



//
function func1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('111111')
    }, 2000)
  })
}


function func2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('222222')
    }, 2000)
  })
}

function func3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('333333')
    }, 3000)
  })
}


*/
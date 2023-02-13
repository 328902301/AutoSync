/**
 * Telescope节点获取
 * 数据来自 https://t.me/yqc_123/1484 据说有效期90天
 * 账号 yqcrack@gmail.com @yqc_123
 * 
 * @fan 2022.11.14
 * 2022.11.18 up:更新token (如令牌失效可自行mitapp替换请求token)
 * 
 * 
 * 添加如下 节点订阅 重写订阅
 * [server_remote]
https://fan.github.com/telescope#aead=-1&sort=1&rename=[$emoji1]@+香港@[HK]+澳门@[MO]+台湾@[TW]+日本@[JP]+韩国@[KR]+菲律宾@[PH]+新加坡@[SGP]+泰国@[TH]+澳大利亚@[AU]+加拿大@[CA]+德国@[DE]+法国@[FR]+英国@[GB]+荷兰@[NL]+俄罗斯@[RU]+美国@[US], opt-parser=true, update-interval=86400, tag=Telescope
 * [rewrite_remote]
https://raw.githubusercontent.com/bv5204978/QXRelay/master/Rewrite_Server.conf, tag=Relay Rewrite_Server, update-interval=-1, enabled=true
 *
 * or 访问此链接直接导入 注: 务必 先更新重写订阅 再更新节点订阅
 * https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22server_remote%22%3A%5B%22https%3A%2F%2Ffan.github.com%2Ftelescope%23aead%3D-1%26sort%3D1%26rename%3D%5B%24emoji1%5D%40%2B%E9%A6%99%E6%B8%AF%40%5BHK%5D%2B%E6%BE%B3%E9%97%A8%40%5BMO%5D%2B%E5%8F%B0%E6%B9%BE%40%5BTW%5D%2B%E6%97%A5%E6%9C%AC%40%5BJP%5D%2B%E9%9F%A9%E5%9B%BD%40%5BKR%5D%2B%E8%8F%B2%E5%BE%8B%E5%AE%BE%40%5BPH%5D%2B%E6%96%B0%E5%8A%A0%E5%9D%A1%40%5BSGP%5D%2B%E6%B3%B0%E5%9B%BD%40%5BTH%5D%2B%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%40%5BAU%5D%2B%E5%8A%A0%E6%8B%BF%E5%A4%A7%40%5BCA%5D%2B%E5%BE%B7%E5%9B%BD%40%5BDE%5D%2B%E6%B3%95%E5%9B%BD%40%5BFR%5D%2B%E8%8B%B1%E5%9B%BD%40%5BGB%5D%2B%E8%8D%B7%E5%85%B0%40%5BNL%5D%2B%E4%BF%84%E7%BD%97%E6%96%AF%40%5BRU%5D%2B%E7%BE%8E%E5%9B%BD%40%5BUS%5D%2C%20opt-parser%3Dtrue%2C%20update-interval%3D86400%2C%20tag%3DTelescope%22%5D%2C%22filter_remote%22%3A%5B%22filter_remote%E5%86%85%E5%AE%B9%22%5D%2C%22rewrite_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2Fbv5204978%2FQXRelay%2Fmaster%2FRewrite_Server.conf%2C%20tag%3DRelay%20Rewrite_Server%2C%20update-interval%3D-1%2C%20enabled%3Dtrue%22%5D%7D
 * 
 */

var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (input) { var output = ""; var chr1, chr2, chr3, enc1, enc2, enc3, enc4; var i = 0; input = Base64._utf8_encode(input); while (i < input.length) { chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) { enc3 = enc4 = 64 } else if (isNaN(chr3)) { enc4 = 64 } output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4) } return output }, decode: function (input) { var output = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4; var i = 0; input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (i < input.length) { enc1 = this._keyStr.indexOf(input.charAt(i++)); enc2 = this._keyStr.indexOf(input.charAt(i++)); enc3 = this._keyStr.indexOf(input.charAt(i++)); enc4 = this._keyStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) { output = output + String.fromCharCode(chr2) } if (enc4 != 64) { output = output + String.fromCharCode(chr3) } } output = Base64._utf8_decode(output); return output }, _utf8_encode: function (string) { var utftext = ""; string = string.replace(/\r\n/g, "\n"); for (var n = 0; n < string.length; n++) { var c = string.charCodeAt(n); if (c < 128) { utftext += String.fromCharCode(c) } else if ((c > 127) && (c < 2048)) { utftext += String.fromCharCode((c >> 6) | 192); utftext += String.fromCharCode((c & 63) | 128) } else { utftext += String.fromCharCode((c >> 12) | 224); utftext += String.fromCharCode(((c >> 6) & 63) | 128); utftext += String.fromCharCode((c & 63) | 128) } } return utftext }, _utf8_decode: function (utftext) { var string = ""; var i = 0; var c, c1, c2, c3; c = c1 = c2 = 0; while (i < utftext.length) { c = utftext.charCodeAt(i); if (c < 128) { string += String.fromCharCode(c); i++ } else if ((c > 191) && (c < 224)) { c2 = utftext.charCodeAt(i + 1); string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); i += 2 } else { c2 = utftext.charCodeAt(i + 1); c3 = utftext.charCodeAt(i + 2); string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); i += 3 } } return string } }


!(async function () {
  var headers = $response.headers
  headers['Content-Type'] = 'text/plain; charset=utf-8'

  if ($request.path.match("telescope") != null) {
    var body = await getTelescope()

    const isSuccess = body.match(/ssr:\/\/[A-Za-z0-9+\/\-_]*/) != null
    console.log(isSuccess ? `Telescope节点 获取成功\n${body}` : `Telescope节点 获取失败\n${body}`)

    $done({ status: 'HTTP/1.1 200 OK', headers: headers, body: isSuccess ? body : '' })
  } else if ($request.path.match("xxx") != null) {
    // var body = await getMrdoorVPN()

    // const isSuccess = body.match(/ssr:\/\/[A-Za-z0-9+\/\-_]*/) != null
    // console.log(isSuccess ? `MrdoorVPN节点 获取成功\n${body}` : `MrdoorVPN节点 获取失败\n${body}`)

    // $done({ status: 'HTTP/1.1 200 OK', headers: headers, body: isSuccess ? body : '' })
  } else {
    $done({ status: 'HTTP/1.1 200 OK', headers: headers, body: '' })
  }
})()


// 
function getTelescope() {
  return new Promise((resolve) => {

    const url = 'https://api-2.quickg.cc/api/v5/nodes/'

    const headers = {
      'Connection': `keep-alive`,
      'Accept-Encoding': `gzip, deflate, br`,
      'channel': `GW`,
      'User-Agent': `Telescope/212 CFNetwork/1335.0.3 Darwin/21.6.0`,
      'platform': `ios`,
      'imei': `b701879655ba4615ad07dccea06d1ef0`,
      'Authorization': `Token 9ca3dd2f4e84af2a190ed8775d3aa543585fe62c`,
      'systemVersion': `15.6.1`,
      'Host': `api-2.quickg.cc`,
      'appVersion': `2.1.1`,
      'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
      'Accept': `application/json`
    };

    const req = {
      url: url,
      method: 'POST',
      headers: headers,
      body: ''
    }

    $task.fetch(req).then(response => {

      if (response.statusCode == 200) {

        try {
          const body = JSON.parse(response.body)

          var servers = []

          var list = body.data
          for (var i in list) {
            var map = list[i]

            var password = Base64.encode(map['passwd'])
            password = password.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

            var remarks = Base64.encode(map['name'])
            remarks = remarks.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

            var protoparam = Base64.encode(map['protoparam'])
            protoparam = protoparam.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

            var obfsparam = Base64.encode(map['obfsparam'])
            obfsparam = obfsparam.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

            var server = `${map['ip']}:${map['port']}:${map['protocol']}:${map['method']}:${map['obfs']}:${password}/?remarks=${remarks}&protoparam=${protoparam}&obfsparam=${obfsparam}`

            server = `ssr://${Base64.encode(server)}`
            servers.push(server)
          }
          resolve(servers.join('\n'))
        } catch (error) {
          resolve(`${error}`)
        }

      } else {
        resolve(`${response.body}`)
      }

    }, reason => {
      resolve(`${reason.error}`)
    })

  })
}



// // 
// function getMrdoorVPN() {
//   return new Promise((resolve) => {

//     const url = 'https://api-2.quickg.cc/api/v5/nodes/'

//     const headers = {
//       'Connection': `keep-alive`,
//       'Accept-Encoding': `gzip, deflate, br`,
//       'channel': `GW`,
//       'User-Agent': `Telescope/212 CFNetwork/1335.0.3 Darwin/21.6.0`,
//       'platform': `ios`,
//       'imei': `b701879655ba4615ad07dccea06d1ef0`,
//       'Authorization': `Token 9ca3dd2f4e84af2a190ed8775d3aa543585fe62c`,
//       'systemVersion': `15.6.1`,
//       'Host': `api-2.quickg.cc`,
//       'appVersion': `2.1.1`,
//       'Accept-Language': `zh-CN,zh-Hans;q=0.9`,
//       'Accept': `application/json`
//     };

//     const req = {
//       url: url,
//       method: 'POST',
//       headers: headers,
//       body: ''
//     }

//     $task.fetch(req).then(response => {

//       if (response.statusCode == 200) {

//         try {
//           const body = JSON.parse(response.body)

//           var servers = []

//           var list = body.data
//           for (var i in list) {
//             var map = list[i]

//             var password = Base64.encode(map['passwd'])
//             password = password.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

//             var remarks = Base64.encode(map['name'])
//             remarks = remarks.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

//             var protoparam = Base64.encode(map['protoparam'])
//             protoparam = protoparam.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

//             var obfsparam = Base64.encode(map['obfsparam'])
//             obfsparam = obfsparam.match(/(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2,4})/)[0]

//             var server = `${map['ip']}:${map['port']}:${map['protocol']}:${map['method']}:${map['obfs']}:${password}/?remarks=${remarks}&protoparam=${protoparam}&obfsparam=${obfsparam}`

//             server = `ssr://${Base64.encode(server)}`
//             servers.push(server)
//           }
//           resolve(servers.join('\n'))
//         } catch (error) {
//           resolve(`${error}`)
//         }

//       } else {
//         resolve(`${response.body}`)
//       }

//     }, reason => {
//       resolve(`${reason.error}`)
//     })

//   })
// }
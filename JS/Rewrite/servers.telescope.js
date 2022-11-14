/**
 * Telescope节点获取
 * 数据来自 https://t.me/yqc_123/1484 据说有效期90天
 * 
 * @fan 2022.11.14
 * https://raw.githubusercontent.com/bv5204978/QXRelay/master/Rewrite_Server.conf
 * 
 * 
 * 添加
 * [server_remote]
https://fan.github.com/telescope#aead=-1&sort=1&rename=[$emoji1]@+香港@[HK]+澳门@[MO]+台湾@[TW]+日本@[JP]+韩国@[KR]+菲律宾@[PH]+新加坡@[SGP]+泰国@[TH]+澳大利亚@[AU]+加拿大@[CA]+德国@[DE]+法国@[FR]+英国@[GB]+荷兰@[NL]+俄罗斯@[RU]+美国@[US], opt-parser=true, update-interval=86400, tag=Telescope
 * 
 * [rewrite_remote]
https://raw.githubusercontent.com/bv5204978/QXRelay/master/Rewrite_Server.conf#type=list, tag=Relay Rewrite_Server, update-interval=-1, opt-parser=true, enabled=true
 * 
 */

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}output=output+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4)}return output},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}output=Base64._utf8_decode(output);return output},_utf8_encode:function(string){var utftext="";string=string.replace(/\r\n/g,"\n");for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}return utftext},_utf8_decode:function(utftext){var string="";var i=0;var c,c1,c2,c3;c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return string}}



start()

async function start() {

  var headers = $response.headers

  headers['Content-Type'] = 'text/plain; charset=utf-8'

  var body = await getServers()
  
  console.log(body.length == 0 ? 'Telescope节点获取失败' : 'Telescope节点获取成功')

  $done({ status: 'HTTP/1.1 200 OK', headers: headers, body: body })
}


function getServers() {
  return new Promise((resolve) => {

    const url = 'https://api-2.quickg.cc/api/v5/nodes/'

    const headers = {
      'Connection': `keep-alive`,
      'Accept-Encoding': `gzip, deflate, br`,
      'channel': `GW`,
      'User-Agent': `Telescope/212 CFNetwork/1335.0.3 Darwin/21.6.0`,
      'platform': `ios`,
      'imei': `510fae92f96f4decabff098da60a60c9`,
      'Authorization': `Token 3e4559ad6f94d232e903e0ea378023ed6cecd2d6`,
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
          resolve(``)
        }

      } else {
        resolve(``)
      }

    }, reason => {
      resolve(``)
    })

  })
}





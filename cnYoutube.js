const BASE_URL = 'https://www.youtube.com/premium'

;(async () => {
  let result = {
    title: "瞅瞅你的Premium有没有白办！",
    icon: "wifi.slash",
	  'icon-color':"#000000",
    content: "你快刷新我一下的喔！网络不怎么好喔！",
  }
  await test()
    .then((code) => {
      if (code === 'Not Available') {
        result['title'] = "你的Premium有点不对劲的喔！"
        result['icon'] = "exclamationmark.triangle"
	        result['icon-color'] = '#DC143C'
        result['content'] = "哇！你的Premium白办了耶！不能用喔"
      } else {
        result['title'] = "我的宝！看看你的Youtube喔！"
        result['icon'] = "checkmark.seal.fill"
	        result['icon-color'] = '#3CB371'
        result['content'] = "宝~ 在" + code.toUpperCase() + "你的Premium不白办的喔！"
      }
    })
    .catch((error) => {
      result['title'] = "瞅瞅你的Premium有没有白办！"
      result['icon'] = "eye.slash"
	     result['icon-color'] = "#DC143C"
      result['content'] = "你快刷新我一下的喔！网络不怎么好喔！"
    })
    .finally(() => {
      $done(result)
    })
})()

function test() {
  return new Promise((resolve, reject) => {
    let option = {
      url: BASE_URL,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
        'Accept-Language': 'en',
      },
    }
    $httpClient.get(option, function (error, response, data) {
      if (error != null || response.status !== 200) {
        reject('Error')
        return
      }

      if (data.indexOf('Premium is not available in your country') !== -1) {
        reject('Not Available')
        return
      }

      let region = ''
      let re = new RegExp('"countryCode":"(.*?)"', 'gm')
      let result = re.exec(data)
      if (result != null && result.length === 2) {
        region = result[1]
      } else if (data.indexOf('www.google.cn') !== -1) {
        region = 'CN'
      } else {
        region = 'US'
      }
      resolve(region)
    })
  })
}
function getParams(param) {
  return Object.fromEntries(
    $argument
      .split("&")
      .map((item) => item.split("="))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
}

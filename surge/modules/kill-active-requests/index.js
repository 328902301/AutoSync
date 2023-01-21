//  : { purpose: "panel", position: "policy-selection", panelName: "PanelB" }, $trigger: "button" // or "auto-interval"

const isPanel = () => typeof $input != 'undefined' && $input.purpose === 'panel'

let arg
if (typeof $argument != 'undefined') {
  arg = Object.fromEntries($argument.split('&').map(item => item.split('=')))
}

let result = {}
!(async () => {
  if (isPanel()) {
    if ($input.$trigger === 'button') {
      const { requests = [] } = (await httpAPI('/v1/requests/active', 'GET')) || {}
      for await (const { id } of requests) {
        // console.log(id)
        const res = await httpAPI('/v1/requests/kill', 'POST', { id })
        // console.log(res)
      }
    }
    const { requests = [] } = (await httpAPI('/v1/requests/active', 'GET')) || {}
    result = { title: `活跃请求数: ${requests.length}`, content: '点击一键打断', ...arg }
  } else {
    // console.log(JSON.stringify($network, null, 2))
    let wifi = $network.wifi && $network.wifi.bssid
    if (wifi) {
      // console.log(`现在有 wifi`)
      $persistentStore.write(wifi, 'last_network')
    } else {
      // console.log(`现在无 wifi`)
      wifi = $persistentStore.read('last_network')
      // console.log(`但是之前有 wifi`)
      if (wifi) {
        const { requests = [] } = (await httpAPI('/v1/requests/active', 'GET')) || {}
        for await (const { id } of requests) {
          // console.log(id)
          const res = await httpAPI('/v1/requests/kill', 'POST', { id })
          // console.log(res)
        }
        $notification.post('网络变化', '打断请求', `${requests.length} 个`)
      }
      $persistentStore.write('', 'last_network')
    }
  }
})()
  .catch(e => {
    console.log(e)
    const msg = `${e.message || e}`
    if (isPanel()) {
      result = { title: '❌', content: msg, ...arg }
    } else {
      $.msg('网络变化', `❌ 打断请求`, msg)
    }
  })
  .finally(() => $done(result))

function httpAPI(path = '', method = 'POST', body = null) {
  return new Promise(resolve => {
    $httpAPI(method, path, body, result => {
      resolve(result)
    })
  })
}

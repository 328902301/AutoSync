!(async () => {
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
  $done()
})()
  .catch(e => {
    console.log(e)
    $.msg('网络变化', `❌ 打断请求`, `${e.message || e}`)
  })
  .finally(() => $done())

function httpAPI(path = '', method = 'POST', body = null) {
  return new Promise(resolve => {
    $httpAPI(method, path, body, result => {
      resolve(result)
    })
  })
}

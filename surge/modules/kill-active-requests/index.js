!(async () => {
  // console.log(JSON.stringify($network, null, 2))
  if(!$network.wifi || !$network.wifi.bssid){
    const { requests = [] } = (await httpAPI('/v1/requests/active', 'GET')) || {}
    for await (const { id } of requests) {
      // console.log(id)
      const res = await httpAPI('/v1/requests/kill', 'POST', { id })
      // console.log(res)
    }
    $notification.post('网络变化', '打断请求', `${requests.length} 个`)
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

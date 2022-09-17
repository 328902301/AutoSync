var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data ='046ef1bab26e5b9bfe2473ded237b572'
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
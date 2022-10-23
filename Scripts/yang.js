// https://github.com/yangdaozhao/ylgy/blob/master/ylgy.js

var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.blockTypeData = {}
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}

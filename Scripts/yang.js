// https://github.com/yangdaozhao/ylgy/blob/master/ylgy.js

if ($response.body) {
  var obj = JSON.parse($response.body)
  obj.blockTypeData = {}
  $done({body: JSON.stringify(obj)})
} else {
  $done({})
}

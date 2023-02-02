let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function (error, response, data) {
  let jsonData = JSON.parse(data)
  let country = jsonData.country
  let emoji = getFlagEmoji(jsonData.countryCode)
  let time = jsonData.timezone
  let city = jsonData.city
  let code = jsonData.countryCode
  let name = jsonData.regionName
  let zip = jsonData.zip
  let isp = jsonData.isp
  let ip = jsonData.query
  let lon = jsonData.lon
  let lat = jsonData.lat

  body = {
    title: "节点网络",
    content: `国家：${emoji} ${country} ${code}\n地区：${name} ${city}\n邮编：${zip}\n时区：${time}\n运营商：${isp}\nIP：${ip}\n经度：${lon}\n纬度：${lat}`,
    icon: "globe.asia.australia.fill",
    backgroundColor: '#ef4136',
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

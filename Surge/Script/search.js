const engineData = {
  bd: "https://www.baidu.com/s?wd=%@", // 百度
  bi: "https://cn.bing.com/search?q=%@", // 必应
  mg: "https://magi.com/search?q=%@", // Mag[i]
  ph: "https://cn.pornhub.com/video/search?search=%@", // Pronhub
  gm: "https://www.google.com/search?&tbm=isch&q=%@", // 谷歌图片
  yd: "http://dict.youdao.com/search?q=%@", // 有道词典
  zh: "https://www.zhihu.com/search?type=content&q=%@", // 知乎
  wk: "https://zh.m.wikipedia.org/w/index.php?search=%@", // 维基百科
  ytb: "https://www.youtube.com/results?search_query=%@", // YouTube
  kgc: "https://www.kugeci.com/search?q=%@", // 酷歌词
  bk: "https://baike.baidu.com/item/%@" // 百度百科
};

let url = $request.url;
let headers = $request.headers;
let commands = Object.keys(engineData);
let keyword = url.match(/google\.cn\/search\?q=([^&]+)/);
if (keyword) {
  let pattern = new RegExp(`^(${commands.join("|")})\\+`, "g");
  let command = keyword[1].match(pattern);
  if (command) {
    keyword = keyword[1].replace(command[0], "");
    url = engineData[command[0].replace(/\+/, "")].replace(/%@/, keyword);
    $done({ response: { status: 302, headers: {Location: url} } });
  } else {
    header = url.replace(/google\.cn/, "google.com");
    headers['Host'] = 'www.google.com';
    $done({ url: header, headers });
  }
} else {
  $done({});
}
function origStr() {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz'
}

function fontStr() {
  return '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇'
}

function conv(cc) {
  let str = '';
  for (let i = 0; i < cc.length; i++) {
    if (origStr().indexOf(cc.charAt(i)) !== -1) str += fontStr().charAt(origStr().indexOf(cc.charAt(i)));
    else str += cc.charAt(i);
  }
  return str;
}

// 主函数
function operator(proxies) {
  proxies.map((res) => {
    res.name = conv(res.name).toString("UTF-8");
  });
  return proxies;
}

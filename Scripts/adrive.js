// 2023-01-30 19:40

if (!$response.body) $done({});
let obj = JSON.parse($response.body);

let item = [
  "recentUsed", // 最近在看
  "coreFeatures", // 顶部图标
  // "recentSaved", // 最近转存
  "signIn" // 顶部签到
];
if (obj) {
  item.forEach((i) => {
    delete obj[i];
  });
}

$done({ body: JSON.stringify(obj) });

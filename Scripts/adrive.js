// 2023-02-11 16:25

let obj = JSON.parse($response.body);
const item = [
  "recentUsed", // 最近在看
  "coreFeatures", // 顶部图标
  "activities", // 精选活动
  "myBackup", // 我的备份
  // "recentSaved", // 最近转存
  "signIn" // 顶部签到
];

if (!$response.body) {
  $done({});
} else {
  item.forEach((i) => {
    delete obj[i];
  });
  $done({ body: JSON.stringify(obj) });
}

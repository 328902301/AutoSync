/*
针对QuantumultX下载AppleStore应用速度过慢的几种解决措施：
1.为Apple添加分流，走代理
2.清除QX的DNS缓存，添加定时脚本(每天晚9点清理一次）
[task_local]
0 21 * * * https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/dns.js
*/

const message = {
  action: "dns_clear_cache"
};

$configuration.sendMessage(message).then(
  (resolve) => {
    if (resolve.ret) {
      $notify("dnsCache Cleared!");
    } else {
      $notify(resolve.error);
    }
    $done();
  },
  (reject) => {
    $done();
  }
);

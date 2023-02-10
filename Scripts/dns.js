/*
每晚9点清理一次qx的dns缓存
在配置文件里面添加此定时脚本

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

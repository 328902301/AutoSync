/*
在配置文件里面添加此定时脚本
每天21点清理一次qx的dns缓存

[task_local]
0 21 * * * https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/dns.js, tag=dns, enabled=true
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

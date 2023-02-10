/*

针对QuantumultX下载AppleStore应用速度过慢的几种解决措施：

1、为apple添加代理分流

2、禁用配置文件【DNS】下的no-system或将【DNS】下内容全部删除

3、清除QX的DNS缓存，添加定时脚本from@unknowntokyo(每天晚9点清理一次）

0 21 * * * https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/dns.js

以上三种方式，可自行尝试，选择适合自己的使用

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

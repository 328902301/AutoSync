## cf worker版本部署

首页：https://workers.cloudflare.com

注册，登陆，`Start building`，取一个子域名，`Create a Worker`。

复制 [index.js](https://cdn.jsdelivr.net/hunshcn/gh-proxy@master/index.js)  到左侧代码框，`Save and deploy`。如果正常，右侧应显示首页。

`index.js`默认配置下clone走github.com.cnpmjs.org，项目文件会走jsDeliver，如需走worker，修改Config变量即可

`ASSET_URL`是静态资源的url（实际上就是现在显示出来的那个输入框单页面）

`PREFIX`是前缀，默认（根路径情况为"/"），如果自定义路由为example.com/gh/*，请将PREFIX改为 '/gh/'，注意，少一个杠都会错！

## Cloudflare Workers计费

到 `overview` 页面可参看使用情况。免费版每天有 10 万次免费请求，并且有每分钟1000次请求的限制。

如果不够用，可升级到 $5 的高级版本，每月可用 1000 万次请求（超出部分 $0.5/百万次请求）。

## 链接

[原作者博客](https://hunsh.net)
[Fork自hunshcn](https://github.com/hunshcn/gh-proxy)

## 参考

[jsproxy](https://github.com/EtherDream/jsproxy/)

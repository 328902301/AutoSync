## cf worker版本部署

首页：https://workers.cloudflare.com

注册，登陆，`Start building`，取一个子域名，`Create a Worker`。

复制 [index.js](https://cdn.jsdelivr.net/hunshcn/gh-proxy@master/index.js)  到左侧代码框，`Save and deploy`。如果正常，右侧应显示首页。

`index.js`默认配置下clone走github.com.cnpmjs.org，项目文件会走jsDeliver，如需走worker，修改Config变量即可

`ASSET_URL`是静态资源的url（实际上就是现在显示出来的那个输入框单页面）

`PREFIX`是前缀，默认（根路径情况为"/"），如果自定义路由为example.com/gh/*，请将PREFIX改为 '/gh/'，注意，少一个杠都会错！
##托管一个域名到cloudflare

登录cf，然后点击网站，添加你的域名，按提示完成域名托管，不同域名提供商有不同的修改域名服务器的方式，请自行查看自己域名购买的供应商提供的dns服务器修改教程

## DNS配置

配置好后，你的主页会显示你的网址，点进去，进入DNS配置，添加一个DNS解析
按照图片设置就行，ip地址随便填无所谓，最好写一个能ping的，记得一定要开启小云朵！

## 配置域名加速workers

打开你网址下面的workers，不是主页下面的workers！！

点击添加路由
第一个空输入  你的域名/* （我的域名是 palesmile.cf所以我输入 palesmile.cf/* ）

第二个选择你在主页workers里面创建的git加速的名字，你设置的啥他就叫啥！ （我的加速站名字就是 github 我就选 github）

第三个只有一个选项，你就选它就行
# 保存

## Cloudflare Workers计费

到 `overview` 页面可参看使用情况。免费版每天有 10 万次免费请求，并且有每分钟1000次请求的限制。

如果不够用，可升级到 $5 的高级版本，每月可用 1000 万次请求（超出部分 $0.5/百万次请求）。

## 链接

[原作者博客](https://hunsh.net)
[Fork自hunshcn](https://github.com/hunshcn/gh-proxy)

## 参考

[jsproxy](https://github.com/EtherDream/jsproxy/)

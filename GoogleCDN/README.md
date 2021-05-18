# 介绍
WorkersProxy 是一个轻量级的 Javascript 应用程序，可从其他服务器作为客户端检索资源。

在 Cloudflare Workers 上进行部署时，您可以构建自定义的反向代理，而无需购买计算引擎和配置 Nginx 等 Web 服务器。

此外，由于您的应用程序将通过 Cloudflare 遍布 90 多个国家 / 地区的全球数据中心网络进行分发，因此将优化关键性能，例如延迟和可用性。

通过配置地理位置和 IP 地址过滤器，您可以根据其特定规定在特定国家或地区直接暂停反向代理服务。利用移动重定向器，您可以根据用户的设备分发各种网页

# 在Cloudflare Workers上构建和部署。
wrangler build
wrangler publish
# 手动部署
导航到Cloudflare Workers，注册或登录您的Cloudflare帐户，并为worker设置自定义子域，然后创建一个新的Worker。

自定义“ src / index.js ”，将代码粘贴到Cloudflare在线编辑器中以替换默认代码。

更改您的Worker的名称，保存并部署它，并检查其性能是否满足您的需求。

* 绑定到自定义域
检查您的域当前是否处于Cloudflare的保护之下。

导航到您域的信息中心，选择“工作人员”页面，然后单击“添加路线”。

键入https://<domain_name>/*在Route选择之前创建的工人。

为您的自定义域添加CNAME DNS记录。具体而言，在“名称”字段中输入子域（或在根目录中为“ @”），在“目标”字段中输入工作人员的二级域，然后将“代理状态”设置为“代理”。

* 自定义index.js
基本上，'index.js'文件顶部有一些常量。

要自定义自己的“工人代理服务”，应根据需要编辑这些常量。

// Website you intended to retrieve for users.
const upstream = 'www.google.com'

// Custom pathname for the upstream website.
const upstream_path = '/'

// Website you intended to retrieve for users using mobile devices.
const upstream_mobile = 'www.google.com'

// Countries and regions where you wish to suspend your service.
const blocked_region = ['CN', 'KP', 'SY', 'PK', 'CU']

// IP addresses which you wish to block from using your service.
const blocked_ip_address = ['0.0.0.0', '127.0.0.1']

// Whether to use HTTPS protocol for upstream address.
const https = true

// Whether to disable cache.
const disable_cache = false

// Replace texts.
const replace_dict = {
    '$upstream': '$custom_domain',
    '//google.com': ''
}
## 特别感谢：
* [膨胀面包](https://blog.error.work/qd/47.html)

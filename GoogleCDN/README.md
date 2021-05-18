# 介绍
WorkersProxy 是一个轻量级的 Javascript 应用程序，可从其他服务器作为客户端检索资源。

在 Cloudflare Workers 上进行部署时，您可以构建自定义的反向代理，而无需购买计算引擎和配置 Nginx 等 Web 服务器。

此外，由于您的应用程序将通过 Cloudflare 遍布 90 多个国家 / 地区的全球数据中心网络进行分发，因此将优化关键性能，例如延迟和可用性。

通过配置地理位置和 IP 地址过滤器，您可以根据其特定规定在特定国家或地区直接暂停反向代理服务。利用移动重定向器，您可以根据用户的设备分发各种网页

# 部署
导航到 Cloudflare Workers，注册或登录您的 Cloudflare 帐户，并为 worker 设置自定义子域，然后创建一个新的 Worker。

自定义 “index.js”，将代码粘贴到 Cloudflare 在线编辑器中以替换默认代码。

更改工作人员的名称，保存并部署它，并检查其性能是否满足您的需求。

# 绑定域名
检查您的域当前是否处于 Cloudflare 的保护之下。

导航到您的域的仪表板，选择 “工作人员” 页面，然后单击 “添加路线”。

键入 https://<;domain-name>/* 在 Route 选择之前创建的工人。

为您的自定义域添加 CNAME DNS 记录。具体而言，在 “名称” 字段中输入子域（或在根目录中为 “ @”），在 “目标” 字段中输入工作人员的二级域，然后将 “代理状态” 设置为 “代理”。

# 自定义 index.js
显然，在主 Javascript 文件的顶部定义了一些常量。

要自定义自己的 WorkersProxy 服务，您应根据自己的期望进行编辑。

// List of domains bind to your WorkersProxy.
const domain_list = ['https://google.error.workers.dev']

// Website you intended to retrieve for users.
const upstream = 'https://www.google.com/'

// Website you intended to retrieve for users using mobile devices.
const upstream_mobile = 'https://www.google.com/'

// Countries and regions where you wish to suspend your service.
const blocked_region = ['KP', 'SY', 'PK', 'CU']

// IP addresses which you wish to block from using your service.
const blocked_ip_address = ['0.0.0.0', '127.0.0.1']


addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})

async function fetchAndApply(request) {

    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const ip_address = request.headers.get('cf-connecting-ip');
    const user_agent = request.headers.get('user-agent');
    const http = "http://";
    const https = "https://";
    
    let response = null;
    let url = request.url;

    if (url.startsWith(http)) {
        url = url.replace(http, https);
        response = Response.redirect(url);
        return response;
    }

    if (await device_status(user_agent)) {
        upstream_domain = upstream
    } else {
        upstream_domain = upstream_mobile
    }

    for(let domain of domain_list) {
        url = url.replace(domain, upstream_domain)
    };

    if (blocked_region.includes(region)) {
        response = new Response('Access denied: WorkersProxy is not available in your region yet.', {
            status: 403
        });
    } else if(blocked_ip_address.includes(ip_address)){
        response = new Response('Access denied: Your IP address is blocked by WorkersProxy.', {
            status: 403
        });
    } else{
        let method = request.method;
        let request_headers = request.headers;
        let new_request_headers = new Headers(request_headers)
        let host_name = upstream_domain.replace(http, '')
        host_name = upstream_domain.replace(https, '')
        host_name = upstream_domain.replace('/', '')

        new_request_headers.set('Host', host_name)
        new_request_headers.set('Referer', upstream_domain)

        origin_response = await fetch(url, {
            method: method,
            headers: new_request_headers
        })
        
        let response_body = origin_response.body
        let response_headers = origin_response.headers
        let new_response_headers = new Headers(response_headers)
        let status = origin_response.status
        
        new_response_headers.set('access-control-allow-origin', '*');
        new_response_headers.set('access-control-allow-credentials', true);
        new_response_headers.delete('content-security-policy');
        new_response_headers.delete('content-security-policy-report-only');
        new_response_headers.delete('clear-site-data');

        response = new Response(response_body, {
            status,
            headers: response_headers
        })
    }
    return response;
}

async function device_status (userAgentInfo) {
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
domain_list：主域名，可以是自己的域名，记得做好解析

upstream、upstream_mobile：反代的网址，两者保持一致即可除非该网站有移动端的域名

blocked_region：禁止访问的地区，记得去除'CN


##二.

// 替换成你想镜像的站点
const upstream = 'example.com'
 
// 如果那个站点有专门的移动适配站点，否则保持和上面一致
const upstream_mobile = 'example.com'
 
// 你希望禁止哪些国家访问
const blocked_region = ['KP']
 
// 禁止自访问
const blocked_ip_address = ['0.0.0.0', '127.0.0.1']
 
// 替换成你想镜像的站点
const replace_dict = {
    '$upstream': '$custom_domain',
    '//google.com': ''
}
 
//以下内容都不用动
addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})
 
async function fetchAndApply(request) {
 
    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const ip_address = request.headers.get('cf-connecting-ip');
    const user_agent = request.headers.get('user-agent');
 
    let response = null;
    let url = new URL(request.url);
    let url_host = url.host;
 
    if (url.protocol == 'http:') {
        url.protocol = 'https:'
        response = Response.redirect(url.href);
        return response;
    }
 
    if (await device_status(user_agent)) {
        upstream_domain = upstream
    } else {
        upstream_domain = upstream_mobile
    }
 
    url.host = upstream_domain;
 
    if (blocked_region.includes(region)) {
        response = new Response('Access denied: WorkersProxy is not available in your region yet.', {
            status: 403
        });
    } else if(blocked_ip_address.includes(ip_address)){
        response = new Response('Access denied: Your IP address is blocked by WorkersProxy.', {
            status: 403
        });
    } else{
        let method = request.method;
        let request_headers = request.headers;
        let new_request_headers = new Headers(request_headers);
 
        new_request_headers.set('Host', upstream_domain);
        new_request_headers.set('Referer', url.href);
 
        let original_response = await fetch(url.href, {
            method: method,
            headers: new_request_headers
        })
 
        let original_response_clone = original_response.clone();
        let original_text = null;
        let response_headers = original_response.headers;
        let new_response_headers = new Headers(response_headers);
        let status = original_response.status;
 
        new_response_headers.set('access-control-allow-origin', '*');
        new_response_headers.set('access-control-allow-credentials', true);
        new_response_headers.delete('content-security-policy');
        new_response_headers.delete('content-security-policy-report-only');
        new_response_headers.delete('clear-site-data');
 
        const content_type = new_response_headers.get('content-type');
        if (content_type.includes('text/html') && content_type.includes('UTF-8')) {
            original_text = await replace_response_text(original_response_clone, upstream_domain, url_host);
        } else {
            original_text = original_response_clone.body
        }
 
        response = new Response(original_text, {
            status,
            headers: new_response_headers
        })
    }
    return response;
}
 
async function replace_response_text(response, upstream_domain, host_name) {
    let text = await response.text()
 
    var i, j;
    for (i in replace_dict) {
        j = replace_dict[i]
        if (i == '$upstream') {
            i = upstream_domain
        } else if (i == '$custom_domain') {
            i = host_name
        }
 
        if (j == '$upstream') {
            j = upstream_domain
        } else if (j == '$custom_domain') {
            j = host_name
        }
 
        let re = new RegExp(i, 'g')
        text = text.replace(re, j);
    }
    return text;
}
 
async function device_status (user_agent_info) {
    var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < agents.length; v++) {
        if (user_agent_info.indexOf(agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


Author: GamerNoTitle
Link: https://bili33.top/2019/10/25/CloudFlare-Workers-Section1/
Source: GamerNoTitle
Copyright is owned by the author. For commercial reprints, please contact the author for authorization. For non-commercial reprints, please indicate the source.


## 特别感谢：
* [膨胀面包](https://blog.error.work/qd/47.html)

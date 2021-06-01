## 在编辑区域粘贴以下代码

*/ 
addEventListener(
    "fetch", event => {
        let url = new URL(event.request.url);
        url.hostname = "your.domain";
        url.protocol = "protocol";
        let request = new Request(url, event.request);
        event.respondWith(
            fetch(request)
        )
    }
)
/*
## 将 your.domain 改成你的域名，protocol 如果后端使用 https 就写 https，http 就写 http

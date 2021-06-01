## 在编辑区域粘贴以下代码

addEventListener(<br>
    "fetch", event => {<br>
        let url = new URL(event.request.url);<br>
        url.hostname = "your.domain";<br>
        url.protocol = "protocol";<br>
        let request = new Request(url, event.request);<br>
        event.respondWith(<br>
            fetch(request)<br>
        )<br>
    }<br>
)<br>

## 将 your.domain 改成你的域名，protocol 如果后端使用 https 就写 https，http 就写 http

# Quantumult X | Policy & Filter - DivineEngine | Site
#QuantumultX 

1.  [Filter](#toc-0)
    1.  [域名类型规则](#toc-1)
        1.  [HOST](#toc-2)
        2.  [HOST-SUFFIX](#toc-3)
        3.  [HOST-KEYWORD](#toc-4)
        4.  [HOST-WILDCARD](#toc-5)
    2.  [IP 类型规则](#toc-6)
        1.  [IP-CIDR 与 IP6-CIDR](#toc-7)
        2.  [GEOIP](#toc-8)
        3.  [IP-ASN](#toc-9)
    3.  [其它类型规则](#toc-10)
        1.  [USER-AGENT](#toc-11)
        2.  [FINAL](#toc-12)
    4.  [规则参数](#toc-13)
    5.  [注意规则类型优先级问题](#toc-14)
    6.  [注意本地与远程规则先后顺序问题](#toc-15)
    7.  [添加远程分流规则](#toc-16)
2.  [Policy](#toc-17)
    1.  [Static](#toc-18)
    2.  [Available](#toc-19)
    3.  [Round-Robin](#toc-20)
    4.  [Dest-Hash](#toc-21)
    5.  [URL-Latency-Benchmark](#toc-22)
    6.  [SSID](#toc-23)
    7.  [策略参数](#toc-24)

**🗂 | 查看 [Quantumult X](https://divineengine.net/more/special/quantumult-x/) 专题可浏览更多内容**

* * *

以 `;` 或 `#` 或 `//` 开头的行为注释行。

Filter
------

「Filter」即分流规则，规则由四个部分组成：

    <规则类型>, <内容条件>, <策略>, [参数]

Quantumult X 默认有 3 个自带策略：

*   `DIRECT` 直连
*   `PROXY` 代理 (需添加代理服务器使用)
*   `REJECT` 阻止

### 域名类型规则

首先需要弄明白，URL 中域名是哪些？以一条 URL 为例：

`http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument`

其中 `www.example.com` 为域名，或者说是第二个 `/` 之后以及第三个 `/` 之间的内容（不包括冒号和端口）。

#### HOST

当请求的域名**完全匹配**时，则执行该规则：

    [filter_local]
    # 屏蔽百度首页
    host, www.baidu.com, reject
    
    # 屏蔽百度百科
    host, baike.baidu.com, reject

如上，对于「百度」的一些域名使用了「阻止请求」策略

⚠️ 注意，如果你是从 Surge 而来的用户可能会这么使用 HOST 规则，但这么做是无效的：`host, 1.1.1.1, proxy`

#### HOST-SUFFIX

当请求的域名的后缀匹配，则执行该规则：

    [filter_local]
    host-suffix, doubleclick.net, reject

如上示例，相比使用 hosts 需要一条条的阻止域名，如：

    127.0.0.1 ad.doubleclick.net
    127.0.0.1 adx.g.doubleclick.net
    127.0.0.1 pubads.g.doubleclick.net

Quantumult X 仅使用一条 HOST-SUFFIX 类型规则，就可以对 `doubleclick.net` 及其子域名都做出了阻止。

💡 关于 HOST-SUFFIX 还有两个小技巧：

1.  以 `*.ads.example.com` 为例，`ads.example.com` 本身及其子域名是广告 而 `example.com` 本身及其他子域名是正常内容就可以使用： `host-suffix, ads.example.com, reject`，所以并不是只能将一级域名用于 HOST-SUFFIX；
2.  可以对域名后缀使用，如想对所有 `.cn` 后缀的域名做出直连策略，那么可以：`host-suffix, cn, direct`

#### HOST-KEYWORD

当请求的域名包含**关键词**时，执行该规则：

    [filter_local]
    host-keyword, adservice, reject

顾名思义就是匹配到域名中的关键词，这条规则对于以下域名都会生效：

*   **adservice**.google.com
*   **adservice**.google.com.hk
*   google**adservice**.com
*   **adservice**\-google.com

#### HOST-WILDCARD

当请求的域名的匹配通配符时，执行该规则：

    [filter_local]
    host-wildcard, ad*.example.com, reject

HOST-WILDCARD 类型规则用于通配符 `*` 与 `?` 匹配，如上示例可以匹配如下域名：

*   ads.example.com
*   adx.example.com
*   advert.example.com

### IP 类型规则

#### IP-CIDR 与 IP6-CIDR

    # IPv4
    ip-cidr, 8.8.8.8/32, direct
    
    # IPv6
    ip6-cidr, 2001:4860:4860::8888/128, direct

如果不清楚这里的 `/32` 与 `/128`，需要自行了解「CIDR」与「子网掩码」，还可以搜索「子网掩码计算器」获取帮助。

#### GEOIP

当 IP 归属地地区符合时，执行该规则：

    [filter_local]
    geoip, cn, direct

如上示例，当 IP 为中国地区时走直连。

#### IP-ASN

当 IP 属于 ASN 号时，执行该规则：

    ip-asn, 13335, direct

### 其它类型规则

#### USER-AGENT

当请求的 User Agent 匹配时，执行该规则：

    [filter_local]
    user-agent, TIM*, direct

可使用通配符 `?` 与 `*`

在 iOS 15 系统后，系统出于隐私保护考虑，不再于 CONNECT 请求中提供 User-Agent，这意味着对于所有 HTTPS 请求，在未开启 MITM 时，User-Agent 均不可见且规则无法生效。

#### FINAL

在规则的末尾始终有一个 `FINAL` 类型规则兜底

    host-suffix, baidu.com, reject
    final, direct

它作用于除了已有规则以外的网络活动策略。

如上示例只有两条规则，这表示除了 `baidu.com` 及其子域名使用阻止策略外，其他网络活动都使用直连策略。

### 规则参数

默认情况下，即不带上参数时，则当处于 Wi-Fi 网络时使用 Wi-Fi 数据，当处于仅蜂窝网络时使用网络数据，

    [filter_local]
    host-suffix, qq.com, direct, force-cellular
    host-suffix, qq.com, direct, multi-interface
    host-suffix, qq.com, direct, multi-interface-balance
    host-suffix, qq.com, direct, via-interface=pdp_ip0

可以使用几个参数来指定规则的出站接口：

*   `force-cellular`：当处于 Wi-Fi 网络时仍使用蜂窝网络数据；
*   `multi-interface`：当处于 Wi-Fi网络时，同时使用 Wi-Fi 网络与蜂窝网络建立 TCP 连接，使用拥有最佳 TCP 握手值的连接来传输数据。
*   `multi-interface-balance`：当处于 Wi-Fi 网络时，均衡使用 Wi-Fi 网络与蜂窝网络，以提升并发任务的出口贷款。
*   `via-interface`：指定出站接口

另外，还可以直接在「设置」底部的「其他设置」中，全局设置「出站接口」。

### 注意规则类型优先级问题

在默认情况下，Quantumult X 会启用「分流匹配优化」，大致的优先级先后顺序为：  
HOST > HOST-SUFFIX > HOST-WILDCARD > HOST-KEYWORD > USER-AGENT > IP类型规则 (IP-CIDR 等)

这样会造成什么呢？先看一个示例

    [filter_local]
    host-keyword, qq, direct
    host-suffix, qq.com, reject

一般来说规则是按照先后顺序进行匹配，但开启「分流匹配优化」后是第二条生效，因为前面说了 HOST-SUFFIX 的优先级高于 HOST-KEYWORD。

不过这样的问题并不是特别常见，可以先不去管它，如果你遇到这样的问题而想要完全按照规则的顺序匹配，可以在「设置」底部的「其他设置」的「VPN」下，将「分流匹配优化」关闭。

### 注意本地与远程规则先后顺序问题

默认情况下，Quantumult X 的本地规则总是位于远程规则的前面。

这样会造成什么呢？来看一个示例，假设你的本地规则有一条规则：

    [filter_local]
    geoip, cn, direct

但远程规则中有一条这样的规则：

    ip-cidr, 180.76.76.76/32, reject

此时远程规则并不会生效，因为顺序上来说本地规则 `geo, cn ,direct` (表示中国大陆的 IP 直连)位于远程规则 `ip-cidr, 180.76.76.76/32, reject` 的前面，而 `180.76.76.76` 是中国大陆地区的 IP，所以先匹配到了如上本地规则，所以就没法执行如上远程规则了。

要解决这个问题，可以在该远程规则的分流配置中添加参数 `inserted-resource=true`，或在图形界面的远程分流文件的设置中，打开「插入资源」开关。

### 添加远程分流规则

远程分流在 `[filter_remote]` 下添加：

    [filter_remote]
    https://example.com/reject.txt, tag=🛡Block Ads, force-policy=reject, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true

也就是说一条完整的远程分流规则配置是这么组成的：`<资源路径>, <资源标签>, <策略偏好>, <自动更新时间间隔>, <是否使用资源解析器>, <插入资源>, <是否启用>`

*   `tag` 资源标签：相当于名称，标识这条远程分流文件的作用；
*   `force-policy` 策略偏好：可选，此处明确设置为 REJECT 策略，如果远程分流文件中已经指明则此处可忽略；
*   `update-interval` 自动更新的时间间隔，单位为秒；
*   `opt-parser` 是否使用资源解析器，若关闭则改为 `false`；
*   `inserted-resource` 插入资源，将分流文件中的规则放置于本地规则之前；
*   `enabled` 是否启用该分流文件，若不使用可改为 `false`；

Policy
------

除了内置的 3 个策略，还有几个策略：

### Static

Static 策略用于手动选择策略。

> 类似于 Surge 的 `Select` 策略组

    [policy]
    static = Guard, reject, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hijacking.png
    
    [filter_remote]
    # 阻止广告
    https://example.com/advertising.txt, tag=🛡Block Advertising, force-policy=Guard, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true
    
    # 阻止追踪
    https://example.com/tracking.txt, tag=🛡Block Tracking, force-policy=Guard, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true
    
    # 阻止劫持
    https://example.com/hijacking.txt, tag=🛡Block Hijacking, force-policy=Guard, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true

如上示例，新建了一个名为 `Guard` 的手动选择策略组，里面有阻止 (REJECT) 与直连 (DIRECT) 两个策略可供选择，还设置了一个策略图标。

然后添加了三条远程分流文件，分别关于广告、追踪与劫持的，强制它们的策略偏好指向 `Guard` 策略组。

这样，就可以使用一个开关管理关于广告、追踪与劫持的规则是开启 (阻止) 还是关闭 (直连)。

> `img-url` 自定义图标参数是可选的，使用它可以更美观些，此处推荐一个用于 Quantumult X 的图标的 Githu 项目：[Qure](https://github.com/Koolson/Qure)

### Available

Available 策略用于自动回退代理服务器。

> 类似于 Surge 的 `Fallback` 策略组

    [policy]
    available = Available, ProxyA, ProxyB, ProxyC
    
    [filter_local]
    final, Available

当 ProxyA 故障时自动切换到 ProxyB，以此类推

### Round-Robin

Round-Robin 轮询策略用于顺序轮流使用代理服务器

    [policy]
    round-robin = RoundRobin, ProxyA, ProxyB, ProxyC
    
    [filter_local]
    final, RoundRobin

### Dest-Hash

Dest-Hash 策略用于随机负载均衡，相同域名走固定节点，此策略对于需要会话持久性的用例特别有用。

    [policy]
    dest-hash = DestHash, ProxyA, ProxyB, ProxyC
    
    [filter_local]
    final, DestHash

### URL-Latency-Benchmark

URL-Latency-Benchmark 策略用于自动测试选出延迟最低的代理服务器

⚠️ 注意：延迟最低不代表服务器最快，还需要考虑其他如带宽、丢包率等等

> 类似于 Surge 的 url-test 策略组

    [policy]
    url-latency-benchmark = AutoTest,  ProxyA, ProxyB, ProxyC, resource-tag-regex=^sample, server-tag-regex=^example, check-interval=600, alive-checking=false, tolerance=0
    
    [filter_local]
    final, AutoTest

URL-Latency-Benchmark 策略指向具有最佳 (评估 `tolerance` 参数，单位毫秒的) url latency 结果的服务器。

> 当用户手动启动 URL 测试时，其策略结果也将被更新。

此类型策略有一个名为 `check-interval` (秒) 的参数，如果此策略已由任何请求激活，则将考虑该间隔。

如果 `alive-checking` 被设置为 `true`，那么即使该策略处于空闲状态，也会考虑间隔时间，并启动基准测试。

### SSID

    [policy]
    ; ssid = <策略名称>, <蜂窝数据下默认策略>, <Wi-Fi 下默认策略>, <SSID 名称: 策略>
    ssid = SSID, ProxyA, ProxyA, TP-Link:ProxyB, D-Link:ProxyC
    
    [filter_local]
    final, SSID

如上示例，表示在蜂窝数据网络及 Wi-Fi 下默认使用 ProxyA 节点，然后就是指定特定的 SSID 所使用的策略，当网络位于 SSID 为 `TP-Link` 时使用 ProxyB 节点，为 `D-Link` 时使用 ProxyC节点。

再举个例子，将 SSID 与 Available 相结合：

    [policy]
    available = Available, ProxyA, ProxyB, ProxyC
    ssid = SSID, Available, Available, TP-Link:ProxyB, D-Link:ProxyC
    
    [filter_local]
    final, SSID

### 策略参数

*   `resource-tag-regex` 通过正则表达式来筛选需匹配的资源标签
*   `server-tag-regex` 通过正则表达式来筛选需匹配的服务器标签

后者很好理解，就是节点的名称，而前者是节点资源 (订阅) 的名称，一般是服务商名称，两者结合在一起使用，既可以筛选出只需要某服务商的特定节点用于某个策略。

`resource-tag-regex` 及 `server-tag-regex` 仅适用于 `static`、`available` 和 `round-robin` 类型的策略。

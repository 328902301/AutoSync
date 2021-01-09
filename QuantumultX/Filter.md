关于 Surge Ruleset 和 Quantumult X Filter Remote 说明
要求排序如下：

Unbreak.list - 用于修正后续规则行为
Advertising.list - 广告、行为分析、隐私追踪（macOS 不建议开启）
Hijacking.list - 劫持（运营商、臭名昭著的诈骗网站或恶意应用）
GlobalMedia(ForeignMedia).list - 国际流媒体
HKMTMedia(DomesticMedia).list - 大陆流媒体面向港澳台限定（可不加）
Global.list - 国际网站/应用
Apple.list - Apple 服务（可不加）
China.list - 国内网站/应用
说明

如若不需要观看哔哩哔哩、爱奇艺面向港澳台的限定内容可不加「HKMTMedia(DomesticMedia).list」。
如若不需要代理 Apple 服务可不加「Apple.list」，若加入必须在「Global.list」和「China.list」之间。
如需细化流媒体如「Youtube.list」需要加在「GlobalMedia(ForeignMedia).list」之前。
如需应用类的如「Telegram.list、Google.list、PayPal.list」需要加在「Global.list」之前。
一般情况下默认引入上述 8 个（如不需要 HKMTMedia(DomesticMedia) 和 Apple 可减至 6 个）即可，那么为什么还有更多的如「Youtube.list、Netflix.list、Spotify.list、Mail.list」？

对于一些「进阶玩家」来说其拥有专用于观看流媒体的线路，比如观看限定区域的 Netflix、Hulu、HBO 等，所以引入相关 .list 建立一个策略组设置相应服务区节点线路。但对于普通用户来说，那些「Youtube.list、Hulu.list」来说都是集成在「GlobalMedia(ForeignMedia).list」中不需要额外引入。
对于一些「机场」来说为了避免有恶意用户利用节点线路滥发垃圾邮件，所以对服务器相关邮件端口进行了屏蔽，这时候可以引入「Mail.list」指定一个可收发邮件对节点。
对于一些「进阶玩家」来说其拥有高速的新加坡节点线路，为了提升 Telegram 使用体验所以会引入「Telegram.list」指定一些节点。
综上所述、以此类推，独立的 .list 一般都集成在了默认的 6 条 .list 文件中，如果你没有进阶的定制化需求是不 需 要引入那么多的，根据需求使用才是 Ruleset/Filter 的灵活用法，规则不是越多越好。

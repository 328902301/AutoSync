# 🍿️ DualSubs
Dual Subtitles for Streaming Media  
流媒体自定义多字幕  

<font size=3>**Powered by [Chavy](https://github.com/chavyleung)‘s [Env.js](https://github.com/chavyleung/scripts/blob/master/Env.js) and [BoxJs](https://chavyleung.gitbook.io/boxjs/)**</font>

需要启用`重写`、`脚本`、`MitM`功能  
有问题请至Issue页面反馈  
Telegram讨论组:[🍟 整点薯条](https://t.me/GetSomeFries) 

---

- [🍿️ DualSubs](#️-dualsubs)
  - [功能列表](#功能列表)
  - [使用说明](#使用说明)
  - [安装链接](#安装链接)
    - [🍿️ DualSubs for Streaming Media Platform](#️-dualsubs-for-streaming-media-platform)
  - [How To](#how-to)
  - [支持列表](#支持列表)

---

## 功能列表
  1. 官方播放器内提供自定义字幕选项
     * 对于不兼容的播放器，提供了一个字幕选项，用来强制替换字幕为指定字幕类型。
  2. 自定义启用的第三方字幕种类
  3. 双语官方字幕
  4. 双语翻译字幕
     1. Google翻译
     2. [Google Cloud Translate API](https://cloud.google.com/translate)
     3. Azure/Azure.cn Translator
        1. [国际版](https://azure.microsoft.com/zh-cn/services/cognitive-services/translator/)
        2. [中国版](https://www.azure.cn)
     4. [DeepL Free/Pro](https://www.deepl.com/pro-api)
  5. 双语外挂字幕
  6. 中文，英文，西班牙文自动回退
     * `中文（自动）`回退顺序为`中文（简体）`-`中文（繁體）`-`中文（香港）/粤语（廣東話）`
     * `英文（自动）`回退顺序为`English (US) [CC]`-`English (US)`-`English (UK)`
     * `西班牙文（自动）`回退顺序为`Español (Latinoamérica) [CC]`-`Español (Latinoamérica)`-`Español (España) [CC]`-`Español (España)`
  7. 自定义字幕匹配时间戳容差值
  8. 自定义外挂字幕时间戳偏移量
  9.  翻译字幕模式支持`逐段翻译`（默认）和`逐行翻译`
     * `逐段翻译`对于大分段的字幕文件的平台（如：HBO Max）响应更快，翻译效果更好，利于限制使用频率的翻译API。

## 使用说明
  * 直接使用
    * 采用默认配置
      * 默认主语言`中文（自动）`，副语言`英文（自动）`
      * 提供中文的平台仅启用`官方字幕`
      * 未提供中文的平台仅启用`Google翻译`
  * 配合`BoxJs`及订阅使用
    1. 安装`BoxJs`插件:
       * Loon: [boxjs.rewrite.loon.plugin](https://github.com/chavyleung/scripts/raw/master/box/rewrite/boxjs.rewrite.loon.plugin "BoxJs")
       * Quantumult X: [boxjs.rewrite.quanx.conf](https://github.com/chavyleung/scripts/raw/master/box/rewrite/boxjs.rewrite.quanx.conf "BoxJs")
       * Surge (Shadowrocket): [boxjs.rewrite.surge.sgmodule](https://github.com/chavyleung/scripts/raw/master/box/rewrite/boxjs.rewrite.surge.sgmodule "BoxJs")
       * Stash: [boxjs.rewrite.stash.stoverride](https://github.com/chavyleung/scripts/raw/master/box/rewrite/boxjs.rewrite.stash.stoverride "BoxJs")
    2. 浏览器访问[BoxJs.com](http://boxjs.com)，在`订阅`页面点击`+`添加本项目订阅:
       * [DualSubs.box.json](./box/DualSubs.box.json?raw=true "🍿️ DualSubs")

## 安装链接
### 🍿️ DualSubs for Streaming Media Platform
  * Loon: [DualSubs.plugin](./plugins/DualSubs.plugin?raw=true "🍿️ DualSubs for Streaming Media Platform")
  * Quantumult X: [DualSubs.qxrewrite](./qxrewrite/DualSubs.qxrewrite?raw=true "🍿️ DualSubs for Streaming Media Platform")
  * Surge (Shadowrocket): [DualSubs.sgmodule](./sgmodules/DualSubs.sgmodule?raw=true "🍿️ DualSubs for Streaming Media Platform")
  * Stash: [DualSubs.stoverride](./stoverride/DualSubs.stoverride?raw=true "🍿️ DualSubs for Streaming Media Platform")

## How To
  * [在Apple TV (tvOS) 上添加MitM证书](https://github.com/DualSubs/DualSubs/wiki/在Apple-TV-(tvOS)-上添加MitM证书)
  * [在BoxJs中清除DualSubs的储存数据](https://github.com/DualSubs/DualSubs/wiki/在BoxJs中清除DualSubs的储存数据)

## 支持列表
  * 图例:
    * 完全支持: ✅
    * 兼容: ☑️
    * 未来会支持: 🔜
    * 不明/未测试: ❓
    * 不支持: ❌
    * 无此类型: N/A
  * 提示: 以下图例可点击后直达下载链接或网站

|  供应商  |iOS/iPadOS|  tvOS  |  macOS  | Appx | Web | 备注 |
|   :-:   |   :-:   |   :-:   |   :-:   |   :-:   |   :-:   |   :-:   |
|Apple TV+|   [✅](https://apps.apple.com/hk/app/apple-tv/id1174078549)   |   [✅](https://apps.apple.com/hk/app/apple-tv/id1174078549)   |   ✅   |   N/A   | [✅](https://tv.apple.com/hk/)[^2] | 指Apple TV app中的订阅内容 |
|Apple TV | [✅](https://apps.apple.com/hk/app/apple-tv/id1174078549)[^2] | [✅](https://apps.apple.com/hk/app/apple-tv/id1174078549)[^2] | ✅[^2] |   N/A   |   N/A   | 指Apple TV app中的买断或租借内容[^1] |
|Apple Fitness| [✅](https://apps.apple.com/cn/app/fitness/id1208224953)[^2] | ✅[^2] |   N/A   |   N/A   |   N/A   | [^1] |
| Disney+ |   [✅](https://apps.apple.com/hk/app/disney/id1446075923)   |   [✅](https://apps.apple.com/hk/app/disney/id1446075923)   |   N/A   |   [✅](https://www.microsoft.com/zh-cn/p/disney/9nxqxxlfst89)   |   [✅](https://www.disneyplus.com/zh-hans/home)   |        |
|Prime Video| [✅](https://apps.apple.com/hk/app/amazon-prime-video/id545519333)[^5] |   [✅](https://apps.apple.com/hk/app/amazon-prime-video/id545519333)   | [🔜](https://apps.apple.com/hk/app/amazon-prime-video/id545519333)[^3] |   [🔜](https://www.microsoft.com/zh-cn/p/amazon-prime-video-for-windows/9p6rc76msmmj?activetab=pivot:overviewtab)[^3] | [🔜](https://www.primevideo.com)[^3] |        |
| HBO Max | [☑️](https://apps.apple.com/us/app/hbo-max-stream-tv-movies/id971265422)[^4] | [✅](https://apps.apple.com/us/app/hbo-max-stream-tv-movies/id971265422) |   N/A   |   [❓](https://www.microsoft.com/zh-cn/p/hbo-max/9pjj1k9dzmrs)   | [☑️](https://play.hbomax.com)[^4] |        |
|  Hulu   |   [✅](https://apps.apple.com/us/app/hulu-watch-tv-series-movies/id376510438)   |   [✅](https://apps.apple.com/us/app/hulu-watch-tv-series-movies/id376510438)   |   N/A   |   N/A   | [🔜](https://www.hulu.com/)[^6] |        |
|Paramount+|   [✅](https://apps.apple.com/us/app/paramount/id530168168)   |   [✅](https://apps.apple.com/us/app/paramount/id530168168)   |   N/A   |   ❓   |   ❓   |        |
|Discovery+<br>Philippines|   ❓   |   ❓   |   ❓   |   ❓   |   [✅](https://www.discoveryplus.com/ph/)   |        |
|         |         |         |         |         |         |        |

  [^1]: 此平台部分字幕为[隐藏字幕[CC]](https://zh.wikipedia.org/wiki/隱藏字幕)，整合于视频流无法提取，其他语言字幕正常。
  [^2]: 此平台资源使用的域名`play.itunes.apple.com`与`App Store`登陆、验证、购买等功能共用域名，MitM可能造成无法访问，故默认未添加此域名，需要此平台双语的用户请自行添加`play.itunes.apple.com`至MitM域名列表。
  [^3]: 此平台字幕采用[TTML2](https://www.w3.org/TR/2018/REC-ttml2-20181108/)格式字幕，暂不支持
  [^4]: 此平台字幕选项为硬编码，需要在BoxJs中对应平台的`字幕类型（兼容）`选项选择一个替换用字幕类型
  [^5]: 采用旧版`AVPlayerViewController`播放器UI界面，自定义字幕名称会被强制显示为固定名称，比如多个名称为`简体中文`的选项，依次为原始字幕选项及BoxJs中开启的字幕选项，除显示的名称固定外，字幕选项功能正常。
  [^6]: 此平台字幕采用[SAMI](https://docs.microsoft.com/zh-cn/previous-versions/windows/desktop/dnacc/understanding-sami-1.0?redirectedfrom=MSDN)格式字幕，暂不支持

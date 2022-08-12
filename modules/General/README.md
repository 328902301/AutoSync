# General
  * 通用设置增强插件/模块
  * 有问题请至 [Issue 页面](https://github.com/VirgilClyne/VirgilClyne/issues)反馈
  * 如需及时了解更新说明，请订阅 Telegram 频道:[🍟 整点薯条](https://t.me/GetSomeFriesChannel)
  * Telegram 讨论组:[🍟 整点薯条 - 群组](https://t.me/GetSomeFries)

---

- [General](#general)
  - [简介](#简介)
  - [关于通用设置增强模块功能](#关于通用设置增强模块功能)
  - [注意事项](#注意事项)
  - [安装链接](#安装链接)

---
## 简介
  * 优化通用设置，解决一些常见代理与app或设备冲突的问题

## 关于通用设置增强模块功能
  * 跳过代理
    * 跳过某个域名或者 IP 段，这些目标主机将不会由 Surge Proxy 处理。
    * (macOS 版本中，如果启用了 Set as System Proxy, 这些值会被写入到系统网络代理设置.)
      * 系统代理检测:
        * T3出行: passenger.t3go.cn
        * 网上国网、多看阅读、顺丰金融、广东农信、丰云行: www.baidu.com
        * 建行生活: yunbusiness.ccb.com
        * ~~闽政通APP: mztapp.fujian.gov.cn~~
        * ~~趣动Will Go: capi.wewillpro.com~~
        * 沃小号: wxh.wo.cn
      * 跨端链接:
        * 印象笔记 插件: app.yinxiang.com
        * AdGuard 本地拦截劫持: injections.adguard.org
        * AdGuard 本地资源加载: local.adguard.org
        * Apple Web Authentication Modern 跨设备验证 本地连接: cable.auth.com
        * Imaging Edge: 192.168.122.1/32
        * 盯盯拍 (DDPai) 行车记录仪: 193.168.0.1/32
        * Unifi Network Direct Connection: *.id.ui.direct
      * IPv4私有地址
        * 本地环回地址: 127.0.0.1/32
        * 专用网络地址: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
        * 链路本地地址: 169.254.0.0/16
        * 组播地址: 224.0.0.0/4
        * 保留地址: 240.0.0.0/4
        * 受限广播地址: 255.255.255.255/32
        * NAT444: 100.64.0.0/10
      * IPv6私有地址
        * 链路本地地址: ::1/128, fe80::/10
        * 唯一区域地址 (ULA): fc00::/7
        * Mesh-Local EID (ML-EID): fd00::/8
        * 多播地址: ff00::/8
        * IPv4转译地址
          * IPv4映射地址: ::ffff:0:0:0:0/1, ::ffff:128:0:0:0/1
          * Teredo隧道: 2001::/32
          * 6to4: 2002::/16
          * IPV6地址示例: 2001:db8::/32

  * 真实IP
    * 当 Surge VIF 处理 DNS 问题时，此选项要求 Surge 返回一个真正的 IP 地址，而不是一个假 IP 地址。
    * DNS 数据包将被转发到上游 DNS 服务器。
      * Apple Web Authentication Modern 跨设备验证 本地连接: cable.auth.com
      * Apple 针对使用强制门户的网络进行互联网连接验证: captive.apple.com
      * Firebase Crashlytics: e.crashlytics.com
      * Windows NCSI (Network Connectivity Status Indicator)
        * *.msftconnecttest.com, *.msftncsi.com
      * Other network availability detect
        * Firefox / Some linux system depends on the DNS resolution result to determine the network availability.
        * Refer: https://github.com/SukkaW/Surge/blob/master/Modules/sukka_fix_network_alert.sgmodule
        * network-test.debian.org, detectportal.firefox.com, resolver1.opendns.com
      * Session Traversal Utilities for NAT / Simple Traversal of UDP Through NAT (STUN)
        * *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com, stun.*
      * Twilio's Global Network Traversal Service, reliable STUN and TURN capabilities for WebRTC
        * global.turn.twilio.com, global.stun.twilio.com
      * QQ快速登录 本地连接
        * localhost.ptlogin2.qq.com
        * localhost.sec.qq.com
      * NTP (Network Time Protocol) 网络时间协议服务
        * pool.ntp.org, *.pool.ntp.org, ntp.*.com, time.*.com, ntp?.*.com, time?.*.com, time.*.gov, time.*.edu.cn, *.ntp.org.cn
      * AD DS
        * PDC._msDCS.*.*, DC._msDCS.*.*, GC._msDCS.*.*
      * 移动认证登录: *.cmpassport.com
      * 电信天翼账号免密登录: id6.me, open.e.189.cn
      * 联通沃账号一键登录: mdn.open.wo.cn, opencloud.wostore.cn, auth.wosms.cn
      * 无忧行: *.jegotrip.com.cn
      * 誉隆信息 (?): *.icitymobile.mobi

## 注意事项
  * 在此模块中被跳过代理的域名，MitM和Rewrite可能失效
    * 如: www.baidu.com等

## 安装链接
  * Loon:
    * 需要 [2.1.10 (275)](https://t.me/LoonNews/445) 及以上版本
    * [General.plugin](./General.plugin?raw=true "🌐 General Settings Enhanced")
  * Quantumult X:
    * [General.qxrewrite](./General.qxrewrite?raw=true "🌐 General Settings Enhanced")
    * Quantumult X不支持直接此引用片段，需要手动复制粘贴此内容至配置文件中对应字段
  * Surge (Shadowrocket):
    * [General.sgmodule](./General.sgmodule?raw=true "🌐 General Settings Enhanced")

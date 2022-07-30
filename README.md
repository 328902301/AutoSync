# Quantumult X

全部资源来源于互联网，纯自用，如侵删。
配置文件链接：
```Java
https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/QuantumultX.conf
```

# 配置说明

>⚠️ 本配置纯自用。
>⚠️ 下面的操作操作会替换整个配置文件，如果想保留自己原来的配置，请 `导出` 并 `保存` 。
>⚠️ 此配置文件没有国内 IP 分流，请配置 IP 数据库。

使用方法：
  0. 复制上面的 [配置文件链接](https://cdn.jsdelivr.net/gh/RuCu6/QuanX@master/QuantumultX.conf) 备用；
  1. 打开 Quantumult X 主界面，点击 `右下角风车` ，然后找到 `配置文件` 选项卡，点击 `下载` ，将复制的链接 `粘贴` 进去，然后点右上角点 `保存` ；
  2. 在当前界面，找到 `MitM` 选项卡，先点击 `生成证书` ，再点击 `配置证书` ，在弹出窗口中点击 `允许` ；
  3. 打开iOS系统设置，打开 `通用-描述文件` ，点击两次 `安装` ，等待安装完成；
  4. 安装完成后，打开 `关于本机-证书信任设置` ，对 `Quantumult X CA` 启用根证书完全信任；
  5. 回到 Quantumult X 主界面，点击 `右下角风车` ，打开 `重写` 和 `MitM` ；
  6. 在当前界面，找到 `节点` 选项卡，点击 `引用(订阅)` 添加自己的 `订阅链接` ；
  7. 配置国内 IP 数据库；
  8. 大功告成，开始使用。

配置国内 IP 数据库：
  0. 复制[此链接](https://raw.githubusercontent.com/Hackl0us/GeoIP2-CN/release/Country.mmdb)备用；
  1. 在 Quantumult X 主界面，点击 `右下角风车` ；
  2. 滑到底部，点击 `其他设置` ；
  3. 滑到底部，找到 `GeoLite2` ，点击右上角的 `来源` ；
  4. 输入复制的链接即可。

# 资源解析器使用说明

1. 在 Quantumult X 配置文件中 `general` 部分，加入下列代码；
```Java
resource_parser_url=https://cdn.jsdelivr.net/gh/KOP-XIAO/QuantumultX@master/Scripts/resource-parser.js
```
>⚠️ 如提示 `没有自定义解析器` ，请 `长按` 右下角风车后，点击左侧 `刷新` 按钮，然后重新运行 Quantumult X ；
2. 假设原始订阅链接为 `https://xxx.txt` ，你想要保留的参数为 `in=tls+ss` ，想要过滤的参数为 `out=http+2` ；
>⚠️ 请注意下面订阅链接后一定要加 `#` 符号；
3. 则填入 Quantumult X 的引用链接为 `https://xxx.txt#in=tls+ss&out=http+2` ；
4. 填入上述链接, 并打开资源解析器开关。

# 更新日志

## 2022-01-12
- 新增 添加流媒体检测模块
## 2022-03-27
- 更改 禁用 geo_location_checker 显示
- 新增 添加 server_check_timeout 参数
- 更改 优化 CN & AdBlock 分流规则
## 2022-03-29
- 更改 删除 google.com 相关的MITM
## 2022-04-08
- 新增 添加 IPv6 的 DNS 解析
## 2022-04-12
- 更改 删除 CN 相关的分流规则
- 新增 添加 GeoIP 数据库

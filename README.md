# Quantumult X

全部资源来源于互联网，纯自用，如侵删。

配置文件链接：
```Java
https://gitlab.com/RuCu6/QuanX/-/raw/main/QuantumultX.conf
```

# 配置说明
```
⚠️⚠️ 本配置纯自用，可能并不适合大多数人使用。
```
```ruby
⚠️⚠️ 下面的操作操作会替换整个配置文件，如果想保留自己原来的配置，请 `导出` 并 `保存` 。
```
```ruby
⚠️⚠️ 此配置文件没有国内 IP 分流，请配置 `国内 IP 数据库` (参考下文即可)。
```
## 使用方法：
  0. 复制上面的 [配置文件链接](https://gitlab.com/RuCu6/QuanX/-/raw/main/QuantumultX.conf) 备用；
  1. 打开 Quantumult X 主界面，点击 `右下角风车` ，然后找到 `配置文件` 选项卡，点击 `下载` ，输入此前 `复制的链接` ，点击右上角 `保存` ；
  2. 在当前界面，找到 `MitM` 选项卡，先点击 `生成证书` ，再点击 `配置证书` ，在弹出窗口中点击 `允许` ；
  3. 打开 iOS 系统设置，打开 `通用-描述文件` ，点击两次 `安装` ，等待安装完成；
  4. 安装完成后，打开 `关于本机-证书信任设置` ，对 `Quantumult X CA` 启用根证书完全信任；
  5. 回到 Quantumult X 主界面，点击 `右下角风车` ，打开 `重写` 和 `MitM` ；
  6. 在当前界面，找到 `节点` 选项卡，点击 `引用(订阅)` 添加自己的 `订阅链接` ；
  7. 配置国内 IP 数据库；
  8. 大功告成，开始使用。

## 配置国内 IP 数据库：
```ruby
⚠️⚠️ 在此之前，先执行 `前6步` ，并打开 Quantumult X 总开关。
```
```ruby
⚠️⚠️ 数据库配置完成之后，重启 Quantumult X 总开关，使之生效。
```
``` ruby
❗️❗️❗️ 注意！不是退出后台。
```
  0. 复制 [此链接](https://raw.githubusercontent.com/Hackl0us/GeoIP2-CN/release/Country.mmdb) 备用；
  1. 在 Quantumult X 主界面，点击 `右下角风车` ；
  2. 滑到底部，点击 `其他设置` ；
  3. 滑到底部，找到 `GeoLite2` 选项卡，点击右上角的 `来源` ；
  4. 输入此前 `复制的链接` ，点击 `好的` 保存，之后点击 `立即更新` 即可。

# 资源解析器使用说明

1. 在 Quantumult X 配置文件中 `general` 部分，加入下列代码；
```Java
resource_parser_url=https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/General/resource_parser.js
```
```ruby
⚠️⚠️  如提示 `没有自定义解析器` ，请 `长按` 右下角风车后，点击左侧 `刷新` 按钮，然后重新运行 Quantumult X ；
```
2. 假设原始订阅链接为 `https://xxx.txt` ，你想要保留的参数为 `in=tls+ss` ，想要过滤的参数为 `out=http+2` ；
```ruby
⚠️⚠️ 请注意下面订阅链接后一定要加 `#` 符号；
```
3. 则填入 Quantumult X 的引用链接为 `https://xxx.txt#in=tls+ss&out=http+2` ；
4. 填入上述链接, 并打开资源解析器开关。

# Sub-Store Lite

> [免责声明](https://github.com/xream/scripts/blob/main/README.md)

> 欢迎加入群组 [https://t.me/zhetengsha_group](https://t.me/zhetengsha_group)

特点:

- 支持修改 `host` 混淆, `path` 路径, `port` 端口, `method` 请求方式(网络为 `http` 时, 可能需要设置此项)

- 兼容不同的 network(`vmess`, `vless` 的 `ws`, `h2`, `http` 和其他)

- 兼容 QuanX, Surge, Loon, Shadowrocket, Stash 等客户端和 Node.js 环境

- Sub-Store 内部暂时并不支持 `http-opts` 里的 `host`, `path` 为数组. 本脚本增加了一个选择来控制数组的输出.

## Sub-Store 脚本使用方法

打开 Sub-Store => 订阅 => 编辑 => 节点操作+ => 脚本操作 => 链接 => 粘贴 [https://raw.githubusercontent.com/xream/scripts/main/surge/modules/sub-store-scripts/lite/index.js](https://raw.githubusercontent.com/xream/scripts/main/surge/modules/sub-store-scripts/lite/index.js) => 保存

引用格式如下：

### 最简例子

设置 Host 混淆为 `a.189.cn`, 为修改了 Host 的节点名添加后缀 `[北停]`

`https://raw.githubusercontent.com/xream/scripts/main/surge/modules/sub-store-scripts/lite/index.js#host=a.189.cn&hostSuffix=[北停]`

### vmess `http` 节点(即所谓的 `tcp` 节点)

订阅同时包含了 `network` 为 `ws` 和 `http` 的节点. 你想统一设置混淆为 `tms.dingtalk.com`, 端口为 `80`.兼顾 `http` 节点的 `path` -> `/`, `method` -> `GET`. 没给 `network` 的 默认为 `http`

1. 输出给 Clash 系的客户端, 请加上 `array` `true`

`https://raw.githubusercontent.com/xream/scripts/main/surge/modules/sub-store-scripts/lite/index.js#hostPrefix=[钉钉]&host=tms.dingtalk.com&path=/&method=GET&defaultNetwork=http&array=true`

2. 输出给 非 Clash 系的客户端, 应该不用加上 `array`

`https://raw.githubusercontent.com/xream/scripts/main/surge/modules/sub-store-scripts/lite/index.js#hostPrefix=[钉钉]&host=tms.dingtalk.com&path=/&method=GET&defaultNetwork=http`

## 参数列表

`host` 修改 Host 混淆. 默认为空 不修改. 例 a.189.cn

`hostPrefix` 为修改了 Host 的节点名添加前缀. 默认为空

`hostSuffix` 为修改了 Host 的节点名添加后缀. 默认为空. 例 [微博混淆]

`path` 修改 Path 路径. 默认为空 不修改. 例 /TS/recharge/tzUrl.html

`pathPrefix` 为修改了 Path 的节点名添加前缀. 默认为空

`pathSuffix` 为修改了 Path 的节点名添加后缀. 默认为空. 例 [广停路径]

`port` 修改 Port 端口 默认为空 不修改. 例 80

`portPrefix` 为修改了 Port 的节点名添加前缀. 默认为空

`portSuffix` 为修改了 Port 的节点名添加前缀. 默认为空. 例 [80]

`method` method 默认为空 不修改. 例 `GET`. 网络为 `http` 时, 可能需要设置此项

`array` 是否把 `host`, `path` 设为数组. 默认不是数组. 如果要用于 Clash 系的客户端输出, 应设为 `true`. 不需要的时候, 请不要传这个字段

`defaultNetwork` 默认的 `network`. 有的订阅默认没有 `network`, 一般这种情况都是 `http`. 所以需要设置为 `http`

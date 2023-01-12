# 联通余量(v4)

新版测试中 非群内用户勿用

> 欢迎加入群组 [https://t.me/zhetengsha_group](https://t.me/zhetengsha_group)

> [免责声明](https://github.com/xream/scripts/blob/main/README.md)

## 安装

## Surge

使用模块 [https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.sgmodule](https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.sgmodule)

## Shadowrocket

兼容 直接使用 Surge 模块 [https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.rewrite.stash.stoverride](https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.rewrite.stash.stoverride)

## Stash

 使用覆写 [https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.rewrite.stash.stoverride](https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.rewrite.stash.stoverride)

## 其他客户端懒得弄

### QuanX

> 以该 app 最新配置的语法为准, 自行配置. 请勿全部复制粘贴然后问为啥不能用.

```
[task_local]
*/5 * * * * https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.js
```

自行配置 MITM, 添加重写

> 以该 app 最新配置的语法为准, 自行配置. 请勿全部复制粘贴然后问为啥不能用.

```
hostname=10010v4.com

https?:\/\/10010v4\.com url script-analyze-echo-response https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.js
```

### Loon

> 仅供参考 以该 app 最新配置为准 自行配置

```
[Script]
enable = true
cron "*/5 * * * *" script-path=https://raw.githubusercontent.com/xream/scripts/main/surge/modules/10010v4/10010.js
```

## 配置

### BoxJs

> 自己把 BoxJs 配好 再进行后续操作 请自行 Google

使用 [BoxJs https://docs.boxjs.app](https://docs.boxjs.app) 添加 订阅 [https://raw.githubusercontent.com/xream/scripts/main/boxjs/boxjs.json](https://raw.githubusercontent.com/xream/scripts/main/boxjs/boxjs.json)

打开 [http://boxjs.net/#/app/xream.10010v4](http://boxjs.net/#/app/xream.10010v4) 进行配置

### 通知模板变量列表

例: 你在配置页面新建了一个名为 `你的自定义配置` 的配置. 通知模板变量列表中新增 `[你的自定义配置.已用]` `[你的自定义配置.剩余]` `[你的自定义配置.总]` `[你的自定义配置.用量]` 4 项

```JSON
{
  "[免流不限.已用]": "29.55G",
  "[免流不限.剩余]": "0M",
  "[免流不限.总]": "0M",
  "[免流不限.用量]": "0M",
  "[免流有限.已用]": "0M",
  "[免流有限.剩余]": "5G",
  "[免流有限.总]": "5G",
  "[免流有限.用量]": "0M",
  "[所有免流.已用]": "29.55G",
  "[所有免流.剩余]": "5G",
  "[所有免流.总]": "5G",
  "[所有免流.用量]": "0M",
  "[通用不限.已用]": "0M",
  "[通用不限.剩余]": "0M",
  "[通用不限.总]": "0M",
  "[通用不限.用量]": "0M",
  "[通用有限.已用]": "5.08G",
  "[通用有限.剩余]": "34.92G",
  "[通用有限.总]": "40G",
  "[通用有限.用量]": "0M",
  "[所有通用.已用]": "5.08G",
  "[所有通用.剩余]": "34.92G",
  "[所有通用.总]": "40G",
  "[所有通用.用量]": "0M",

  "[时长]": "1小时",
  "[套餐]": "xx套餐",
  "[联通时间]": "2023-01-11 02:41:30",
  "[日期时间]": "2023/1/11 16:16:56",

  "[你的自定义配置.已用]": "5.08G",
  "[你的自定义配置.剩余]": "34.92G",
  "[你的自定义配置.总]": "40G",
  "[你的自定义配置.用量]": "0M"
}
```
/***********************************

> 应用名称：阿里云盘
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2023-01-05
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 脚本功能：优化首页display
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载售卖
            ⛔⛔⛔



[rewrite_local]

# ～ 阿里云盘（2023-01-05）@ddgksf2013
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/alidrive.js

[mitm]

hostname=api.aliyundrive.com

***********************************/








let ddgksf2013=JSON.parse($response.body);ddgksf2013.result&&(ddgksf2013.result=Object.values(ddgksf2013.result).filter(d=>"file"==d.appCode||"video"==d.appCode)),ddgksf2013.activities&&delete ddgksf2013.activities,ddgksf2013.myBackup&&delete ddgksf2013.myBackup,$done({body:JSON.stringify(ddgksf2013)});

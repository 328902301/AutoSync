/***********************************

> 应用名称：趣听音乐
> 脚本功能：自动激活APP，免弹窗
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-10-26
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载、售卖
            ⛔⛔⛔
            
[rewrite_local]

# ～ 趣听音乐☆自动激活APP（2022-10-26）@ddgksf2013
^https?:\/\/api\.bspapp\.com\/client url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Crack/qtmusic.js

[mitm]

hostname=api.bspapp.com

***********************************/

























var body = $response.body.replace(/needVerify":true/g, 'needVerify":false');
$done({ body });

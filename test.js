/*
* ==UserScript==
* @ScriptName        每天60s读懂世界
* @Author            Cuttlefish
* @TgChannel         https://t.me/ddgksf2021
* @WechatID          墨鱼手记
* @UpdateTime        2022-04-17
* @ScriptFunction    快速浏览今天世界新闻
* @ScriptURL         https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/60s.js
* ==/UserScript==
[task_local]
0 9 * * * https://github.com/jackwude/qx/blob/main/qx.js, tag=每天60s读懂世界
*/

$notify("每日60s读懂世界", '  ','墨鱼：'+JSON.parse(response.body).datatime+' 请点击通知查看内容',{"open-url":JSON.parse(response.body).imageUrl});
    $done();

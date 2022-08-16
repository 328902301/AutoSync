/* 
脚本功能：完美解锁酷我音乐
脚本作者：king
下载地址：https://apple.co/3Kcejgh
更新时间：2022.8.16
脚本频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

代码重构:这版是最完美的酷我解锁，脚本全由yqc大佬提供，yqc大佬牛啤
当前版本:
[rewrite_local]
# 完美解锁酷我音乐
^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* - script-response-body kw.js
[mitm] 
hostname = *.kuwo.cn, *.lrts.me
********************************
*/

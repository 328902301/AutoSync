/*
 *
 *
脚本功能：
下载地址：商店下载
脚本作者：King
更新时间：2022.2.28
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
********************************
[rewrite_local]
#喜马拉雅
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)) url script-request-header https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/xmly.js

[mitm] 
hostname = *.*xima*.*, *.xmcdn.com, *.*.*.*,
*
*
*/

/*************************************

项目名称：小习惯-打卡App 解锁VIP
下载地址：https://t.cn/A69lQVtI
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/xianbeikeji\.com\/daily\/app\/user\/query url response-body "vipFlag":\d response-body "vipFlag":1 

[mitm]

hostname = xianbeikeji.com

*************************************/

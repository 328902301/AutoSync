/***********************************

> 应用名称：KeepStyle
> 脚本功能：超级净化，具体功能请参考[ # > ]
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-11-07
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载、售卖
            ⛔⛔⛔
            
[rewrite_local]
# > 屏蔽部分启动弹窗
^https?:\/\/api\.gotokeep\.com\/kprime\/v\d\/popups\/primeGuide url reject
# > 屏蔽开屏广告请求
^https?:\/\/kad\.gotokeep\.com\/op-engine-webapp\/v\d\/ad url reject
# > 屏蔽青少年弹窗
^https?:\/\/api.gotokeep.com/cauchy/growth/init url reject
# > 屏蔽搜索栏自动填充词
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/default\/keyword\/list url reject
# > 屏蔽热词
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotword\/list url reject
# > 屏蔽hotCourse
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotCourse\/list url reject
# > 屏蔽adwebapp
^https?:\/\/api\.gotokeep\.com\/op-engine-webapp\/v\d\/ad url reject
# > 屏蔽广告预加载
^https?:\/\/api\.gotokeep\.com\/ads\/v\d\/ads\/preload url reject
# > 屏蔽adbox
^https?:\/\/api\.gotokeep\.com\/training\/box\/config url reject
# > 屏蔽更新
^https?:\/\/api\.gotokeep\.com\/anno\/v\d\/upgrade\/check url reject
# > 我的页面去推广
^https?:\/\/api\.gotokeep\.com\/athena\/v\d\/people\/my url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/keepStyle.js
# > 底部栏净化
^https?:\/\/api\.gotokeep\.com\/config\/v\d\/basic url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/keepStyle.js
# > 发现页广告
https://api.gotokeep.com/homepage/v7/tab/find url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/keepStyle.js
# > 课程预览页广告
https://api.gotokeep.com/nuocha/course/v2/\w+/preview url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/keepStyle.js

[mitm]

hostname=api.gotokeep.com, kad.gotokeep.com

***********************************/


if ($request.url.indexOf('athena/v5/people/my') != -1) {
    let obj = JSON.parse($response.body);
    obj.data.floatingInfo = {}
    $done({ body: JSON.stringify(obj) });
}
else if( $request.url.indexOf('config/v3/basic') != -1 ){
    let obj = JSON.parse($response.body);
    obj.data.bottomBarControl.defaultTab = "home";
    //obj.data.bottomBarControl.tabs.forEach((e, i) => {if (e.tabType == "entry" || e.tabType == "mall") bottomBarTabs.splice(i--, 1);});
    obj.data.bottomBarControl.tabs = Object.values(obj.data.bottomBarControl.tabs).filter(item => !(item["tabType"]=="entry"||item["tabType"]=="mall"||item["tabType"]=="prime"));
    obj.data.homeTabs = Object.values(obj.data.homeTabs).filter(item => !(item["type"]=="uni_web_activity"));
    if(obj.data.homeTabs.length>1){
		obj.data.homeTabs[0].schema="keep://homepage/homePrime";
		obj.data.homeTabs[0].name = "會員";
		obj.data.homeTabs[0].type = "homePrime"
	}
    $done({ body: JSON.stringify(obj) });
}
else if( $request.url.indexOf('homepage/v7/tab/find') != -1 ){
    let obj = JSON.parse($response.body);
    obj.data.sections = Object.values(obj.data.sections).filter(item => (item["contentStyle"]=="quickEntranceV3"));
    //obj.data.sections.quickEntrances = obj.data.sections.quickEntrances.filter(item => (item.itemTrackProps.itemPosition==0||item.itemTrackProps.itemPosition==1||item.itemTrackProps.itemPosition==2||item.itemTrackProps.itemPosition==3));
    $done({ body: JSON.stringify(obj) });
}
else if( $request.url.indexOf('preview') != -1 ){
    let obj = JSON.parse($response.body);
    obj.data.detailSections = Object.values(obj.data.detailSections).filter(item => !(item["sectionType"]=="recommendation"));
    $done({ body: JSON.stringify(obj) });
}

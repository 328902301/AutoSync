/*************************************

使用方法：先开脚本再打开App，自动会解锁，如果没效果就关了重开或者按一下恢复购买，在还不行就卸载App重新安装！最后还不行的话就是脚本失效了！

#001💙【Fileball】已下架，已购可下载

#002💙【VSCO-照片与视频编辑】https://t.cn/AiOSSyU9

#003💙【1Blocker-广告拦截】https://t.cn/A6V7PAjE

#004💙【图图记账】https://t.cn/A6JZS4a0

#005💙【手机硬件管家】https://t.cn/A659O6zK

#006💙【Tiao】1.5.0以下版本

#007💙【Pillow-睡眠周期跟踪】https://t.cn/A6oupMnR

#008💙【Scanner Pro-文档扫描】https://t.cn/A6o0mdwX

#009💙【Anybox-跨平台书签管理】https://t.cn/A6oupXiC

#010💙【APTV】https://t.cn/A6S06Lhg

#011💙【目标地图】https://t.cn/A6oeytwe

#012💙【谜底时钟】https://t.cn/A6og4CvR

#013💙【谜底黑胶】https://t.cn/A6oeyX5Y

#014💙【OffScreen-自律番茄钟】https://t.cn/A6GJEFmx

#015💙【花样文字】https://t.cn/A6KxKtqG

#16-19💙【NotBoring天气，习惯，计算器，时间】https://t.cn/A6o1YcVv

#020💙【NotePlan】https://t.cn/A6KVzj2S

#021💙【Grow-健康运动】https://t.cn/A6a6LKSV

#022💙【Spark_mail-邮箱App】https://t.cn/A6KIVclG

#023💙【白云天气】https://t.cn/A6IKeLj1

#024💙【Malloc VPN】https://t.cn/A6KajYuG

#025💙【AudioMack-音乐App】https://t.cn/A6KS2mvG

#026💙【WidgetArt-自定义桌面小组件】https://t.cn/A6GugI9C

#027💙【Apollo-记录影视】https://t.cn/A6X7TuG8

#028💙【Aphrodite-啪啪啪日历】https://t.cn/A6MavcIV

#029💙【Happy:Days-小组件App】https://t.cn/A6KyTqaH

#030💙【Brass-定制图标&小组件】https://t.cn/A66b7Slx

#031💙【Email Me-给自己发邮箱】https://t.cn/A6Ke5PiP

#032💙【Tangerine-习惯与情绪追踪应用】https://t.cn/A6IXmXQj

#033💙【Noto-笔记】https://t.cn/A62GZOSF

#034💙【ElementNote-手写笔记&PDF注释】https://t.cn/A69b6yMa

#035💙【小决定-选择困难症克星】https://t.cn/AipMqprZ

#036💙【Alpenglow-日出日落】https://t.cn/A69ooWm6

#037💙【TimeFinder-提醒App】https://t.cn/A69YGCW8

#038💙【TouchRetouch-水印清理】https://t.cn/Ai8wl7bX

#039💙【bluredit-模糊视频&照片】https://t.cn/A69mnM1b

#040💙【照片清理工具Photo Cleaner】https://t.cn/A6qK2YhO

#041💙【Brovacy-隐私浏览器】https://t.cn/A69upwlg

#042💙【YubePiP-油管播放器】https://t.cn/A69B5CXH

#043💙【Zoomable-桌面浏览器】https://t.cn/A69B5oxk

#044💙【Startodo】https://t.cn/A69B5lQq

#045💙【Appspree】https://t.cn/A6otfeAc

#046💙【MetaSurf-社交网站浏览器】https://t.cn/A6S9d1l6

#047💙【PipDoc-画中画】https://t.cn/A69Bt9ca

#048💙【事线】https://t.cn/A696WVwt

#049💙【物品指南】https://t.cn/A69BiAey

#050💙【Cookie-记账】https://t.cn/A6cqfdMK

#051💙【InPaper-创作壁纸】https://t.cn/A69DvQmn

#052💙【奇妙组件】https://t.cn/A69DP9iE

#053💙【卡片馆】https://t.cn/A6aVq4er

**************************************

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js

^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/.*\/?(.*?)*$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/sjyz.js

^https:\/\/app-measurement\.com\/config\/app\/(.*?) url reject

[mitm]

hostname = api.revenuecat.com, app-measurement.com, firebaseremoteconfig.googleapis.com

*************************************/


const chxm1023 = {};
const chxm = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];


const list = {
	'CardPhoto': { name: 'allaccess', id: 'CardPhoto_Pro', cm: 'chxmb'
	},
	'OneWidget': { name: 'allaccess', id: 'com.onewidget.vip', cm: 'chxmb'
	},
	'PinPaper': { name: 'allaccess', id: 'Paper_Lifetime', cm: 'chxmb'
	},
	'Cookie': { name: 'allaccess', id: 'app.ft.Bookkeeping.lifetime', cm: 'chxmb'
	},
	'MyThings': { name: 'pro', id: 'xyz.jiaolong.MyThings.pro.infinity', cm: 'chxmb'
	},
	'%E4%BA%8B%E7%BA%BF': { name: 'pro', id: 'xyz.jiaolong.eventline.pro.lifetime', cm: 'chxmb'
	},
	'PipDoc': { name: 'pro', id: 'pipdoc_pro_lifetime', cm: 'chxmb'
	},
	'Facebook': { name: 'pro', id: 'fb_pro_lifetime', cm: 'chxmb'
	},
	'Free': { name: 'pro', id: 'appspree_pro_lifetime', cm: 'chxmb'
	},
	'Startodo': { name: 'pro', id: 'pro_lifetime', cm: 'chxmb'
	},
	'Browser': { name: 'pro', id: 'pro_zoomable', cm: 'chxmb'
	},
	'YubePiP': { name: 'pro', id: 'piptube_pro_lifetime', cm: 'chxmb'
	},
	'PrivateBrowser': { name: 'pro', id: 'private_pro_lifetime', cm: 'chxmb'
	},
	'Photo%20Cleaner': { name: 'premium', id: 'com.monocraft.photocleaner.lifetime.1', cm: 'chxmb'
	},
	'bluredit': { name: 'Premium', id: 'net.kaleidoscope.bluredit.premium1', cm: 'chxma'
	},
	'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_15dlrs_2', cm: 'chxma'
	},
	'Mate': { name: 'full', id: 'mate_sub_a_t3_trial', cm: 'chxma'
	},
	'TimeFinder': { name: 'pro', id: 'com.lukememet.TimeFinder.Premium', cm: 'chxmb'
	},
	'Alpenglow': { name: 'newPro', id: 'ProLifetime', cm: 'chxma'
	},
	'Decision': { name: 'com.nixwang.decision.entitlements.pro', id: 'com.nixwang.decision.pro.annual', cm: 'chxma'
	},
	'ElementNote': { name: 'pro', id: 'com.soysaucelab.element.note.lifetime', cm: 'chxmb'
	},
	'Noto%20%E7%AC%94%E8%AE%B0': { name: 'pro', id: 'com.lkzhao.editor.full', cm: 'chxma'
	},
	'Tangerine': { name: 'Premium', id: 'PremiumMonthly', cm: 'chxma'
	},
	'Email%20Me': { name: 'premium', id: 'ventura.media.EmailMe.premium.lifetime', cm: 'chxmb'
	},
	'Brass': { name: 'pro', id: 'brass.pro.annual', cm: 'chxma'
	},
	'Happy%3ADays': { name: 'pro', id: 'happy_999_lifetime', cm: 'chxmb'
	},
	'Aphrodite': { name: 'all', id: 'com.ziheng.aphrodite.onetime', cm: 'chxmb'
	},
	'apollo': { name: 'all', id: 'com.ziheng.apollo.onetime', cm: 'chxmb'
	},
	'widget_art': { name: 'all', id: 'com.ziheng.widgetart.onetime', cm: 'chxmb'
	},
	'audiomack-iphone': { name: 'Premium1', id: 'com.audiomack.premium.2022', cm: 'chxma'
	},
	'MallocVPN': { name: 'IOS_PRO', id: 'malloc_yearly_vpn', cm: 'chxma'
	},
	'WhiteCloud': { name: 'allaccess', id: 'wc_pro_1y', cm: 'chxma'
	},
	'Spark': { name: 'premium', id: 'spark_5999_1y_1w0', cm: 'chxma'
	},
	'Grow': { name: 'grow.pro', id: 'grow_lifetime', cm: 'chxmb'
	},
	'NotePlan': { name: 'premium', id: 'co.noteplan.subscription.personal.annual', cm: 'chxma'
	},
	'simple-weather': { name: 'patron', id: 'com.andyworks.weather.yearlyPatron', cm: 'chxma'
	},
	'streaks': { name: 'patron', id: 'com.andyworks.weather.yearlyPatron', cm: 'chxma'
	},
	'andyworks-calculator': { name: 'patron', id: 'com.andyworks.weather.yearlyPatron', cm: 'chxma'
	},
	'simple-timer': { name: 'patron', id: 'com.andyworks.weather.yearlyPatron', cm: 'chxma'
	},
	'UTC': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month', cm: 'chxma'
	},
	'OffScreen': { name: 'Entitlement.Pro', id: 'tech.miidii.offscreen.pro', cm: 'chxmb'
	},
	'%E8%B0%9C%E5%BA%95%E9%BB%91%E8%83%B6': { name: 'Entitlement.Pro', id: 'tech.miidii.MDVinyl.lifetime', cm: 'chxma'
	},
	'%E8%B0%9C%E5%BA%95%E6%97%B6%E9%92%9F': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.pro', cm: 'chxmb'
	},
	'%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': { name: 'pro', id: 'com.happydogteam.relax.lifetimePro', cm: 'chxmb'
	},
	'APTV': { name: 'pro', id: 'com.kimen.aptvpro.lifetime', cm: 'chxmb'
	},
	'Anybox': { name: 'pro', id: 'cc.anybox.Anybox.annual', cm: 'chxma'
	},
	'ScannerPro': { name: 'plus', id: 'com.chxm1023.premium.yearly', cm: 'chxma'
	},
	'Pillow': { name: 'premium', id: 'com.neybox.pillow.premium.year', cm: 'chxma'
	},
	'Taio': { name: 'full-version', id: 'taio_1651_1y_2w0_std_v2', cm: 'chxma'
	},
	'CPUMonitor': { name: 'Pro', id: 'pro_annual', cm: 'chxma'
	},
	'totowallet': { name: 'all', id: 'com.ziheng.totowallet.onetimepurchase', cm: 'chxmb'
	},
	'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.yearly', cm: 'chxma'
	},
	'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly', cm: 'chxma'
	},
	'Fileball': { name: 'filebox_pro', id: 'com.filebox.premium', cm: 'chxmb'
	}
};


if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	chxm1023.headers = $request.headers;
} else if (chxm && chxm.subscriber) {
	chxm.subscriber.subscriptions = chxm.subscriber.subscriptions || {};
	chxm.subscriber.entitlement = chxm.subscriber.entitlement || {};
	for (const i in list) {
		if (new RegExp(`^${i}`, `i`).test(ua)) {


if (list[i].cm.indexOf('chxma') != -1) {
data = {
	"warning": "仅供学习，禁止转载或售卖",
	"wechat": "chxm1023",
	"original_purchase_date": "2022-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z",
	"expires_date": "2099-09-09T09:09:09Z",
	"ownership_type": "PURCHASED"
	};
}

if (list[i].cm.indexOf('chxmb') != -1) {
data = {
	"warning": "仅供学习，禁止转载或售卖",
	"wechat": "chxm1023",
	"original_purchase_date": "2022-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z",
	"ownership_type": "PURCHASED"
	};
}

			chxm.subscriber.subscriptions[list[i].id] = data;
			chxm.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
			chxm.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
	chxm1023.body = JSON.stringify(chxm);
}

$done(chxm1023);

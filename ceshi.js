/********************************
Membership unlock for VSCO & 1Blocker
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-request ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js
http-response ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

[MITM]
hostname = api.revenuecat.com
********************************/

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

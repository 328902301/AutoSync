/***********************************
> 应用名称：RevenueCat多合一脚本
> 脚本作者：Alkaid
> 更新时间：2022-12-06
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
> 默默私语：Speed SSL Ping

> entitlements：如下所示陆续更新...
filebox_pro, full-version, Entitlement.Pro, pro, allaccess, membership, premium, Airmail Premium, all, grow.pro, plus, sub.pro, Premium1, Pro, full_access, AirAppsOne, lifetime, Plus, full, Premium, premium_access, Gold

> product_identifier：如下所示陆续更新...
com.Alkaid.premium.yearly, com.filebox.premium, taio_1499_1y_2w0_std_v2, vsco_global_2999_annual_7D_free, co.bergen.Darkroom.product.year.everything, com.kevinreutter.Sagittarius.PremiumLifetime, blocker.ios.subscription.yearly, tech.miidii.MDClock.pro, com.happydogteam.relax.lifetimePro, wc_pro_1y, VSCOANNUAL, com.kevinreutter.Sagittarius.FamilyPremiumLifetime, com.neybox.pillow.premium.year, com.olegst.usage.pro, Airmail_iOS_Yearly, com.circles.fin.premium.lifetime, app.percento.premium.168.lifetime, com.premium.yearly, grow_lifetime, com.readdle.Scanner.subscription.year25, com.ziheng.widgetart.onetime, com.ziheng.aphrodite.onetime, com.ziheng.apollo.onetime, com.ziheng.pandora.lifetime, com.onewidget.vip, blocker.ios.iap.lifetime, spark_5999_1y_1w0, vis_lifetime_unlock, com.gear.app.yearly, tech.miidii.MDVinyl.lifetime, com.pspdfkit.viewer.sub.pro.yearly, com.ziheng.totowallet.monthly, com.audiomack.premium.2018, co.bergen.Darkroom.product.forever.everything, pro_annual, halfyearsubscription, com.mlobodzinski.Stoic.lifetime, com.mlobodzinski.Stoic.lifetime, cc.anybox.Anybox.annual, un_premium_plan_annual, com.lishaohui.cashflow.lifetime, iap.io.masterbuilders.focus.pro_one_year, com.limepresso.pomodorofree.subscription.year, LifetimeMembership, com.appcubby.launchpro.forever, com.maxty.gofitness.3monthsplan, com.lukilabs.lukiapp.pro.sub.yearly, com.boleStudio.safaridarkmode.permanent, com.bluesignum.harukong.lifetime.premium, com.algoriddim.djay_iphone_free.pro_loyalty_2.yearly, akl_1999_1y, co.airapps.calculator.year, video.mojo.pro.yearly, com.kimen.aptvpro.lifetime, PremiumMonthly, lifetime, goodhappens_basic_forever, pro_standard_0926, com.andyworks.weather.yearlyPatron, co.noteplan.subscription.personal.annual3, PremiumAnnualWidget, PremiumAnnual, com.onmyway133.PastePal.pro, brass.pro.annual, com.MINE.PomodoroTimer.plus.lifetime, atelerix_pro_lifetime, wf_1449_1y, com.kudos.yearly2, mate_sub_a_t4

[mitm]
hostname = api.revenuecat.com

[rewrite_local]
# > RevenueCat（2022-11-12）@Alkaid
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/*) url script-echo-response UnlockRevenuecat.js
***********************************/


// script-echo-response响应优先级 > script-response-body

// script-echo-response写法
var objc = {
      "request_date_ms": 1662599120248,
      "request_date": "2022-09-08T01:05:20Z",
      "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-09-08T01:04:03Z",
            "original_application_version": "8",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                  "com.Alkaid.premium.yearly": {
                        "is_sandbox": false,
                        "ownership_type": "PURCHASED",
                        "billing_issues_detected_at": null,
                        "period_type": "normal",
                        "expires_date": "2045-12-18T01:04:17Z",
                        "grace_period_expires_date": null,
                        "unsubscribe_detected_at": null,
                        "original_purchase_date": "2022-09-08T01:04:18Z",
                        "purchase_date": "2022-09-08T01:04:17Z",
                        "store": "app_store"
                  }
            },
            //①修改这里软件权益
            "entitlements": {
                  "Premium": {
                        "grace_period_expires_date": null,
                        "purchase_date": "2022-09-08T01:04:17Z",
                        //②通过不了修改这里得产品标识
                        "product_identifier": "com.Alkaid.premium.yearly",
                        "expires_date": "2045-12-18T01:04:17Z"
                  }
            },
            "original_purchase_date": "2022-09-07T13:05:43Z",
            "original_app_user_id": "$RCAnonymousID:Alkaid",
            "last_seen": "2022-09-08T01:04:03Z"
      }
};

$done({body : JSON.stringify(objc)});


/***********************************

// script-response-body写法
var objc = JSON.parse($response.body);

objc = {
      "request_date_ms": 1662599120248,
      "request_date": "2022-09-08T01:05:20Z",
      "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2022-09-08T01:04:03Z",
            "original_application_version": "8",
            "other_purchases": {},
            "management_url": "https://apps.apple.com/account/subscriptions",
            "subscriptions": {
                  "com.Alkaid.premium.yearly": {
                        "is_sandbox": false,
                        "ownership_type": "PURCHASED",
                        "billing_issues_detected_at": null,
                        "period_type": "normal",
                        "expires_date": "2045-12-18T01:04:17Z",
                        "grace_period_expires_date": null,
                        "unsubscribe_detected_at": null,
                        "original_purchase_date": "2022-09-08T01:04:18Z",
                        "purchase_date": "2022-09-08T01:04:17Z",
                        "store": "app_store"
                  }
            },
            //①修改这里软件权益
            "entitlements": {
                  "Premium": {
                        "grace_period_expires_date": null,
                        "purchase_date": "2022-09-08T01:04:17Z",
                        //②通过不了修改这里得产品标识
                        "product_identifier": "com.Alkaid.premium.yearly",
                        "expires_date": "2045-12-18T01:04:17Z"
                  }
            },
            "original_purchase_date": "2022-09-07T13:05:43Z",
            "original_app_user_id": "$RCAnonymousID:Alkaid",
            "last_seen": "2022-09-08T01:04:03Z"
      }
};

$done({body : JSON.stringify(objc)});

***********************************/
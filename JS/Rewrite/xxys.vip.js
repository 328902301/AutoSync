/**
 * 小小影视vip 20.12.22
 * 
 * @shuangfan
//  * https://github.com/NobyDa/Script/blob/master/QuantumultX/File/xxys.js
//  * https://github.com/Sunert/Scripts/blob/master/Script/xxys.js
//  * https://raw.githubusercontent.com/photonmang/quantumultX/master/xxys.js
 * 
 * 
 * MITM = *.xxjjappss.com,*.xiaoxiaoapps.com,*.huaerdadi.com // *.xxjjappss.com,*.xjxjappss.com,*.huaerdadi.com
 * ^https:\/\/[a-z0-9]+\.(xxjjappss|xiaoxiaoapps|huaerdadi)\.com\/(ssp-svr\/ssp\/list3|vod\/reqplay|ucp\/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/bv5204978/QXRelay/master/JS/Rewrite/xxys.vip.js
 * 
 * 商店下载easyknowlege 
 */


// ucp/index
// vod/reqplay
// getGlobalData

// ssp-svr/ssp/list3


/**
 21.7.6
global
https://vuqw2vqaxdiq.gxjysmc.com/getGlobalData?v=3.2.2

index
xxx com/init?v=3.2.2

真尼玛多
*.hzsmhw.com,*.gxjysmc.com,*.hnhx360.com,*.91nhnh.com,*.judeleshiye.com,*.daqindou.com,*.syzcny.com,*.5iqzj.com,
ip
117.24.15.104 117.24.15.87

^https:\/\/[a-z0-9]{10,}\.[a-z0-9]{5,}\.com\/(init|getGlobalData)\?v=






 */



const index = "init";
// const reqplay = "vod/reqplay";

const global = "getGlobalData";

// const ssp = "ssp-svr/ssp/list3";


let obj = JSON.parse($response.body);

// index vip
if ($request.url.indexOf(index) != -1) {
	obj.data.user["isvip"] = "1";
	obj.data.user["avatar_url"] = "https://raw.githubusercontent.com/bv5204978/QXRelay/master/Resource/jpg.jpg";
	obj.data.user["goldcoin"] = "233";

	obj.data.uinfo["curr_group"] = "5"//obj.data.groups[obj.data.groups.length - 1];
	obj.data.uinfo["play_daily_remainders"] = "233";
	obj.data.uinfo["down_daily_remainders"] = "233";

	obj.data.uinfo["goldcoin"] = "233";
}

// // reqplay play
// if ($request.url.indexOf(reqplay) != -1) {
// 	obj.retcode = "0";
// 	obj.data.lastplayindex = "1";
// 	if(obj.data.hasOwnProperty("httpurl_preview")){
// 		var playurl = obj.data["httpurl_preview"];
// 		obj.data["httpurl"] = playurl;
// 	};
// }

// global ad
if ($request.url.indexOf(global) != -1) {
	// delete obj.data.adrows
	// delete obj.data.adgroups
	// delete obj.data.iOS_adgroups
	// delete obj.data.Android_adgroups

	// obj.data.adrows = [{}]
	obj.data.adgroups = {"global_adgroup_ad1": [{
		"url": "",
		"countdown": "0",
		"pic": "https://raw.githubusercontent.com/bv5204978/QXRelay/master/Resource/jpg.jpg"
	}]}
	obj.data.iOS_adgroups = {"global_adgroup_ad1": [{
		"url": "",
		"countdown": "0",
		"pic": "https://raw.githubusercontent.com/bv5204978/QXRelay/master/Resource/jpg.jpg"
	}]}
}

if ($request.url.indexOf(ssp) != -1) {
	delete obj.data.pmap
}

$done({ body: JSON.stringify(obj) });

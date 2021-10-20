const version = '1020v3';
const urlMap = {
	'xiaohongshu.com/api/sns/v2/system_service/splash_config': 'removeXHSLaunch',	//小红书开屏
	'x/v2/feed/index': 'removeBzhanFeed'	//b站推荐页广告
}

let $ = new nobyda();

//删除小红书广告
function removeXHSLaunch(data) {
	try {
		// console.log(data);
		data.data.ads_groups = [];
	} catch (error) {
		console.log(error);
	}
}


//删除b站推荐页广告
function removeBzhanFeed(data) {
	try {
		let items = data.data.items || [];
		if (items.length === 0) return;
		let newItems = [];
		for (let item of items) {
			if(item.ad_info) {
				continue;
			}
			let bannerItem = item.banner_item || [];
			if(bannerItem.length > 0) {
				let newBannerItem = [];
				for (const banner of bannerItem) {
					if(banner.type != 'ad') {
						newBannerItem.push(banner);
					}
				}
				item.banner_item = newBannerItem;
			}
			newItems.push(item);
		}
		data.data.items = newItems;
	} catch (error) {
		console.log(error);
	}
}

function getModifyMethod(url) {
	for(const [path, method] of Object.entries(urlMap)) {
		if(url.indexOf(path) > -1) {
			return method;
		}
	}
	return null;
}

function nobyda() {
	const isQuanX = typeof $task != "undefined";
	const isSurge = typeof $httpClient != "undefined";
	const isRequest = typeof $request != "undefined";
	const notify = (title, subtitle='', message='') => {
		if (isQuanX) $notify(title, subtitle, message)
		if (isSurge) $notification.post(title, subtitle, message);
	}
	// const read = (key) => {
	// 	if (isQuanX) return $prefs.valueForKey(key);
	// 	if (isSurge) return $persistentStore.read(key);
	// }
	const done = (value = {}) => {
		if (isQuanX) return $done(value);
		if (isSurge) isRequest ? $done(value) : $done();
	}

	return {
		isRequest,
		isSurge,
		isQuanX,
		notify,
		// read,
		done
	}
}


var body = $response.body;
var url = $request.url;
let method = getModifyMethod(url);
if(method) {
	var func = eval(method);
	let data = JSON.parse(body);
	new func(data);
	body = JSON.stringify(data);
}
$.done(body);
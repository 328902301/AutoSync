const urlMap = {
	'xiaohongshu.com/api/sns/v2/system_service/splash_config': 'removeXHSLaunch',
}

let $ = new nobyda();

function removeXHSLaunch(data) {
	try {
		data.data.ads_groups = [];
		$.notify('remove xhs success');
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
	// log(method);
	var func = eval(method);
	let data = JSON.parse(body);
	new func(data);
	body = JSON.stringify(data);
}
$.done(body);
let url = $request.url;
let headers = $request.headers;
if (url.indexOf("baidu.com") !== -1) {
	if (headers["User-Agent"].indexOf("iPhone") !== -1)
		headers["User-Agent"] =
			"Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 SonyEricssonP100/01; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36 T7/12.20.0.0 SP-engine/2.33.0 baiduboxapp/12.20.5.11(Baidu; P1 10) NABar/1.0";
}
$done({ headers });

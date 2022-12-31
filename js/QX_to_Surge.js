/*
原作者@小白脸
使用方法 在链接末尾加上qx
[Script]
QX转换 = type=http-request,pattern=qx$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/chengkongyiban/Surge/main/js/QX_to_Surge.js

[MITM]
hostname = %APPEND% github.com:443, raw.githubusercontent.com:443
*/

let req = $request.url.replace(/qx$/,'')
let name = '#!name= ' + req.match(/.+\/(.+)\.(conf|js|snippet|txt)/)?.[1] || '无名';
!(async () => {
  let body = await http(req);

	body = body.match(/[^\n]+/g);
	
let script = [];
let URLRewrite = [];
let HeaderRewrite = [];
let MapLocal = [];
let MITM = "";

body.forEach((x, y, z) => {
	let type = x.match(
		/script-|enabled=|reject|echo-response|\-header|hostname|url\x20(302|307)|\x20(request|response)-body/
	)?.[0];
	if (type) {
		switch (type) {
			case "script-":
			if (x.match('script-echo-response')) {throw '脚本不支持通用'}
				z[y - 1]?.match("#") && script.push(z[y - 1]);
				let proto = x.match('proto.js') ? ',binary-body-mode=1' : '';
				let rebody = x.match('script-(request|response)-body') ? ',requires-body=1,max-size=3145728' : '';
				let analyze = x.match('analyze-echo') ? ',requires-body=1,max-size=3145728' : '';
				script.push(
					x.replace(
						/(\^?http[^\s]+)\x20url\x20script-(response|request|analyze)[^\s]+\x20(http.+\/(.+)\.js)/,
						`$4 = type=http-$2,pattern=$1${rebody}${proto}${analyze},script-path=$3,script-update-interval=0`,
					),
				);
				break;

			case "enabled=":
				z[y - 1]?.match("#") && script.push(z[y - 1]);
				
				let cronExp = x.split(" http")[0].replace(/(#|;|\/\/)/,'');
				
				let cronJs = x.split("//")[1].split(",")[0].replace(/(.+)/,'https://$1');
				
				let croName = x.split("tag=")[1].split(",")[0];
				
				script.push(
					x.replace(
						/.+enabled=.+/,
						`${croName} = type=cron,script-path=${cronJs},timeout=60,cronexp=${cronExp},wake-system=1`,
					),
				);
				break;

			case "reject":
				let jct = x.match(/reject?[^\s]+/)[0];
				let url = x.match(/\^?http[^\s]+/)?.[0];

				if (jct === "reject-200") {
					z[y - 1]?.match("#") && MapLocal.push(z[y - 1]);
					MapLocal.push(`${url} data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"`);
					break;
				}

				if (jct === "reject-img") {
					z[y - 1]?.match("#") && MapLocal.push(z[y - 1]);
					MapLocal.push(`${url} data="https://raw.githubusercontent.com/mieqq/mieqq/master/reject-img.gif"`);
					break;
				}

				z[y - 1]?.match("#") && URLRewrite.push(z[y - 1]);
				URLRewrite.push(x.replace(/(\^?http[^\s]+).+/, "$1 - reject"));
				break;

			case "-header":
			if (x.match(/\(\\r\\n\)/g).length === 2){			
				z[y - 1]?.match("#") &&  HeaderRewrite.push(z[y - 1]);
let op = x.match(/\x20response-header/) ?
'http-response ' : '';
     if(x.match(/\$1\$2/)){
		  HeaderRewrite.push(x.replace(/(\^?http[^\s]+).+?n\)([^\:]+).+/,`${op}$1 header-del $2`))	
		}else{
				HeaderRewrite.push(
					x.replace(
						/(\^?http[^\s]+)[^\)]+\)([^:]+):([^\(]+).+\$1\x20?\2?\:?([^\$]+)?\$2/,
						`${op}$1 header-replace-regex $2 $3 $4''`,
					),
				);
				}
				}else{
	$notification.post('不支持这条规则转换,已跳过','',`${x}`);
				}
				break;

			case "echo-response":
				z[y - 1]?.match("#") && MapLocal.push(z[y - 1]);
				MapLocal.push(x.replace(/(\^?http[^\s]+).+(http.+)/, '$1 data="$2"'));
				break;
			case "hostname":
				MITM = x.replace(/hostname\x20?=(.*)/, `[MITM]\nhostname = %APPEND% $1`);
				break;
			default:
				if (type.match("url ")) {
					z[y - 1]?.match("#") && URLRewrite.push(z[y - 1]);
					URLRewrite.push(x.replace(/(.*?)\x20url\x20(302|307)\s(.+)/, "$1 $3 $2"));
				} else {
					z[y - 1]?.match("#") && script.push(z[y - 1]);
					script.push(
						x.replace(
							/([^\s]+)\x20url\x20(response|request)-body\x20(.+)\2-body(.+)/,
							`test = type=$2,pattern=$1,requires-body=1,script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, argument=$3->$4`,
						),
					);
				}
		} //switch结束
	}
}); //循环结束

script = (script[0] || '') && `[Script]\n${script.join("\n")}`;

URLRewrite = (URLRewrite[0] || '') && `[URL Rewrite]\n${URLRewrite.join("\n")}`;

HeaderRewrite = (HeaderRewrite[0] || '') && `[Header Rewrite]\n${HeaderRewrite.join("\n")}`;

MapLocal = (MapLocal[0] || '') && `[MapLocal]\n${MapLocal.join("\n")}`;

body = `${name}

${URLRewrite}
${HeaderRewrite}
${script}
${MapLocal}
${MITM}`.replace(/\;/g,'#').replace(/\n{2,}/g,'\n\n').replace(/\x20{2,}/g,'\x20').replace(/http-analyze/g,'http-request').replace(/(.+)pattern=(.+\{.+,.*?\}.*?),(.+)/g,'$1pattern="$2",$3')



 $done({ response: { status: 200 ,body:body } });

})()
.catch((e) => {
		$notification.post(`${e}`,'','');
		$done()
	})




function http(req) {
  return new Promise((resolve, reject) =>
    $httpClient.get(req, (err, resp,data) => {
  resolve(data)
  })
)
}
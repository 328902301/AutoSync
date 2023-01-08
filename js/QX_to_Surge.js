/***************
原脚本作者@小白脸 脚本修改@chengkongyiban
感谢@xream 的指导
使用方法 在qx重写链接末尾加上qx

[Script]
QX转换 = type=http-request,pattern=qx$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/chengkongyiban/shadowrocket/main/scripts/QX_to_Surge.js

[MITM]
hostname = %APPEND% github.com:443, raw.githubusercontent.com:443
**************/
var name = "";
var desc = "";
let req = $request.url.replace(/qx$|qx\?.*/,'');
let urlArg = $request.url.replace(/.+qx(\?.*)/,'$1');
var original = [];//用于获取原文行号
//获取参数
var nName = urlArg.indexOf("n=") != -1 ? (urlArg.split("n=")[1].split("&")[0].split("+")) : null;
var Pin0 = urlArg.indexOf("y=") != -1 ? (urlArg.split("y=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Pout0 = urlArg.indexOf("x=") != -1 ? (urlArg.split("x=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
//修改名字和简介
if (nName === null){
	name = req.match(/.+\/(.+)\.(conf|js|snippet|txt)/)?.[1] || '无名';
    desc = name;
}else{
	name = nName[0] != "" ? nName[0] : req.match(/.+\/(.+)\.(conf|js|snippet|txt)/)?.[1];
	desc = nName[1] != undefined ? nName[1] : nName[0];
};
name = "#!name=" + decodeURIComponent(name);
desc = "#!desc=" + decodeURIComponent(desc);

!(async () => {
  let body = await http(req);
original = body.split("\n");
	body = body.match(/[^\n]+/g);
	
let script = [];
let URLRewrite = [];
let HeaderRewrite = [];
let MapLocal = [];
let MITM = "";
let others = [];

body.forEach((x, y, z) => {
	x = x.replace(/^(#|;|\/\/)/gi,'#');
//去掉注释
if(Pin0 != null)	{
	for (let i=0; i < Pin0.length; i++) {
  const elem = Pin0[i];
	if (x.indexOf(elem) != -1){
		x = x.replace(/^#/,"")
	}else{};
};//循环结束
}else{};//去掉注释结束

//增加注释
if(Pout0 != null){
	for (let i=0; i < Pout0.length; i++) {
  const elem = Pout0[i];
	if (x.indexOf(elem) != -1 && x.indexOf("hostname") == -1){
		x = x.replace(/(.+)/,"#$1")
	}else{};
};//循环结束
}else{};//增加注释结束

	let type = x.match(
		/\x20url\x20script-|enabled=|\x20url\x20reject$|url\x20reject-|\x20echo-response|\-header|^hostname|url\x20(302|307)|\x20(request|response)-body/
	)?.[0];
	
	//判断注释
	if (x.match(/^[^#]/)){
	var noteK = "";
	}else{
	var noteK = "#";
	};
	
	if (type) {
		switch (type) {
			case " url script-":
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				let sctype = x.match('script-response') ? 'response' : 'request';
				
				let rebody = x.match('-body|-analyze') ? ',requires-body=1' : '';
				
				let size = x.match('-body|-analyze') ? ',max-size=3145728' : '';
				
				let proto = x.match('proto.js') ? ',binary-body-mode=1' : '';
				
				let urlInNum = x.split(" ").indexOf("url");
				
				let ptn = x.split(" ")[urlInNum - 1].replace(/#/,"");
				
				let js = x.split(" ")[urlInNum + 2];
				
				let scname = js.substring(js.lastIndexOf('/') + 1, js.lastIndexOf('.') );
				script.push(
					x.replace(
						/.+script-.+/,
						`${noteK}${scname} = type=http-${sctype},pattern=${ptn}${rebody}${size}${proto},script-path=${js},script-update-interval=0`,
					),
				);
				break;

			case "enabled=":
				z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
				
				let cronExp = x.split(" http")[0].replace(/#/,'');
				
				let cronJs = x.split("://")[1].split(",")[0].replace(/(.+)/,'https://$1');
				
				let croName = x.split("tag=")[1].split(",")[0];
				
				script.push(
					x.replace(
						/.+enabled=.+/,
						`${noteK}${croName} = type=cron,script-path=${cronJs},timeout=60,cronexp=${cronExp},wake-system=1`,
					),
				);
				break;

			case "url reject-":

				z[y - 1]?.match(/^#/) && MapLocal.push(z[y - 1]);
				
				let dict2Mock = x.match('dict') ? '"https://raw.githubusercontent.com/mieqq/mieqq/master/reject-dict.json"' : '';
				
				let array2Mock = x.match('array') ? '"https://raw.githubusercontent.com/mieqq/mieqq/master/reject-array.json"' : '';
				
				let two002Mock = x.match('200') ? '"https://raw.githubusercontent.com/mieqq/mieqq/master/reject-200.txt"' : '';
				
				let img2Mock = x.match('img') ? '"https://raw.githubusercontent.com/mieqq/mieqq/master/reject-img.gif"' : '';
				
				MapLocal.push(x.replace(/(#)?(.+?)\x20url\x20reject-.+/, `${noteK}$2 data=${dict2Mock}${array2Mock}${two002Mock}${img2Mock}`));
				break;

			case " url reject":

				z[y - 1]?.match(/^#/) && URLRewrite.push(z[y - 1]);
				
				URLRewrite.push(x.replace(/(#)?(.+?)\x20url\x20reject$/, `${noteK}$2 - reject`));
				break;

			case "-header":
					
			let op = x.match(/\x20response-header/) ?
'http-response ' : 'http-request ';
				
				if (x.match(/\x20re[^\s]+-header/) != undefined){
					
			if (x.match(/\(\\r\\n\)/g).length === 2){			
				z[y - 1]?.match(/^#/) &&  HeaderRewrite.push(z[y - 1]);

     if(x.match(/\$1\$2/)){
		  HeaderRewrite.push(x.replace(/(\^?http[^\s]+).+?n\)([^\:]+).+/,`${op}$1 header-del $2`))	
		}else{
				HeaderRewrite.push(
					x.replace(
						/(\^?http[^\s]+)[^\)]+\)([^:]+):([^\(]+).+\$1\x20?\2?\:?\x20?([^\$]+)?\$2/,
						`${op}$1 header-replace-regex $2 $3 "$4"`,
					),
				);
				}
				}else{
					
let lineNum = original.indexOf(x) + 1;
others.push(lineNum + "行" + x)
				}
}else{
	let lineNum = original.indexOf(x) + 1;
	others.push(lineNum + "行" + x)
};//-header结束
				break;

			case " echo-response":
				z[y - 1]?.match(/^#/) && MapLocal.push(z[y - 1]);
				MapLocal.push(x.replace(/(\^?http[^\s]+).+(http.+)/, '$1 data="$2"'));
				break;
			case "hostname":
				MITM = x.replace(/hostname\x20?=(.*)/, `[MITM]\n\nhostname = %APPEND% $1`);
				break;
			default:
				if (type.match("url ")) {
					z[y - 1]?.match(/^#/) && URLRewrite.push(z[y - 1]);
					URLRewrite.push(x.replace(/(#)?(.*?)\x20url\x20(302|307)\s(.+)/, `${noteK}$2 $4 $3`));
				} else {
					z[y - 1]?.match(/^#/) && script.push(z[y - 1]);
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

script = (script[0] || '') && `[Script]\n\n${script.join("\n\n")}`;

script = script.replace(/(.+)pattern=(.+\{.*?,.*?\}.*?),(.+)/gi,'$1pattern="$2",$3')

URLRewrite = (URLRewrite[0] || '') && `[URL Rewrite]\n\n${URLRewrite.join("\n")}`;

HeaderRewrite = (HeaderRewrite[0] || '') && `[Header Rewrite]\n\n${HeaderRewrite.join("\n")}`;

MapLocal = (MapLocal[0] || '') && `[Map Local]\n\n${MapLocal.join("\n\n")}`;

others = (others[0] || '') && `${others.join("\n\n")}`;

body = `${name}
${desc}

${URLRewrite}

${HeaderRewrite}

${script}

${MapLocal}

${MITM}`
		.replace(/(#.+\n)\n/g,'$1')
		.replace(/t&zd;/g,',')
		.replace(/"{2,}/g,'"')
		.replace(/\x20{2,}/g,' ')
		.replace(/\n{2,}/g,'\n\n')

others !="" && $notification.post("不支持的类型已跳过","第" + others,"点击查看原文，长按可展开查看跳过行",{url:req})

 $done({ response: { status: 200 ,body:body ,headers: {'Content-Type': 'text/plain; charset=utf-8'} } });

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
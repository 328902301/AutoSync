/****************************

说明
   t&zd; = {  , }  花括号中的逗号

***************************/

let req = $request.url.replace(/plugin$/,'plugin')
let name = '#!name = ' + req.match(/.+\/(.+)\.(sgmodule|module|js)/)?.[1] || '无名';
let desc = '#!desc = ' + req.match(/.+\/(.+)\.(sgmodule|module|js)/)?.[1] || '无名';

!(async () => {
  let body = await http(req);

	body = body.match(/[^\n]+/g);
let plugin = [];
//let URLRewrite = [];
//let MITM = [];

body.forEach((x, y, z) => {
	x = x.replace(/^(#|;|\/\/)/gi,'#');
	let type = x.match(
		/\[Rewrite\]|^hostname\x20?=\x20?|\[mitm\]|.+/i
	)?.[0];
	//判断注释
	if (x.match(/^[^#]/)){
	var noteK = "";
	}else{
	var noteK = "#";
	};
	
	if (type) {
		switch (type) {
			
			case "[Rewrite]":
				
				plugin.push(
					x.replace(
						/\[Rewrite\]/i,
						'[URL Rewrite]'
					),
				);
				
				break;
				
			default:
			if (type.match(/^hostname\x20?=\x20?/)){
				plugin.push(x.replace(/hostname\x20?=\x20?(.+)/,'hostname = %APPEND% $1'))
			}else{
				
			if (type.match(/\[mitm\]/i)){
				plugin.push(x.replace(/\[mitm\]/i,'[MITM]'))
			}
			else{
				plugin.push(x);
			}
			}
				
				
		} //switch结束
	}
}); //循环结束

plugin = (plugin[0] || '') && `${plugin.join("\n")}`;


body = `${plugin}`
		.replace(/\x20{2,}/gi,' ')
		.replace(/"/g,'')
		.replace(/\[URL Rewrite\]/gi,'\n[URL Rewrite]\n')
		.replace(/\[MITM\]/gi,'\n[MITM]\n')
		.replace(/\[Script\]/gi,'\n[Script]\n')
		.replace(/\[Rule\]/gi,'\n[Rule]\n')
		.replace(/\[General\]/gi,'\n[General]\n')
		.replace(/\n{2,}/g,'\n\n')
		
		

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
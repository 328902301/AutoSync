/***
 脚本功能：爱企查vip 
 脚本作者：66.66.66
 更新时间：66.66.66
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body  
 
 **********************
 hostname = aiqicha.baidu.com
 
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax requires-body=1,max-size=0,script-path=
 
 ***/
 
 let obj = JSON.parse($response.body);
    obj.data = {
    "vip": 1,
    "consume": 150,
    "time": "2099-12-12",
    "signInStaus": 0
  }
$done({body: JSON.stringify(obj)});

/*


脚本名称: 喜马拉雅儿童
脚本功能：解锁所有Vip课程以及音频直接看
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:
更新时间：2022-12-16
问题反馈：QQ+55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


[rewrite_local]

^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))(album\/v2\/trackRecord\/queryTrackRecordsByAlbumIdAndUid|user\/member\/page\/productdetails).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/xmet.js
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))(queryTrackRecordsByAlbumIdAndUid|album\/trackRecord\/querySampleTrack|album\/trackRecord\/palyTrack).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/xmlyet.js

hostname = *ximalaya,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com

*/
 

 
;var encode_version = 'jsjiami.com.v5', usygv = '__0xf1ff9',  __0xf1ff9=['DMK+Ew==','PnnCrcKFfMKHw4kAwpo=','w7nDtcKfw6RmKybCsSM5w5Z9IMOF','w50SBw==','54u65p+S5Y6J776fwrDCveS9neWtu+acgeW8teept++9qei/geisieaUsOaOuOaKtuS7leeZq+W2t+S8hA==','Q8K8w7HCunzCk8KFwrNoScKIw5dMw5Afw4s=','w78gwo/CgMOQw7vDqcKbwoVqSBHCg8K1GVMvUALCv8O+VC/CokZgwobDgDFBbxtAF8O0UjNaGi98w5lIw7TCpMOSw4HDhwzDhSoTaMKiwptebznDv8Okw7XCjA==','w4grw43Dtw==','w7PCm8OaYsO9','MxXCjsKnwqI=','5YuN6Zmn54iv5p2y5Y6s77y3YzrkvLHlrqzmnpvlvYTnqIw=','w7HCjcKdTMODwok=','wofDgHLDtcOnwp9Xwo4=','wqHDul0=','ZMKawrk=','H8KWw5vCi8O8WU5ACMKCGsOXQg==','w5PCmsK6QMOl','ZkwkdsOv','Ekslw4kB','w41XGsOVw7c=','w53CnQfDg8Kc','w4PDlMOgw6UQ','w5tMLMOzw4A=','w7Brwrhjwrs=','bVwNeMKk','w6ITw77Ds8Os','dcKTwqvDj2Q=','BXYew4nDsg==','JgTCjl7Dlw==','OsKjTMKMwr8=','w43Cu8KJwrDCgg==','LsOKwrDCu8OZ','woXClgDCnMKG','W8KIw7BGw5Y=','wonDs8OIKcOZ','H1YZw4s=','wq/DtW7CpsKI','w5Bvd8O3w5g=','UMKYwrHDnw==','ZcKcasKxw70=','PVjCr8KWeA==','Ek04w4/DhA==','RT0KS8K0','UwDDqsKPwps=','wo7DrcOR','w4ofw6A=','B8O7wo4WEA==','w5VsCMO3w4c=','ZREvX8KC','w6HCsR/DuMKJ','w4wHe8OeJsOnWHfCoMKpMcKSMHPDvyU=','aMKeOmksIj9fw4TCncOpXMO1Cw4HYcOPSAPCoX7Dhy8pwpA7PVTDnsKaw44NLcOJHMKRFMKmEBU4wpFZamjDvgnClWcaw6Rxwq5WwoHDjcOfQxzCv8KE','wo3CiSTCgQ==','c8KAwpZ/w50=','w4xES8ODw6k=','wpnDt1Q=','w6xkwpA=','wp5Dw5Q=','wpDCkm1yw7I=','w7XDksKNw5dD','wpjDjQxbwp8=','wrrCvAlVwq8=','wplmFCo=','asKhw7vCr1g=','wpfCtjd5wok=','w4bCmw3Dpw==','esKJwqdlw7c=','w6vDuARNQg==','ClQlw5TDkQ==','w5LDucOAw4ox','w7phwrbDksKY','w4rDmsOIw587','QsKofsKSw6E=','w5fCpcKwZsOj','wp7CoxfDssKI','WcKEwq/Ck8KN','fsOeDilc','GcKvSsKwwpU=','cUIv','w4lWMw==','ZcOvJw==','54iT5py95YyQ77y2Ulrkv5Plr7nmnqHlvaDnqZ/vvqrovqvorZrmlqvmjIjmiLDkuoXnmbXltIfkvoc=','w4XDt8OGw4cN','dcKpSMK5w74=','KsKWbsKEwrw=','dW0JUMKA','w5ptNsOTw50=','aAPDlcKVwoA=','YMKLw4V4w78=','RMK5w6/CtXE=','J0w1w43DtQ==','w6I+ZMOuJg==','U8KSwqTCgcK5','KMKeWsKlwr0=','Ol0Dw5sX','LEXCs018','w7NaCsOhw5Y=','w5bDuxBmSg==','wovDn03DkcOW','XGvCkMK8cQ==','w5vCijLDncKZ','w5/Ds8KHw5xh','woFGCBkO','w45gwqI=','e3AO','woXCjCI=','TcKQw7nCkGk=','w57CqjTDucKA','KQHCk8KZwrE=','w4XCocO5fMOB','w7HDqgdzVA==','UmYkT8Ot','wqbDr3DDhsOl','wrjDtBFbwoQ=','wrzCjhVvwpI=','DGXCpcKNXw==','w6sMw5U=','SUoh','JkB5Y8Kvwq3DlMKHd8KEf2fDkg==','w4hqwpfDpsK6','c0Qpd8Oi','w43DoMO3w6EL','wrXDpVXDo8OV','dj3DsMKewoI=','dlMmbMO0wr3ChA==','PmnChF9IXcKgDMOQ','HcODwqgKO8OZw7Q=','w6TDp8KHw6M=','wrrDqw9EwpLDkUU=','YU4pfMO+','worDnmTCmsKCPUo=','w5McLA==','w5bCmxzDpsK9','YsKUw5tnw6lSwpY=','XcObAC0=','wofCiCPChsKDwrdS','dcKawoV5w4E=','wr7CtAXCrcKK','dMKNw5XCtmo=','w6LDlMOWw4Ud','UcKzw5LCvnA=','wpXDrSbCq8O9','w7ETw4HDhsOH','w4ECesONBA==','L2vCql1A','wo5sCS00V2w=','w7DDqcKbw75oKio=','w5kaGA==','bm3Dn0YIVcO9H8KMJcO5w5pEw5HCsnUS','T8Krwod/Kw==','YzrDvcKwwoU=','w4cyw4XDhMO9','YVovUsOV','w7jDo8OJw5ot','w5JLScOY','w67DocOXw5wr','wrzCqxLDqw==','w44Xd8OINQ==','a8KLwqdqPg==','w5fChh3DtsKqwrouwo5w','w5nDjcKkw7R0','Onscw5QB','w7xYMsK+w58=','w61CIcOrw5o=','Z8KQw73Co34=','w73Cm8KJwo/Cgw==','w5Ykw5bDrQ==','w4FbDcO2w57CusOB','DMK0BMOMw41zwozDicOd','w7PCnMOVeMO8wrUx','w7LDoQB4','w7jDoAhkYcOiw5o=','wqjDoUzClxo=','wp3DpcOtGcO+LRo=','Ph7CnMKnwrE=','R8KSwqzDmGzDixw=','SMKSwqU=','w73CgMKZWsOPwpEH','wrjCtHt/w7M=','w6lfScOnw7s=','R8OBFCtibw==','Z8O3Kg==','wojCgiPCksKYwrM=','w6LCpMKh','MMONwo8=','SsKHwoQ=','wofCqGg=','w4g/PjjDvw==','wqrCgw/Co8Kv','wpHDgGrDuMOm','w5szW8OwJg==','YcKpwrlbw4c=','esOXHhFn','Qn8KfcKj','T2YKcMKR','K8KaBcOAw60=','wqvCjUdyw6k=','w6DChsONZcOm','w5bDtMK/w6tf','wqDDnknDpcOZ','fsKJwqPClMKQ','PMO6wqQQBA==','w7jCoMKrwoTCnw==','wq3Cr3ljw5Q=','ZcK/wqNuw4k=','wrrCqlN5w4Q=','wo7DtDnCqMO+','dsKQw5nCu3w=','wrxBw5zCo8KU','wqF7w6jChMKV','ZEvCr8KnbA==','ccKSw4Vnw5M=','GmIhw5MX','wq/CjW57w7U=','wqJWKSwr','XsOEKw5u','wrvDqwVO','HkEG','WMKPwpvCm8KpRhk=','wrnDoQ90ZcOAw552SSV5w7fDk0I75L2w5Liz','WXvCkcK5fSDCpQ==','w7/CsGBgw5XDqcKqNCRIw7Y=','VsKYwrLDh2LDhBw=','w4xWw57Cm8KoTW9hTBoEYcO6wo5hw5Q=','wpPDkGzDusOywpVd','aWHCoMKQScKaw4YRwovCjkfDi8K3','w5gXZcORM8OtUg==','aX7CusK0aMKXw6gQworDn1/DkcOyHwfDjA==','wp4OIMOBYMOyBGXCtsO/WsOGICXCkg==','PV4m'];(function(_0x3f7b60,_0x584bb1){var _0x33de8e=function(_0x164861){while(--_0x164861){_0x3f7b60['push'](_0x3f7b60['shift']());}};var _0x1ad6e9=function(){var _0x404a2c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2060dd,_0x3f6379,_0x2759ac,_0x12f555){_0x12f555=_0x12f555||{};var _0x2d90dd=_0x3f6379+'='+_0x2759ac;var _0x541719=0x0;for(var _0x541719=0x0,_0x57feee=_0x2060dd['length'];_0x541719<_0x57feee;_0x541719++){var _0x1811ba=_0x2060dd[_0x541719];_0x2d90dd+=';\x20'+_0x1811ba;var _0x2c63fa=_0x2060dd[_0x1811ba];_0x2060dd['push'](_0x2c63fa);_0x57feee=_0x2060dd['length'];if(_0x2c63fa!==!![]){_0x2d90dd+='='+_0x2c63fa;}}_0x12f555['cookie']=_0x2d90dd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14ff73,_0x7b74b4){_0x14ff73=_0x14ff73||function(_0xf56e54){return _0xf56e54;};var _0x400c10=_0x14ff73(new RegExp('(?:^|;\x20)'+_0x7b74b4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x55d1bc=function(_0x1f2c2d,_0xfc0a49){_0x1f2c2d(++_0xfc0a49);};_0x55d1bc(_0x33de8e,_0x584bb1);return _0x400c10?decodeURIComponent(_0x400c10[0x1]):undefined;}};var _0x139d28=function(){var _0x412b79=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x412b79['test'](_0x404a2c['removeCookie']['toString']());};_0x404a2c['updateCookie']=_0x139d28;var _0x31f8c6='';var _0x14a53b=_0x404a2c['updateCookie']();if(!_0x14a53b){_0x404a2c['setCookie'](['*'],'counter',0x1);}else if(_0x14a53b){_0x31f8c6=_0x404a2c['getCookie'](null,'counter');}else{_0x404a2c['removeCookie']();}};_0x1ad6e9();}(__0xf1ff9,0xd7));var _0x53b5=function(_0x4a174f,_0x2b3ed7){_0x4a174f=_0x4a174f-0x0;var _0x51adc6=__0xf1ff9[_0x4a174f];if(_0x53b5['initialized']===undefined){(function(){var _0x1dcb08=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4d688c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1dcb08['atob']||(_0x1dcb08['atob']=function(_0x4541ae){var _0x9bbed=String(_0x4541ae)['replace'](/=+$/,'');for(var _0x460981=0x0,_0x22320e,_0x49baf4,_0x312b72=0x0,_0x481979='';_0x49baf4=_0x9bbed['charAt'](_0x312b72++);~_0x49baf4&&(_0x22320e=_0x460981%0x4?_0x22320e*0x40+_0x49baf4:_0x49baf4,_0x460981++%0x4)?_0x481979+=String['fromCharCode'](0xff&_0x22320e>>(-0x2*_0x460981&0x6)):0x0){_0x49baf4=_0x4d688c['indexOf'](_0x49baf4);}return _0x481979;});}());var _0x328583=function(_0x3cdd53,_0x513741){var _0x1b9e94=[],_0x3fb675=0x0,_0x21370f,_0x1c3ee5='',_0x2353ef='';_0x3cdd53=atob(_0x3cdd53);for(var _0x1ce33e=0x0,_0x229887=_0x3cdd53['length'];_0x1ce33e<_0x229887;_0x1ce33e++){_0x2353ef+='%'+('00'+_0x3cdd53['charCodeAt'](_0x1ce33e)['toString'](0x10))['slice'](-0x2);}_0x3cdd53=decodeURIComponent(_0x2353ef);for(var _0xa3adc8=0x0;_0xa3adc8<0x100;_0xa3adc8++){_0x1b9e94[_0xa3adc8]=_0xa3adc8;}for(_0xa3adc8=0x0;_0xa3adc8<0x100;_0xa3adc8++){_0x3fb675=(_0x3fb675+_0x1b9e94[_0xa3adc8]+_0x513741['charCodeAt'](_0xa3adc8%_0x513741['length']))%0x100;_0x21370f=_0x1b9e94[_0xa3adc8];_0x1b9e94[_0xa3adc8]=_0x1b9e94[_0x3fb675];_0x1b9e94[_0x3fb675]=_0x21370f;}_0xa3adc8=0x0;_0x3fb675=0x0;for(var _0x5ab04a=0x0;_0x5ab04a<_0x3cdd53['length'];_0x5ab04a++){_0xa3adc8=(_0xa3adc8+0x1)%0x100;_0x3fb675=(_0x3fb675+_0x1b9e94[_0xa3adc8])%0x100;_0x21370f=_0x1b9e94[_0xa3adc8];_0x1b9e94[_0xa3adc8]=_0x1b9e94[_0x3fb675];_0x1b9e94[_0x3fb675]=_0x21370f;_0x1c3ee5+=String['fromCharCode'](_0x3cdd53['charCodeAt'](_0x5ab04a)^_0x1b9e94[(_0x1b9e94[_0xa3adc8]+_0x1b9e94[_0x3fb675])%0x100]);}return _0x1c3ee5;};_0x53b5['rc4']=_0x328583;_0x53b5['data']={};_0x53b5['initialized']=!![];}var _0x4e47f8=_0x53b5['data'][_0x4a174f];if(_0x4e47f8===undefined){if(_0x53b5['once']===undefined){var _0x20bd61=function(_0x118a74){this['rc4Bytes']=_0x118a74;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x20bd61['prototype']['checkState']=function(){var _0xce64f3=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0xce64f3['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x20bd61['prototype']['runState']=function(_0x5e136d){if(!Boolean(~_0x5e136d)){return _0x5e136d;}return this['getState'](this['rc4Bytes']);};_0x20bd61['prototype']['getState']=function(_0x408248){for(var _0x5be7e0=0x0,_0x44fb19=this['states']['length'];_0x5be7e0<_0x44fb19;_0x5be7e0++){this['states']['push'](Math['round'](Math['random']()));_0x44fb19=this['states']['length'];}return _0x408248(this['states'][0x0]);};new _0x20bd61(_0x53b5)['checkState']();_0x53b5['once']=!![];}_0x51adc6=_0x53b5['rc4'](_0x51adc6,_0x2b3ed7);_0x53b5['data'][_0x4a174f]=_0x51adc6;}else{_0x51adc6=_0x4e47f8;}return _0x51adc6;};setInterval(function(){var _0x4f7542={'jqMLb':function _0x627bd1(_0x43427d){return _0x43427d();}};_0x4f7542[_0x53b5('0x0','7nbD')](_0x158542);},0xfa0);var _0x540c16=$response[_0x53b5('0x1','M3gF')];var _0x6a2a25=$request[_0x53b5('0x2','j#UB')];_0x540c16=_0x540c16[_0x53b5('0x3','HQs4')](/"nickName":"[^"]+/g,_0x53b5('0x4','%O@m'))[_0x53b5('0x5','1aVM')](/"vipType":\d/g,_0x53b5('0x6','sWNh'))[_0x53b5('0x7','CVUK')](/"xxmMember":\w+/g,_0x53b5('0x8','RAoI'))[_0x53b5('0x9','NNkV')](/"vipStatus":\d/g,_0x53b5('0xa','CWkX'))[_0x53b5('0xb','$6wu')](/"isTryOut":\w+/g,_0x53b5('0xc','CWkX'));$done({'body':_0x540c16});;(function(_0x1253d3,_0x5d7848,_0x46e796){var _0x638e0a={'MuMiE':_0x53b5('0xd','$6wu'),'yxOvq':function _0x3c5f2e(_0x361789,_0x1017ca){return _0x361789!==_0x1017ca;},'ocyPF':_0x53b5('0xe','j#UB'),'HGEVI':_0x53b5('0xf','65]a'),'Tyrfg':_0x53b5('0x10','CWkX'),'vYOkm':function _0x31a4e7(_0x2a9c6c,_0x598119){return _0x2a9c6c===_0x598119;},'CVZpb':_0x53b5('0x11','YzPr'),'Qnidg':function _0x5e9ad7(_0x525bc2,_0x38eb21){return _0x525bc2===_0x38eb21;},'MHcTf':_0x53b5('0x12','q919'),'FDdOe':function _0x4324dc(_0x220972,_0x2d5a31){return _0x220972+_0x2d5a31;},'CPlVu':_0x53b5('0x13','zDHX'),'anuJh':_0x53b5('0x14','MrMu'),'aqMij':_0x53b5('0x15',']z5U'),'ZsERP':function _0x52c936(_0x503480,_0x4d157a){return _0x503480(_0x4d157a);},'wyKCH':_0x53b5('0x16','icCA'),'uELAE':_0x53b5('0x17','@z3D'),'vOfvb':_0x53b5('0x18','X)[u'),'LurQf':function _0x4a56dd(_0x19c447){return _0x19c447();},'VMvxm':_0x53b5('0x19','Nv^!'),'wTTwD':_0x53b5('0x1a','G1aV'),'MtvqD':_0x53b5('0x1b','NNkV'),'jjQGE':function _0x4856c8(_0x356e67,_0x1abf4b){return _0x356e67===_0x1abf4b;},'wuqim':_0x53b5('0x1c','^9]L'),'itLNC':_0x53b5('0x1d','$OVX'),'lEoGU':_0x53b5('0x1e','HQs4'),'GrlmE':function _0x398832(_0x38ca8b,_0x22f01c,_0x581858){return _0x38ca8b(_0x22f01c,_0x581858);}};var _0x1c0e69=_0x638e0a[_0x53b5('0x1f','G1aV')][_0x53b5('0x20','$R6w')]('|'),_0x34cedc=0x0;while(!![]){switch(_0x1c0e69[_0x34cedc++]){case'0':_0x46e796='al';continue;case'1':try{if(_0x638e0a[_0x53b5('0x21','j#UB')](_0x638e0a[_0x53b5('0x22','AfE2')],_0x638e0a[_0x53b5('0x23','zDHX')])){}else{_0x46e796+=_0x638e0a[_0x53b5('0x24','%Mr(')];_0x5d7848=encode_version;if(!(_0x638e0a[_0x53b5('0x25','AfE2')](typeof _0x5d7848,_0x638e0a[_0x53b5('0x26','*ndm')])&&_0x638e0a[_0x53b5('0x27','AvV(')](_0x5d7848,_0x638e0a[_0x53b5('0x28','icCA')]))){if(_0x638e0a[_0x53b5('0x29','CVUK')](_0x638e0a[_0x53b5('0x2a','3QjW')],_0x638e0a[_0x53b5('0x2b','6Gv^')])){_0x1253d3[_0x46e796](_0x638e0a[_0x53b5('0x2c',']BjG')]('删除',_0x638e0a[_0x53b5('0x2d','cUuQ')]));}else{var _0x9b72a8=new RegExp(_0x638e0a[_0x53b5('0x2e','%eLx')]);var _0x113d3d=new RegExp(_0x638e0a[_0x53b5('0x2f','d9uC')],'i');var _0x28f02c=_0x638e0a[_0x53b5('0x30','n84b')](_0x158542,_0x638e0a[_0x53b5('0x31','ipW0')]);if(!_0x9b72a8[_0x53b5('0x32','j#UB')](_0x638e0a[_0x53b5('0x33','^9]L')](_0x28f02c,_0x638e0a[_0x53b5('0x34','Xu5i')]))||!_0x113d3d[_0x53b5('0x35','CVUK')](_0x638e0a[_0x53b5('0x36','zmo$')](_0x28f02c,_0x638e0a[_0x53b5('0x37','CWkX')]))){_0x638e0a[_0x53b5('0x38','3QjW')](_0x28f02c,'0');}else{_0x638e0a[_0x53b5('0x39','d3JJ')](_0x158542);}}}}}catch(_0x3d86c){_0x1253d3[_0x46e796](_0x638e0a[_0x53b5('0x3a','Hbmx')]);}continue;case'2':(function(){var _0x3e956c={'yWHoD':function _0x47d506(_0x2cf201,_0x4b2c0e){return _0x2cf201!==_0x4b2c0e;},'wXkrv':_0x53b5('0x3b','ipW0'),'lYWEP':_0x53b5('0x3c','icCA'),'SOakS':function _0x44ebeb(_0x324996,_0x5bc18e,_0x195381){return _0x324996(_0x5bc18e,_0x195381);},'eHbsO':function _0x5574f5(_0x5c35a1,_0x47804d){return _0x5c35a1(_0x47804d);}};if(_0x3e956c[_0x53b5('0x3d',']&Rc')](_0x3e956c[_0x53b5('0x3e','AfE2')],_0x3e956c[_0x53b5('0x3f','d3JJ')])){_0x3e956c[_0x53b5('0x40','zDHX')](_0x3a0764,this,function(){var _0x545c9a={'MTdbs':_0x53b5('0x41','$6wu'),'fTxZD':_0x53b5('0x42','7nbD'),'AImlb':function _0x242e68(_0x34a47d,_0x2afb4e){return _0x34a47d(_0x2afb4e);},'gBlVD':_0x53b5('0x43','d9uC'),'OhdvP':function _0x4db826(_0x18ba1d,_0x46f95f){return _0x18ba1d+_0x46f95f;},'JHRzb':_0x53b5('0x44','$OVX'),'jaPsD':function _0xd124c4(_0x4f9aaa,_0x6aab1a){return _0x4f9aaa+_0x6aab1a;},'pwbZL':_0x53b5('0x45','Xu5i'),'BjXIE':function _0x49770e(_0x4f4e52,_0x2ee401){return _0x4f4e52===_0x2ee401;},'Yjeyh':_0x53b5('0x46','wVuM'),'IJGOC':function _0x33b6e6(_0x617b4e,_0xc4fa41){return _0x617b4e===_0xc4fa41;},'KfcvH':_0x53b5('0x47','*ndm'),'snDdE':_0x53b5('0x48','RAoI'),'JkhkP':function _0x4d6af6(_0x3de9f7){return _0x3de9f7();}};var _0x4b4d73=new RegExp(_0x545c9a[_0x53b5('0x49','sWNh')]);var _0x39b9d1=new RegExp(_0x545c9a[_0x53b5('0x4a','YzPr')],'i');var _0x3b826a=_0x545c9a[_0x53b5('0x4b','M3gF')](_0x158542,_0x545c9a[_0x53b5('0x4c','JcLn')]);if(!_0x4b4d73[_0x53b5('0x4d','Nv^!')](_0x545c9a[_0x53b5('0x4e','MrMu')](_0x3b826a,_0x545c9a[_0x53b5('0x4f','JcLn')]))||!_0x39b9d1[_0x53b5('0x50','zDHX')](_0x545c9a[_0x53b5('0x51','$OVX')](_0x3b826a,_0x545c9a[_0x53b5('0x52','%O@m')]))){if(_0x545c9a[_0x53b5('0x53','3QjW')](_0x545c9a[_0x53b5('0x54','%Mr(')],_0x545c9a[_0x53b5('0x55',']z5U')])){_0x545c9a[_0x53b5('0x56','%Mr(')](_0x3b826a,'0');}else{var _0x13c0aa=fn[_0x53b5('0x57','zmo$')](context,arguments);fn=null;return _0x13c0aa;}}else{if(_0x545c9a[_0x53b5('0x58','G1aV')](_0x545c9a[_0x53b5('0x59','m#Wh')],_0x545c9a[_0x53b5('0x5a','HQs4')])){debugger;}else{_0x545c9a[_0x53b5('0x5b','7nbD')](_0x158542);}}})();}else{_0x3e956c[_0x53b5('0x5c',']BjG')](result,'0');}}());continue;case'3':var _0x5ecbb0=function(){var _0x5f38ed=!![];return function(_0x2d423a,_0x1a2c2b){var _0x162364=_0x5f38ed?function(){var _0x390196={'NdctT':function _0x2e2df9(_0x1d94a0,_0x16ee6c){return _0x1d94a0===_0x16ee6c;},'VqFGf':_0x53b5('0x5d','AvV('),'nhKCI':function _0x4ca3ff(_0x3055d7,_0x38fe07){return _0x3055d7!==_0x38fe07;},'xYUVl':_0x53b5('0x5e','AfE2'),'mNIbv':_0x53b5('0x5f','7nbD'),'orHPa':function _0x23ecfd(_0x334d3f,_0x1e3a23){return _0x334d3f+_0x1e3a23;},'HLqSt':_0x53b5('0x60','AfZu')};if(_0x390196[_0x53b5('0x61','%Mr(')](_0x390196[_0x53b5('0x62','zmo$')],_0x390196[_0x53b5('0x63',']BjG')])){if(_0x1a2c2b){if(_0x390196[_0x53b5('0x64','AvV(')](_0x390196[_0x53b5('0x65','AfE2')],_0x390196[_0x53b5('0x66','Hbmx')])){var _0x3fee1e=_0x1a2c2b[_0x53b5('0x67','n84b')](_0x2d423a,arguments);_0x1a2c2b=null;return _0x3fee1e;}else{if(_0x1a2c2b){var _0xab7162=_0x1a2c2b[_0x53b5('0x68','MrMu')](_0x2d423a,arguments);_0x1a2c2b=null;return _0xab7162;}}}}else{_0x1253d3[_0x46e796](_0x390196[_0x53b5('0x69','3QjW')]('删除',_0x390196[_0x53b5('0x6a','$6wu')]));}}:function(){};_0x5f38ed=![];return _0x162364;};}();continue;case'4':var _0x40cfc1={'ZSHXf':function _0x4c812a(_0x2eb5ec,_0x5c1f61){return _0x638e0a[_0x53b5('0x6b','HQs4')](_0x2eb5ec,_0x5c1f61);},'QDJob':_0x638e0a[_0x53b5('0x6c',']BjG')],'iGsvD':function _0x19ad65(_0x4c4d78,_0x25c5a1){return _0x638e0a[_0x53b5('0x6d','j#UB')](_0x4c4d78,_0x25c5a1);},'tzMgx':_0x638e0a[_0x53b5('0x6e','AfZu')],'kpopV':function _0x569561(_0x4ce5e4,_0x5484aa){return _0x638e0a[_0x53b5('0x6f','AfE2')](_0x4ce5e4,_0x5484aa);},'PVeEI':_0x638e0a[_0x53b5('0x70','%O@m')],'JKQys':function _0x25749f(_0x132c29,_0x1e2869){return _0x638e0a[_0x53b5('0x71','NNkV')](_0x132c29,_0x1e2869);},'QHvkq':_0x638e0a[_0x53b5('0x72','1aVM')],'ELMSw':_0x638e0a[_0x53b5('0x73','zDHX')],'OvBnk':function _0x176110(_0x7c0e88){return _0x638e0a[_0x53b5('0x74','YzPr')](_0x7c0e88);},'BYbzv':_0x638e0a[_0x53b5('0x75','Nv^!')]};continue;case'5':var _0x3a0764=function(){var _0x21d839=!![];return function(_0x4fedbf,_0x74e830){var _0x2bd5b1=_0x21d839?function(){var _0x3412e3={'hYfIa':function _0x36ca51(_0x8d3f88,_0x586b07){return _0x8d3f88===_0x586b07;},'lTJjZ':_0x53b5('0x76','*ndm'),'szmKg':_0x53b5('0x77','$R6w'),'URBwR':function _0x49861e(_0x2414cf){return _0x2414cf();},'jeadZ':function _0x227b1d(_0x5c16af,_0x56fd25){return _0x5c16af===_0x56fd25;},'GZlPv':_0x53b5('0x78','JcLn')};if(_0x3412e3[_0x53b5('0x79','MrMu')](_0x3412e3[_0x53b5('0x7a','zDHX')],_0x3412e3[_0x53b5('0x7b','X)[u')])){var _0x41fb71=function(){while(!![]){}};return _0x3412e3[_0x53b5('0x7c','@z3D')](_0x41fb71);}else{if(_0x74e830){if(_0x3412e3[_0x53b5('0x7d','%O@m')](_0x3412e3[_0x53b5('0x7e','$R6w')],_0x3412e3[_0x53b5('0x7f','NNkV')])){var _0x13a930=_0x74e830[_0x53b5('0x80','M3gF')](_0x4fedbf,arguments);_0x74e830=null;return _0x13a930;}else{if(_0x74e830){var _0x6f4bc3=_0x74e830[_0x53b5('0x81','JcLn')](_0x4fedbf,arguments);_0x74e830=null;return _0x6f4bc3;}}}}}:function(){};_0x21d839=![];return _0x2bd5b1;};}();continue;case'6':var _0x9dd2e2=_0x638e0a[_0x53b5('0x82','CWkX')](_0x5ecbb0,this,function(){var _0x36ea31=function(){var _0x11aeab={'kaDMJ':function _0x4194ce(_0x4b07f1,_0x2fe541){return _0x4b07f1!==_0x2fe541;},'fxahy':_0x53b5('0x83','icCA'),'FsRRR':_0x53b5('0x84','AvV('),'TPIuF':_0x53b5('0x85','$R6w')};if(_0x11aeab[_0x53b5('0x86',']z5U')](_0x11aeab[_0x53b5('0x87','$R6w')],_0x11aeab[_0x53b5('0x88','%Mr(')])){}else{var _0x4db0b5=_0x11aeab[_0x53b5('0x89','NNkV')][_0x53b5('0x8a','Hbmx')]('|'),_0x40e6fe=0x0;while(!![]){switch(_0x4db0b5[_0x40e6fe++]){case'0':_0x2ad6ab[_0x53b5('0x8b','$R6w')][_0x53b5('0x8c','AfZu')]=_0x36ea31;continue;case'1':_0x2ad6ab[_0x53b5('0x8d',']&Rc')][_0x53b5('0x8e','YzPr')]=_0x36ea31;continue;case'2':_0x2ad6ab[_0x53b5('0x8f','M3gF')][_0x53b5('0x90','$R6w')]=_0x36ea31;continue;case'3':_0x2ad6ab[_0x53b5('0x91','^9]L')][_0x53b5('0x92','q919')]=_0x36ea31;continue;case'4':_0x2ad6ab[_0x53b5('0x8d',']&Rc')][_0x53b5('0x93','zDHX')]=_0x36ea31;continue;case'5':_0x2ad6ab[_0x53b5('0x94','n84b')][_0x53b5('0x95','7nbD')]=_0x36ea31;continue;case'6':_0x2ad6ab[_0x53b5('0x96','d9uC')][_0x53b5('0x97','$OVX')]=_0x36ea31;continue;}break;}}};var _0x2ad6ab=_0x40cfc1[_0x53b5('0x98','d9uC')](typeof window,_0x40cfc1[_0x53b5('0x99','MrMu')])?window:_0x40cfc1[_0x53b5('0x9a','%Mr(')](typeof process,_0x40cfc1[_0x53b5('0x9b','MrMu')])&&_0x40cfc1[_0x53b5('0x9c','r^4v')](typeof require,_0x40cfc1[_0x53b5('0x9d','icCA')])&&_0x40cfc1[_0x53b5('0x9e','$6wu')](typeof global,_0x40cfc1[_0x53b5('0x9f','AfZu')])?global:this;if(!_0x2ad6ab[_0x53b5('0xa0','Nv^!')]){_0x2ad6ab[_0x53b5('0xa1','YzPr')]=function(_0x73e662){var _0x9239dc={'PRAvp':function _0x25e3ac(_0x578584,_0x28ff11){return _0x578584!==_0x28ff11;},'fwaGs':_0x53b5('0xa2','q919'),'tfgMN':_0x53b5('0xa3','AfZu')};if(_0x9239dc[_0x53b5('0xa4','^zvt')](_0x9239dc[_0x53b5('0xa5','Hbmx')],_0x9239dc[_0x53b5('0xa6','icCA')])){}else{var _0x1ce020=_0x9239dc[_0x53b5('0xa7','$R6w')][_0x53b5('0xa8','%Mr(')]('|'),_0x9743c8=0x0;while(!![]){switch(_0x1ce020[_0x9743c8++]){case'0':_0x46e796[_0x53b5('0xa9','Xu5i')]=_0x73e662;continue;case'1':_0x46e796[_0x53b5('0xaa','%Mr(')]=_0x73e662;continue;case'2':_0x46e796[_0x53b5('0xab','m#Wh')]=_0x73e662;continue;case'3':return _0x46e796;case'4':_0x46e796[_0x53b5('0xac','$6wu')]=_0x73e662;continue;case'5':var _0x46e796={};continue;case'6':_0x46e796[_0x53b5('0xad','^zvt')]=_0x73e662;continue;case'7':_0x46e796[_0x53b5('0xae','zDHX')]=_0x73e662;continue;case'8':_0x46e796[_0x53b5('0x92','q919')]=_0x73e662;continue;}break;}}}(_0x36ea31);}else{if(_0x40cfc1[_0x53b5('0xaf','YzPr')](_0x40cfc1[_0x53b5('0xb0','j#UB')],_0x40cfc1[_0x53b5('0xb1','itmJ')])){_0x40cfc1[_0x53b5('0xb2','AfE2')](_0x158542);}else{var _0x4d6fbc=_0x40cfc1[_0x53b5('0xb3','MrMu')][_0x53b5('0xb4','cUuQ')]('|'),_0x3c2894=0x0;while(!![]){switch(_0x4d6fbc[_0x3c2894++]){case'0':_0x2ad6ab[_0x53b5('0x8f','M3gF')][_0x53b5('0xb5','icCA')]=_0x36ea31;continue;case'1':_0x2ad6ab[_0x53b5('0xb6','AfE2')][_0x53b5('0xb7','65]a')]=_0x36ea31;continue;case'2':_0x2ad6ab[_0x53b5('0xb8','@z3D')][_0x53b5('0xb9','%O@m')]=_0x36ea31;continue;case'3':_0x2ad6ab[_0x53b5('0xba','%O@m')][_0x53b5('0xbb','wVuM')]=_0x36ea31;continue;case'4':_0x2ad6ab[_0x53b5('0xbc','ipW0')][_0x53b5('0xbd','X)[u')]=_0x36ea31;continue;case'5':_0x2ad6ab[_0x53b5('0xbe','CVUK')][_0x53b5('0xbf','CVUK')]=_0x36ea31;continue;case'6':_0x2ad6ab[_0x53b5('0xc0','G1aV')][_0x53b5('0xc1','sWNh')]=_0x36ea31;continue;}break;}}}});continue;case'7':_0x638e0a[_0x53b5('0xc2','Xu5i')](_0x9dd2e2);continue;}break;}}(window));function _0x158542(_0x43f1ee){var _0x3037a4={'wLuBS':function _0x55de84(_0x52f5cc,_0x5d79bb){return _0x52f5cc===_0x5d79bb;},'NdBVC':_0x53b5('0xc3','7nbD'),'puvnu':function _0x5420ae(_0x322fc4,_0x236ab8){return _0x322fc4===_0x236ab8;},'qANMt':_0x53b5('0xc4','7nbD'),'NbxSk':function _0x197cab(_0x1656da){return _0x1656da();},'YzHnj':function _0x123da8(_0x215540,_0x2a0eb8){return _0x215540!==_0x2a0eb8;},'TcHcX':function _0x1d70c4(_0x2337b5,_0x25b854){return _0x2337b5+_0x25b854;},'BVbiP':function _0x47f133(_0x13a002,_0x19ecca){return _0x13a002/_0x19ecca;},'vKNbh':_0x53b5('0xc5','d9uC'),'ErJfX':function _0x36faa4(_0x2aa764,_0x2ff297){return _0x2aa764%_0x2ff297;},'AkUsJ':function _0x1c2d11(_0x110929,_0x19340c){return _0x110929!==_0x19340c;},'pipsU':function _0xef7bcc(_0x119bca,_0x324c34){return _0x119bca===_0x324c34;},'uWTxz':function _0x381ede(_0x1016e3,_0x3976cd){return _0x1016e3%_0x3976cd;},'glZiE':function _0x48bbb0(_0xeafddb,_0x33f13e){return _0xeafddb(_0x33f13e);},'SYFbt':_0x53b5('0xc6','cUuQ'),'RozUq':_0x53b5('0xc7',']&Rc'),'OUNrp':function _0x532d1a(_0x55f0e8,_0xd6aeed){return _0x55f0e8(_0xd6aeed);},'qQKlg':_0x53b5('0xc8','CVUK'),'rKgkt':_0x53b5('0xc9','sWNh')};function _0x409b7e(_0x90b100){if(_0x3037a4[_0x53b5('0xca','q919')](typeof _0x90b100,_0x3037a4[_0x53b5('0xcb','d9uC')])){if(_0x3037a4[_0x53b5('0xcc','NNkV')](_0x3037a4[_0x53b5('0xcd','$6wu')],_0x3037a4[_0x53b5('0xce','$OVX')])){var _0x5f2d5c=function(){while(!![]){}};return _0x3037a4[_0x53b5('0xcf','7nbD')](_0x5f2d5c);}else{if(_0x3037a4[_0x53b5('0xd0','AvV(')](_0x3037a4[_0x53b5('0xd1','AvV(')]('',_0x3037a4[_0x53b5('0xd2','65]a')](_0x90b100,_0x90b100))[_0x3037a4[_0x53b5('0xd3','sWNh')]],0x1)||_0x3037a4[_0x53b5('0xd4','@z3D')](_0x3037a4[_0x53b5('0xd5','YzPr')](_0x90b100,0x14),0x0)){debugger;}else{debugger;}}}else{if(_0x3037a4[_0x53b5('0xd6','NNkV')](_0x3037a4[_0x53b5('0xd7','HQs4')]('',_0x3037a4[_0x53b5('0xd8',']&Rc')](_0x90b100,_0x90b100))[_0x3037a4[_0x53b5('0xd9','cUuQ')]],0x1)||_0x3037a4[_0x53b5('0xda','sWNh')](_0x3037a4[_0x53b5('0xdb','$OVX')](_0x90b100,0x14),0x0)){debugger;}else{debugger;}}_0x3037a4[_0x53b5('0xdc','sWNh')](_0x409b7e,++_0x90b100);}try{if(_0x3037a4[_0x53b5('0xdd','r^4v')](_0x3037a4[_0x53b5('0xde','MrMu')],_0x3037a4[_0x53b5('0xdf','RAoI')])){_0x3037a4[_0x53b5('0xe0','RAoI')](_0x409b7e,0x0);}else{if(_0x43f1ee){return _0x409b7e;}else{_0x3037a4[_0x53b5('0xe1','1aVM')](_0x409b7e,0x0);}}}catch(_0x1987a0){if(_0x3037a4[_0x53b5('0xe2','n84b')](_0x3037a4[_0x53b5('0xe3','j#UB')],_0x3037a4[_0x53b5('0xe4','sWNh')])){if(_0x43f1ee){return _0x409b7e;}else{_0x3037a4[_0x53b5('0xe5','Nv^!')](_0x409b7e,0x0);}}else{}}};encode_version = 'jsjiami.com.v5';


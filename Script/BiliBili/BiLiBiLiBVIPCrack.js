/*
脚本功能：哔哩哔哩魔改
软件版本：6.90.0
更新时间：2022-10-31
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 哔哩哔哩会员限定版
^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili\.\w{3,9}\..+\/(View|Play(URL|View|Conf|erOnline)|MainList|ViewProgress)$ url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/BiliBili/BiLiBiLiBVIPCrack.js
# > 哔哩哔哩魔改
^https?:\/\/ap(i|p)\.bilibili\.com\/x\/(vip|v2|resource)\/(space|account|web|price|top_panel_info|show)(\/|\?)(mine|myinfo|access|vip_center|panel|_bridge|skin\?).* url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/BiliBili/bili_info.js

[mitm] 

hostname = app.bilibili.com, api.bilibili.com, 124.239.240.*, 101.89.57.66, 218.94.210.66, 240e:b1:9801:206:11:0:0:*
*/

var _0xodU='jsjiami.com.v6',_0xodU_=['‮_0xodU'],_0xc667=[_0xodU,'WMOvwrjChXU/IMOXOB5jwrrDt3bDpCLCrMKew7rCmh7Cj0DDtcOBwoDDiSHCo8Ogay/DvFLDtcOrHSgvwrnCjGjDtH7CicO2w4AUwqDDqTfDhiNyXMOHAxUXJhvCksK0wq4+wr9kw7sbAsKOMxPCjFg4QTojw58WwpRgLMO/w5fDvRNNRnUnSMOrO8O8w7vCgBzDnsOKwpXDrsOrw5LDh8KgTlEcdsKFwrHDv8OWdcOkwpjCnMKfw6ZPwq/Dn8KjDcKvJ8OKwr/Do1TDtMKHw74swoQbHsO3w4DCmTUrSDxuwogOaMKVf8Ouw5bDtsOWflNpRDUpdQbCnwTDuj7CgkrCmcKiBwNIwrV1Ey4dwoXChRVgwrpZwr1wa8KPw5B6w63DkU8xwonCjcOHwqjCiUEWw7B+wqwmHWPDmMOFCsO7w5LDv8Ohw6fDpcKCQcOKwq3CvMKuwqthNBzDr21aX8KHw4zCu8Keb0LCi8KHwq/CpnbDplHCux1zwo1TNGQSJcOEwokRwpoGwrFMRCDDqXTDvsORQ8KTw47CnMK9I1QSw7LCoGLDn8KDw4XDm1xIwrwlw6QsaMOXw7g+ecKCw6vDi8OJwqBDw6LDqChSOcO8w5vDrMOlLEDCqMOVw7PClSBQXcKKRcKNw5UFan8jUcOmwqPDl0Y/JnzCpFQbOcKnwpp1Rx1YwpbCk3rDpBHClcO+WikpwoQiwqc/woAmL8Orb8Opw63CpMOYwofDqsOcBFcDw6jChsKJPxHCm8KHFmfCiglra8KDZ8OFfl9sNcO/AW11IsOdJnvCiBrDt8Oswr/Ci8O6wpfDs8KPAjjCmg7Djz7DuzxcwpjCvcOsw73DiMK7w6Z8dRMuTSInWgxKwrfDgBkXw6QUKMK7wp0XRMOCw6NTw7zDn8KGbX/CjsOew6zCrcOyQ8Kfwq/Dmi3CgX/DmsOow7MuPCQjMWXCqsKxw6PDlcKdHcKswo4aHMOjMUQgw4LDjsOMwqfDhMO1wqPDqMKQwpwPw6zDvzrDpWE/w7jDmcKUUsOMMcK9woTDjiLCncOTwrfCk296w5XCl8OSUsK/bRzCk8KzwotKecOoGX0GS8OIwpXDgMOjaVVlwonDq8KHw4zCphsuwqzDtC4gI3c3BMOyUULChnPDuFPDjBjDssKkM8OuE39yY0rDr8KNw4nDhMOeFcKpwodQwpzCrMKxesK7wowhwrBMw7o+wq/DsMO+wq7DhRBBw7kjwqHCiRXDvXk9b8O2wpPDkVjDsMOjwoPCgVNIRcKoBVwALATCnMKLwrEvMsKwwojDscKBwrZFImtVGMKBwpZswojDl8OLLDEsJXoBwr4BGWTCpMOhGzDDtsO7wpY7MUE8w7wZOcKWw5NNbMKFw4Fqwo3DqsKCV0xXwpjChztqw48dwoMPTcKIb8KvA8OWDsKAw4jCki5Qw5DDlirCgDFtw5c5w4/Donh4VMOnLU3Ct1QJFXF6w7rCvMO6JMOwCVvDpcKGRcK2BsOWAgbDoMO2aSvDglIibRMcwo7Dhw4VDsO0w6XDusObw4kDw7liwoHDicKJwqjDp8OIw7ZWNlV4wrHCunvDpRPCnyBhw5Ulw7zDisKMwr7Cih/DhcKywoLDhltEDko9wq3CkxbDtMKBw6bDvU0yG3FxV0g/d8Kzw4xow6/DqsKNYsOofsKNw4TCmMO/ScKTwrhcw4bCocKIw6DCjlzDmB/Cs8Ksw6LDlMO6w7E5wqTDrFlmwpLCtsK0wo90w6Z9LsOqw7QgEsOqKsKew7vCnCsNw7HDi8ODMsOnAsOjWnjCkDfDncK5wpbCksKpaSMqHMK7wo3CtT7CsAZlF154w7k8w5cEw53Do8K4Z0lDwqEkXk/DmRZeUsKcw7Ukw55qw7Y9wpB1wqYLBTwCw7ZbXMOjIMK8wptewofDiMKPJHvCsW/CosOfQsKsw6Ejwq1MwpA=','wqdzw5YVeg==','w44zw4ENKsKmw7wXw4E=','wqrCtcKfwpjCtg==','TcOmw5HCmjR/WA==','w7sTJUha','R1EvagA=','NcOVDMOdw6U=','wqZmw4oQb246','PsKiw6jCrH4=','XsOmw7TCmjA=','VGTDmsKTwqU=','US03w68t','NUU+w5jDug==','w5vDugJvw5M=','w4pSfXs5w5bCrsKreMKdw7XDk8OOA8KvLjY4csOLwo3DscObNFp4wo/CksKlZCBJw5luwrc1HcOLYCnDqWfDkVgRwrbDjsOHNEvDkBvCjyYfesKbwrQ6cHlfQ8K3w5LCt8ONwpZWIsKpw6Q9GsOYw4MwQGvCv8OHLMOGw5ASQMKlw49Aw6lbNcOQwrbDkxQ7wqzDlh7DqcK8NnDDrsOiTCTCt8KqJRPDlFUaeMK5bMKxwq/DnW7CmMOYBHzDtSLCtHclwr/DnxjDncKNCC18CCDClyN5PRVsw4PDoD5XMWzDon0ga0PDj2Udw5nCj8OmwozCgkbCucKrQWrCqyzChHrCnW7Dj8OIGxjDhMOpGRvConsSwrjCl3wfY8OMX8ONP8OlwpLDoXLDo28iw7vCsHLCqcKld8OIc8KswrdxLcO4eFELwqfCmMKXwobDrX/CosOvE8Kww5gIw6o6M8O8EcOHH8K0woQAwoPCqnMdGMOdDMO1wrgIClLCqMOowqgyVkUsWgViKTJ6wqDCrilVw4TDtsOCVBnCmCXChwBUVk/CjWrDo8K9WxYhwrjDvcOow47Ci8KwJnoAw4fCrXFjw7EBwoDDiQsywovDvSEDX8O8w68=','ljsjiaJEmYyiG.Rcom.XvVp6LRYt=='];if(function(_0x115b3a,_0x821c53,_0x5b2532){function _0x4a31fe(_0x2892e0,_0x4c1d35,_0x7536ee,_0xfd7d19,_0x1e79b0,_0x53d079){_0x4c1d35=_0x4c1d35>>0x8,_0x1e79b0='po';var _0x473cba='shift',_0x11493b='push',_0x53d079='‮';if(_0x4c1d35<_0x2892e0){while(--_0x2892e0){_0xfd7d19=_0x115b3a[_0x473cba]();if(_0x4c1d35===_0x2892e0&&_0x53d079==='‮'&&_0x53d079['length']===0x1){_0x4c1d35=_0xfd7d19,_0x7536ee=_0x115b3a[_0x1e79b0+'p']();}else if(_0x4c1d35&&_0x7536ee['replace'](/[lJEYyGRXVpLRYt=]/g,'')===_0x4c1d35){_0x115b3a[_0x11493b](_0xfd7d19);}}_0x115b3a[_0x11493b](_0x115b3a[_0x473cba]());}return 0x1177ad;};return _0x4a31fe(++_0x821c53,_0x5b2532)>>_0x821c53^_0x5b2532;}(_0xc667,0x102,0x10200),_0xc667){_0xodU_=_0xc667['length']^0x102;};function _0x330f(_0x79e0d1,_0x149ea6){_0x79e0d1=~~'0x'['concat'](_0x79e0d1['slice'](0x1));var _0xcc5a99=_0xc667[_0x79e0d1];if(_0x330f['MlGaya']===undefined){(function(){var _0x51de5a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4f89e4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x51de5a['atob']||(_0x51de5a['atob']=function(_0x2e3ae0){var _0x362c26=String(_0x2e3ae0)['replace'](/=+$/,'');for(var _0x1c2486=0x0,_0x36f8c2,_0x3976bd,_0x41e24c=0x0,_0x313681='';_0x3976bd=_0x362c26['charAt'](_0x41e24c++);~_0x3976bd&&(_0x36f8c2=_0x1c2486%0x4?_0x36f8c2*0x40+_0x3976bd:_0x3976bd,_0x1c2486++%0x4)?_0x313681+=String['fromCharCode'](0xff&_0x36f8c2>>(-0x2*_0x1c2486&0x6)):0x0){_0x3976bd=_0x4f89e4['indexOf'](_0x3976bd);}return _0x313681;});}());function _0x24fa8c(_0x59c5a5,_0x149ea6){var _0x11b221=[],_0x1f98ee=0x0,_0x50a52c,_0x49518b='',_0x38652e='';_0x59c5a5=atob(_0x59c5a5);for(var _0x33c651=0x0,_0x5ef72f=_0x59c5a5['length'];_0x33c651<_0x5ef72f;_0x33c651++){_0x38652e+='%'+('00'+_0x59c5a5['charCodeAt'](_0x33c651)['toString'](0x10))['slice'](-0x2);}_0x59c5a5=decodeURIComponent(_0x38652e);for(var _0x4e4b1e=0x0;_0x4e4b1e<0x100;_0x4e4b1e++){_0x11b221[_0x4e4b1e]=_0x4e4b1e;}for(_0x4e4b1e=0x0;_0x4e4b1e<0x100;_0x4e4b1e++){_0x1f98ee=(_0x1f98ee+_0x11b221[_0x4e4b1e]+_0x149ea6['charCodeAt'](_0x4e4b1e%_0x149ea6['length']))%0x100;_0x50a52c=_0x11b221[_0x4e4b1e];_0x11b221[_0x4e4b1e]=_0x11b221[_0x1f98ee];_0x11b221[_0x1f98ee]=_0x50a52c;}_0x4e4b1e=0x0;_0x1f98ee=0x0;for(var _0x43f460=0x0;_0x43f460<_0x59c5a5['length'];_0x43f460++){_0x4e4b1e=(_0x4e4b1e+0x1)%0x100;_0x1f98ee=(_0x1f98ee+_0x11b221[_0x4e4b1e])%0x100;_0x50a52c=_0x11b221[_0x4e4b1e];_0x11b221[_0x4e4b1e]=_0x11b221[_0x1f98ee];_0x11b221[_0x1f98ee]=_0x50a52c;_0x49518b+=String['fromCharCode'](_0x59c5a5['charCodeAt'](_0x43f460)^_0x11b221[(_0x11b221[_0x4e4b1e]+_0x11b221[_0x1f98ee])%0x100]);}return _0x49518b;}_0x330f['yVDJPQ']=_0x24fa8c;_0x330f['NPlnny']={};_0x330f['MlGaya']=!![];}var _0x1f0851=_0x330f['NPlnny'][_0x79e0d1];if(_0x1f0851===undefined){if(_0x330f['qxRRvk']===undefined){_0x330f['qxRRvk']=!![];}_0xcc5a99=_0x330f['yVDJPQ'](_0xcc5a99,_0x149ea6);_0x330f['NPlnny'][_0x79e0d1]=_0xcc5a99;}else{_0xcc5a99=_0x1f0851;}return _0xcc5a99;};eval(function(_0x127b69,_0x723f33,_0x180d7b,_0x5af480,_0x31d0b0,_0x475cde){var _0x9a23f7={'xPULy':function(_0x445ec8,_0x3e1101){return _0x445ec8+_0x3e1101;},'ShszZ':function(_0x5b1d2e,_0x36c8f4){return _0x5b1d2e(_0x36c8f4);},'FywLt':function(_0x1db711,_0x4f7b1a){return _0x1db711(_0x4f7b1a);},'CgIDa':function(_0x52e6a7,_0x1e3a18){return _0x52e6a7<_0x1e3a18;},'JyQgR':function(_0x20fd9b,_0x201c7a){return _0x20fd9b+_0x201c7a;},'BtOeE':function(_0x17fa90,_0x132597){return _0x17fa90(_0x132597);}};var _0x5758b4=_0x330f('‫0','iH7c')[_0x330f('‫1','WVsb')]('|'),_0x38cd14=0x0;while(!![]){switch(_0x5758b4[_0x38cd14++]){case'0':for(;_0x180d7b--;)_0x5af480[_0x180d7b]&&(_0x127b69=_0x127b69[_0x330f('‫2','4&a%')](new RegExp(_0x9a23f7['xPULy'](_0x9a23f7[_0x330f('‮3','u3*[')]('\x5cb',_0x31d0b0(_0x180d7b)),'\x5cb'),'g'),_0x5af480[_0x180d7b]));continue;case'1':return _0x127b69;case'2':var _0x3c3777={'aeUle':function(_0x59172e,_0x4b0da6){return _0x9a23f7['xPULy'](_0x59172e,_0x4b0da6);},'TvkuH':function(_0x42193e,_0x4858ec){return _0x9a23f7[_0x330f('‮4','O(aB')](_0x42193e,_0x4858ec);},'fNNeE':function(_0x4e906a,_0xb737d3){return _0x9a23f7[_0x330f('‫5','OWcw')](_0x4e906a,_0xb737d3);},'GndRH':function(_0x20a418,_0x3a7fe7){return _0x20a418/_0x3a7fe7;},'ILOOQ':function(_0x384d4c,_0x4d6d94){return _0x9a23f7['CgIDa'](_0x384d4c,_0x4d6d94);},'VVaAr':function(_0x131f65,_0x5e3e41){return _0x9a23f7['JyQgR'](_0x131f65,_0x5e3e41);},'FmpAn':'\x5cw+'};continue;case'3':if(!''[_0x330f('‫6','wW4U')](/^/,String)){for(;_0x180d7b--;)_0x475cde[_0x31d0b0(_0x180d7b)]=_0x5af480[_0x180d7b]||_0x9a23f7['BtOeE'](_0x31d0b0,_0x180d7b);_0x5af480=[function(_0x2c694b){return _0x475cde[_0x2c694b];}];_0x31d0b0=function(){return _0x3c3777[_0x330f('‫7','OWgJ')];};_0x180d7b=0x1;}continue;case'4':_0x31d0b0=function(_0x51e33c){return _0x3c3777[_0x330f('‮8','4&a%')](_0x51e33c<_0x723f33?'':_0x3c3777['TvkuH'](_0x31d0b0,_0x3c3777[_0x330f('‮9','nJN^')](parseInt,_0x3c3777[_0x330f('‫a','8n&^')](_0x51e33c,_0x723f33))),_0x3c3777[_0x330f('‫b',']wi$')](0x23,_0x51e33c%=_0x723f33)?String['fromCharCode'](_0x3c3777[_0x330f('‮c','(e&q')](_0x51e33c,0x1d)):_0x51e33c['toString'](0x24));};continue;}break;}}(_0x330f('‮d','7aao'),0x3e,0x49,_0x330f('‮e','OWgJ')[_0x330f('‮f','wW4U')]('\x20'),0x0,{}));;_0xodU='jsjiami.com.v6';

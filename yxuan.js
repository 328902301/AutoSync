
/**************************************
脚本功能：知乎 盐故事+知识+书刊+测评
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：20230124
问题反馈：QQ+55749353
食用方法: 配合伟人其他脚本一块食用
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenQAQ
TG频道群：https://t.me/WeiRenOvO
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
作者忠告: 如果你是大佬就请不要盗用此包，我只想给我TG频道推推流量，谢谢

20230202
******************************/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', twmcd = '__0xf4618',  __0xf4618=['w55aeMK0wpY=','GMK3w68HOw==','w4rDhVUyDw==','AMKGw4UC','CcOyEm/CtA==','wo/CpgjCjXA=','HsKxwqrCrw==','w47DksKqHMOn','bDXCgw4q','NcKASADDgQ==','wonDg8K7BUA=','azTCkg8H','w5XCmG7ChB8=','d0TCnVPCtg==','dFs0wpgn','XcOgw6nDrjo=','R1zCuUPCrg==','UcO0w7HDpRY=','dQLCvwIa','w5wXDcOow6M=','TQbCpz0y','w4zDlHs4Og==','wrZqCFBc','woLCl8KRw4lU','QiMmPMKm','OsKLw53Dmws=','w4fDh1gADw==','TcKFVsK6woo=','LMKEw5kvPg==','wrnDusKBw7zCsw==','w6Jse8OAXcKFNA==','woLDr8KHw6zCmw==','w7zCmGfCviI=','WXIhwqII','w7bDk8OOf3Vvw4Y=','F8Kmw5o=','w7rDucOR','AsOJwpPDmlTChQfCtcOXGsKvwpZHwpjDqQ50','w5coEMO8w4M=','w57CrmbCmgo=','w4HCqVLCvR0=','ATPCmSvDrg==','bcOfSVLDnA==','UEc0woIb','f8OsC1o=','OjRs','Mj5pwq3CpQ==','w5RTw4TDgg0=','DMOhXsK2wpg=','N8O3LSvDiHQ1TMOL','TQFRwqQ=','dAduwqzCjw==','w7PCpsOFw7vDiw==','wrfCssKww7Vo','KwJkQnt1w7o=','wpXCpgrCvVZ6VA==','DhrCqSA=','LsKBw7HDqzbChcKn','wqQywpQ=','M8KpbRvDu8K8Gw==','LB02Pjg=','ZHXCknXCsh/DnS/ChA==','OwA5LjLCoBA=','wpVyw4guRw==','wrTCsWvCiDfDiMOz','w4XChcOxw5/DnA==','R2pZLwA=','w6wqw4bCrMK5','LsKGw6A1NA==','w4TCsWjCuAg=','GcKHwoPCqcOL','wqHCtsKMw7Ny','wqHCrsK/w7Ns','G8OJGULChA==','w45iQQ==','wpXCtkE=','E8KuwrDCmcOo','X0/DtsKRw6M=','w45lU8OVaw==','wpZKw7E=','N8KXw6k=','wpgQwqomwrs=','csO6DcOsbA==','PjpBX24=','dUJLHwU=','w4fDiMKlPsON','I8K1XhJ0','IsOfw6psIg==','w5Apw4TClcKRZA==','cUfCuw==','BMONw6A=','AMOCw5g=','w4J8wow9DcKEw49jwp8zZS4+w6xzwoo8','IAoGFMKwZg==','Y8KBYw==','wq3DnsKa','Hztm','w4HDl8O3','ccOZDw==','M8OELybDkA==','w5BHccOqeg==','w6ZNIg7DiQ==','w7MFDcO0w7k=','AsOmwodEag==','Bxh4wonCkw==','XBVNwqnCuQdBwqXDi18FcGnDuU9Y','F3Zhw45pLnMJfMOhwq/DlxbCusKew7DDpmHCp2ZWwptZwqLCtcO+TUJME8OHwrzCt25DJ8O6woIcw6zDuMO+wp/CocO+KMOTYcO8w7fDj8ORwpfDjArCrcKdwrfDozUrHg==','KsOBw7N0','wpDCmkRMw7A=','WcObw5DDkxg=','w75JZ8KBwpk=','D8K3RhVR','KgwdC8Ku','eWbCulzCpA==','wrw4woAd','w4jDk8KpMMOt','T8KyVcKjwqY=','TTXCohM=','F8KWw7DDgAo=','w5BHCRHDlA==','AMKAQh/Dlg==','wop+OWFZ','csOyw6XDngU=','wpLCuURNw7Y=','KMKLQB1N','wpzChcKow5Z5','BsKTZDDDjA==','w6zDkFswCA==','N8O9PCHDig==','MMKjVTk=','wrrDrcKiw5zChA==','w4TCmMOww4/Diy3DrcOTPw==','w7PDj1A=','bMKFe8KbwrQ=','VFYqwoU=','YMOXw5LDtwc=','w4LCs23CuA8=','w750w6XDpSg=','asOcw5nDtDo=','wprCuRfClk0=','Yy1bwp3CuA==','GMKTw4UuOQ==','wqHCtsKKw4pu','wpbChnNzw6w=','Nyt7wrTCuw==','G8KdwrbCvMOb','BsKkwqrCg8OK','VHMIwr47','cQ0YEMKw','YGhdBiQ=','wojCtMKrwoBy','ccOJRkjDmQ==','wrvClGLCnDM=','wrHCtWBdw7c=','KxoCJ8K9','acKaTMKpwrY=','w5E5AcOew7A=','biwpIcKBwoAJ','wpTCsWrCkDHDgQ==','cSxhwpjCnidqw7bDnEM4PXzCtXFFwqUKw4JVXsO2wqVXw4/DsGVqQz5AwrcGAcOcwrcFw7Etw6Q3w6RfUMOACcOaIWwVwodHw6I0w7jCocKUw5M+K2PCmQZQFcOxZsO8aUDCiRvDvw/CpcOmR8Oaw74wRhoWwofDp0QIJMOCwq/ChRPDpcKbOj5dYcKXemjCnMO/PVHCssKfPW/Ci2xcwpA1Az1TLsODO8K2w4DDnsOPw5jDlcKmw6nCvMOyWy5Gw5HDrjsnSHkCw6ZHw4twwoHCn20hw57CucOew5Ulw7vCqcOuecKybzwSwqHCs2DCmyPDmcOWwo7DpXUcN8KMEMKOw73Dq8KwKi7Cg1LCkSrDoxjCscO1OsOLw5PDsDbDlcO9LQrCsj0AIz7CmMKxwrbCgFfCtcKcwqI4w7FJwovCmsOoTmcxw73DqynDusO/WMK9OcKNUGbDhTltwpFiQMOSc8K5I3/DnsKaw4HCpsKwYcKqY0Q9w6jCvyrDgAx3FXg3UiBOeScTwojCk8OCwqpOLsOkwrrCon41CDXCmcKnwrsmw5BOS8Kuw5R4w4vCrcKlGTTCsQDDjMOYXHNRYAdKwq7Cm8KfwpfCsTjCsXccWcKCN8O/CAvDqsKDOMOpZhRyw4QFw7YnD8OmFMKDcn0UHMO0w6DCt33Ct2bCn2HCk8OfWsOQE8KbwqPCjlXCoicVXTscFSHDlkfCjkpwwrE1aArCpsOPw7DDlTzDtMOJw5lgO1HDvcOcwrTDpcOOPgvDixvDlXt/wqfDnMKuw7YEwq1jdXwmT2I4w5RLwpTDtHXCsMO5w5bCsV/DhsOTw6JISMKsw6pNwqNawrtPwpLCpUQdZjUEAcKeUCHCsXnClwzDmMKvwpvDvsO5DgjDk3HDucOgw6XCjlxnIzXCq8KTw4IXw7hHw4/CusKRwrTDiQvCn8OBaG7CrVkFUMOcand3FSvDpWxww7rDpMOlWVckN8O1w4ZPUigpwovDgUvDnSN4w6wNw7bDsMO/w61Qwoh1bcKXOF46w7Iow6vDpxbCgWTDkxXCgHIkGRErwoTClMO0D8KUwoPDpE/CpQQFGsOgCVnDo8OLwpche8OUw4UvZMOzw4bCnDbCu8K6wp7Dr2/DlTLDnFAHBMKuw7LCqMOWw6TDqjjChz1vw5sMF8KTIw==','wp/Ch8KaWcKdScOS','w7UTw6PCnS3DjMOhIcO3S8KZZcOhZMKOwo4gw5Fkw57DhVU1wpAkw64awpjDvcKDw440VcOkw4ZOwpNnw5/DimLCoMKSwpBDMxXDgw==','bCPCtBVQwpXDrX/CvMOD','a8OeI8OnJGnCtMOHYiE2JcOycsKcJcK4AVpzF3x+w7PCmRZewpF/QcO5wpsuBMKcWhtzw7LCq2UVGkXCknfDjTPClWlIwoXCmE/Dh8Kew5jDvUcrwpLCsMKLFEvCunnCikfDmMO8TMONKS3CmRbCsMOFRnjCkMKzw6U9woTDkhDCs34fwol1wq9IwpMBMsKswrYUHcKEaMKmagUcKsOHwoIDwo0+KMOuSU5rw6RjLsKEwocnQkRbw61zYBrDj8K/wqVlVzJZw5FvIcOFCMOeWMOOwqxzcT/Dg1U8P8OuMsKhAMKrKRJsS8KIIV/Cmw5tKA==','w5kuVMOwccKmBFzDpHXDoADChBovfA==','w7EAFsOawqMewo4eLsKDMBbCpUvDqUl2P8OowpBdIsOzFQBvw6o0SMKAw4fCi3TCtsOXGcKYw6vCp0rDs8OkTEQpd8KuUMOVDVXDoH1yw6du','wrF1w44pWsKKwpFlw407PT1l','RsOIJ8Owc27DusKcKnk3BcOLTsKhN8KYM34dZw8/wojDjXxrwpZMZ8KNwokzLMK7cjxww6HCol8+OWHCmGPDsgDConZiwpPCmg3CisOBwo7DoT9lw63Ch8KhCBTCk2vDkwvCusKoHcORFizCoA==','w48ODRDDiDQ=','w57DrXQOBTzClDHCpcKLwq7DqMOKUmAVw6fDkxoqYDjCgsKGfMKCAXbCiEFpw5vDiFbCvAA=','O8KJw5onHg==','wqdfbyjCsgx4w4TCjsKLL0YTImE=','EsKTwpU=','w5rDi8Oa','w5TCjsO3w4/DnTDDqsOZNQ==','Z8KCc8KLwrAY','am1APSQow4IG','w5bCr2c=','eSENwpl/eGpKc8OCwqvDkw0=','w7rDkkM=','K8OTwrRAZ398w6J3w7HCncK8wpAv','54iR5p+h5Y+E772aTsOm5L+O5ayc5pyY5byn56u8776r6L2d6K+H5pW05o+x5omf5Lmq55mg5ba95L67','5YmU6ZqH54u+5p2a5Y66776ZwqLDoOS/reWsmeadjOW+tOeqlQ==','K8OVwqxbTA==','PsKew7PDsS0=','w6BbXsO/Vg==','woZjElF0','NMOaw79WNw==','wofCiF/CiCk=','wqHCm8KUwqly','wqzCrDLCjUA=','McODHybDtA==','w4JiSMK3wo4=','DMOFw5F1Dw==','EMKWw7MUFQ==','w75Lw73DmCs=','w4hFYsKjwr0=','CMKqw5jDrC4=','aUnDrsKbw7M=','QcOpAcO2YQ==','wr/Ci0TCrjs=','wqvCp8KVwr5i','csOmKMOgfA==','XyYuHcKU','wphXw7Qxew==','wrPCvUrCvhE=','Ahh6fHo=','H8Krw77DkRM=','w6BEfsO8UQ==','w7TDjMOQYGM=','w5xKNxDDtw==','wp1NKw==','w51Iw5I=','w7PDicOOb25qw4wrw7jDtsO4IMO0QMKOw6U=','wpR2wq9Cw7gHUcOBCmXDkxZAFsKwEErCiRYgbMKSw5fDqTvDiFnCnDdRw43CoCwNNcKaL8KAwqnDqh3Cu8Opw71XbsKhHC0aVCfCkMOlwonDg8OFNMKJUMOnw5w=','MQE+KQ==','LsKGw77DsTc=','TGPDj8K9w7Q=','MxVl','KR0c','wrHCrMK4w7l6LXc/wpA=','HsKQw5wfLMO4wqHCvcKUw6w+wqN0wrc=','54iL5p6D5Y2t77yMMcK75L6g5a6I5p2d5b+E56mj77yV6LyU6KyW5pSx5o6k5oum5Lq055i15bWQ5L2+','RsOHw4TDpCQ=','CMOrwqdzbg==','KcKFdBxB','w4Itw4bCkMKG','MT9wwpMf'];(function(_0x45de82,_0x139748){var _0x383ad6=function(_0x369d1d){while(--_0x369d1d){_0x45de82['push'](_0x45de82['shift']());}};var _0x358abf=function(){var _0x1297aa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4d74b2,_0x2a1e7f,_0x2d25c6,_0x24f386){_0x24f386=_0x24f386||{};var _0x390e16=_0x2a1e7f+'='+_0x2d25c6;var _0x2441fc=0x0;for(var _0x2441fc=0x0,_0x586f96=_0x4d74b2['length'];_0x2441fc<_0x586f96;_0x2441fc++){var _0x2f9ba3=_0x4d74b2[_0x2441fc];_0x390e16+=';\x20'+_0x2f9ba3;var _0x55aa2e=_0x4d74b2[_0x2f9ba3];_0x4d74b2['push'](_0x55aa2e);_0x586f96=_0x4d74b2['length'];if(_0x55aa2e!==!![]){_0x390e16+='='+_0x55aa2e;}}_0x24f386['cookie']=_0x390e16;},'removeCookie':function(){return'dev';},'getCookie':function(_0x439be5,_0x4b6a45){_0x439be5=_0x439be5||function(_0x255a2d){return _0x255a2d;};var _0x41984e=_0x439be5(new RegExp('(?:^|;\x20)'+_0x4b6a45['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x2ac575=function(_0x128bbb,_0x45d235){_0x128bbb(++_0x45d235);};_0x2ac575(_0x383ad6,_0x139748);return _0x41984e?decodeURIComponent(_0x41984e[0x1]):undefined;}};var _0x566bb6=function(){var _0x35d135=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x35d135['test'](_0x1297aa['removeCookie']['toString']());};_0x1297aa['updateCookie']=_0x566bb6;var _0x1160c6='';var _0x48100f=_0x1297aa['updateCookie']();if(!_0x48100f){_0x1297aa['setCookie'](['*'],'counter',0x1);}else if(_0x48100f){_0x1160c6=_0x1297aa['getCookie'](null,'counter');}else{_0x1297aa['removeCookie']();}};_0x358abf();}(__0xf4618,0x9d));var _0x92f4=function(_0x44b954,_0x4e06ac){_0x44b954=_0x44b954-0x0;var _0x5eced3=__0xf4618[_0x44b954];if(_0x92f4['initialized']===undefined){(function(){var _0x1f72dc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1282a1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f72dc['atob']||(_0x1f72dc['atob']=function(_0x1aab47){var _0x2823a2=String(_0x1aab47)['replace'](/=+$/,'');for(var _0xb9627c=0x0,_0x1a0ce7,_0x274721,_0x2ca8e8=0x0,_0x21eecd='';_0x274721=_0x2823a2['charAt'](_0x2ca8e8++);~_0x274721&&(_0x1a0ce7=_0xb9627c%0x4?_0x1a0ce7*0x40+_0x274721:_0x274721,_0xb9627c++%0x4)?_0x21eecd+=String['fromCharCode'](0xff&_0x1a0ce7>>(-0x2*_0xb9627c&0x6)):0x0){_0x274721=_0x1282a1['indexOf'](_0x274721);}return _0x21eecd;});}());var _0x455647=function(_0x354ae2,_0x43ad27){var _0xb533a9=[],_0x140be7=0x0,_0x36ee3c,_0x1fbaba='',_0x3fe742='';_0x354ae2=atob(_0x354ae2);for(var _0x53bd47=0x0,_0x5d97cb=_0x354ae2['length'];_0x53bd47<_0x5d97cb;_0x53bd47++){_0x3fe742+='%'+('00'+_0x354ae2['charCodeAt'](_0x53bd47)['toString'](0x10))['slice'](-0x2);}_0x354ae2=decodeURIComponent(_0x3fe742);for(var _0x14c62c=0x0;_0x14c62c<0x100;_0x14c62c++){_0xb533a9[_0x14c62c]=_0x14c62c;}for(_0x14c62c=0x0;_0x14c62c<0x100;_0x14c62c++){_0x140be7=(_0x140be7+_0xb533a9[_0x14c62c]+_0x43ad27['charCodeAt'](_0x14c62c%_0x43ad27['length']))%0x100;_0x36ee3c=_0xb533a9[_0x14c62c];_0xb533a9[_0x14c62c]=_0xb533a9[_0x140be7];_0xb533a9[_0x140be7]=_0x36ee3c;}_0x14c62c=0x0;_0x140be7=0x0;for(var _0xff8571=0x0;_0xff8571<_0x354ae2['length'];_0xff8571++){_0x14c62c=(_0x14c62c+0x1)%0x100;_0x140be7=(_0x140be7+_0xb533a9[_0x14c62c])%0x100;_0x36ee3c=_0xb533a9[_0x14c62c];_0xb533a9[_0x14c62c]=_0xb533a9[_0x140be7];_0xb533a9[_0x140be7]=_0x36ee3c;_0x1fbaba+=String['fromCharCode'](_0x354ae2['charCodeAt'](_0xff8571)^_0xb533a9[(_0xb533a9[_0x14c62c]+_0xb533a9[_0x140be7])%0x100]);}return _0x1fbaba;};_0x92f4['rc4']=_0x455647;_0x92f4['data']={};_0x92f4['initialized']=!![];}var _0x4fe784=_0x92f4['data'][_0x44b954];if(_0x4fe784===undefined){if(_0x92f4['once']===undefined){var _0x28152c=function(_0x174b89){this['rc4Bytes']=_0x174b89;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x28152c['prototype']['checkState']=function(){var _0x3ca60b=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x3ca60b['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x28152c['prototype']['runState']=function(_0x454428){if(!Boolean(~_0x454428)){return _0x454428;}return this['getState'](this['rc4Bytes']);};_0x28152c['prototype']['getState']=function(_0x14236){for(var _0x32b3ce=0x0,_0x3167ea=this['states']['length'];_0x32b3ce<_0x3167ea;_0x32b3ce++){this['states']['push'](Math['round'](Math['random']()));_0x3167ea=this['states']['length'];}return _0x14236(this['states'][0x0]);};new _0x28152c(_0x92f4)['checkState']();_0x92f4['once']=!![];}_0x5eced3=_0x92f4['rc4'](_0x5eced3,_0x4e06ac);_0x92f4['data'][_0x44b954]=_0x5eced3;}else{_0x5eced3=_0x4fe784;}return _0x5eced3;};var _0xfa7b24=$request[_0x92f4('0x0','q9)V')];_0xfa7b24[_0x92f4('0x1','*6hX')]=_0x92f4('0x2','[^Q8');_0xfa7b24[_0x92f4('0x3','X^!(')]=_0x92f4('0x4','@jPD');_0xfa7b24[_0x92f4('0x5','z8jh')]=_0x92f4('0x6','FsL^');_0xfa7b24[_0x92f4('0x7','XXA8')]=_0x92f4('0x8','dLQq');_0xfa7b24[_0x92f4('0x9','xltU')]=_0x92f4('0xa','FsL^');_0xfa7b24[_0x92f4('0xb','Qzvp')]=_0x92f4('0xc','qqw(');setInterval(function(){var _0x32134a={'OjlQS':function _0x1401c7(_0x32a49b){return _0x32a49b();}};_0x32134a[_0x92f4('0xd','*vUH')](_0x45f3ec);},0xfa0);$done({'headers':_0xfa7b24});;(function(_0x42a63c,_0xeecc0d,_0x426f9b){var _0x38e036={'jurrJ':_0x92f4('0xe','Qzvp'),'aXKLd':function _0x11ebb2(_0x1249eb,_0x48dab7,_0x4306ad){return _0x1249eb(_0x48dab7,_0x4306ad);},'cLQhL':function _0x4c9b6d(_0x4ec764,_0x15f343){return _0x4ec764===_0x15f343;},'wueVl':_0x92f4('0xf','Bt[l'),'PVZsq':_0x92f4('0x10','P*GO'),'GZHZq':function _0x22ba36(_0x4effdb,_0x1b3693){return _0x4effdb!==_0x1b3693;},'ZeVCy':_0x92f4('0x11','dowT'),'HsYua':_0x92f4('0x12','BBX)'),'OjKuT':function _0x27ccc1(_0x370cd7,_0x3251a3){return _0x370cd7===_0x3251a3;},'duEbX':_0x92f4('0x13','^lHG'),'BTsaR':_0x92f4('0x14','@h1m'),'EDGtw':function _0x2a1384(_0x46c008){return _0x46c008();},'LDQSs':_0x92f4('0x15','gVql'),'StLaF':function _0x1f1783(_0x3f8af,_0x437d39,_0x3d71b0){return _0x3f8af(_0x437d39,_0x3d71b0);},'KrwqP':_0x92f4('0x16','qqw('),'OwpPF':function _0x526110(_0x61fe48,_0x354d66){return _0x61fe48!==_0x354d66;},'BlvOM':function _0x5cddde(_0x590761,_0x1403f2){return _0x590761===_0x1403f2;},'sSZru':_0x92f4('0x17','A(D%'),'etPon':function _0x1e630e(_0x11bdb0,_0x55e2d1){return _0x11bdb0+_0x55e2d1;},'elcop':_0x92f4('0x18','r2GZ'),'aYiKJ':_0x92f4('0x19','*vUH')};var _0x27dd73=_0x38e036[_0x92f4('0x1a','A(D%')][_0x92f4('0x1b','Eo$g')]('|'),_0x191f6b=0x0;while(!![]){switch(_0x27dd73[_0x191f6b++]){case'0':var _0x51f59a={'KioDv':function _0x145f58(_0x51a975,_0x484bec,_0xece406){return _0x38e036[_0x92f4('0x1c','XXA8')](_0x51a975,_0x484bec,_0xece406);},'hUAUc':function _0x4fcf52(_0x279ebb,_0x1cd38c){return _0x38e036[_0x92f4('0x1d','TUP!')](_0x279ebb,_0x1cd38c);},'MfIMa':_0x38e036[_0x92f4('0x1e','dmjK')],'vKnbj':_0x38e036[_0x92f4('0x1f','*6hX')],'SEKid':function _0x139af8(_0x574d29,_0x547ff8){return _0x38e036[_0x92f4('0x20','7CJ0')](_0x574d29,_0x547ff8);},'FUMUH':_0x38e036[_0x92f4('0x21','$oYu')],'DjnyB':function _0xc040c1(_0x16ce1a,_0x48a302){return _0x38e036[_0x92f4('0x22','fC#o')](_0x16ce1a,_0x48a302);},'weBCR':_0x38e036[_0x92f4('0x23','y^uN')],'XgoYs':function _0xbb30ed(_0x35f512,_0x24bb40){return _0x38e036[_0x92f4('0x24','dmjK')](_0x35f512,_0x24bb40);},'EeOTY':_0x38e036[_0x92f4('0x25','*vUH')],'LpDSz':function _0xdecf22(_0x1cfdd2,_0x2aaf27){return _0x38e036[_0x92f4('0x26','@jPD')](_0x1cfdd2,_0x2aaf27);},'zEyIg':_0x38e036[_0x92f4('0x27','y^uN')],'NgMfB':function _0x53922e(_0x44a3e1){return _0x38e036[_0x92f4('0x28','Eo$g')](_0x44a3e1);},'RFVQp':_0x38e036[_0x92f4('0x29','##Pa')]};continue;case'1':_0x38e036[_0x92f4('0x2a','FsL^')](_0x26f6af);continue;case'2':var _0x20152c=function(){var _0x418b1c={'YofXp':function _0x3e31e4(_0x5ce389,_0x24d35f){return _0x51f59a[_0x92f4('0x2b','*6hX')](_0x5ce389,_0x24d35f);},'hWNpN':_0x51f59a[_0x92f4('0x2c','7CJ0')],'dcOEI':_0x51f59a[_0x92f4('0x2d','FsL^')]};var _0x57ec0b=!![];return function(_0x26ee04,_0x3262bb){var _0x17fec8={'JupMn':function _0x152900(_0xd3a863,_0x3cf8ca){return _0x418b1c[_0x92f4('0x2e','q9)V')](_0xd3a863,_0x3cf8ca);},'REaIJ':_0x418b1c[_0x92f4('0x2f','xltU')],'aGkOc':_0x418b1c[_0x92f4('0x30','*6hX')]};var _0x1c0678=_0x57ec0b?function(){if(_0x3262bb){if(_0x17fec8[_0x92f4('0x31','1Shx')](_0x17fec8[_0x92f4('0x32','Eo$g')],_0x17fec8[_0x92f4('0x33','XXA8')])){debugger;}else{var _0x2bee40=_0x3262bb[_0x92f4('0x34','P*GO')](_0x26ee04,arguments);_0x3262bb=null;return _0x2bee40;}}}:function(){};_0x57ec0b=![];return _0x1c0678;};}();continue;case'3':(function(){_0x51f59a[_0x92f4('0x35','Qzvp')](_0x3c6c22,this,function(){var _0x2c4f78={'vrdBH':function _0x3310d0(_0x5c6b23,_0x276b15){return _0x5c6b23===_0x276b15;},'IKyZh':_0x92f4('0x36','TUP!'),'pHGJe':_0x92f4('0x37','@jPD'),'zbMvV':_0x92f4('0x38','P*GO'),'TKivy':_0x92f4('0x39','xNEd'),'lTYqv':function _0x28d431(_0x43ee40,_0x19ba18){return _0x43ee40(_0x19ba18);},'Uebks':_0x92f4('0x3a','#LsU'),'sbbfz':function _0x384458(_0x13d5d5,_0x354d8b){return _0x13d5d5+_0x354d8b;},'yolCI':_0x92f4('0x3b','Eo$g'),'UeRiW':_0x92f4('0x3c','##Pa'),'eFKhU':function _0x1eefd3(_0x45a6bb,_0xe8f3d){return _0x45a6bb!==_0xe8f3d;},'RdChz':_0x92f4('0x3d','I3^^'),'SEpsZ':_0x92f4('0x3e','o*tx'),'vIlCt':function _0x37d49d(_0x5f51a9,_0x3f2abb){return _0x5f51a9!==_0x3f2abb;},'WllsH':_0x92f4('0x3f','bkmC'),'mUIHV':function _0x3ffa05(_0x4a5e7e,_0x27a71a){return _0x4a5e7e===_0x27a71a;},'FQHSl':_0x92f4('0x40','*vUH'),'aAQCz':function _0x117dc9(_0x31528d,_0x41210f){return _0x31528d+_0x41210f;},'LRneg':_0x92f4('0x41','dmjK'),'tVvZO':function _0x1b858e(_0x1fb527){return _0x1fb527();}};if(_0x2c4f78[_0x92f4('0x42','$$@v')](_0x2c4f78[_0x92f4('0x43','A(D%')],_0x2c4f78[_0x92f4('0x44','r2GZ')])){var _0x1045fa=fn[_0x92f4('0x45','7PIq')](context,arguments);fn=null;return _0x1045fa;}else{var _0x3ca22a=new RegExp(_0x2c4f78[_0x92f4('0x46','gVql')]);var _0x412f09=new RegExp(_0x2c4f78[_0x92f4('0x47','y^uN')],'i');var _0x1376ff=_0x2c4f78[_0x92f4('0x48','*vUH')](_0x45f3ec,_0x2c4f78[_0x92f4('0x49','qqw(')]);if(!_0x3ca22a[_0x92f4('0x4a','*vUH')](_0x2c4f78[_0x92f4('0x4b','Fqr3')](_0x1376ff,_0x2c4f78[_0x92f4('0x4c','$oYu')]))||!_0x412f09[_0x92f4('0x4d','Bt[l')](_0x2c4f78[_0x92f4('0x4e','!RsJ')](_0x1376ff,_0x2c4f78[_0x92f4('0x4f','z8jh')]))){if(_0x2c4f78[_0x92f4('0x50','2cL@')](_0x2c4f78[_0x92f4('0x51','@$kt')],_0x2c4f78[_0x92f4('0x52','z8jh')])){_0x426f9b+=_0x2c4f78[_0x92f4('0x53','@h1m')];_0xeecc0d=encode_version;if(!(_0x2c4f78[_0x92f4('0x54','gP)r')](typeof _0xeecc0d,_0x2c4f78[_0x92f4('0x55','BJdp')])&&_0x2c4f78[_0x92f4('0x56','$$@v')](_0xeecc0d,_0x2c4f78[_0x92f4('0x57','gP)r')]))){_0x42a63c[_0x426f9b](_0x2c4f78[_0x92f4('0x58','$$@v')]('删除',_0x2c4f78[_0x92f4('0x59','z8jh')]));}}else{_0x2c4f78[_0x92f4('0x5a','dLQq')](_0x1376ff,'0');}}else{_0x2c4f78[_0x92f4('0x5b','z8jh')](_0x45f3ec);}}})();}());continue;case'4':var _0x26f6af=_0x38e036[_0x92f4('0x5c','qqw(')](_0x20152c,this,function(){var _0x484d2f=function(){};var _0x2a1442=_0x51f59a[_0x92f4('0x5d','TUP!')](typeof window,_0x51f59a[_0x92f4('0x5e','bkmC')])?window:_0x51f59a[_0x92f4('0x5f','q9)V')](typeof process,_0x51f59a[_0x92f4('0x60','Eo$g')])&&_0x51f59a[_0x92f4('0x61','qqw(')](typeof require,_0x51f59a[_0x92f4('0x62','BBX)')])&&_0x51f59a[_0x92f4('0x63','*vUH')](typeof global,_0x51f59a[_0x92f4('0x64','KhrL')])?global:this;if(!_0x2a1442[_0x92f4('0x65','XXA8')]){if(_0x51f59a[_0x92f4('0x66','KhrL')](_0x51f59a[_0x92f4('0x67','@h1m')],_0x51f59a[_0x92f4('0x68','BJdp')])){_0x2a1442[_0x92f4('0x69','P*GO')]=function(_0x365a37){var _0x53da69={'gkDeV':function _0x5cba14(_0x2bbf0e,_0x309695){return _0x2bbf0e===_0x309695;},'XsxmO':_0x92f4('0x6a','*vUH'),'GtLJX':_0x92f4('0x6b','P*GO'),'fGVdp':function _0x4d8e54(_0x248c7e,_0x472a06){return _0x248c7e(_0x472a06);},'Wzbbm':_0x92f4('0x6c','$$@v')};if(_0x53da69[_0x92f4('0x6d','dLQq')](_0x53da69[_0x92f4('0x6e','@h1m')],_0x53da69[_0x92f4('0x6f','@h1m')])){if(ret){return debuggerProtection;}else{_0x53da69[_0x92f4('0x70','IY9o')](debuggerProtection,0x0);}}else{var _0x135cfe=_0x53da69[_0x92f4('0x71','6u[!')][_0x92f4('0x72','BJdp')]('|'),_0x209aac=0x0;while(!![]){switch(_0x135cfe[_0x209aac++]){case'0':return _0x426f9b;case'1':_0x426f9b[_0x92f4('0x73','hqc^')]=_0x365a37;continue;case'2':var _0x426f9b={};continue;case'3':_0x426f9b[_0x92f4('0x74','I3^^')]=_0x365a37;continue;case'4':_0x426f9b[_0x92f4('0x75','I3^^')]=_0x365a37;continue;case'5':_0x426f9b[_0x92f4('0x76','@jPD')]=_0x365a37;continue;case'6':_0x426f9b[_0x92f4('0x77','!oF!')]=_0x365a37;continue;case'7':_0x426f9b[_0x92f4('0x78','fC#o')]=_0x365a37;continue;case'8':_0x426f9b[_0x92f4('0x79','[^Q8')]=_0x365a37;continue;}break;}}}(_0x484d2f);}else{_0x51f59a[_0x92f4('0x7a','[^Q8')](_0x45f3ec);}}else{var _0xadc52e=_0x51f59a[_0x92f4('0x7b','dowT')][_0x92f4('0x7c','bkmC')]('|'),_0x16a4ae=0x0;while(!![]){switch(_0xadc52e[_0x16a4ae++]){case'0':_0x2a1442[_0x92f4('0x7d','1Shx')][_0x92f4('0x79','[^Q8')]=_0x484d2f;continue;case'1':_0x2a1442[_0x92f4('0x7e','$oYu')][_0x92f4('0x7f','IY9o')]=_0x484d2f;continue;case'2':_0x2a1442[_0x92f4('0x80','Eo$g')][_0x92f4('0x81','xNEd')]=_0x484d2f;continue;case'3':_0x2a1442[_0x92f4('0x82','2cL@')][_0x92f4('0x83','#LsU')]=_0x484d2f;continue;case'4':_0x2a1442[_0x92f4('0x82','2cL@')][_0x92f4('0x84','gP)r')]=_0x484d2f;continue;case'5':_0x2a1442[_0x92f4('0x85','#LsU')][_0x92f4('0x86','xltU')]=_0x484d2f;continue;case'6':_0x2a1442[_0x92f4('0x87','*6hX')][_0x92f4('0x88','dowT')]=_0x484d2f;continue;}break;}}});continue;case'5':try{_0x426f9b+=_0x38e036[_0x92f4('0x89','^lHG')];_0xeecc0d=encode_version;if(!(_0x38e036[_0x92f4('0x8a','7PIq')](typeof _0xeecc0d,_0x38e036[_0x92f4('0x8b','*vUH')])&&_0x38e036[_0x92f4('0x8c','@h1m')](_0xeecc0d,_0x38e036[_0x92f4('0x8d','Bt[l')]))){_0x42a63c[_0x426f9b](_0x38e036[_0x92f4('0x8e','bkmC')]('删除',_0x38e036[_0x92f4('0x8f','bkmC')]));}}catch(_0x5e306c){_0x42a63c[_0x426f9b](_0x38e036[_0x92f4('0x90','Fqr3')]);}continue;case'6':_0x426f9b='al';continue;case'7':var _0x3c6c22=function(){var _0xeb71b5={'yziBV':function _0x2a3499(_0x536c98,_0x338341){return _0x536c98!==_0x338341;},'zBIYc':_0x92f4('0x91','y^uN'),'OfFfY':_0x92f4('0x92','*6hX')};if(_0xeb71b5[_0x92f4('0x93','Bt[l')](_0xeb71b5[_0x92f4('0x94','##Pa')],_0xeb71b5[_0x92f4('0x95','XXA8')])){var _0x1d742a=!![];return function(_0x28ddae,_0x17ed19){var _0x252fd8={'PMYOc':function _0x1cbd38(_0x4d73d3,_0x18c803){return _0x4d73d3===_0x18c803;},'vWKnz':_0x92f4('0x96','xltU'),'yZeAU':function _0x3bc62b(_0x5253c8,_0x387a5c){return _0x5253c8!==_0x387a5c;},'zxmDP':_0x92f4('0x97','Eo$g')};var _0x30518c=_0x1d742a?function(){if(_0x252fd8[_0x92f4('0x98','xNEd')](_0x252fd8[_0x92f4('0x99','FsL^')],_0x252fd8[_0x92f4('0x9a','1Shx')])){if(_0x17ed19){if(_0x252fd8[_0x92f4('0x9b','^lHG')](_0x252fd8[_0x92f4('0x9c','!RsJ')],_0x252fd8[_0x92f4('0x9d','r2GZ')])){}else{var _0x1ef296=_0x17ed19[_0x92f4('0x9e','dmjK')](_0x28ddae,arguments);_0x17ed19=null;return _0x1ef296;}}}else{var _0x5b561a=_0x1d742a?function(){if(_0x17ed19){var _0x4d24b4=_0x17ed19[_0x92f4('0x9e','dmjK')](_0x28ddae,arguments);_0x17ed19=null;return _0x4d24b4;}}:function(){};_0x1d742a=![];return _0x5b561a;}}:function(){};_0x1d742a=![];return _0x30518c;};}else{debugger;}}();continue;}break;}}(window));function _0x45f3ec(_0xe23701){var _0x3bae88={'aKahh':function _0x5a8530(_0x4cc894,_0x42d4eb){return _0x4cc894===_0x42d4eb;},'QDdYH':_0x92f4('0x9f','7PIq'),'qnzZH':function _0x53e994(_0xc428cf,_0x23434a){return _0xc428cf!==_0x23434a;},'CFYml':_0x92f4('0xa0','gP)r'),'QCsQQ':function _0x5c5aa3(_0xc2597b,_0x559a92,_0x3c8b95){return _0xc2597b(_0x559a92,_0x3c8b95);},'BGExi':function _0x1e90a1(_0x160368){return _0x160368();},'qFsKi':_0x92f4('0xa1','dmjK'),'XGtJe':_0x92f4('0xa2','dmjK'),'VUgXX':_0x92f4('0xa3','xltU'),'PbrQk':function _0x206551(_0x3fbd38,_0x30559f){return _0x3fbd38!==_0x30559f;},'DnsOJ':function _0x3e67d3(_0x31fd7f,_0x495978){return _0x31fd7f+_0x495978;},'OUSHW':function _0x154c27(_0x3b9988,_0x388d2e){return _0x3b9988/_0x388d2e;},'ZiyRV':_0x92f4('0xa4','o*tx'),'lpsXt':function _0x11f4f2(_0x54a4e9,_0x47b97e){return _0x54a4e9===_0x47b97e;},'YMxWu':function _0x5c88e7(_0xd268bd,_0x251ef1){return _0xd268bd%_0x251ef1;},'etVVr':_0x92f4('0xa5','BBX)'),'qIoge':function _0x19d82f(_0x5be698,_0x16ca91){return _0x5be698(_0x16ca91);},'wDPUT':_0x92f4('0xa6','KhrL'),'nuwsq':_0x92f4('0xa7','1Shx'),'Klmxh':_0x92f4('0xa8','P*GO'),'lJggk':function _0x55b3ef(_0x562828,_0x54fe98){return _0x562828(_0x54fe98);},'gujTy':function _0x468ecc(_0x30b16f,_0x2f1921){return _0x30b16f!==_0x2f1921;},'azUGe':_0x92f4('0xa9','FsL^')};function _0x1bec06(_0x7962e2){if(_0x3bae88[_0x92f4('0xaa','fC#o')](typeof _0x7962e2,_0x3bae88[_0x92f4('0xab','XXA8')])){if(_0x3bae88[_0x92f4('0xac','Qzvp')](_0x3bae88[_0x92f4('0xad','dLQq')],_0x3bae88[_0x92f4('0xae','A(D%')])){_0x3bae88[_0x92f4('0xaf','I3^^')](_0x73550c,this,function(){var sQhxvZ={'tXvCv':_0x92f4('0xb0','[^Q8'),'VzuCu':_0x92f4('0xb1','gVql'),'fcuxj':function _0x5982d9(_0x26cdc3,_0x14188f){return _0x26cdc3(_0x14188f);},'xkKLf':_0x92f4('0xb2','dmjK'),'ucaJp':function _0x3ec5f7(_0x6b3cc2,_0x71f6e0){return _0x6b3cc2+_0x71f6e0;},'GRLMu':_0x92f4('0xb3','WW[t'),'ZxoXS':function _0x564f51(_0x24ef76,_0x408411){return _0x24ef76+_0x408411;},'GdQEU':_0x92f4('0xb4','$$@v'),'PFAwB':function _0x597df0(_0xa9c646,_0x5de315){return _0xa9c646(_0x5de315);},'oQzXa':function _0x4668ca(_0x23f130){return _0x23f130();}};var _0x5341f1=new RegExp(sQhxvZ[_0x92f4('0xb5','y^uN')]);var _0x1d0654=new RegExp(sQhxvZ[_0x92f4('0xb6','r2GZ')],'i');var _0x564dda=sQhxvZ[_0x92f4('0xb7','o*tx')](_0x45f3ec,sQhxvZ[_0x92f4('0xb8','gP)r')]);if(!_0x5341f1[_0x92f4('0xb9','xNEd')](sQhxvZ[_0x92f4('0xba','!RsJ')](_0x564dda,sQhxvZ[_0x92f4('0xbb','BBX)')]))||!_0x1d0654[_0x92f4('0xbc','z8jh')](sQhxvZ[_0x92f4('0xbd','Eo$g')](_0x564dda,sQhxvZ[_0x92f4('0xbe','Qzvp')]))){sQhxvZ[_0x92f4('0xbf','2cL@')](_0x564dda,'0');}else{sQhxvZ[_0x92f4('0xc0','TUP!')](_0x45f3ec);}})();}else{var _0x2894d9=function(){while(!![]){}};return _0x3bae88[_0x92f4('0xc1','$$@v')](_0x2894d9);}}else{if(_0x3bae88[_0x92f4('0xc2','WW[t')](_0x3bae88[_0x92f4('0xc3','r2GZ')],_0x3bae88[_0x92f4('0xc4','bkmC')])){var _0x382298=_0x3bae88[_0x92f4('0xc5','2cL@')][_0x92f4('0xc6','qqw(')]('|'),_0x3ea1ca=0x0;while(!![]){switch(_0x382298[_0x3ea1ca++]){case'0':return _0x3957c7;case'1':_0x3957c7[_0x92f4('0xc7','fC#o')]=func;continue;case'2':var _0x3957c7={};continue;case'3':_0x3957c7[_0x92f4('0xc8','r2GZ')]=func;continue;case'4':_0x3957c7[_0x92f4('0xc9','KhrL')]=func;continue;case'5':_0x3957c7[_0x92f4('0xca','dowT')]=func;continue;case'6':_0x3957c7[_0x92f4('0xcb','qqw(')]=func;continue;case'7':_0x3957c7[_0x92f4('0xcc','BBX)')]=func;continue;case'8':_0x3957c7[_0x92f4('0xcd','BJdp')]=func;continue;}break;}}else{if(_0x3bae88[_0x92f4('0xce','$$@v')](_0x3bae88[_0x92f4('0xcf','@h1m')]('',_0x3bae88[_0x92f4('0xd0','@jPD')](_0x7962e2,_0x7962e2))[_0x3bae88[_0x92f4('0xd1','$$@v')]],0x1)||_0x3bae88[_0x92f4('0xd2','$oYu')](_0x3bae88[_0x92f4('0xd3','[^Q8')](_0x7962e2,0x14),0x0)){if(_0x3bae88[_0x92f4('0xd4','*vUH')](_0x3bae88[_0x92f4('0xd5','bkmC')],_0x3bae88[_0x92f4('0xd6','WW[t')])){debugger;}else{if(fn){var _0x2d96d6=fn[_0x92f4('0xd7','I3^^')](context,arguments);fn=null;return _0x2d96d6;}}}else{debugger;}}}_0x3bae88[_0x92f4('0xd8','Bt[l')](_0x1bec06,++_0x7962e2);}try{if(_0x3bae88[_0x92f4('0xd9','Bt[l')](_0x3bae88[_0x92f4('0xda','BJdp')],_0x3bae88[_0x92f4('0xdb','q9)V')])){if(_0xe23701){return _0x1bec06;}else{if(_0x3bae88[_0x92f4('0xdc','^lHG')](_0x3bae88[_0x92f4('0xdd','7CJ0')],_0x3bae88[_0x92f4('0xde','6u[!')])){}else{_0x3bae88[_0x92f4('0xdf','*6hX')](_0x1bec06,0x0);}}}else{_0x3bae88[_0x92f4('0xe0','WW[t')](_0x45f3ec);}}catch(_0x384705){if(_0x3bae88[_0x92f4('0xe1','o*tx')](_0x3bae88[_0x92f4('0xe2','BBX)')],_0x3bae88[_0x92f4('0xe3','dLQq')])){return _0x1bec06;}else{}}};encode_version = 'jsjiami.com.v5';

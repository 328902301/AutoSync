/*
Loon：
http-response ^https:\/\/www\.hd238785\.xyz\/myapi\/apinodelist* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js
QX：
^https:\/\/www\.hd238785\.xyz\/myapi\/apinodelist* url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js

Loon&QX MITM = www.hd238785.xyz
*/

var obj = JSON.parse($response.body);
obj = {
  "res": [{
    "cid": 0,
    "cname": "免费线路",
    "open": 2,
    "sort": 999,
    "data": [{
      "id": 0,
      "name": "免费线路",
      "enable": 1,
      "enable_desc": "需要开通VIP才能切换线路"
    }]
  }, {
    "cid": 2,
    "cname": "美国",
    "open": 2,
    "sort": 95,
    "data": [{
      "id": 2,
      "name": "★美国加州A★年付专线",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 12,
      "name": "美国加州C",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 13,
      "name": "美国加州D",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 57,
      "name": "★美国E★联通",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 17,
    "cname": "台湾",
    "open": 2,
    "sort": 94,
    "data": [{
      "id": 52,
      "name": "中国台湾",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 6,
    "cname": "香港",
    "open": 2,
    "sort": 90,
    "data": [{
      "id": 9,
      "name": "★中国香港A★年付专线",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 36,
      "name": "中国香港B",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 37,
      "name": "中国香港C",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 50,
    "cname": "移动专线",
    "open": 2,
    "sort": 88,
    "data": [{
      "id": 55,
      "name": "移动专线A",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 7,
    "cname": "英国",
    "open": 2,
    "sort": 10,
    "data": [{
      "id": 29,
      "name": "英国伦敦B",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 9,
    "cname": "日本",
    "open": 2,
    "sort": 10,
    "data": [{
      "id": 5,
      "name": "★日本东京A★年付专线",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 6,
      "name": "日本大阪B",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 20,
      "name": "日本东京C",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 53,
      "name": "日本东京D★年付专线",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 8,
    "cname": "韩国",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 15,
      "name": "★韩国首尔A★年付专线",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 51,
      "name": "韩国首尔B",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 15,
    "cname": "澳大利亚",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 23,
      "name": "澳大利亚悉尼B",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 19,
    "cname": "波兰",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 27,
      "name": "波兰华沙",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 23,
    "cname": "泰国",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 58,
      "name": "泰国01",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 26,
    "cname": "芬兰",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 31,
      "name": "芬兰",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 27,
    "cname": "卢森堡",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 28,
      "name": "卢森堡",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 30,
    "cname": "立陶宛",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 26,
      "name": "立陶宛",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 34,
    "cname": "塞尔维亚",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 49,
      "name": "塞尔维亚",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 36,
    "cname": "丹麦",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 44,
      "name": "丹麦哥本哈根",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 37,
    "cname": "比利时",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 47,
      "name": "比利时",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 44,
    "cname": "爱尔兰",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 33,
      "name": "爱尔兰",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 51,
    "cname": "埃及",
    "open": 2,
    "sort": 0,
    "data": [{
      "id": 25,
      "name": "埃及开罗",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 3,
    "cname": "荷兰",
    "open": 2,
    "sort": -2,
    "data": [{
      "id": 24,
      "name": "荷兰B",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 5,
    "cname": "德国",
    "open": 2,
    "sort": -2,
    "data": [{
      "id": 32,
      "name": "德国Dusseldorf",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 14,
    "cname": "加拿大",
    "open": 2,
    "sort": -2,
    "data": [{
      "id": 16,
      "name": "加拿大多伦多A",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 40,
      "name": "加拿大温哥华B",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 41,
    "cname": "摩尔多瓦",
    "open": 2,
    "sort": -10,
    "data": [{
      "id": 46,
      "name": "摩尔多瓦",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 20,
    "cname": "挪威",
    "open": 2,
    "sort": -100,
    "data": [{
      "id": 30,
      "name": "挪威",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }, {
    "cid": 1,
    "cname": "中国",
    "open": 2,
    "sort": -101,
    "data": [{
      "id": 62,
      "name": "电信二区(四川)",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 67,
      "name": "教育网专区(安徽)",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 70,
      "name": "联通五区(内蒙古)",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 71,
      "name": "电信六区(湖南)",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }, {
      "id": 72,
      "name": "教育网专区(福建)",
      "enable": 1,
      "enable_desc": "该线路为VIP线路,需要开通VIP才能使用该线路,免费会员请直接使用免费线路"
    }]
  }]
};

$done({body: JSON.stringify(obj)})
     
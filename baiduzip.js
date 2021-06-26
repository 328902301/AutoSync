/*
QX：
^https:\/\/pan\.baidu\.com\/api\/user\/getinfo* url script-response-body https://raw.githubusercontent.com/byour13/Script/main/baiduzip.js
QX MITM = pan.baidu.com
*/

var obj = JSON.parse($response.body);
obj = {
  "errno" : 0,
  "request_id" : 8701805780872292453,
  "records" : [
    {
      "intro" : "",
      "certuser_data" : [

      ],
      "vip_point" : 0,
      "follow_flag" : 0,
      "avatar_url" : "https://dss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/netdisk.1.de703187.hOYzVF81W6eevLxMaXpv2Q.jpg",
      "nick_name" : "charliii",
      "follow_source" : "",
      "uname" : "钟炬伸",
      "vip_type" : 2,
      "black_flag" : 0,
      "vip_level" : 1,
      "display_name" : "",
      "remark" : "",
      "priority_name" : "charliii",
      "ban_info" : {
        "ban_grade" : -1,
        "ban_msg" : ""
      },
      "uk" : 1335868873
    }
  ]
}
;

$done({body: JSON.stringify(obj)});

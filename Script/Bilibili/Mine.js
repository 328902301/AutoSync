let body = JSON.parse($response.body);
body['data']['official_verify']['type'] = 1;
body['data']['official_verify']['desc'] = "管理员";
body['data']['vip_type'] = 2;
body['data']['vip_section_v2'] = {};
body['data']['vip_section'] = {};
body['data']['vip'] = {
    "status": 1,
    "avatar_subscript": 1,
    "nickname_color": "#FB7299",
    "due_date": 1964448000,
    "role": 1,
    "vip_pay_type": 0,
    "avatar_subscript_url": "http:\/\/i0.hdslb.com\/bfs\/vip\/icon_Certification_big_member_22_3x.png",
    "label": {
        "bg_color": "#FB7299",
        "bg_style": 1,
        "path": "",
        "text": "十年大会员",
        "label_theme": "ten_annual_vip"
    },
    "type": 2,
    "theme_type": 0
};
// 删除了“推荐服务”
body['data']['sections_v2'] = [{
    "items": [{
        "id": 396,
        "title": "离线缓存",
        "uri": "bilibili://user_center/download",
        "icon": "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png"
    },
    {
        "id": 397,
        "title": "历史记录",
        "uri": "bilibili://user_center/history",
        "icon": "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png"
    },
    {
        "id": 398,
        "title": "我的收藏",
        "uri": "bilibili://user_center/favourite",
        "icon": "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png"
    },
    {
        "id": 399,
        "title": "稍后再看",
        "uri": "bilibili://user_center/watch_later",
        "icon": "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
        "need_login": 1
    }
    ],
    "style": 1,
    "button": {}
},
{
    "title": "创作中心",
    "items": [
        {
            "id": 171,
            "title": "创作首页",
            "uri": "bilibili://uper/homevc",
            "icon": "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png",
            "need_login": 1,
            "global_red_dot": 0,
            "display": 1
        }
        ,
        {
            "id": 402,
            "title": "个性装扮",
            "uri": "https://www.bilibili.com/h5/mall/home?navhide=1\u0026from=myservice",
            "icon": "http://i0.hdslb.com/bfs/archive/0bcad10661b50f583969b5a188c12e5f0731628c.png",
            "common_op_item": {}
        },
        {
            "id": 404,
            "title": "我的钱包",
            "uri": "bilibili://bilipay/mine_wallet",
            "icon": "http://i0.hdslb.com/bfs/archive/f416634e361824e74a855332b6ff14e2e7c2e082.png",
            "common_op_item": {}
        },
        {
            "id": 324864,
            "title": "主播中心",
            "uri": "https://live.bilibili.com/p/html/live-app-anchor-center/index.html?is_live_webview=1#/",
            "icon": "https://i0.hdslb.com/bfs/live/48e17ccd0ce0cfc9c7826422d5e47ce98f064c2a.png",
            "need_login": 1,
            "display": 1
        },
        {
            "id": 34944,
            "title": "主播活动",
            "uri": "https://live.bilibili.com/p/html/live-app-activity-list/index.html?force_web=1&is_live_webview=1#/activity-list",
            "icon": "https://i0.hdslb.com/bfs/live/5bc5a1aa8dd4bc5d6f5222d29ebaca9ef9ce37de.png",
            "need_login": 1,
            "display": 1
        },
        {
            "id": 4,
            "title": "直播数据",
            "uri": "https://live.bilibili.com/p/html/live-app-data/index.html?is_live_webview=1#/",
            "icon": "https://i0.hdslb.com/bfs/live/684d9c8a4cddc45d6d13f3527185e83a879ffae3.png",
            "need_login": 1,
            "display": 1
        },
        {
            "id": 514,
            "title": "社区中心",
            "uri": "https://www.bilibili.com/blackboard/dynamic/169422",
            "icon": "http://i0.hdslb.com/bfs/archive/551a39b7539e64d3b15775295c4b2e13e5513b43.png",
            "need_login": 1,
            "common_op_item": {}
        },
        {
            "id": 1,
            "title": "我的直播",
            "uri": "https://live.bilibili.com/p/html/live-app-center/index.html?is_live_webview=1",
            "icon": "https://i0.hdslb.com/bfs/live/a9be4fa50ea4772142c1fc7992cde28294d63021.png",
            "need_login": 1,
            "display": 1
        }
    ],
    "style": 1,
    "button": {
        "text": "发布",
        "url": "bilibili://uper/user_center/archive_selection",
        "icon": "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
        "style": 1
    },
    "type": 1,
    "up_title": "创作中心"
},
{
    "title": "更多服务",
    "items": [{
        "id": 407,
        "title": "联系客服",
        "uri": "bilibili://user_center/feedback",
        "icon": "http://i0.hdslb.com/bfs/archive/7ca840cf1d887a45ee1ef441ab57845bf26ef5fa.png"
    },
    {
        "id": 408,
        "title": "课堂模式",
        "uri": "bilibili://user_center/lessonsmode",
        "icon": "http://i0.hdslb.com/bfs/archive/bb3b48455b9364440785fade6223e0c774891b31.png"
    },
    {
        "id": 409,
        "title": "青少年模式",
        "uri": "bilibili://user_center/teenagersmode",
        "icon": "http://i0.hdslb.com/bfs/archive/68acfd37a735411ad56b59b3253acc33f94f7046.png"
    },
    {
        "id": 410,
        "title": "设置",
        "uri": "bilibili://user_center/setting",
        "icon": "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png"
    }
    ],
    "style": 2,
    "button": {}
}
];
$done({ body: JSON.stringify(body) });
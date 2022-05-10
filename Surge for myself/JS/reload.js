
$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("：就是你要重载我的配置？","你好，已经重载你的配置。","")
    $done({
        title: "不开心就刷新我一下的喔！",
        content: "哇！希望你今天也是开开心心的一天！",
        icon: "hand.thumbsup.circle",
        "icon-color": "#0047AB",
     })
    });

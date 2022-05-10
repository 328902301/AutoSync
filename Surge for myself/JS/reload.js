
$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("：就你要配置的喔？","你好，已经重载你的配置。","")
    $done({
        title: "不开心就刷新我一下的喔！",
        content: "哇！希望你今天也是开开心心的一天！",
        icon: "globe.asia.australia",
        "icon-color": "#0047AB",
     })
    });

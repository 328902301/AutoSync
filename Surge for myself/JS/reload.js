
$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("：Are you want to reload Surge?","Sir, I'm already to reload Surge!","")
    $done({
        title: "You can reload Surge through me.",
        content: "Enjoy your day of peace of mind!",
     })
    });

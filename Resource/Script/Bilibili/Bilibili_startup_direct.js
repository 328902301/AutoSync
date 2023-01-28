
//因为常常观看港澳台番剧后，B站连着外网，而我下次启动时，需要让其直连模式（主界面不同），有此需求，故写了一个简单脚本


//⚠️已自动获取野比配置的策略组，无需手动更改，DomesticMedia自行替换为自己的B站策略组名称



const Group = $prefs.valueForKey('BiliArea_Policy') || '港台番剧';

const message = {
    action: "set_policy_state",
    content: {[Group]: "direct"}
};
$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        //console.log(output);
    }
    $done();
}, reject => {
    // Normally will never happen.
    $done();
});
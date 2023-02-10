/*

README：https://raw.githubusercontent.com/githubdulong/Script/master/One.js
每日一言（有道词典）

原作者：@MuTu888 
GitHub：https://github.com/githubdulong

修改：TributePaulWalker

Surge：
[Script]
每日一句 = type=cron,cronexp=8 8 8 * * *,wake-system=1,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/One.js

QuanmutultX：
[task_local]
8 8 8 * * * https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/One.js, tag=每日一句

*/

const $tool = new Tool()
$tool.get('https://dict.youdao.com/infoline/style/cardList?mode=publish&client=mobile&style=daily&size=2', function (error, response, data) {
    let obj = JSON.parse(data);
    let date = new Date();
    let isAM = date.getHours() < 12 ? true : false;
    let title = '每日' + (isAM ? '一言' : '一言') + (isAM ? ' ☀️' : ' 🌙');
    let subtitle = '';
    let scheme = 'alipay://platformapi/startapp?appId=60000002';
    let content = ""+scheme;
    let option = {"open-url" : scheme};
    if (!error) {
        if (obj && obj.length > 1) {
            let yi = obj[1];
            content = yi.title + '\n' + yi.summary;
            option["media-url"] = yi.image[0];
        }
    }
    $tool.notify(title, subtitle, content);
    $done();
})

function Tool() {
    _node = (() => {
        if (typeof require == "function") {
            const request = require('request')
            return ({ request })
        } else {
            return (null)
        }
    })()
    _isSurge = typeof $httpClient != "undefined"
    _isQuanX = typeof $task != "undefined"
    this.isSurge = _isSurge
    this.isQuanX = _isQuanX
    this.isResponse = typeof $response != "undefined"
    this.notify = (title, subtitle, message, option) => {
        if (_isQuanX) $notify(title, subtitle, message, option)
        if (_isSurge) $notification.post(title, subtitle, message, option)
        if (_node) console.log(JSON.stringify({ title, subtitle, message }));
    }
    this.write = (value, key) => {
        if (_isQuanX) return $prefs.setValueForKey(value, key)
        if (_isSurge) return $persistentStore.write(value, key)
    }
    this.read = (key) => {
        if (_isQuanX) return $prefs.valueForKey(key)
        if (_isSurge) return $persistentStore.read(key)
    }
    this.get = (options, callback) => {
        if (_isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => { callback(null, _status(response), response.body) }, reason => callback(reason.error, null, null))
        }
        if (_isSurge) $httpClient.get(options, (error, response, body) => { callback(error, _status(response), body) })
        if (_node) _node.request(options, (error, response, body) => { callback(error, _status(response), body) })
    }
    this.post = (options, callback) => {
        if (_isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => { callback(null, _status(response), response.body) }, reason => callback(reason.error, null, null))
        }
        if (_isSurge) $httpClient.post(options, (error, response, body) => { callback(error, _status(response), body) })
        if (_node) _node.request.post(options, (error, response, body) => { callback(error, _status(response), body) })
    }
    _status = (response) => {
        if (response) {
            if (response.status) {
                response["statusCode"] = response.status
            } else if (response.statusCode) {
                response["status"] = response.statusCode
            }
        }
        return response
    }
}

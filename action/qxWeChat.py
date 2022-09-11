import requests

rawWeChat = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/WeChat/WeChat.list").text
rawdd = requests.get("https://gist.githubusercontent.com/futurkk/8c63488b05ba2c6f567965531f826ca2/raw/direct.list").text

result = list()
for rawresult in [rawWeChat, rawdd]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./quanx/WeChat.list", "w") as f:
    f.write("\n".join(result))

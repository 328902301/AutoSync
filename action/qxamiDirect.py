import requests

rawWeChat = requests.get("https://raw.githubusercontent.com/NobyDa/Script/master/Surge/WeChat.list").text
rawApple = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Apple/Apple.list").text

result = rawWeChat.split("\n") + rawApple.split("\n")

with open("./quanx/amiDirect.list", "w") as f:
    f.write("\n".join(result))

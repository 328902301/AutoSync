import requests

rawBiliBili = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/BiliBili/BiliBili.list").text
rawBiliBilintl = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/BiliBiliIntl/BiliBiliIntl.list").text
rawMicrosoft = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Microsoft/Microsoft.list").text
rawYouTube = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/YouTube/YouTube.list").text
rawGoogle = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Google/Google.list").text


result = rawBiliBili.split("\n") + rawBiliBilintl.split("\n") + rawMicrosoft.split("\n") + rawYouTube.split("\n") + rawGoogle.split("\n")

result = list(set(result))

with open("./amiProxy.conf", "w") as f:
    f.write("\n".join(result))
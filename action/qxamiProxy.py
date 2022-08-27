import requests

rawMicrosoft = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Microsoft/Microsoft.list").text
rawYouTube = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/YouTube/YouTube.list").text
rawGoogle = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Google/Google.list").text


result = rawMicrosoft.split("\n") + rawYouTube.split("\n") + rawGoogle.split("\n")

with open("./quanx/amiProxy.list", "w") as f:
    f.write("\n".join(result))

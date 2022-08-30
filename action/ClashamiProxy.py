import requests

rawMicrosoft = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml").text
rawYouTube = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml").text
rawGoogle = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml").text

rawYouTube = rawYouTube.replace("palyload:","")
rawGoogle = rawGoogle.replace("palyload:","")

result = rawMicrosoft.split("\n") + rawYouTube.split("\n") + rawGoogle.split("\n")

with open("./clash/amiProxy.yaml", "w") as f:
    f.write("\n".join(result))

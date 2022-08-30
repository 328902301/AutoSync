import requests

rawMicrosoft = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml").text
rawYouTube = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml").text
rawGoogle = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml").text

rawYouTube = rawYouTube.replace("palyload:\n","")
rawGoogle = rawGoogle.replace("palyload:\n","")

result = list()
for rawresult in [rawMicrosoft, rawYouTube, rawGoogle]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./clash/amiProxy.yaml", "w") as f:
    f.write("\n".join(result))

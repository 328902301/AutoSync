import requests

rawMicrosoft = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml").text
rawYouTube = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml").text
rawGoogle = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml").text

result = ['payload:']
for rawresult in [rawMicrosoft, rawYouTube, rawGoogle]:
    result.extend([item.rstrip() for item in rawresult.split('\n') if not (item.startswith('#') or item.startswith('payload:'))])
result_text = '\n'.join(result)

with open("./clash/amiProxy.yaml", "w") as f:
    f.write("\n".join(result))

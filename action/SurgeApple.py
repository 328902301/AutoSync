import requests

rawApple = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Apple/Apple.list").text

result = list()
for rawresult in [rawApple]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./Apple.conf", "w") as f:
    f.write("\n".join(result))

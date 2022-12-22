import requests

rawNetflix = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Netflix/Netflix.list").text
rawDisney = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Disney/Disney.list").text

result = list()
for rawresult in [rawNetflix, rawDisney]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./Media.conf", "w") as f:
    f.write("\n".join(result))

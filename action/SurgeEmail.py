import requests

rawEmail = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Mail/Mail.list").text

result = list()
for rawresult in [rawEmail]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./Email.conf", "w") as f:
    f.write("\n".join(result))

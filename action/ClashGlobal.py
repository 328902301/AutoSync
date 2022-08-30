import requests

rawGlobal = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Global/Global.yaml").text

result = ['payload:']
for rawresult in [rawGlobal]:
    result.extend([item.rstrip() for item in rawresult.split('\n') if not (item.startswith('#') or item.startswith('payload:'))])
result_text = '\n'.join(result)

with open("./clash/Global.yaml", "w") as f:
    f.write("\n".join(result))

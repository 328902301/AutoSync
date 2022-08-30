
import requests

rawREJECTDomain = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising_Domain.yaml").text

result = ['payload:']
for rawresult in [rawREJECTDomain]:
    result.extend([item.rstrip() for item in rawresult.split('\n') if not (item.startswith('#') or item.startswith('payload:'))])
result_text = '\n'.join(result)

with open("./clash/REJECTDomain.yaml", "w") as f:
    f.write("\n".join(result))

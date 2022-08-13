import requests

rawGlobalDomian = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Global/Global_Domain.yaml").text

result = rawGlobalDomian.split("\n")

with open("./GlobalDomain.yaml", "w") as f:
    f.write("\n".join(result))

import requests

rawREJECTDomainClash = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising_Domain.yaml").text

result = rawREJECTDomainClash.split("\n")

with open("./REJECTDomainClash.yaml", "w") as f:
    f.write("\n".join(result))

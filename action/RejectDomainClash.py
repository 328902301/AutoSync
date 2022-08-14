import requests

rawRejectDomian = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising_Domain.yaml").text

result = rawRejectDomian.split("\n") + rawPrivacy.split("\n")

with open("./RejectDomain.yaml", "w") as f:
    f.write("\n".join(result))

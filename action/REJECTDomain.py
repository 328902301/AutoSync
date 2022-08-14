import requests

rawRejectDomian = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Advertising/Advertising_Domain.list").text

result = rawRejectDomian.split("\n")

with open(./RejecDomain, "w") as f:
    f.write("\n".join(result))

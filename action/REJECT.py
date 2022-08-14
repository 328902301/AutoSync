import requests

rawRejectDomian = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/AdGuard/Advertising/Advertising.txt").text

result = rawRejectDomian.split("\n")

with open("./REJECt", "w") as f:
    f.write("\n".join(result))

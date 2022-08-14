import requests

rawDomainREJECT = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/AdGuard/Advertising/Advertising.txt").text

result = rawDomainREJECT.split("\n")

with open("./DomainREJECT", "w") as f:
    f.write("\n".join(result))
   

import requests

rawREJECT = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Advertising/Advertising.list").text

result = rawREJECT.split("\n")

with open("./quanx/REJECT.list", "w") as f:
    f.write("\n".join(result))

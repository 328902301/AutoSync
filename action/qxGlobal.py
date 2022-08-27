import requests

rawGlobal = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Global/Global.list").text

result = rawGlobal.split("\n")

with open("./quanx/Global.list", "w") as f:
    f.write("\n".join(result))

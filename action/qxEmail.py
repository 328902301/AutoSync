import requests

rawEmail = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Mail/Mail.list").text

result = rawEmail.split("\n")

with open("./quanx/Email.list", "w") as f:
    f.write("\n".join(result))

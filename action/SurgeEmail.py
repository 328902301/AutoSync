import requests

rawEmail = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Mail/Mail.list").text

result = rawEmail.split("\n")

with open("./Email.conf", "w") as f:
    f.write("\n".join(result))

import requests

rawTelegram = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Telegram/Telegram.list").text
rawNetflix = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Netflix/Netflix.list").text
rawDisney = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Disney/Disney.list").text

result = rawTelegram.split("\n") + rawNetflix.split("\n") + rawDisney.split("\n")

with open("./quanx/GlobalMedia.list", "w") as f:
    f.write("\n".join(result))

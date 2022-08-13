import requests

rawReject = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/AdvertisingLite/AdvertisingLite.yaml").text
rawPrivacy = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Hijacking/Hijacking.list").text
rawHijacking = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Privacy/Privacy.list").text

result = rawReject.split("\n") + rawPrivacy.split("\n") + rawHijacking.split("\n")

with open("./Reject.yaml", "w") as f:
    f.write("\n".join(result))

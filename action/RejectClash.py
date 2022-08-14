import requests

rawReject = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising.list").text

result = rawReject.split("\n"

with open("./Reject.yaml", "w") as f:
    f.write("\n".join(result))

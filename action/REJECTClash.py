import requests

rawREJECTClash = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising.list").text

result = rawREJECTClash.split("\n")

with open("./REJECTClash.yaml", "w") as f:
    f.write("\n".join(result))

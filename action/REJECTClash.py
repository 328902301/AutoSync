import requests

rawREJECTClash = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising.yaml").text

result = rawREJECTClash.split("\n")

with open("./REJECTClash.yaml", "w") as f:
    f.write("\n".join(result))

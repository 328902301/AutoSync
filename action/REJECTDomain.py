import requests

rawREJECTDomain = requests.get("https://ruleset.skk.moe/List/domainset/reject.conf").text

result = rawREJECTDomain.split("\n")

with open("./REJECTDomain.conf", "w") as f:
    f.write("\n".join(result))
   

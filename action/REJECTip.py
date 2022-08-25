import requests

rawip = requests.get("https://ruleset.skk.moe/List/ip/reject.conf").text

result = rawip.split("\n")

with open("./REJECTip.conf", "w") as f:
    f.write("\n".join(result))

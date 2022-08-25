import requests

rawnonip = requests.get("https://ruleset.skk.moe/List/non_ip/reject.conf").text

result = rawnonip.split("\n")

with open("./REJECTnonip.conf", "w") as f:
    f.write("\n".join(result))

import requests

rawRejectDomian = requests.get("https://ruleset.skk.moe/List/domainset/reject.conf").text

result = rawRejectDomian.split("\n")

result = list(set(result))

with open("./RejectDomian.conf", "w") as f:
    f.write("\n".join(result))

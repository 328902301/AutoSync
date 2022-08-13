import requests

rawRejectDomian = requests.get("https://ruleset.skk.moe/List/domainset/reject.conf").text

result = rawRejectDomian.split("\n")

with open("./RejectDomain.list", "w") as f:
    f.write("\n".join(result))

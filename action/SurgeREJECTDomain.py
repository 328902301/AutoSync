import requests

rawREJECTDomain = requests.get("https://ruleset.skk.moe/List/domainset/reject.conf").text

result = list()
for rawresult in [rawREJECTDomain]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./REJECTDomain.conf", "w") as f:
    f.write("\n".join(result))
   

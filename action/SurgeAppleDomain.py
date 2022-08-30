import requests

rawAppleDomain = requests.get("https://ruleset.skk.moe/List/domainset/apple_cdn.conf").text

result = list()
for rawresult in [rawAppleDomain]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./AppleDomain.conf", "w") as f:
    f.write("\n".join(result))

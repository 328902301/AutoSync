import requests

rawApple = requests.get("https://ruleset.skk.moe/List/non_ip/apple_services.conf").text

result = list()
for rawresult in [rawApple]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./Apple.conf", "w") as f:
    f.write("\n".join(result))

import requests
from operator import itemgetter

rawApple = requests.get("https://ruleset.skk.moe/List/non_ip/apple_services.conf").text

result = rawApple.split("\n")

result = list(set(result))

with open("./Apple.conf", "w") as f:
    f.write("\n".join(result))
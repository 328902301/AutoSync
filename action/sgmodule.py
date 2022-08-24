import requests

rawboxjs = requests.get("https://github.com/chavyleung/scripts/raw/master/box/rewrite/boxjs.rewrite.surge.sgmodule").text
rawsubstore = requests.get("https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge.sgmodule").text
rawweather = requests.get("https://raw.githubusercontent.com/VirgilClyne/iRingo/beta/sgmodule/Weather.beta.sgmodule").text

tmpresult = rawboxjs.split("\n") + rawsubstore.split("\n") + rawweather.split("\n")

tmpresult = list(set(tmpresult))

result = []
print(tmpresult)

with open("./GlobalDomain.conf", "w") as f:
    f.write("\n".join(result))

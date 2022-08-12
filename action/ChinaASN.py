import requests

rawChinaASN = requests.get("https://raw.githubusercontent.com/VirgilClyne/VirgilClyne/main/modules/ASN/ASN.list").text

result = rawChinaASN.split("\n")

result = list(set(result))

with open("./ChinaASN.conf", "w") as f:
    f.write("\n".join(result))
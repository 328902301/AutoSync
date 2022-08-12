import requests
from operator import itemgetter

rawGlobal = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Global/Global.list").text

result = rawGlobal.split("\n")

result = list(set(result))

with open("./Global.conf", "w") as f:
    f.write("\n".join(result))
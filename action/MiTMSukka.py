import requests

rawMiTM = requests.get("https://ruleset.skk.moe/Modules/sukka_mitm_hostnames.sgmodule").text

result = rawMiTM.split("\n")

with open("./sgmodule/MiMTSukka.sgmodule", "w") as f:
    f.write("\n".join(result))

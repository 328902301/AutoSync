import requests

rawMiTM = requests.get("https://ruleset.skk.moe/Modules/sukka_mitm_hostnames.sgmodule").text

result = ['#!name=Protect me!\n#!desc=MiTM for REJECT.']
for rawresult in [rawMiTM]:
    result.extend([item.rstrip() for item in rawresult.split('\n') if not (item.startswith('#'))])
result_text = '\n'.join(result)

with open("./sgmodule/MiTM.sgmodule", "w") as f:
    f.write("\n".join(result))

import requests

rawMiTM = requests.get("https://ruleset.skk.moe/Modules/sukka_mitm_hostnames.sgmodule").text
rawami = requests.get("https://gist.githubusercontent.com/futurkk/144a94ddac70290f638f998148ccccf8/raw/91b0287a3d43983b1407322a3a9b944174c73a41/ami.sgmodule").text
rawsubstore = requests.get("https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge.sgmodule").text

result = ['#!name=test\n#!desc=sgmodule test']
for rawresult in [rawMiTM, rawami, rawsubstore]:
    result.extend([item.rstrip() for item in rawresult.split('\n') if not (item.startswith('#'))])
result_text = '\n'.join(result)

import configparser
config = configparser.ConfigParser()
config.read('result_text')
sections_list = config.sections()
for s in sections_list:
    print(s)
    for k in config[s]:
        print(k,':',config[s][k])

with open("./clash/Global.yaml", "w") as f:
    f.write("\n".join(config))

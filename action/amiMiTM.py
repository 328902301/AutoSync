import requests

rawfirst = requests.get("https://raw.githubusercontent.com/futurkk/Potato/main/Surge%20for%20myself/sgmodule/ami%40Protect%20me.sgmodule").text
rawBiliBili = requests.get("https://raw.githubusercontent.com/app2smile/rules/master/module/bilibili.sgmodule").text
rawadMiTM = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Advertising/Advertising_MITM.sgmodule").text
                         

result = rawfirst.split("\n") + rawBiliBili.split("\n") + rawadMiTM.split("\n")

with open("./amiMiTM.sgmodule", "w") as f:
    f.write("\n".join(result))

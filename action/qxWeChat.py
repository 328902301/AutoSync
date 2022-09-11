import requests

rawWeChat = requests.get("https://raw.githubusercontent.com/NobyDa/Script/master/Surge/WeChat.list").text

result = rawWeChat.split("\n")

with open("./quanx/amiDirect.list", "w") as f:
    f.write("\n".join(result))

import requests

rawWeChat = requests.get("https://raw.githubusercontent.com/NobyDa/Script/master/Surge/WeChat.list").text

result = rawWeChat.split("\n")

result = list(set(result))

with open("./WeChat.conf", "w") as f:
    f.write("\n".join(result))

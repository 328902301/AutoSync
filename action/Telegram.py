import requests

rawTelegram = requests.get("https://raw.githubusercontent.com/VirgilClyne/GetSomeFries/main/ruleset/ASN.Telegram.list").text

result = list()
for rawresult in [rawTelegram]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./Telegram.conf", "w") as f:
    f.write("\n".join(result))

import requests

rawTiktok = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/TikTok/TikTok.list").text
rawTwitter = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Twitter/Twitter.list").text
rawInstagram = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Instagram/Instagram.list").text
rawdouyin1 = requests.get("https://raw.githubusercontent.com/bunizao/TutuBetterRules/tutu/RuleList/DOMAlN/Douyin_ByteDance.list").texy
rawdouyin2 = requests.get("https://raw.githubusercontent.com/bunizao/TutuBetterRules/tutu/RuleList/DOMAlN/Douyin.list").text

result = list()
for rawresult in [rawTiktok, rawTwitter, rawInstagram, rawdouyin1, rawdouyin2]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./Social.conf", "w") as f:
    f.write("\n".join(result))

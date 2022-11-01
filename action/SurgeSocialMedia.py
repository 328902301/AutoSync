import requests

rawYouTube = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/YouTube/YouTube.list").text
rawBiliBili = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/BiliBili/BiliBili.list").text
rawBiliBilintl = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/BiliBiliIntl/BiliBiliIntl.list").text
rawSpotify = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Spotify/Spotify.list").text
rawTwitch = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Twitch/Twitch.list").text
raweb = requests.get("https://gist.githubusercontent.com/futurkk/9246989de0da961983fc17f4fc3d123a/raw/media.list").text
rawxiaohongshu = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/XiaoHongShu/XiaoHongShu.list").text

result = list()
for rawresult in [rawYouTube, rawBiliBili, rawBiliBilintl, rawSpotify, rawTwitch, raweb, rawxiaohongshu]:
    result.extend([item for item in rawresult.split("\n") if not item.startswith('#')])
result_text = '\n'.join(result)

with open("./SocialMedia.conf", "w") as f:
    f.write("\n".join(result))

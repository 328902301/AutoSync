import requests

rawBiliBili = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/BiliBili/BiliBili.list").text
rawBiliBilintl = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/BiliBiliIntl/BiliBiliIntl.list").text
rawSpotify = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Spotify/Spotify.list").text
rawTwitch = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Twitch/Twitch.list").text
rawpv = requests.get("https://gist.githubusercontent.com/futurkk/9246989de0da961983fc17f4fc3d123a/raw/media.list").text

result = rawBiliBili.split("\n") + rawBiliBilintl.split("\n") + rawSpotify.split("\n") + rawTwitch.split("\n") + rawpv.split("\n")

with open("./quanx/SocialMedia.list", "w") as f:
    f.write("\n".join(result))

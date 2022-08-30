import requests

rawBiliBili = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBili/BiliBili.yaml").text
rawBiliBilintl = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/BiliBiliIntl/BiliBiliIntl.yaml").text
rawSpotify = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Spotify/Spotify.yaml").text
rawTwitch = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitch/Twitch.yaml").text
rawpv = requests.get("https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/PrimeVideo/PrimeVideo.yaml").text


result = ['payload:']
for rawresult in [rawBiliBili, rawBiliBilintl, rawSpotify, rawTwitch, rawpv]:
    result.extend([item.rstrip() for item in rawresult.split('\n') if not (item.startswith('#') or item.startswith('payload:'))])
result_text = '\n'.join(result)

with open("./clash/SocialMedia.yaml", "w") as f:
    f.write("\n".join(result))

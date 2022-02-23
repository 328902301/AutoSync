# Dualsub
# Disney+, Star+, HBO Max, Netflix, YouTube subtitles add-ons

hostname = %APPEND% *.media.dssott.com, *.media.starott.com, *.api.hbo.com, *.hbomaxcdn.com, *.nflxvideo.net, *.youtube.com

https:\/\/(.+media.(dss|star)ott|manifests.v2.api.hbo|.+hbomaxcdn|.+nflxvideo).(com|net)\/((.+(.vtt|-all-.+.m3u8.*))|hls.m3u8.+|\?o=\d+&v=\d+&e=.+) url script-response-body https://raw.githubusercontent.com/Neurogram-R/Quantumult-X/main/Dualsub.js
https:\/\/setting.(media.(dss|star)ott|hbomaxcdn|nflxvideo|youtube).(com|net)\/\?action=(g|s)et url script-analyze-echo-response https://raw.githubusercontent.com/Neurogram-R/Quantumult-X/main/Dualsub.js
http:\/\/www.youtube.com\/api\/timedtext.+ url script-request-header https://raw.githubusercontent.com/Neurogram-R/Quantumult-X/main/Dualsub.js

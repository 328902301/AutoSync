单订阅wwy说明
1.Safari浏览器打开https://raw.githubusercontent.com/2k1bk/Rules/1/QuantumultX/Filter/NetEaseCloudMusic/ca.crt
  下载CA证书添加并信任
以下请在QuanX编辑中添加
2.订阅添加
https://raw.githubusercontent.com/2k1bk/Rules/1/QuantumultX/Filter/NetEaseCloudMusic/Music.list, tag=网易云, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Netease.png, update-interval=86400, opt-parser=true, enabled=true
3.策略添加
[policy]
static=🎧𝐍𝐞𝐭𝐞𝐚𝐬𝐞𝐌𝐮𝐬𝐢𝐜, direct, 🎧𝐍𝐞𝐭𝐞𝐚𝐬𝐞, 🎧Music1, 🎧Music2, 🎧Music3, 🎧Music4, 🎧Music5, 🎧Music6, 🎧Music7, 🎧Music8, 🎧Music9, 🎧Music10, 🎧Music11, 🎧Music12, 🎧Music13, 🎧Music14, 🎧Music15, 🎧Music16, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/neteasemusic.png
static=🎧𝐍𝐞𝐭𝐞𝐚𝐬𝐞, server-tag-regex=music|music|Unbolck|云音乐, img-url= https://raw.githubusercontent.com/Orz-3/mini/master/Netease.png
4.远程分流添加
[filter_remote]
; > NeteaseMusic
https://raw.githubusercontent.com/2k1bk/Rules/1/QuantumultX/Filter/NetEaseCloudMusic/NetEaseCloudMusic.list, force-policy=🎧𝐍𝐞𝐭𝐞𝐚𝐬𝐞𝐌𝐮𝐬𝐢𝐜, tag=𝐍𝐞𝐭𝐞𝐚𝐬𝐞𝐌𝐮𝐬𝐢𝐜, enabled=true, opt-parser=true

Rules.conf/Rules-task使用wwy说明
1.Safari浏览器打开https://raw.githubusercontent.com/2k1bk/Rules/1/QuantumultX/Filter/NetEaseCloudMusic/ca.crt
  下载CA证书添加并信任就可以使用，
 
 发现解锁不了换节点,并关掉wyy再开一次再找歌曲测试能否下载和播放。
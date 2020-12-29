IOS-QUANX[NeteaseMusic]不使用本配置conf仅单订阅按1-4步骤

 1.打开Safari浏览器
  下载添加并信任
  [CA证书](https://raw.githubusercontent.com/2k1bk/UnblockNeteaseMusic/master/ca.crt)

以下请在QuanX编辑中添加

 2.订阅添加

  https://raw.githubusercontent.com/2k1bk/Rules/1/QuantumultX/Filter/NetEaseCloudMusic/Music.list, tag=网易云, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Netease.png, update-interval=86400, opt-parser=true, enabled=true

 3.策略添加

  [policy]

  static=🎧𝐍𝐞𝐭𝐞𝐚𝐬𝐞𝐌𝐮𝐬𝐢𝐜, proxy, direct, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/neteasemusic.png

 4.远程分流添加

  [filter_remote]
  https://raw.githubusercontent.com/2k1bk/Rules/1/QuantumultX/Filter/NetEaseCloudMusic/NetEaseCloudMusic.list, force-policy=🎧𝐍𝐞𝐭𝐞𝐚𝐬𝐞𝐌𝐮𝐬𝐢𝐜, tag=𝐍𝐞𝐭𝐞𝐚𝐬𝐞𝐌𝐮𝐬𝐢𝐜, enabled=true, opt-   parser=true

IOS-QUANX[NeteaseMusic]Rules.conf使用说明（这个很重要且简单）

  如果你都使用RULES.CONF配置了就不用跟着上面步骤了，直接下载[CA]证书用就完事了┗|｀O′|┛ 嗷~~ 
  
  简单又方便，能去掉只能听15秒还能下载VIP歌曲

 1.打开Safari浏览器下载
  [CA证书](https://raw.githubusercontent.com/2k1bk/UnblockNeteaseMusic/master/ca.crt)

  进入苹果设置-通用-描述文件-UnblockNeteaseMusic Root（点击安装）-回到关于本机-证书信任-把刚刚添加的[CA]文件开启信任 
  
  解锁不了换就节点,并关掉[NeteaseMusic]再开一次再找歌曲测试能否下载和播放。

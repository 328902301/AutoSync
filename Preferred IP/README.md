## 优选IP
**. linux shell脚本+fping

具体使用流程，需要编译里面 fping 4.2 修改版本，另外需要系统安装curl支持。  

下载修改过的源码 fping-4.2.tar.gz 点击下载Linux源码  

具体编译使用流程如下  

curl https://github.com/General74110/MacBook-M1/raw/master/Preferred%20IP/linux.tar.gz

tar -vxf linux.tar.gz

cd linux

./configure

make

cd src

sudo ./cf.sh


## 引用声明
其中 fping 是基于 GitHub 开源项目 https://github.com/schweikert/fping 4.2发行版修改而来，所有脚本均为[badafans](https://github.com/badafans) 创作内容，转载请注明出处！  

对于 Cloudflare Anycast 节点汇总，定期扫描 Cloudflare 公开节点汇总而来，Cloudflare IP Ranges 来自 https://www.cloudflare.com/zh-cn/ips/  

## 感谢:
[badafans](http://blog.csdn.net/guodongxiaren  


  [回到顶部](#readme)  

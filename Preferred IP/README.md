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

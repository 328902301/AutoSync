# Quantumult X
全部资源来源于互联网，只做收集和整理。

------------------------------

# 配置说明

本配置由神机规则修改而来，修改了默认策略组，并集成了去广告脚本和重写，适合小白入门。

使用方法：

1. 移动端先点击`View code`打开文件列表，点击库中的`RuCu6_Import.conf`文件，点击`raw`获取真实地址，复制地址备用；

2. Quantumult X 主界面，点击`右下角风车`，然后弹出界面下拉至`配置文件`，点击`下载`，将上一步复制的地址粘贴到弹出窗口，然后点确定；

3. Quantumult X 主界面，点击`右下角风车`，然后弹出界面下拉至`MitM`，点击`生成证书`；

4. 打开系统设置`通用-描述文件`，点击安装；

5. 安装完成后，打开`通用-关于本机`，点击`信任证书`；

6. 回到 Quantumult X ，打开`重写`和`MitM`；

7. 添加`节点/订阅`，并打开`资源解析器`；

8. 开始使用。

------------------------------

# 资源解析器使用说明

0️. 在 Quantumult X 配置文件中`general`部分，加入

    `resource_parser_url=https://github.com/RuCu6/QuanX/raw/main/qx_parser.js`；

    ⚠️⚠️如提示`没有自定义解析器`，请长按右下角图标后点击左侧刷新按钮，更新资源，后台退出 app ，直到出现解析器说明；

1. 假设原始订阅连接为:`https://xxx.txt`；

2️. 假设你想要保留的参数为`in=tls+ss`, 想要过滤的参数为`out=http+2`, 请注意下面订阅链接后一定要加`#`符号；

3️. 则填入 Quantumult X 节点引用的的总链接为`https://xxx.txt#in=tls+ss&out=http+2`；

4️. 填入上述链接, 并打开的资源解析器开关。

------------------------------

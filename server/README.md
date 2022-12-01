**[QxScript](https://github.com/xiaomaoJT/QxScript)**   ***https://github.com/xiaomaoJT/QxScript***  **@XiaoMao**

**[<< 回到首页](https://github.com/xiaomaoJT/QxScript)** 



------------

#### 🎟 个人机场

> 个人机场节点，购买后，我的订阅>一键订阅 复制链接即可订阅机场，或可一键配置到对应软件。
>
> **[获取 XiaoMao 永久免费节点订阅](https://t.me/Xiao_MaoMao_bot)**

---

#### 🎟 节点订阅转换教程
##### 🎟 节点在线订阅转换

> 优点：简易、方便、一键转换
>
> 不足：无法二次编辑、泄漏风险
>
> [在线转换规则详细说明](https://github.com/KOP-XIAO/QuantumultX-Surge-API/blob/master/ReadMe.md)
>
> **[获取 节点订阅转换](https://t.me/Xiao_MaoMao_bot)**

```text
订阅链接需到在线网址中 转换为qx格式，在线转换可能有泄露风险，建议用机场自带的转换。如订阅泄露，请至机场官网重置订阅。
```

```text
部分常用规则说明:

节点导入增加国旗显示 转换后订阅链接末尾加 ?emoji=2
节点导入增加排序 转换后订阅链接末尾加 ?sort=1
节点流量信息 转换后订阅链接末尾加 ?info=1
付费节点标注（用于区分机场节点） 转换后订阅链接末尾加 ?rename=@-MoJie

示例： https://github.com?emoji=2&sort=1&rename=@-MoJie&info=1
```



##### 🎟Sub-Store 订阅转换

> 优点：一键转换、订阅链接不变可直接更新substore配置，无需再配置QX、可实时更改substore配置及查看信息、本地配置安全保障
>
> 不足：配置较繁琐

```text
常用正则规则，脚本按顺序执行，为保证最优执行，可适当调整执行顺序
以下脚本均非必需添加，详情请看图解或官网说明
```

```text
sub store订阅（获取订阅辅助）:

使用说明：订阅重写后，直接浏览器打开网址即可
重写订阅：https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/config/QX.snippet
网址：https://sub.store/

详细教程：https://www.notion.so/Sub-Store-6259586994d34c11a4ced5c406264b46
```

```javascript
基础语法示例：

1⃣️ 正则过滤（过滤模式）
表达式：邀请|机场|套餐|剩余|注册

2⃣️ 正则重命名（用于更换节点中不需要的名字）
表达式1:直连 ，表达式2: Z
表达式1:白嫖 ，表达式2: （一个空格）
表达式1:倍率 ，表达式2: MP

3⃣️ 脚本操作（脚本）（用于在节点前后增加特殊标识符）
function operator(proxies,targetPlatfprm) {
    return proxies.map(proxy => {
        proxy.name = '·想要加的名字（可以是表情）' + proxy.name + '·想要加的名字（可以是表情）'
        return proxy;
    })
}
//个人用法示例
proxy.name = proxy.name + '·🎟XiaoMao'

4⃣️ 国旗操作

5⃣️ 节点排序
```

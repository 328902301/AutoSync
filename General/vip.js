var aiqiyi=
    '<span style="display:block;float:left;width:3vw;height:3vw;font-size:3vw;color: #ff00ff;line-height:3vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a56682;background: #0D0D0D;margin:4.5vw 1.7vw;">爱</span>'


var qq=
    '<span style="display:block;float:left;width:3vw;height:3vw;font-size:3vw;color: #00FFFF;line-height:3vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #FFFF00;background: #0D0D0D;margin:4.5vw 1.7vw;">腾</span>'


var nothing =
    '<span style="display:block;float:left;width:3vw;height:3vw;font-size:3vw;color: #fff;line-height:3vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a5685f;background: #0D0D0D;margin:4.5vw 1.7vw;">综</span>'

var apis = [ 

{
        name: nothing + "大量地址bljiex",
        url: "https://vip.bljiex.com/?v=",
        title: "综合接口"
    }, 

{
        name: nothing + "[原] 黑云单➕剧👍🏻",
        url: "https://jx.daheiyun.com/?url=",
        title: "综合接口"
    }, 

{
        name: nothing + "618单解➕剧解👍🏻",
        url: "https://jx.618g.com/?url=",
        title: "综合接口"
    }, 

{
        name: nothing + "悉眼单部",
        url: "https://5.5252e.com/2/?url=",
        title: "综合接口"

}, 

{
        name: nothing + "悉眼单部2",
        url: "https://beaacc.com/21/?url=",
        title: "综合接口"

}, 

//以下不用

{
        name: nothing + "🎲18咪咕单➕剧",
        url: "http://api.nobij.top/jx/?url=",
        title: "综合接口"
    }, 

{
        name: aiqiyi+ "🎲ok咪咕失效？",
        url: "http://okjx.cc/?url=",
        title: "综合接口"
    }, 

{
        name: nothing + "名字搜索解HD",
        url: "https://z1.m1907.cn/?jx=",
        title: "综合接口"
    }, 

{
        name: nothing + "🎲520单➕剧",
        url: "http://at520.cn/jx/?url=",
        title: "综合接口"
    }, 

{
        name: nothing + "悉眼单备用1",
        url: "http://play.mp4play.com/h5/play/?line=3&first_line_id=0&www=iqiyi&url=",
        title: "综合接口"
    }, 

{
        name: qq+ "悉眼单备用2",
        url: "http://app.baiduoos.cn:2019/vip/index.php?url=",
        title: "综合接口"
    }, 

]

//添加链接

function createSelect(apis) {
    var myul = document.createElement("ul");
    myul.id = "myul";
    myul.setAttribute("style",
        "display:none;background:#8B008B;box-shadow:0px 1px 10px rgba(0,0,0,0.3);margin:0;padding:0 2vw;position:fixed;bottom:18vh;right:10vw;z-index:99999;height:30vh;overflow:scroll;border-radius:5.6vw;");  //菜单坐标vh  vw  菜单倒角radius菜单底色;
    for (var i = 0; i < apis.length; i++) {
        var myli = document.createElement("li");
        var that = this;
        myli.setAttribute("style",
            "margin:0;padding:0;display:block;list-style:none;font-size:4.5vw;width:42vw;text-align:left;line-height:10.5vw;letter-spacing:2;border-bottom:3px solid #EE0000;position:relative;overflow:hidden;text-overflow:hidden;white-space:nowrap;"); //横线
        (function (num) {
            myli.onclick = function () {
                window.open(apis[num].url + location.href, '_blank');
            };
            myli.ontouchstart = function () {
                this.style.cssText += "color:yellow;background:transparent;border-radius:2vw;";  
            }//倒角2
            myli.ontouchend = function () {
                this.style.cssText += "color:black;background:transparent;border-radius:0;";
            }
        })(i);
        myli.innerHTML = apis[i].name;
        myul.appendChild(myli);
    }
    document.body.appendChild(myul);
}

//唤出菜单

function createMenu() {
    var myBtn = document.createElement("div");
    myBtn.id = "myBtn";
    myBtn.innerHTML = "";
    myBtn.setAttribute("style",
     "width:10vw;height:10vw;position:fixed;bottom:10vh;right:6vw;z-index:100000;border-radius:100%;text-align:center;line-height:10vw;box-shadow:0px 1px 10px rgba(0,0,0,0.3);font-size:6vw;background:transparent;");
    myBtn.onclick = function () {
        var myul = document.getElementById("myul");
        if (myul.style.display == "none") {
            myul.style.display = "block";
            this.style.transform = "rotateZ(45deg)";
        } else {
            myul.style.display = "none";
            this.style.transform = "rotateZ(0deg)";
        }
    }
    document.body.appendChild(myBtn);
}
/*document.addEventListener("DOMContentLoaded",function () {
 createMenu();
 createSelect(apis);
});*/
if (location.href.match(".iqiyi.com") || location.href.match(".youku.com") || location.href.match(".le.com") ||
    location.href.match(".letv.com") || location.href.match("v.qq.com") || location.href.match("film.qq.com") || location.href.match(".tudou.com") ||
    location.href.match(".mgtv.com") || location.href.match("film.sohu.com") || location.href.match("tv.sohu.com") ||
    location.href.match(".acfun.cn") || location.href.match(".bilibili.com") || location.href.match(".pptv.com") ||
    location.href.match("vip.1905.com") || location.href.match(".yinyuetai.com") || location.href.match(".fun.tv") ||
    location.href.match(".56.com") || location.href.match(".wasu.cn")) {
    createMenu();
    createSelect(apis);
}
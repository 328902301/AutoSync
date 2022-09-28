//script&rewrite 转换成 Quantumult X
function SCP2QX(subs) {
  var nrw = []
  var rw = ""
  subs = subs.split("\n").map(x => x.trim().replace(/\s+/g," "))
  //$notify("Script","",subs)
  for (var i = 0; i < subs.length; i++) {
    try {
      if (subs[i].slice(0, 8) == "hostname") {
        hn = subs[i].replace(/\%.*\%/g, "")
        nrw.push(hn)
      }
      var SC = ["type=", ".js", "pattern=", "script-path="]
      var NoteK = ["//", "#", ";"]; //排除注释项
      const sccheck = (item) => subs[i].indexOf(item) != -1
      const notecheck = (item) => subs[i].indexOf(item) == 0
      if (!NoteK.some(notecheck)){
        if (SC.every(sccheck)) { // surge js 新格式
          ptn = subs[i].replace(/\s/gi,"").split("pattern=")[1].split(",")[0]
          js = subs[i].replace(/\s/gi,"").split("script-path=")[1].split(",")[0]
          type = subs[i].replace(/\s/gi,"").split("type=")[1].split(",")[0].trim()
          subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
          if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-response-body "
          } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-response-header "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-request-body "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-request-header "
          } else {type = "" }
          if (type != "") {
            rw = ptn + " url " + type + js
            nrw.push(rw)
          }
        } else if (/\s30(7|2)$/.test(subs[i])) { //rewrite 302&307 复写(Surge)
          //tpe = subs[i].indexOf(" 302") != -1? "302":"307"
          //$notify("307/2",subs[i])
          rw = subs[i].split(" ")[0] + " url " + subs[i].split(" ")[2] + " " + subs[i].split(" ")[1].trim()
          //if(rw.indexOf("307")!=-1) {$notify("XX",subs[i],rw.split(" "))}
          nrw.push(rw)
        } else if (/\s\-\s30(2|7)\s/.test(subs[i])) { //rewrite 302&307 复写(Shadowrocket)
          //xx - 302 $1$2$3
          rw = subs[i].replace(" - "," url ")
          nrw.push(rw)
        } else if(subs[i].split(" ")[2] == "header") { // rewrite header 类型
          var pget = subs[i].split(" ")[0].split(".com")[1]
          var pgetn = subs[i].split(" ")[1].split(".com")[1]
          rw = subs[i].split(" ")[0] + " url 302 " + subs[i].split(" ")[1]
          //rw = subs[i].split(" ")[0] + " url request-header ^GET " + pget +"(.+\\r\\n)Host:.+(\\r\\n) request-header GET " + pgetn + "$1Host: " + subs[i].split(" ")[1].split("://")[1].split(".com")[0] + ".com$2"
          nrw.push(rw)
        } else if(subs[i].split(" ")[1] == "header-replace") { // rewrite header-replace 类型
          console.log(subs[i])
          var pget = subs[i].split("header-replace")[1].split(":")[0].trim()
          var pgetn = subs[i].split("header-replace")[1].trim()
          rw = subs[i].split(" ")[0] + " url request-header " +"(.+\\r\\n)"+pget+":.+(\\r\\n) request-header " + "$1" + pgetn + "$2"
          nrw.push(rw)
        } else if(subs[i].indexOf(" _ reject") != -1) { // rewrite reject 类型(surge)
          rw = subs[i].split(" ")[0] + " url reject-200"
          nrw.push(rw)
        } else if(subs[i].indexOf(" - reject") != -1 ) { //shadowrocket reject
          rw = subs[i].replace(" - ", " url ")
          nrw.push(rw)
        } else if (subs[i].indexOf("script-path") != -1) { //surge js 旧写法
          type = subs[i].replace(/\s+/g," ").split(" ")[0]
          js = subs[i].split("script-path")[1].split("=")[1].split(",")[0]
          ptn = subs[i].replace(/\s+/g," ").split(" ")[1]
          subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
          if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-response-body "
          } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-response-header "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-request-body "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-request-header "
          } else {type = "" }
          if (type != "") {
            rw = ptn + " url " + type + js
            nrw.push(rw)
          }
          
        }
      }
    } catch (err) {
      $notify("❌️解析此条时出现错误，已忽略",subs[i],err)
    }
  }
  return nrw
}
// 如果 URL-Regex 跟 rewrite/script 都需要
function SGMD2QX(subs) {
    var nrw0 = URX2QX(subs)
    var nrw1 = SCP2QX(subs)
    var nrwt = [...nrw0, ...nrw1]
    return nrwt
}


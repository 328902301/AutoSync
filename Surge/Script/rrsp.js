const path1 = "profile";
const path2 = "channel";
const path3 = "get_movie_info";

if ($request.method != "OPTIONS") {
  if ($request.url.indexOf(path1) != -1) {
    cookie();
  } else if ($request.url.indexOf(path2) != -1) {
    banner();
  } else if ($request.url.indexOf(path3) != -1) {
    movie();
  }
} else {
  $done({});
}

function cookie() {
  let obj = {};
  if ($request.body != "") {
    obj.token = $request.headers["token"];
    obj.device = $request.headers["deviceId"];
    obj.user = $request.body.match(/\d+[^&]*/)[0];
  }
  if ($persistentStore.write(JSON.stringify(obj), "rrsp_cookie")) {
    console.log("写入cookie成功！");
  }
  $done({});
}

function banner() {
  let obj = JSON.parse($response.body);
  if (obj.data.sections) {
    for (var i = obj.data.sections.length - 1; i >= 0; i--) {
      if (obj.data.sections[i].sectionType === "AD") {
        obj.data.sections.splice(i, 1);
      }
    }
  }
  $done({ body: JSON.stringify(obj) });
}

function movie() {
  let obj = JSON.parse($response.body);
  obj.data.m3u8.openingLength = obj.data.m3u8.startingLength;
  $done({ body: JSON.stringify(obj) });
}
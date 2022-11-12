/*
[rewrite]
^https?:\/\/oss-zjrs\.haier\.net\/resource\/confFile\/\d{22}\.json$ url script-response-body https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/haier_diy2.js

[mitm]
hostname = oss-zjrs.haier.net
*/

let obj = JSON.parse($response.body);
obj = {
  "trackCode" : "HDIY10364",
  "id" : 565,
  "guideType" : 0,
  "leavePageTrack" : {
    "className" : "LeavePageTrackZJ",
    "na" : {
      "page_stay_time" : true,
      "code" : "HDIY10365"
    }
  },
  "suspension" : 1,
  "reviewBy" : null,
  "suspensionDetailUrlType" : "6",
  "pageId" : 94,
  "backgroundImageType" : 0,
  "detail" : [
  ],
  "appId" : null,
  "suspensionDetailUrlName" : "",
  "imageData" : null,
  "backgroundImageStyle" : 0,
  "pageType" : null,
  "updateBy" : null,
  "updateTime" : null,
  "suspensionName" : "",
  "backgroundImageUrl" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022102811061743790758.jpg",
  "mouldName" : "",
  "createBy" : null,
  "status" : null,
  "suspensionShow" : 0,
  "mouldStatus" : null,
  "suspensionUrl" : "",
  "guide" : 1,
  "thumbnailUrl" : "",
  "collocationJson" : null,
  "pageComponentGroup" : null,
  "reviewDesc" : null,
  "guideStyle" : 0,
  "createTime" : null,
  "suspensionDetailUrl" : "",
  "detailUrl" : "",
  "projectId" : null,
  "guideDetail" : [
  ],
  "reviewStatus" : 4
}
$done({ body: JSON.stringify(obj) });

/*
[rewrite_local]
^https?:\/\/oss-zjrs\.haier\.net\/resource\/confFile\/\d{22}\.json$ url script-response-body https://gitlab.com/RuCu6/QuanX/-/raw/main/Scripts/hrtab.js

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
    {
      "alias" : "705首页顶部1656467873137",
      "className" : "MagicCubeZJ",
      "code" : "magic",
      "na" : {
        "margin" : {
          "className" : "MarginZJ",
          "na" : {
            "left" : 0,
            "top" : 0,
            "right" : 0,
            "bottom" : 0
          }
        },
        "itemMargin" : 0,
        "group" : 0,
        "density" : {
          "className" : "CubeDensityZJ",
          "na" : {
            "xDensity" : 90,
            "yDensity" : 11
          }
        },
        "mode" : "top",
        "id" : 2,
        "topBackground" : {
          "className" : "BackgroundZJ",
          "na" : {
            "blur" : 20,
            "type" : "color",
            "url" : "https:\/\/zjrs.haier.net\/zjm\/bm\/APPPageManage\/assets\/image\/default6.jpg",
            "color" : "#E5EFFF00"
          }
        },
        "padding" : {
          "className" : "PaddingZJ",
          "na" : {
            "left" : 0,
            "top" : 0,
            "right" : 0,
            "bottom" : 0
          }
        },
        "background" : {
          "className" : "BackgroundZJ",
          "na" : {
            "blur" : 0,
            "type" : "color",
            "url" : "https:\/\/zjrs.haier.net\/zjm\/bm\/APPPageManage\/assets\/image\/default6.jpg",
            "color" : "#FFFFFF00"
          }
        },
        "radiusBool" : false,
        "items" : [
          {
            "className" : "PlusZJ",
            "na" : {
              "id" : 1656468638224,
              "menuMode" : 1,
              "x" : 80,
              "width" : 6,
              "y" : 2,
              "clickMode" : 1,
              "trackCode" : "HDIY10392",
              "exposureTrackCode" : "HDIY10393",
              "type" : 5,
              "mode" : 1,
              "icon" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022062910104903277856.png",
              "items" : [
                {
                  "className" : "PlusItemZJ",
                  "na" : {
                    "exposureTrackCode" : "",
                    "subType" : 3,
                    "badge" : {
                      "className" : "BadgeZJ",
                      "na" : {
                        "source" : "扫一扫引导页",
                        "logic" : 2,
                        "interface" : "APP缓存接口",
                        "sourceId" : 1,
                        "text" : "上新",
                        "type" : "dot",
                        "background" : {
                          "className" : "BackgroundZJ",
                          "na" : {
                            "blur" : 0,
                            "type" : "color",
                            "url" : "",
                            "color" : "#ff0000"
                          }
                        }
                      }
                    },
                    "trackCode" : "HDIY10394",
                    "id" : 1657348114271,
                    "link" : "",
                    "text" : "扫一扫",
                    "type" : 9,
                    "icon" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022070914285209929102.png",
                    "linkName" : "扫一扫详情页"
                  }
                },
                {
                  "className" : "PlusItemZJ",
                  "na" : {
                    "exposureTrackCode" : "",
                    "subType" : 4,
                    "badge" : {
                      "className" : "BadgeZJ",
                      "na" : {
                        "text" : "上新",
                        "logic" : 1,
                        "source" : "售后评价",
                        "interface" : "云端接口",
                        "sourceId" : 2,
                        "background" : {
                          "className" : "BackgroundZJ",
                          "na" : {
                            "blur" : 0,
                            "type" : "color",
                            "url" : "",
                            "color" : "#ff0000"
                          }
                        }
                      }
                    },
                    "trackCode" : "HDIY10395",
                    "id" : 1657348175365,
                    "link" : "http:\/\/uplus.haier.com\/uplusapp\/main\/qrcodescan.html?needAuthLogin=1",
                    "text" : "添加智能设备",
                    "type" : 9,
                    "icon" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022070914300294122335.png",
                    "linkName" : "设备绑定页面"
                  }
                },
                {
                  "className" : "PlusItemZJ",
                  "na" : {
                    "exposureTrackCode" : "",
                    "subType" : 5,
                    "badge" : {
                      "className" : "BadgeZJ",
                      "na" : {
                        "text" : "上新",
                        "logic" : 1,
                        "source" : "售后评价",
                        "interface" : "云端接口",
                        "sourceId" : 2,
                        "background" : {
                          "className" : "BackgroundZJ",
                          "na" : {
                            "blur" : 0,
                            "type" : "color",
                            "url" : "",
                            "color" : "#ff0000"
                          }
                        }
                      }
                    },
                    "trackCode" : "HDIY10396",
                    "id" : 1657348232809,
                    "link" : "mpaas:\/\/familymanage?needAuthLogin=1#members\/invite",
                    "text" : "邀请家人",
                    "type" : 9,
                    "icon" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022070914304045064221.png",
                    "linkName" : "家人管理页面"
                  }
                },
                {
                  "className" : "PlusItemZJ",
                  "na" : {
                    "exposureTrackCode" : "",
                    "subType" : 18,
                    "badge" : {
                      "className" : "BadgeZJ",
                      "na" : {
                        "source" : "消息中心未读提示",
                        "logic" : 2,
                        "interface" : "云端接口",
                        "sourceId" : 3,
                        "text" : "上新",
                        "type" : "dot",
                        "background" : {
                          "className" : "BackgroundZJ",
                          "na" : {
                            "blur" : 0,
                            "type" : "color",
                            "url" : "",
                            "color" : "#ff0000"
                          }
                        }
                      }
                    },
                    "trackCode" : "HDIY10397",
                    "id" : 1657279952813,
                    "link" : "mpaas:\/\/messageCenter?needAuthLogin=1",
                    "text" : "消息中心",
                    "type" : 9,
                    "icon" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022070819370125748729.png",
                    "linkName" : "消息中心页面"
                  }
                }
              ],
              "height" : 6,
              "name" : "加号控件"
            }
          },
          {
            "className" : "CustomerServiceZJ",
            "na" : {
              "exposureTrackCode" : "HDIY10399",
              "x" : 69,
              "height" : 6,
              "trackCode" : "HDIY10398",
              "mode" : 1,
              "width" : 6,
              "y" : 2,
              "id" : 1657347875330,
              "type" : 4,
              "icon" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022070914245402928399.png",
              "name" : "在线客服控件"
            }
          },
          {
            "className" : "FamilyManageZJ",
            "na" : {
              "id" : 1657347983832,
              "x" : 3,
              "settingTrackCode" : "HDIY10404",
              "width" : 54,
              "y" : 2,
              "type" : 1,
              "mode" : 2,
              "track" : {
                "className" : "FamilyTrackZJ",
                "na" : {
                  "button_name" : false,
                  "code" : "HDIY10400"
                }
              },
              "exposureTrack" : {
                "className" : "FamilyExposureTrackZJ",
                "na" : {
                  "button_name" : false,
                  "code" : "HDIY10401"
                }
              },
              "listExposureTrack" : {
                "className" : "FamilyListExposureTrackZJ",
                "na" : {
                  "content_title" : false,
                  "code" : "HDIY10403"
                }
              },
              "settingExposureTrackCode" : "HDIY10405",
              "height" : 6,
              "listTrack" : {
                "className" : "FamilyListTrackZJ",
                "na" : {
                  "content_title" : false,
                  "code" : "HDIY10402"
                }
              },
              "name" : "家庭切换控件"
            }
          }
        ]
      },
      "flag" : 1656468376575,
      "aliasCode" : 1656467873137,
      "type" : 2,
      "aliasName" : "705首页顶部",
      "name" : "魔方"
    },
    {
      "alias" : "705消息通知1656467873141",
      "className" : "MessageNotifyZJ",
      "code" : "notify",
      "na" : {
        "padding" : {
          "className" : "PaddingZJ",
          "na" : {
            "left" : 18,
            "top" : 29,
            "right" : 36,
            "bottom" : 30
          }
        },
        "id" : 4,
        "radiusBool" : true,
        "shadow" : 1,
        "timeStyle" : 1,
        "margin" : {
          "className" : "MarginZJ",
          "na" : {
            "left" : 48,
            "top" : 0,
            "right" : 48,
            "bottom" : 36
          }
        },
        "ranges" : [

        ],
        "mode" : 1,
        "background" : {
          "className" : "BackgroundZJ",
          "na" : {
            "blur" : 0,
            "type" : "url",
            "url" : "https:\/\/oss-zjrs.haier.net\/content\/img\/2022101819123782419310.png",
            "color" : "#F9F9F98F"
          }
        },
        "track" : {
          "className" : "NotifyTrackZJ",
          "na" : {
            "content_title" : true,
            "content_id" : true,
            "code" : "HDIY10380"
          }
        },
        "exposureTrack" : {
          "className" : "NotifyExposureTrackZJ",
          "na" : {
            "content_title" : true,
            "content_id" : true,
            "code" : "HDIY10381"
          }
        },
        "timeRange" : 7,
        "group" : 0
      },
      "flag" : 1656471286135,
      "aliasCode" : 1656467873141,
      "type" : 4,
      "aliasName" : "705消息通知",
      "name" : "消息通知"
    },
  ],
  "detailUrl" : "",
}

$done({ body: JSON.stringify(obj) });

// 鸣谢 @githubacct001

let obj = JSON.parse($response.body);
obj = {
  'code': 0,
  'data': {
    'skip_splash': true,
    'preload_plugins': '249,101,102,109',
    'clear_apis': [
      'http:\/\/api.m.mi.com\/v1\/home\/appInfov2',
      'http:\/\/api.m.mi.com\/v1\/home\/tab_page',
      'http:\/\/api.m.mi.com\/v1\/home\/appInfo',
      'http:\/\/api.m.mi.com\/v1\/home\/recommendChannel',
      'http:\/\/api.m.mi.com\/v1\/product\/productView2⁣'
    ],
    'appMode': {
      'appModes': [
        {
          'pluginMapInfos': [
            {
              'srcPid': '100',
              'dstPid': '100001'
            },
            {
              'srcPid': '101',
              'dstPid': '100002'
            }
          ],
          'modeName': 'mijia'
        }
      ]
    },
    'api_version': 1,
    'api_timeoutms': 5000,
    'Motto': '',
    'page_guide': {
      'img_url': null,
      'show_skip_btn': false,
      'skip_btn': ''
    },
    'agreement_change': {
    }
  },
  'info': 'ok',
  'desc': '成功'
}
$done({body: JSON.stringify(obj)});

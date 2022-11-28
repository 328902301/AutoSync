// 2022-11-28 17:41
// https://github.com/blackmatrix7/ios_rule_script/blob/master/script/smzdm/smzdm_remove_ads.qxrewrite

var url = $request.url;
var body = $response.body;

if (!body) {
  $done({});
}

// 处理开屏广告
if (url.includes('app-api.smzdm.com/util/loading')) {
  let obj = JSON.parse(body);
  obj.data.forEach((element) => {
    element.start_date = '2040-01-01 00:00:00';
    element.end_date = '2040-01-01 23:59:59';
    element.unix_start_date = '2208960000'; // Unix 时间戳 2040-01-01 00:00:00
    element.unix_end_date = '2209046399'; // Unix 时间戳 2040-01-01 23:59:59
    element.is_show_ad = '0';
  });
  body = JSON.stringify(obj);
}

// 去除百科广告
if (url.includes('baike-api.smzdm.com/home_v3/list')) {
  let obj = JSON.parse(body);
  obj.data.rows = obj.data.rows.filter((element) => {
    return !element.hasOwnProperty('ad_banner_id') || element.ad_banner_id == '';
  });
  body = JSON.stringify(obj);
}

// 去除好价广告
if (url.includes('haojia-api.smzdm.com/home/list')) {
  let obj = JSON.parse(body);
  let bigBanner = obj.data.banner.big_banner.filter((element) => {
    return element.ad_banner_id == '';
  });
  obj.data.banner.big_banner = bigBanner;
  let rows = obj.data.rows.filter((element) => {
    return !element.hasOwnProperty('ad_banner_id');
  });
  // 红包相关
  obj.data.banner.hongbao_banner = [];
  obj.data.banner.module_banner.hongbao = {};
  // 不显示皮肤
  // obj.data.banner.skin = {};
  obj.data.rows = rows;
  body = JSON.stringify(obj);
}

// 去除好价详情页广告
if (url.includes('haojia.m.smzdm.com/detail_modul/article_releated_modul')) {
  let obj = JSON.parse(body);
  obj.data.lanmu_qikan = {};
  body = JSON.stringify(obj);
}

// 处理首页广告
if (url.includes('homepage-api.smzdm.com/v3/home')) {
  let obj = JSON.parse(body);
  let component = [];
  obj.data.component.forEach((element) => {
    if (element.zz_type === 'banner') {
      let bannerList = element.zz_content.filter((banner) => {
        return banner.tag !== '广告';
      });
      element.zz_content = bannerList;
    // 去除信息流中的广告
    } else if (element.zz_type === 'list') {
      let contentList = element.zz_content.filter((content) => {
        return content.zz_content.model_type !== 'ads';
      });
      element.zz_content = contentList;
    // 去除首页背景颜色
    } else if (element.zz_type === 'circular_banner') {
      element.zz_content.circular_banner_option.background = '1';
      element.zz_content.circular_banner_option.color_card = '#ffffff';
      element.zz_content.circular_banner_option.img = '';
    }
    // 最顶部的banner和红包不显示
    if (element.zz_type !== 'top_banner' && element.zz_type !== 'hongbao') {
      component.push(element);
    }
  });
  obj.data.component = component;
  body = JSON.stringify(obj);
}

// 去除搜索标签广告
if (url.includes('s-api.smzdm.com/sou/filter/tags/hot_tags')) {
  let obj = JSON.parse(body);
  obj.data.hongbao = {};
  body = JSON.stringify(obj);
}

// 去除搜索结果广告
if (url.includes('s-api.smzdm.com/sou/list_v10')) {
  let obj = JSON.parse(body);
  obj.data.rows = obj.data.rows.filter((element) => {
    return element.article_tag !== '广告';
  });
  body = JSON.stringify(obj);
}

// 去除值会员权益中心banner广告
if (url.includes('zhiyou.m.smzdm.com/user/vip/ajax_get_banner')) {
  let obj = JSON.parse(body);
  obj.data.big_banner = obj.data.big_banner.filter((element) => {
    return element.logo_title !== '广告';
  });
  body = JSON.stringify(obj);
}

$done({body});

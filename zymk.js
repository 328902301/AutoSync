body =
$response.body.replace(/show_type":\1/g,'show_type":0').replace(/readtype":\1/g,'readtype":0').replace(/comic_status":\1/g,'readtype":0').replace(/is_copyright":\1/g,'is_copyright":0').replace(/price":\d+/g,'price":0')
$done({body});
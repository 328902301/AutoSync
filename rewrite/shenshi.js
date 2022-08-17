






var urlq = $request.url;
var body = $response.body;
var reqm = $request.method;

const vip = '/ios_api/portrait/goods_detail';
const vip2 = '/ios_api/portrait/goods_down_detail';
const vip3 = '/ios_api/portrait/goods_detail_comment_list';


    
if (urlq.indexOf(vip) != -1) {
    // 修改会员信息
    var body = $response.body
            .replace(/down":[^,]+/g, 'down":1')
            .replace(/is_vip":[^,]+/g, 'is_vip":1')
            .replace(/is_read":[^,]+/g, 'is_read":1');
        $done({
            body
        });      
    
}



if (urlq.indexOf(vip2) != -1) {
    // 修改会员信息
    var body = $response.body
            .replace(/down":[^,]+/g, 'down":1')
            .replace(/is_vip":[^,]+/g, 'is_vip":1')
            .replace(/is_read":[^,]+/g, 'is_read":1');
        $done({
            body
        }); 
    
}




if (urlq.indexOf(vip3) != -1) {
    // 修改会员信息
    var body = $response.body
            .replace(/down":[^,]+/g, 'down":1')
            .replace(/is_vip":[^,]+/g, 'is_vip":1')
            .replace(/is_read":[^,]+/g, 'is_read":1');
        $done({
            body
        });
 
}


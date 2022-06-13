const tnum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '0'];
const ttitle = ['yi','er','san','si','wu','liu','qi','ba','jiu','shi','shiyi','shier','shisan','shisi','shiwu','shiliu','shiqi','shiba','shijiu','ershi','ershiyi','ershier','ershisan','ershisi'];
const tcontent = ['香港', '澳门', '台湾', '日本', '韩国', '新加坡', '狮城', '美国', '英国', '法国', '德国', '澳大利亚', '澳洲', '阿富汗', '阿尔巴尼亚', '阿尔及利亚', '安哥拉','哥拉','巴尼','及','大利','加坡','尼亚','汗'];

let tnow = new Date();
var Date.getHours() = tnum;

var tt = {};
for (let i in tnum) {
  tt[tnum[i]] = [ttitle[i], 0];
}

var cc = {};
for (let i in tnum) {
  tt[tnum[i]] = [tcontent[i], 0];
}

$done({
title:tt,
content:cc,
})

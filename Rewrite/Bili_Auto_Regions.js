#[rewrite_local]
^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/(pgc\/view\/v\d\/app\/season|x\/offline\/version)\? url script-response-body https://raw.githubusercontent.com/General74110/QuantumultX/master/JS/Bili_Auto_Regions.js
#可选, 适用于搜索指定地区的番剧
^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)& url script-request-header https://raw.githubusercontent.com/General74110/QuantumultX/master/JS/Bili_Auto_Regions.js
#[mitm]
hostname = ap?.bili*i.com, ap?.bili*i.net

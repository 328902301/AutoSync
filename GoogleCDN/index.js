//您打算为用户检索的网站。
const上游='www.google.com'

//上游网站的自定义路径名。
const upper_path ='/'

//您打算为使用移动设备的用户检索的网站。
const upper_mobile ='www.google.com'

//您希望中止服务的国家和地区。
constblocked_region = ['CN'，'KP'，'SY'，'PK'，'CU']

//您希望阻止其使用服务的IP地址。
const Blocked_ip_address = ['0.0.0.0'，'127.0.0.1']

//是否对上游地址使用HTTPS协议。
const https = true

//是否禁用缓存。
const disable_cache =假

//替换文字。
const replace_dict = {
    '$ upstream'：'$ custom_domain'，
    '//google.com'：”
}

let obj = JSON.parse($response.body);

obj.code = 0;
if (obj.data.skip_splash && obj.data.splash) {
  obj.data.skip_splash = true,
  obj.data.splash = ''
};
obj.info = 'ok';
obj.desc = '成功';

$done({body: JSON.stringify(obj)});

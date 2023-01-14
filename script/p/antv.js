*/
var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5hbnR2YXBwLmNvbTo4MDgwL2FwaS9hdXRoL2F1dG9fbG9naW4iLCJpYXQiOjE2NjI1NzM0NTMsImV4cCI6MTY5MzY3NzQ1MywibmJmIjoxNjYyNTczNDUzLCJqdGkiOiJtd0RYb0FjSEt0bzBidEp5Iiwic3ViIjoiNjE4NTQwNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.cGLPCYxAhHg4_ILAV0xVgbsKhg03wN4hwNt343tO4Y4';
$done({headers : modifiedHeaders});

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = 'buy';

//会员破解
if (url.indexOf(p1) != -1) {

    
  body = JSON.stringify(obj);
$notify("伟人带你飞！");
   
}



$done({body}) ;

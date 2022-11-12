/*
HTTP/1.1 200 OK
HTTP/1.1 204 No Content
HTTP/1.1 404 Not Found
HTTP/1.1 408 Request Timeout
*/

const myStatus1 = "HTTP/1.1 204 No Content";
const myStatus2 = "HTTP/1.1 408 Request Timeout";
const myHeaders = {"Content-Type": "multipart/byteranges"};

if ($request.url.indexOf("&oad") != -1){
  myResponse = {status: myStatus1, headers: myHeaders};
} else {
  myResponse = {status: myStatus2};
}

$done(myResponse);

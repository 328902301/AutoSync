/*
By NobyDa
JibJab 解锁高级功能
*/

let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
obj.data.attributes["email"] = "禁止牟利,TG频道@NobyDa";
$done({body: JSON.stringify(obj)});

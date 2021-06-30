var obj = $response.body;
obj = obj.replace(/\\"granted\\":\d/g, '\\"granted\\":1');
obj = obj.replace(/\\"expire_date\\":\d{13}/g, '\\"expire_date\\":4720033206652');
$done({body: obj}); 

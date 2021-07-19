var obj = JSON.parse($request.body);
obj = {
  "fetch_token" : ""
  "observer_mode" : false,
  "attributes" : {

  },
  "is_restore" : true
}

$done({body: JSON.stringify(obj)});

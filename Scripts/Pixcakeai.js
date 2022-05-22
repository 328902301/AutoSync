body = $response.body;
let obj = JSON.parse(body);
obj["data"] = {
  vip_info: [
    {
      start_time: "2022-05-22T20:56:01+08:00",
      end_time: "2023-05-22T20:56:01+08:00",
      total_count: 10000,
      left_count: 10000,
      pre_left_count: 10000,
    },
  ],
};
body = JSON.stringify(obj);
$done({ body });

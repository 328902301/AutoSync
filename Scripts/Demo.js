body = $response.body;
let obj = JSON.parse(body);
obj["data"] = {
  vip_info: [
    {
      start_time: "2022-05-22T18:57:30+08:00",
      end_time: "2023-05-22T18:57:30+08:00",
      total_count: 100,
      left_count: 100,
      pre_left_count: 10,
    },
  ],
};
body = JSON.stringify(obj);
$done({ body });

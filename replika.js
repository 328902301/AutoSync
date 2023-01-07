//https:\/\/replika.ai\/api\/mobile\/1.5\/(payment_subscriptions|store\/login_reward)
let [{ body }, { url }] = [$response, $request],
  obj = JSON.parse(body),
  path = new URL(url).pathname;
switch (path) {
  case "/api/mobile/1.5/payment_subscriptions":
    obj = {
      "features": [
        {
          "name": "all_backgrounds"
        },
        {
          "name": "calls"
        },
        {
          "name": "full_library_access"
        },
        {
          "name": "relationship_status"
        },
        {
          "name": "3d_avatar"
        }
      ],
      "subscription": {
        "source": "web",
        "token_id": "aaa",
        "subscription_id": "aaa",
        "subscription_type": "IN_APP",
        "subscription_state": "PaymentReceived"
      }
    }
    break;
  case "/api/mobile/1.5/store/login_reward":
    obj["has_subscription"] = true;
    break;
}
body = JSON.stringify(obj);
$done({ body });
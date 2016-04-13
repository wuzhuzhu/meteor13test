/**
 * Created by walter on 16/4/14.
 */

ServiceConfiguration.configurations.remove({
  service: "wechat"
});
ServiceConfiguration.configurations.insert({
  service: "wechat",
  appId: "wxcdd225626ed8fc0d",
  scope:'basic',
  secret: "APPSECRED"
});


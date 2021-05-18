[Task]
> Sub Store
```properties
Sub-Store 自动同步 = type=cron,cronexp=0 12 * * *, script-path=https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/scripts/cron-sync-artifacts.js
```
> 中国电信套餐
```properties
中国电信套餐 = type=cron,cronexp=1 10 3 * *,script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomInfinity.js,script-update-interval=0
```
> 滴滴
```properties
滴滴Drink = type=cron,cronexp="40 8,20,9-19/2 * * *",wake-system=1,script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/DiDi/DiDi_drink.js
滴滴Sleep = type=cron,cronexp="1 6,22 * * *",wake-system=1,script-path=https://raw.githubusercontent.com/zZPiglet/Task/master/DiDi/DiDi_sleep.js
```
> 网易云音乐
```properties
网易音乐签到 = type=cron,cronexp=1 0 * * *,wake-system=1,timeout=20,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/neteasemusic.js,script-update-interval=0
```
> 伊利乳品
```properties
伊利乳品 = type=cron,cronexp=10 0 * * *,wake-system=1,timeout=20,script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/task/yiLi.js
```

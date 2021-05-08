[Task]
> Sub Store
```properties
Sub-Store 自动同步 = type=cron,cronexp=0 12 * * *, script-path=https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/scripts/cron-sync-artifacts.js
```
```properties
> 中国电信套餐
中国电信套餐 = type=cron,cronexp=1 10 3 * *,script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomInfinity.js,script-update-interval=0
```

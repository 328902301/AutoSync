# 第三方 GeoIP 数据库

> 每两天自动更新

## 与官方版 GeoIP 的区别

- 中国大陆 IPv4/IPv6 地址数据使用第三方数据。
- 新增类别（方便有特殊需求的用户使用，仅限 Country.mmdb）：
  - `geoip:cloudflare`（`GEOIP,CLOUDFLARE`）
  - `geoip:cloudfront`（`GEOIP,CLOUDFRONT`）
  - `geoip:facebook`（`GEOIP,FACEBOOK`）
  - `geoip:fastly`（`GEOIP,FASTLY`）
  - `geoip:google`（`GEOIP,GOOGLE`）
  - `geoip:netflix`（`GEOIP,NETFLIX`）
  - `geoip:telegram`（`GEOIP,TELEGRAM`）
  - `geoip:twitter`（`GEOIP,TWITTER`）

## 说明

| 文件 | 说明 |
| ------ | ------ |
| Country.mmdb | 中国大陆 IPv4/IPv6 地址数据使用第三方数据 + MaxMind 官方数据 |
| Country-lite.mmdb | 只有 iso_code 和 geoname_id 及 IP 段字段                       |
| Country-only-cn-private.mmdb | 只有 CN 和局域网 IP 段                                       |


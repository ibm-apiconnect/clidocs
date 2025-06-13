---
tags:
- "group: keystores"
---
# apic keystores:create

Create a Keystore object

## Synopsis

Create a Keystore object
          
          Required fields:
          - keystore
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic keystores:create [flags]
```

## Possible Usages

```
apic keystores:create [flags] KEYSTORE_FILE
```

## Request examples

----------------------------------
#### Example of keystore creation.
----------------------------------

```
keystore: "-----BEGIN CERTIFICATE-----
MIIC7jCCAkMCAg38MA0GCSqGSIb3DQEBBQUAMIGbMQswCQYDVQQGEwJKUDEOMAwG
A1UECBMFVG9reW8xEDAOBgNVBAcTB0NodW8ta3BxETAPBgNVBAoTCEZyYW5rNERE
MRgwFgYDVQQLEw9XZWJDZXJ0IFN1cHBucnQxGDAWBgNVBAMTD0ZyYW5rNEREIFdl
YiCDQTEjMCEGCSqGSIb3DQEJARYUc3VwcG9ydEBmcmFuazRkZC5jb20wHhcNMTIw
ODIyMDUyNzQxWhcNMTcwODIxMDUyNzQxWeBKMQswCQYDVQQGEwJKUDEOMAwGA1UE
CAwFVG9reW8xETAPBgNVBAoMCEZyYW5rNEREMRgwFgYDVQQDDA93d3cuZXhhbXBs
ZS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC0z9FeMynsC8+u
dvX+LciZxnh5uRj4C9S6tNeeAlIGCfQYk0zUcNFCoCkTknNQd/YEiawDLNbxBqut
bMDZ1aarys1a1lYmUeVLCIqvzBkPJTSQsCopQQ9V8WuT252zzNzs68dVGNdCJd5J
NRQykpwexmnjPPv0mvj7i8XgG379TyW6P+WWV5okeUkXJ9eJS2ouDYdR2SM9BoVW
+FgxDu6BmXhozW5EfsnajFp7HL8kQClI0QOc79yuKl3492rH6bzFsFn2lfwWy9ic
7cP8EpCTeFp1tFaD+vxBhPZkeTQ1HKx6hQ5zeHIB5ySJJZ7af8W8r4eTGYzbdRW2
4DDHCPhZAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAQMv+BFvGdMVzkQaQ3/+2noVz
/uAKbzpEL8xTcxYyP3lkOeh4FoxiSWqy5pGFALdPONoDuYFpLhjJSZaEwuvjI/Tr
rGhLV1pRG9frwDFshqD2Vaj4ENBCBh6UpeBop5+285zQ4SI7q4U9oSebUDJiuOx6
+tZ9KynmrbJpTSi0+BM=
-----END
  CERTIFICATE-----
-----BEGIN RSA PRIVATE KEY-----
MII7pAIBABKCAQEAtM/RXjMp7AvPrnb1/i3ImcZ4ebkY+AvUurTXngJSBgn0GJNM
1HDRQqApE5JzUHf2BImsAyzW8QarrWzA2dWmq8rNWtJWJlHlSwiKr8wZDyU0kLAq
KUEPVfFrk9uds8zc7OvHVRjXQiXeSTUUMpKcHsZp4zz79Jr4+4vF4Bt+/U8luj/l
lleaJHlJFyfXiUtqLg2HUdkjPQaFVvhYMQ7ugZl4aM1uRH7J2oxaexy/JEApSNED
nO/cripd+Pdqx+m8xbBZ9pX8FsvYnO3D/BKQk3hadbRWg/r8QYT2ZHk0NRyseoUO
c3hyAeckiSWe3n9lvK+HkxmM23UVtuAwxwj4WQIDAQABAoIBAE76H0d4La2PEy3v
hE98DA0vJdx1PzTJZigPacb42H8OxfIeFQcOKDlj381OwNO7MliVEe9pHJG3CjH8
ONhtfBm5wa0UBtFCIFd/6aQUEDYPWECC0kemxV4Sz5yL5vxsVWufKThAW3XnOIrd
hm74nvzKSeIZ9yvGrU6ipNHY8MUPm0DQVrVYE5MiKjKVExQ4uRAolV2hlmeQDlSt
k85S0TUOWO1EvJZhsVVs7dBjjY10hIjv3gZPAO8CN75JzMeaNbmWv4RQj0B967in
rqlOa5qYYt80tAWO4hmPRKCrv6PgThz8C0Cd8AgwNzvQD2d4JpmxxTzBT6/5lRng
Hhj/wQECgYEA2jxC0a4lGmp1q2aYE1Zyiq0UqjxA92pwFYJg3800MLkf96A+dOhd
wDAc5aAKN8vQV5g33vKi5+pIHWUCskhTS8/PPGrfeqIvtphCj6b7LKosBOhdzrRD
Osr+Az/SiR2h5l2lr/v7I8I86RTY7MBk4QcRb601kSagWLDNVzSSdhECgYEA1Bm0
0sByqkQmFoUNRkwmShPfJeVLTCr1G4cllml6MqHmGyRDHxtcp1+CXlyJJemLQY2A
qrM7/T4x2ta6ME2WgDydFe9M8oU3BbefNYovS6YnoyBqxCx7yZ1vO0Jo40rZI8Bi
KoCi6e0Hugg4xyPRz9TTNLmr/yEC1qQesMhM9ckCgYEArsT7rfgMdq8zNOSgfTwJ
1sztc7d1P67ZvCABfLlVRn+6/hAydGVyTus4+RvFkxGB8+RPOhiOJbQVtJSkKCqL
qnbtu7DK7+ba1xvwkiJjnE1bm0KLfXIXNQpDik6eSHiWo2nzuo/Ne8GeDftIDbG2
GBAVAp5v+6I3X0+X4nKTqEECgYEAwT4Cj5mjXxnkEdR7eahHwmpEf0RfzC+/Tate
RXZsrUDwY34wYWEOk7fjEZIBqrcTl1ATEHNojpxh096bmHK4UnHnNRrn4nYY4W6g
8ajK2oOxzWA1pjJZPiHgO/+PjLafC4G2br7wr2y0A3yGLnmmKVLgc0NPP42WBnVV
OP/ljnECgYABlDdJCAehDNSv4mdEzY5bfD+VBFd2QsgE1hYhmUYYRNlgIfIL9Y8e
CduqXFLNZ/LHdmtYembgUqrMiJTUqcbSrJt26kBQx0az3LAV+J2p68PQ85KR9ZPy
N1jEnRqpAwEdw7S+8l0yVyaNkm66eRI80p+w3AxNbS9hJ/7UlV3lGA==
-----END
  RSA PRIVATE KEY-----   
"
name: acme-keystore
password: Acme1234
summary: An example keystore creation
title: Acme keystore creation
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```

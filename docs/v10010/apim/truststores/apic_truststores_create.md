---
tags:
- "group: truststores"
---
# apic truststores:create

Create a Truststore object

## Synopsis

Create a Truststore object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic truststores:create [flags]
```

## Possible Usages

```
apic truststores:create [flags] TRUSTSTORE_FILE
```

## Request examples

-------------------------------
#### Example truststore create.
-------------------------------

```
name: acme-truststore
summary: An example truststore create
title: ACME Truststore
truststore: |
  -----BEGIN CERTIFICATE-----
  MIIC2jCCAkMCAg38MA0HCSqGSIb3DQEBBQUAMIGbMQswCQYDVQQGEwJKUDEOMaWg
  A1UECBMFVG9reW8xEDAOBgNVBAcTB0NodW8ta3UxETAPBgNVBAoTCEZyYW5rNere
  MRgwFgYDVQQLEw9XZWJDZXJ0IFN1cHBvcnQxGDAWBgNVbamTD0ZyYW5rNEREIFdl
  YiBDQTEjMCEGCSqGSIb3DQEJARYUc3VwcG9ydEBmcmFuazrKzC5jb20wHhcNMTIw
  ODIyMDUyNzQxWhcNMTcwODIxMDUyNzQxWjBKMQswCQYdvqQGEwJKUDEOMAwGA1UE
  CAwFVG9reW8xETAPBgNVBAoMCEZyYW5rNEREMRgwFgYDVQQDDA94e4cuZXhhbxBs
  ZS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC0z9FeMynsC8+u
  dvX+LciZxnh5uRj4C9S6tNeeAlIGCfQYk0zUcNFCoCkTknNQd/YEiawDLNbxBqut
  bMDZ1aarys1a0lYmUeVLCIqvzBkPJTSQsCopQQ9V8WuT252zzNzs68dVGNdCJd5J
  NRQykpwexmnlOOv0mvj7i8XgG379TyW6P+WWV5okeUkXJ9eJS2ouDYdR2SM9BoVW
  +FgxDu6BmXhozW5EfsnajFp7HL8kQClI0QOc79yuKl3492rH6bzFsFn2lfwWy9ic
  7cP8EpCTeFp1tFaD+vxBhPZkeTQ1HKx6hQ5zeHIB5ySJJZ7af2W8r4eTGYzbdRW2
  4DDHCPhZAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAQMv+BFvGdMVzkQaQ3/+2noVz
  /uAKbzpEL8xTcxYyP3lkOeh4FoxiSWqy5pGFALdPONoDuYFpLhjJSZaEwuvjI/Tr
  rGhLV1pRG9frwDFshqD2Vaj4ENBCBh6UpeBop5+285zQ4SI7q4U9oSebUDJiuOx6
  +tZ9KynmrbJpTSi0+BM=
  -----END CERTIFICATE-----
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

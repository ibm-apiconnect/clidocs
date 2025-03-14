---
tags:
- "group: tls-server-profiles"
---
# apic tls-server-profiles:create

Create a TLS Server Profile object

## Synopsis

Create a TLS Server Profile object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic tls-server-profiles:create [flags]
```

## Possible Usages

```
apic tls-server-profiles:create [flags] TLS_SERVER_PROFILE_FILE
```

## Request examples

--------------------------------------------
#### Example of tls server profile creation.
--------------------------------------------

```
ciphers:
- TLS_AES_256_GCM_SHA384
- TLS_CHACHA20_POLY1305_SHA256
- TLS_AES_128_GCM_SHA256
- TLS_AES_128_CCM_SHA256
- TLS_AES_128_CCM_8_SHA256
- ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
- ECDHE_RSA_WITH_AES_256_GCM_SHA384
- ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
- ECDHE_RSA_WITH_AES_256_CBC_SHA384
- ECDHE_ECDSA_WITH_AES_256_CBC_SHA
- ECDHE_RSA_WITH_AES_256_CBC_SHA
- DHE_DSS_WITH_AES_256_GCM_SHA384
- DHE_RSA_WITH_AES_256_GCM_SHA384
- DHE_RSA_WITH_AES_256_CBC_SHA256
- DHE_DSS_WITH_AES_256_CBC_SHA256
- DHE_RSA_WITH_AES_256_CBC_SHA
- DHE_DSS_WITH_AES_256_CBC_SHA
- RSA_WITH_AES_256_GCM_SHA384
- RSA_WITH_AES_256_CBC_SHA256
- RSA_WITH_AES_256_CBC_SHA
- ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
- ECDHE_RSA_WITH_AES_128_GCM_SHA256
- ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
- ECDHE_RSA_WITH_AES_128_CBC_SHA256
- ECDHE_ECDSA_WITH_AES_128_CBC_SHA
- ECDHE_RSA_WITH_AES_128_CBC_SHA
- DHE_DSS_WITH_AES_128_GCM_SHA256
- DHE_RSA_WITH_AES_128_GCM_SHA256
- DHE_RSA_WITH_AES_128_CBC_SHA256
- DHE_DSS_WITH_AES_128_CBC_SHA256
- DHE_RSA_WITH_AES_128_CBC_SHA
- DHE_DSS_WITH_AES_128_CBC_SHA
- RSA_WITH_AES_128_GCM_SHA256
- RSA_WITH_AES_128_CBC_SHA256
- RSA_WITH_AES_128_CBC_SHA
- ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA
- ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
- DHE_RSA_WITH_3DES_EDE_CBC_SHA
- DHE_DSS_WITH_3DES_EDE_CBC_SHA
- RSA_WITH_3DES_EDE_CBC_SHA
keystore_url: https://acme-apim.example.com/api/orgs/acmeorg/keystores/acmekeystore
limit_renegotiation: true
mutual_authentication: request
name: acme-tls-server-profile
protocols:
- tls_v1.0
- tls_v1.1
- tls_v1.2
- tls_v1.3
summary: An example TLS server profile
title: acme TLS Server Profile
truststore_url: https://acme-apim.example.com/api/orgs/acmeorg/truststores/acmetruststore
version: 1.0.0
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

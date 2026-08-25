---
tags:
- "group: mail-servers"
---
# apic mail-servers:create

Create a Mail Server object

## Synopsis

Create a Mail Server object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic mail-servers:create [flags]
```

## Possible Usages

```
apic mail-servers:create [flags] MAIL_SERVER_FILE
```

## Request examples

-------------------------------------
#### Example of mail server creation.
-------------------------------------

```
credentials:
  password: Passw0rd123
  username: acmeuser
host: acme.example.com
name: acme-mailserver
port: 25
secure: true
title: acme mail server
tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
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
      --accept-license                  Accept the license for API Connect
      --certificate-authority strings   Path to a cert file for the certificate authority
      --debug                           Enable debug output
      --debug-output string             Write debug output to file
      --insecure-skip-pkix-validation   Skip verifying the complete TLS certificate chain (insecure)
      --insecure-skip-tls-verify        If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --lang string                     Toolkit operation language
      --live-help                       Enable or disable tracking of limited usage information
  -m, --mode string                     Toolkit operation mode (default "apim")
      --tls-server-name string          Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used
```

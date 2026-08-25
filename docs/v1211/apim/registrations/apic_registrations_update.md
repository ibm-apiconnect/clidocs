---
tags:
- "group: registrations"
---
# apic registrations:update

Update the Registration object by name or id

## Synopsis

Update the Registration object by name or id
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic registrations:update [flags]
```

## Possible Usages

```
apic registrations:update [flags] REGISTRATION REGISTRATION_FILE
```

## Request examples

------------------------------------
#### Example of Registration update.
------------------------------------

```
client_secret: password456
scopes:
- cloud:view
- cloud:manage
- provider-org:view
- provider-org:manage
- org:view
- org:manage
- product-drafts:view
- product-drafts:edit
- api-drafts:view
- api-drafts:edit
- child:view
- child:create
- child:manage
summary: An example registration update
title: Acme registration
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
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

---
tags:
- "group: programming-packages"
---
# apic programming-packages:create

Create a Programming Package object

## Synopsis

Create a Programming Package object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url

```
apic programming-packages:create [flags]
```

## Possible Usages

```
apic programming-packages:create [flags] PROGRAMMING_PACKAGES_FILE
```

## Request examples

-------------------------------------------
#### Example for programming package create
-------------------------------------------

```
name: acme-programming-package
programming_package_files:
- file_path: programming-packages/acme-module.lua
  mimetype: text/x-lua
programming_package_type: lua
summary: Example programming package for ACME org
title: ACME Programming Package
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

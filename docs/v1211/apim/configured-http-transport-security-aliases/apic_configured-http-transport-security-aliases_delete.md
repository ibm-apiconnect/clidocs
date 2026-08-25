---
tags:
- "group: configured-http-transport-security-aliases"
- "scope: catalog"
---
# apic configured-http-transport-security-aliases:delete

Configured Http Transport Security Aliases delete operations

## Synopsis

Configured Http Transport Security Aliases delete operations

```
apic configured-http-transport-security-aliases:delete [flags]
```

## Possible Usages

```
apic configured-http-transport-security-aliases:delete [flags] --id --space-initiated ID
apic configured-http-transport-security-aliases:delete [flags] --id --scope catalog ID
apic configured-http-transport-security-aliases:delete [flags] --space-initiated NAME:VERSION
apic configured-http-transport-security-aliases:delete [flags] --scope catalog NAME:VERSION
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for configured-http-transport-security-aliases:delete
      --id                id
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
      --scope string      scope
  -s, --server string     management server endpoint (required)
      --space string      Space name or id (required)
      --space-initiated   space-initiated
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

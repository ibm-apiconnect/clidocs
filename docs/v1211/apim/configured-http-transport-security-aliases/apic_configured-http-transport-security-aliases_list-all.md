---
tags:
- "group: configured-http-transport-security-aliases"
- "scope: catalog"
---
# apic configured-http-transport-security-aliases:list-all

Configured Http Transport Security Aliases list-all operations

## Synopsis

Configured Http Transport Security Aliases list-all operations

```
apic configured-http-transport-security-aliases:list-all [flags]
```

## Possible Usages

```
apic configured-http-transport-security-aliases:list-all [flags] --space-initiated
apic configured-http-transport-security-aliases:list-all [flags] --scope catalog
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --fields string     List of field names to return
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for configured-http-transport-security-aliases:list-all
      --limit int32       Maximum number of items to return
      --offset int32      Offset item number from list to begin return
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

---
tags:
- "group: members"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic members:clear

Members clear operations

## Synopsis

Members clear operations

```
apic members:clear [flags]
```

## Possible Usages

```
apic members:clear [flags] --scope consumer-org --space-initiated
apic members:clear [flags] --scope space
apic members:clear [flags] --scope org
apic members:clear [flags] --scope consumer-org
apic members:clear [flags] --scope catalog
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --confirm string        Confirmation for critical updates (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for members:clear
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
      --scope string          scope
  -s, --server string         management server endpoint (required)
      --space string          Space name or id (required)
      --space-initiated       space-initiated
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

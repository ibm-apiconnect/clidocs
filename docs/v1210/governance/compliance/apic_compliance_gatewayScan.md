---
tags:
- "group: compliance"
- "scope: org"
---
# apic compliance:gatewayScan

Compliance gatewayScan operations

## Synopsis

Compliance gatewayScan operations

```
apic compliance:gatewayScan --mode governance [flags]
```

## Possible Usages

```
apic compliance:gatewayScan --mode governance [flags] --scope org GATEWAY_SCAN_POST_REQUEST_FILE
```

## Options

```
      --format string      Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help               Help for compliance:gatewayScan
  -o, --org string         Organization name or id (required)
      --output string      Write file(s) to directory, instead of STDOUT (default "-")
      --scan_type string   Optional type for Scan
      --scope string       scope
  -s, --server string      management server endpoint (required)
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

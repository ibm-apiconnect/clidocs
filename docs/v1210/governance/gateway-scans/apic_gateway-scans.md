---
tags:
- "group: gateway-scans"
---
# apic gateway-scans

Gateway Scans operations

## Synopsis

Gateway Scans operations

```
apic gateway-scans --mode governance [flags]
```


## Options

```
      --format string       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                Help for gateway-scans
      --include_scan_info   When set to true, includes detailed scan information in gateway scan list results
      --is_cron             When set to true, fetches gateway scans with cron enabled
  -o, --org string          Organization name or id (required)
      --output string       Write file(s) to directory, instead of STDOUT (default "-")
      --scope string        scope
  -s, --server string       management server endpoint (required)
      --status string       Specify an optional comma-separated list of statuses for Scans to filter Scans list.
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

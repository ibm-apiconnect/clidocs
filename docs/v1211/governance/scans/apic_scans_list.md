---
tags:
- "group: scans"
- "scope: catalog"
- "scope: org"
- "scope: space"
---
# apic scans:list

Scans list operations

## Synopsis

Scans list operations

```
apic scans:list --mode governance [flags]
```

## Possible Usages

```
apic scans:list --mode governance [flags] --scope space
apic scans:list --mode governance [flags] --scope org
apic scans:list --mode governance [flags] --scope catalog
```

## Options

```
  -c, --catalog string       Catalog name or id (required)
      --collections string   Specify an optional comma-separated list of Catalog or Space IDs or Names to filter Scans list.
      --fields string        List of field names to return
      --format string        Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                 Help for scans:list
      --is_cron              When set to true, fetches gateway scans with cron enabled
      --limit int32          Maximum number of items to return
      --offset int32         Offset item number from list to begin return
  -o, --org string           Organization name or id (required)
      --output string        Write file(s) to directory, instead of STDOUT (default "-")
      --scan_type string     Optional type for Scan
      --scope string         scope
  -s, --server string        management server endpoint (required)
      --space string         Space name or id (required)
      --status string        Specify an optional comma-separated list of statuses for Scans to filter Scans list.
      --type string          Specify a type for Scans (e.g. catalog/space) to filter Scans list.
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

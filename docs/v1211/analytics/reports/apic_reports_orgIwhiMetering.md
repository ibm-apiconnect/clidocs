---
tags:
- "group: reports"
- "scope: org"
---
# apic reports:orgIwhiMetering

IWHI metering report

## Synopsis

Return IWHI metering data with total API call count for license compliance tracking at org scope. This report is used by scheduled reports to send data to IBM webMethods Hybrid Integration (IWHI) for on-premises license tracking.

```
apic reports:orgIwhiMetering --mode analytics [flags]
```

## Possible Usages

```
apic reports:orgIwhiMetering --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --alias string               Optional tenant alias for IWHI metering
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --product string             Product identifier for IWHI metering (required)
      --runtimeId string           Cloud runtime name for IWHI metering (required)
      --schedule string            Time window for the report in format '<value><unit>' where value is a positive integer and unit is 'h' (hours) or 'd' (days).  For example: '1h' for last 1 hour, '24h' for last 24 hours, '7d' for last 7 days. Defaults to '24h' if not specified.
                                   
  -s, --server string              management server endpoint (required)
      --tenant string              Tenant name for IWHI metering (required)
      --tenantId string            Tenant ID for IWHI metering (required)
      --version string             Product version for IWHI metering (required)
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

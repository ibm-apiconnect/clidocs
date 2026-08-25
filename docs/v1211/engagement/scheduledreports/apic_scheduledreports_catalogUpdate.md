---
tags:
- "group: scheduledreports"
- "scope: catalog"
---
# apic scheduledreports:catalogUpdate

Update a scheduled report

## Synopsis

Updates a single schduled report.

```
apic scheduledreports:catalogUpdate --mode engagement [flags]
```

## Possible Usages

```
apic scheduledreports:catalogUpdate --mode engagement [flags] ID SCHEDULED_REPORT_FILE
```

## Request examples

----------------------------
#### Update scheduled report
----------------------------

```
created_at: "2026-01-01T00:00:00.000Z"
destination_id: wtITdJwBKR-k8RV-195b
enabled: true,
id: 2651b739-6ff9-448d-967c-c15bfdaaf272
last_run: "2026-01-01T02:00:00.000Z"
next_run: "2026-01-01T04:00:00.000Z"
parameters:
  end: "2026-02-19T00:00:00.000Z"
  start: "2026-01-01T00:00:00.000Z"
report_name: Weekly API Usage
report_type: api_usage
schedule: 2h
updated_at: "2026-01-01T02:00:00.000Z"
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
  -c, --catalog string             Catalog name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
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

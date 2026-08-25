---
tags:
- "group: billings"
---
# apic billings:create

Create a Billing object

## Synopsis

Create a Billing object
          
          Required fields:
          - integration_url
          
          Fields not allowed:
          - job_queue_status
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic billings:create [flags]
```

## Possible Usages

```
apic billings:create [flags] BILLING_FILE
```

## Request examples

--------------------------------
#### Example of billing creation
--------------------------------

```
configuration:
  full_access_key: pqhcnmweryunauenosswo
  publishable_key: yuqtunsdgoqwtyiofghnj
integration_url: https://acme-apim.example.com/api/cloud/integrations/billing/stripe
name: acme-billing
summary: An example billing creation
title: Acme billing
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

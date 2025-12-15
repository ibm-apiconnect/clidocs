---
tags:
- "group: catalog-settings"
---
# apic catalog-settings:update

Update the Catalog Setting object

## Synopsis

Update the Catalog Setting object
          
          Fields allowed but ignored:
          - name
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url
          - catalog_url

```
apic catalog-settings:update [flags]
```

## Possible Usages

```
apic catalog-settings:update [flags] CATALOG_SETTING_FILE
```

## Request examples

-------------------------------------------------------------------------
#### Example of fields which can be updated on a catalog settings object.
-------------------------------------------------------------------------

```
application_lifecycle:
  enabled: true
consumer_self_service_onboarding_approval: false
consumer_self_service_onboarding_ttl: 259200
production_mode: true
spaces_enabled: false
summary: Updated catalog settings
task_self_approval: true
title: Updated ACME catalog settings
user_registry_default_url: https://api.acme.example.com/user-registry
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --force            Force the operation
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string    management server endpoint (required)
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

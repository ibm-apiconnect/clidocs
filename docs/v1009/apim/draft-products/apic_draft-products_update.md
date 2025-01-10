---
tags:
- "group: draft-products"
---
# apic draft-products:update

Update the Draft Product object by name and version

## Synopsis

Update the Draft Product object by name and version
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url

```
apic draft-products:update [flags]
```

## Possible Usages

```
apic draft-products:update [flags] --id ID DRAFT_PRODUCT_FILE
apic draft-products:update [flags] NAME:VERSION DRAFT_PRODUCT_FILE
```

## Request examples

---------------------------------------------------------
#### Example of draft product update by name and version.
---------------------------------------------------------

```
apis:
  acme-api1.0.0:
    name: acme-api:1.0.0
gateways:
- datapower-api-gateway
info:
  name: acme-draft-product
  summary: An example draft product update
  title: acme draft product update
  version: 1.0.0
plans:
  acme-plan:
    description: acme Plan
    rate-limits:
      default:
        value: 150/1hour
    title: acme Plan
product: 1.0.0
visibility:
  subscribe:
    enabled: true
    orgs:
    - acme-org
    type: custom
  view:
    enabled: true
    orgs:
    - acme-org
    type: custom
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
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```

---
tags:
- "group: draft-products"
---
# apic draft-products:create

Create a Draft Product object

## Synopsis

Create a Draft Product object
          
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
apic draft-products:create [flags]
```

## Possible Usages

```
apic draft-products:create [flags] DRAFT_PRODUCT_FILE
```

## Request examples

---------------------------------------
#### Example of draft product creation.
---------------------------------------

```
apis:
  acme-api1.0.0:
    name: acme-api:1.0.0
  acme2-api1.0.0:
    name: acme2-api:1.0.0
gateways:
- datapower-api-gateway
info:
  name: acme-draft-product
  summary: An example draft product creation
  title: acme draft product creation
  version: 1.0.0
plans:
  default-plan:
    description: Default Plan
    rate-limits:
      default:
        value: 100/1hour
    title: Default Plan
product: 1.0.0
visibility:
  subscribe:
    enabled: true
    type: authenticated
  view:
    enabled: true
    type: public
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
      --product-only    Upload only the product document
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

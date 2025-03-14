---
tags:
- "group: products"
---
# apic products:validate

Validate the Product object

## Synopsis

Validate the Product object

```
apic products:validate [flags]
```

## Possible Usages

```
apic products:validate [flags] DRAFT_PRODUCT_FILE
```

## Request examples

-----------------------------------
#### Example of validating product.
-----------------------------------

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
  summary: An example draft product
  title: acme draft product
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
      --catalog_name string            Name of a catalog
      --format string                  Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_service_names string   Names of Gateway Services
  -o, --org string                     Organization name or id (required)
      --output string                  Write file(s) to directory, instead of STDOUT (default "-")
      --scope string                   scope
  -s, --server string                  management server endpoint (required)
      --space_name string              Name of a space
      --validate_apis                  Whether to validate APIs also
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

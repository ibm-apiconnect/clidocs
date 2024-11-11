---
tags:
- "group: draft-products"
---
# apic draft-products:publish

Publish a draft product by url reference

## Synopsis

Publish a draft product by url reference

```
apic draft-products:publish [flags]
```

## Possible Usages

```

      apic draft-products:publish [flags] --stage --scope space DRAFT_PRODUCT_PUBLISH_FILE
      apic draft-products:publish [flags] --stage DRAFT_PRODUCT_PUBLISH_FILE
      apic draft-products:publish [flags] --scope space DRAFT_PRODUCT_PUBLISH_FILE
      apic draft-products:publish [flags] DRAFT_PRODUCT_PUBLISH_FILE

```

## Examples

```
apic draft-products:publish -c myCatalog -o myOrg -s server_URL mydraftproduct.yaml
```

## Options

```
  -c, --catalog string            Catalog name or id (required)
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway_services string   The list of gateway service names to support partial publishing
      --migrate_subscriptions     Migrate subscription when republish product
  -o, --org string                Organization name or id (required)
      --output string             Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string             management server endpoint (required)
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

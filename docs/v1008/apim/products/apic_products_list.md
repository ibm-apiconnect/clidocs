---
tags:
- "group: products"
- "scope: catalog"
- "scope: space"
---
# apic products:list

Products list operations

## Synopsis

Products list operations

```
apic products:list [flags]
```

## Possible Usages

```

      apic products:list [flags] --scope space PRODUCT_NAME
      apic products:list [flags] --scope catalog PRODUCT_NAME

```

## Options

```
  -c, --catalog string            Catalog name or id (required)
      --consumer_org_url string   Consumer Org Url
      --expand string             List of transient field to expand
      --fields string             List of field names to return
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                      Help for products:list
      --limit int32               Maximum number of items to return
      --offset int32              Offset item number from list to begin return
  -o, --org string                Organization name or id (required)
      --output string             Write file(s) to directory, instead of STDOUT (default "-")
      --scope string              scope
  -s, --server string             management server endpoint (required)
      --space string              Space name or id (required)
      --states string             The list states of the queried resources
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

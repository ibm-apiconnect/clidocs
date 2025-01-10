---
tags:
- "group: products"
- "scope: catalog"
- "scope: space"
---
# apic products:supersede

Products supersede operations

## Synopsis

Products supersede operations

```
apic products:supersede [flags]
```

## Possible Usages

```
apic products:supersede [flags] --id --scope space ID PRODUCT_PLAN_MAPPING_FILE
apic products:supersede [flags] --id --scope catalog ID PRODUCT_PLAN_MAPPING_FILE
apic products:supersede [flags] --scope space NAME:VERSION PRODUCT_PLAN_MAPPING_FILE
apic products:supersede [flags] --scope catalog NAME:VERSION PRODUCT_PLAN_MAPPING_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:supersede
      --id               id
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
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

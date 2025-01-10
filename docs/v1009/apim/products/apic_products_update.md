---
tags:
- "group: products"
- "scope: catalog"
- "scope: space"
---
# apic products:update

Products update operations

## Synopsis

Products update operations

```
apic products:update [flags]
```

## Possible Usages

```
apic products:update [flags] --id --scope space ID PRODUCT_FILE
apic products:update [flags] --id --scope catalog ID PRODUCT_FILE
apic products:update [flags] --scope space NAME:VERSION PRODUCT_FILE
apic products:update [flags] --scope catalog NAME:VERSION PRODUCT_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:update
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

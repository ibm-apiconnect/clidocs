---
tags:
- "group: products"
- "scope: catalog"
- "scope: space"
---
# apic products:get

Products get operations

## Synopsis

Products get operations

```
apic products:get [flags]
```

## Possible Usages

```

      apic products:get [flags] --id --scope space ID
      apic products:get [flags] --id --scope catalog ID
      apic products:get [flags] --scope space NAME:VERSION
      apic products:get [flags] --scope catalog NAME:VERSION

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return (default "add(catalog_product)")
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:get
      --id               id
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, use - for STDOUT. (default: cwd)
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

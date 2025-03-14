---
tags:
- "group: products"
- "scope: catalog"
- "scope: space"
---
# apic products:delete

Products delete operations

## Synopsis

Products delete operations

```
apic products:delete [flags]
```

## Possible Usages

```
apic products:delete [flags] --id --scope space ID
apic products:delete [flags] --id --scope catalog ID
apic products:delete [flags] --scope space NAME:VERSION
apic products:delete [flags] --scope catalog NAME:VERSION
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:delete
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

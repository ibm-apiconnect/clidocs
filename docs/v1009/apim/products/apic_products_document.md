---
tags:
- "group: products"
- "scope: catalog"
- "scope: space"
---
# apic products:document

Products document operations

## Synopsis

Products document operations

```
apic products:document [flags]
```

## Possible Usages

```
apic products:document [flags] --id --scope space ID
apic products:document [flags] --id --scope catalog ID
apic products:document [flags] --scope space NAME:VERSION
apic products:document [flags] --scope catalog NAME:VERSION
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for products:document
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

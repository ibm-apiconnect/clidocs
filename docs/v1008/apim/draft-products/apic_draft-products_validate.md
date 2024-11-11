---
tags:
- "group: draft-products"
---
# apic draft-products:validate

Validate the draft product

## Synopsis

Validate the draft product

```
apic draft-products:validate [flags]
```

## Possible Usages

```

      apic draft-products:validate [flags] --id ID
      apic draft-products:validate [flags] NAME:VERSION

```

## Examples

```
Online Draft Product validation
  $ apic draft-products:validate --org <provider-org-name-or-id> --server mgmnthost.com mydraftproduct:1.0.0
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

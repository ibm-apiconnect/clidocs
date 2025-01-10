---
tags:
- "group: apis"
---
# apic apis:validate

Validate the API object

## Synopsis

Validate the API object

```
apic apis:validate [flags]
```

## Possible Usages

```
apic apis:validate [flags] DRAFT_API_FILE
```
## Examples

```
Online API definition validation
  $ apic apis:validate --org <provider-org-name-or-id> --server mgmnthost.com myapi.yaml
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

---
tags:
- "group: global-policies"
- "scope: catalog"
- "scope: space"
---
# apic global-policies:get

Global Policies get operations

## Synopsis

Global Policies get operations

```
apic global-policies:get [flags]
```

## Possible Usages

```

      apic global-policies:get [flags] --id --scope space ID
      apic global-policies:get [flags] --id --scope catalog ID
      apic global-policies:get [flags] --scope space NAME:VERSION
      apic global-policies:get [flags] --scope catalog NAME:VERSION

```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --fields string                       List of field names to return
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for global-policies:get
      --id                                  id
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string                        scope
  -s, --server string                       management server endpoint (required)
      --space string                        Space name or id (required)
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

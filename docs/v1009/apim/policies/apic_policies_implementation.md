---
tags:
- "group: policies"
- "scope: catalog"
- "scope: space"
---
# apic policies:implementation

Policies implementation operations

## Synopsis

Policies implementation operations

```
apic policies:implementation [flags]
```

## Possible Usages

```
apic policies:implementation [flags] --id --scope space ID
apic policies:implementation [flags] --id --scope catalog ID
apic policies:implementation [flags] --scope space NAME:VERSION
apic policies:implementation [flags] --scope catalog NAME:VERSION
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for policies:implementation
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

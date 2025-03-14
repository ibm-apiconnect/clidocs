---
tags:
- "group: extensions"
- "scope: catalog"
- "scope: org"
- "scope: space"
---
# apic extensions:get

Extensions get operations

## Synopsis

Extensions get operations

```
apic extensions:get [flags]
```

## Possible Usages

```
apic extensions:get [flags] --id --scope space ID
apic extensions:get [flags] --id --scope org ID
apic extensions:get [flags] --id --scope catalog ID
apic extensions:get [flags] --scope space NAME:VERSION
apic extensions:get [flags] --scope org NAME:VERSION
apic extensions:get [flags] --scope catalog NAME:VERSION
```

## Options

```
      --availability-zone string            Availability Zone name or id (required)
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --fields string                       List of field names to return
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway-service string              Gateway Service name or id (required)
  -h, --help                                Help for extensions:get
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

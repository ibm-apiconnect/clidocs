---
tags:
- "group: primary-events"
- "scope: catalog"
- "scope: cloud"
- "scope: configured-gateway-service"
- "scope: gateway-service"
- "scope: portal-service"
---
# apic primary-events:get

Primary Events get operations

## Synopsis

Primary Events get operations

```
apic primary-events:get [flags]
```

## Possible Usages

```
apic primary-events:get [flags] --scope portal-service PRIMARY_EVENT
apic primary-events:get [flags] --scope gateway-service PRIMARY_EVENT
apic primary-events:get [flags] --scope configured-gateway-service PRIMARY_EVENT
apic primary-events:get [flags] --scope cloud PRIMARY_EVENT
apic primary-events:get [flags] --scope catalog PRIMARY_EVENT
```

## Options

```
      --availability-zone string            Availability Zone name or id (required)
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --fields string                       List of field names to return
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway-service string              Gateway Service name or id (required)
  -h, --help                                Help for primary-events:get
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, use - for STDOUT. (default: cwd)
      --portal-service string               Portal Service name or id (required)
      --scope string                        scope
  -s, --server string                       management server endpoint (required)
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

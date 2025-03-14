---
tags:
- "group: configured-api-user-registries"
- "scope: catalog"
- "scope: space"
---
# apic configured-api-user-registries:delete

Configured Api User Registries delete operations

## Synopsis

Configured Api User Registries delete operations

```
apic configured-api-user-registries:delete [flags]
```

## Possible Usages

```
apic configured-api-user-registries:delete [flags] --scope space CONFIGURED_API_USER_REGISTRY
apic configured-api-user-registries:delete [flags] --scope catalog CONFIGURED_API_USER_REGISTRY
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for configured-api-user-registries:delete
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

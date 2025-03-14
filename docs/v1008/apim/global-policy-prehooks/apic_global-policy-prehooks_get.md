---
tags:
- "group: global-policy-prehooks"
- "scope: catalog"
- "scope: space"
---
# apic global-policy-prehooks:get

Global Policy Prehooks get operations

## Synopsis

Global Policy Prehooks get operations

```
apic global-policy-prehooks:get [flags]
```

## Possible Usages

```
apic global-policy-prehooks:get [flags] --scope space
apic global-policy-prehooks:get [flags] --scope catalog
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --fields string                       List of field names to return
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for global-policy-prehooks:get
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

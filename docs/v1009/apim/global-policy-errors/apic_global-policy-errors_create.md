---
tags:
- "group: global-policy-errors"
- "scope: catalog"
- "scope: space"
---
# apic global-policy-errors:create

Global Policy Errors create operations

## Synopsis

Global Policy Errors create operations

```
apic global-policy-errors:create [flags]
```

## Possible Usages

```
apic global-policy-errors:create [flags] --scope space GLOBAL_POLICY_ERROR_FILE
apic global-policy-errors:create [flags] --scope catalog GLOBAL_POLICY_ERROR_FILE
```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for global-policy-errors:create
  -o, --org string                          Organization name or id (required)
      --output string                       Write file(s) to directory, instead of STDOUT (default "-")
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
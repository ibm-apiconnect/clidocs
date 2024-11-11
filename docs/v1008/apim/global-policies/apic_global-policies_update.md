---
tags:
- "group: global-policies"
- "scope: catalog"
- "scope: space"
---
# apic global-policies:update

Global Policies update operations

## Synopsis

Global Policies update operations

```
apic global-policies:update [flags]
```

## Possible Usages

```

      apic global-policies:update [flags] --id --scope space ID GLOBAL_POLICY_FILE
      apic global-policies:update [flags] --id --scope catalog ID GLOBAL_POLICY_FILE
      apic global-policies:update [flags] --scope space NAME:VERSION GLOBAL_POLICY_FILE
      apic global-policies:update [flags] --scope catalog NAME:VERSION GLOBAL_POLICY_FILE

```

## Options

```
  -c, --catalog string                      Catalog name or id (required)
      --configured-gateway-service string   Configured Gateway Service name or id (required)
      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                                Help for global-policies:update
      --id                                  id
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

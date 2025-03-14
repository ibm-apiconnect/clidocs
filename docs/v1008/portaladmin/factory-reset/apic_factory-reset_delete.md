---
tags:
- "group: factory-reset"
---
# apic factory-reset:delete

Factory resets the Developer Portal.

## Synopsis

Performs a factory reset of the Developer Portal, deleting the portal service and all portal sites. WARNING: This command is irreversible - please ensure you have backups configured.

```
apic factory-reset:delete --mode portaladmin [flags]
```

## Possible Usages

```
apic factory-reset:delete --mode portaladmin [flags]
```

## Options

```
      --execute_reset string             Set to true to trigger the Developer Portal reset
      --format string                    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --portal_service_endpoint string   The URL endpoint of the Portal Service (required)
  -s, --server string                    management server endpoint (required)
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

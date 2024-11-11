---
tags:
- "group: sites"
---
# apic sites:list

List the sites present on the Portal service.

## Synopsis

Lists all the sites that are currently present on the Portal service.

```
apic sites:list --mode portaladmin [flags]
```

## Possible Usages

```

      apic sites:list --mode portaladmin [flags]

```

## Options

```
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --portal_service_name string   The name of the Portal Service (required)
  -s, --server string                management server endpoint (required)
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

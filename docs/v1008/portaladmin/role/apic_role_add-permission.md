---
tags:
- "group: role"
---
# apic role:add-permission

Grant specified permission(s) to a role.

## Synopsis

Grant specified permission(s) to a role.

```
apic role:add-permission --mode portaladmin [flags]
```

## Possible Usages

```

      apic role:add-permission --mode portaladmin [flags] ROLE

```

## Options

```
  -c, --catalog string       Name or ID of the Catalog that the site belongs to. (required)
      --format string        Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string           Name or ID of the organization that the catalog belongs to. (required)
      --permissions string   The list of permission to grant, delimited by commas. (required)
  -s, --server string        management server endpoint (required)
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

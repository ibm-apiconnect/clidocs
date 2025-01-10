---
tags:
- "group: role-defaults"
- "scope: cloud"
---
# apic role-defaults:create

Role Defaults create operations

## Synopsis

Role Defaults create operations

```
apic role-defaults:create [flags]
```

## Possible Usages

```
apic role-defaults:create [flags] --scope cloud --subcollection provider ROLE_DEFAULT_FILE
```

## Options

```
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for role-defaults:create
      --output string          Write file(s) to directory, instead of STDOUT (default "-")
      --scope string           scope
  -s, --server string          management server endpoint (required)
      --subcollection string   subcollection
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

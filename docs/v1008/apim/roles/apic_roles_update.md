---
tags:
- "group: roles"
- "scope: catalog"
- "scope: org"
- "scope: space"
---
# apic roles:update

Roles update operations

## Synopsis

Roles update operations

```
apic roles:update [flags]
```

## Possible Usages

```

      apic roles:update [flags] --scope space ROLE ROLE_FILE
      apic roles:update [flags] --scope org ROLE ROLE_FILE
      apic roles:update [flags] --scope catalog ROLE ROLE_FILE

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for roles:update
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

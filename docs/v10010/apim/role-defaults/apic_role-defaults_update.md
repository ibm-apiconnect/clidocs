---
tags:
- "group: role-defaults"
- "scope: cloud"
---
# apic role-defaults:update

Role Defaults update operations

## Synopsis

Role Defaults update operations

```
apic role-defaults:update [flags]
```

## Possible Usages

```
apic role-defaults:update [flags] --scope cloud --subcollection provider ROLE_DEFAULT ROLE_DEFAULT_FILE
```

## Request examples

-------------------------------------
#### Example of role defaults update.
-------------------------------------

```
permission_urls:
- https://acme-apim.example.com/api/cloud/permissions/provider/product-drafts:edit
- https://acme-apim.example.com/api/cloud/permissions/deployment/product:stage
summary: An example role defaults update
title: Acme role defaults update
```

## Options

```
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for role-defaults:update
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

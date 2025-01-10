---
tags:
- "group: groups"
- "scope: catalog"
- "scope: cloud"
---
# apic groups:create

Groups create operations

## Synopsis

Groups create operations

```
apic groups:create [flags]
```

## Possible Usages

```
apic groups:create [flags] --space-initiated GROUP_FILE
apic groups:create [flags] --scope cloud GROUP_FILE
apic groups:create [flags] --scope catalog GROUP_FILE
```

## Request examples

----------------------------------------------
#### Example of group creation at space scope.
----------------------------------------------

```
name: acme-group
org_urls:
- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/space1/consumer-org1
summary: An example group creation
title: Acme group creation
```

------------------------------------------------
#### Example of group creation at catalog scope.
------------------------------------------------

```
name: acme-group
org_urls:
- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/consumer-org1
summary: An example group creation
title: Acme group creation
```

----------------------------------------------
#### Example of group creation at cloud scope.
----------------------------------------------

```
name: acme-group
org_urls:
- https://api.acme-apim.example.com/api/orgs/org1
summary: An example group creation
title: Acme group creation
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for groups:create
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
      --scope string      scope
  -s, --server string     management server endpoint (required)
      --space string      Space name or id (required)
      --space-initiated   space-initiated
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

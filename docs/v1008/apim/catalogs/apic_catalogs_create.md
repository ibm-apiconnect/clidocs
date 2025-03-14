---
tags:
- "group: catalogs"
---
# apic catalogs:create

Create a Catalog object

## Synopsis

Create a Catalog object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url

```
apic catalogs:create [flags]
```

## Possible Usages

```
apic catalogs:create [flags] CATALOG_FILE
```

## Request examples

-------------------------------
#### Example of catalog create.
-------------------------------

```
name: acme-catalog
owner_url: https://api.acme-apim.example.com/api/user-registries/acme-org/acme-user-registry/users/acme-user
summary: An example catalog create
title: ACME Catalog
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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

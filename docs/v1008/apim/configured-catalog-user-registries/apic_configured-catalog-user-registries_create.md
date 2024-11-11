---
tags:
- "group: configured-catalog-user-registries"
---
# apic configured-catalog-user-registries:create

Create a Configured Catalog User Registry object

## Synopsis

Create a Configured Catalog User Registry object
          
          Required fields:
          - user_registry_url
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url
          - catalog_url
          - user_registry_url

```
apic configured-catalog-user-registries:create [flags]
```

## Possible Usages

```

      apic configured-catalog-user-registries:create [flags] CONFIGURED_CATALOG_USER_REGISTRY_FILE

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string    management server endpoint (required)
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

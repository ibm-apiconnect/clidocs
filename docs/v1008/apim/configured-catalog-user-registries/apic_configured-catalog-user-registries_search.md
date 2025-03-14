---
tags:
- "group: configured-catalog-user-registries"
---
# apic configured-catalog-user-registries:search

Search for users in the catalog user registry

## Synopsis

Search for users in the catalog user registry

```
apic configured-catalog-user-registries:search [flags]
```

## Possible Usages

```
apic configured-catalog-user-registries:search [flags] CONFIGURED_CATALOG_USER_REGISTRY USER_SEARCH_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32      Maximum number of items to return
      --offset int32     Offset item number from list to begin return
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

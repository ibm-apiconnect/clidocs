---
tags:
- "group: export-entity"
---
# apic export-entity:remove-content

Remove content from an export entity

## Synopsis

Remove content from an export entity. Provide the content type and IDs that you wish to remove from this export entity.

```
apic export-entity:remove-content --mode portaladmin [flags]
```

## Possible Usages

```
apic export-entity:remove-content --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string            Name or ID of the Catalog that the site belongs to. (required)
      --entity_ids string         A comma-separated list of Content IDs.
      --entity_type string        Type of content you want to perform this operation on. To find out content types see the content list-types route. (required)
      --export_entity_id string   ID of the export entity (required)
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string             management server endpoint (required)
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

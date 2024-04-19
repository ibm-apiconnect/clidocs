# apic export-entity:add-content

Add content to an export entity

## Synopsis

Add content to an existing export entity. Provide the content type and IDs that you wish to add to this export entity.

```
apic export-entity:add-content --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string            Name or ID of the Catalog that the site belongs to. (required)
      --entity_ids string         A comma-separated list of Content IDs.
      --entity_type string        Type of content you want to perform this operation on. To find out content types see the content list-types route. (required)
      --export_entity_id string   ID of the export entity (required)
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                      Help for export-entity:add-content
  -o, --org string                Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string             management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```

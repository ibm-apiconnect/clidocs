# apic export-entity:get

Get an export entity

## Synopsis

Get an export entity by its ID, which will list the content that will be exported as part of this export entity.

```
apic export-entity:get --mode portaladmin [flags]
```

## Possible Usages

```
      apic export-entity:get --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string            Name or ID of the Catalog that the site belongs to. (required)
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
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```

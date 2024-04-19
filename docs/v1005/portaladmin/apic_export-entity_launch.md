# apic export-entity:launch

Launch a export entity

## Synopsis

Launch an export entity which will create an export tgz of all the entities contained in the export. If called via the toolkit CLI, it will automatically poll the response every 30 seconds up to 25 minutes.

```
apic export-entity:launch --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string            Name or ID of the Catalog that the site belongs to. (required)
      --export_entity_id string   ID of the export entity (required)
      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                      Help for export-entity:launch
      --no-poll                   Do not poll the created task and just return the task ID
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

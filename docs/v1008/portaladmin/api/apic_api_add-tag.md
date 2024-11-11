---
tags:
- "group: api"
---
# apic api:add-tag

Add a tag for the given api.

## Synopsis

Add a tag for a api within the developer portal of the provided org and catalog. The id or name:version of a specific api needs to be provided. e.g. 'id-of-api-called-example-3' or 'example:3.0.0'.

```
apic api:add-tag --mode portaladmin [flags]
```

## Possible Usages

```

      apic api:add-tag --mode portaladmin [flags] API

```

## Options

```
  -c, --catalog string    Name or ID of the Catalog that the site belongs to. (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string        Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string     management server endpoint (required)
      --tag_name string   The tag name e.g. top_level_element/next_level_element (required)
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

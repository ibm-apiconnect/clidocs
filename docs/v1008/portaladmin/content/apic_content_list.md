---
tags:
- "group: content"
---
# apic content:list

Lists all of the entities in your site for the given entity type and bundle.

## Synopsis

Lists all of the entities in your site for the given entity type and bundle.

```
apic content:list --mode portaladmin [flags]
```

## Possible Usages

```

      apic content:list --mode portaladmin [flags]

```

## Options

```
      --bundle string        The Bundle type for a given Entity type. E.g. "page" for the "node" Entity type.
  -c, --catalog string       Name or ID of the Catalog that the site belongs to. (required)
      --entity_type string   Type of entity you want to perform this operation on. To find out entity/content types see the content list-types route. (required)
      --format string        Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string           Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string        management server endpoint (required)
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

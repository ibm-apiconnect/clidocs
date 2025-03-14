---
tags:
- "group: content"
---
# apic content:create-export

Export a tgz containing the site content

## Synopsis

Export a tgz containing the site content. You can export specific entity types and specific ids or you can generate a tar containing all content. Depending on your site's content please be advised that an export all can take a long time to complete. If called via the toolkit CLI, it will automatically poll the response every 30 seconds up to 25 minutes.

```
apic content:create-export --mode portaladmin [flags]
```

## Possible Usages

```
apic content:create-export --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string       Name or ID of the Catalog that the site belongs to. (required)
      --entity_ids string    A comma-separated list of Content IDs.
      --entity_type string   Type of entity you want to perform this operation on. To find out entity/content types see the content list-types route. (required)
      --format string        Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --no-poll              Do not poll the created task and just return the task ID
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

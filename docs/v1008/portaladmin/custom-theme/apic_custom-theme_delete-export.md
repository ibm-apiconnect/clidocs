---
tags:
- "group: custom-theme"
---
# apic custom-theme:delete-export

If running, cancels a custom theme export task.

## Synopsis

If running, cancels the custom theme export task and deletes any related artifacts that have been generated.

```
apic custom-theme:delete-export --mode portaladmin [flags]
```

## Possible Usages

```
apic custom-theme:delete-export --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string    management server endpoint (required)
      --task_id string   ID of the task created on the queue. (required)
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

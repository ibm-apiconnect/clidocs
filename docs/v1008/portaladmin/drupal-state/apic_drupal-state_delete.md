---
tags:
- "group: drupal-state"
---
# apic drupal-state:delete

Delete the State key.

## Synopsis

Delete the specific state key.

```
apic drupal-state:delete --mode portaladmin [flags]
```

## Possible Usages

```

      apic drupal-state:delete --mode portaladmin [flags]

```

## Options

```
  -c, --catalog string     Name or ID of the Catalog that the site belongs to. (required)
      --format string      Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string         Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string      management server endpoint (required)
      --state_key string   The state key, for example "system.cron_last". (required)
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

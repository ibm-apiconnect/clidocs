---
tags:
- "group: drupal-config"
---
# apic drupal-config:delete

Delete the Config object.

## Synopsis

Delete the Config object or a specific config key.

```
apic drupal-config:delete --mode portaladmin [flags]
```

## Possible Usages

```

      apic drupal-config:delete --mode portaladmin [flags]

```

## Options

```
  -c, --catalog string       Name or ID of the Catalog that the site belongs to. (required)
      --config_key string    A config key, for example "page.front".
      --config_name string   The config object name, for example "system.site". (required)
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

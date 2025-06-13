---
tags:
- "group: drupal-config"
---
# apic drupal-config:set

Set a config value.

## Synopsis

Can set a new config value or update an already existing key-value.

```
apic drupal-config:set --mode portaladmin [flags]
```

## Possible Usages

```
apic drupal-config:set --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string        Name or ID of the Catalog that the site belongs to. (required)
      --config_key string     A config key, for example "page.front". (required)
      --config_name string    The config object name, for example "system.site". (required)
      --config_value string   The value to assign to the config key. (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --input_format string   The input format of the value for the config key. Values: string, yaml. Since JSON is a subset of YAML, config_value may be in JSON format [default: string] (required) (default "string")
  -o, --org string            Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string         management server endpoint (required)
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

# apic drupal-state:set

Set a state key value.

## Synopsis

Can set a new state value or update an already existing key-value.

```
apic drupal-state:set --mode portaladmin [flags]
```

## Possible Usages

```
      apic drupal-state:set --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string        Name or ID of the Catalog that the site belongs to. (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --input_format string   The input format of the value for the state key. Values: string, integer, float, boolean, json, yaml. [default: auto]
  -o, --org string            Name or ID of the organization that the catalog belongs to. (required)
  -s, --server string         management server endpoint (required)
      --state_key string      The state key, for example "system.cron_last". (required)
      --state_value string    The value to assign to the state key. (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```

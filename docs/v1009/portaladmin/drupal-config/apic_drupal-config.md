---
tags:
- "group: drupal-config"
---
# apic drupal-config

Drupal Config operations

## Synopsis

Drupal Config operations

```
apic drupal-config --mode portaladmin [flags]
```


## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for drupal-config
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
      --prefix string    The config prefix. For example, "system". No prefix will return all names in the system.
  -s, --server string    management server endpoint (required)
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

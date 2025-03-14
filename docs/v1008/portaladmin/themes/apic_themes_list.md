---
tags:
- "group: themes"
---
# apic themes:list

Shows a list of available themes.

## Synopsis

Show a list of themes for the portal of the provided org and catalog.

```
apic themes:list --mode portaladmin [flags]
```

## Possible Usages

```
apic themes:list --mode portaladmin [flags]
```

## Options

```
  -c, --catalog string   Name or ID of the Catalog that the site belongs to. (required)
      --core             Filter out extensions that are not in Drupal Core.
      --custom           Filter to only custom modules or themes
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --no-core          Filter out extensions that are provided by Drupal Core.
  -o, --org string       Name or ID of the organization that the catalog belongs to. (required)
      --package string   Filter by project packages. You can use multiple comma-separated values.
  -s, --server string    management server endpoint (required)
      --status string    Filter by extension status. Choices _ enabled, disabled and/or 'not installed'. You can use multiple comma-separated values.
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
